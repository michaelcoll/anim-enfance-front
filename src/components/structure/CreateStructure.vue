<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-progress-bar md-mode="indeterminate" v-if="sending"/>

      <md-dialog-title>Nouvelle structure</md-dialog-title>

      <form novalidate @submit.prevent="validateUser">
        <md-dialog-content>
          <md-field :class="getValidationClass('structureName')">
            <label for="structure-name">Nom de la structure</label>
            <md-input name="structure-name" id="structure-name"
                      v-model="form.structureName" :disabled="sending"/>
            <span class="md-error"
                  v-if="!$v.form.structureName.required">Un nom est requis</span>
            <span class="md-error"
                  v-else-if="!$v.form.structureName.minlength">Nom invalide</span>
          </md-field>
        </md-dialog-content>

        <md-dialog-actions>
          <md-button @click="onCloseDialog()">Fermer</md-button>
          <md-button class="md-primary" type="submit"
                     :disabled="sending">Ajouter
          </md-button>
        </md-dialog-actions>
      </form>

    </md-dialog>

    <div class="md-layout md-alignment-bottom-right">
      <md-button class="md-primary md-fab" @click="showDialog = true">
        <md-icon>add</md-icon>
      </md-button>
    </div>

    <md-snackbar :md-active.sync="structureSaved">
      La structure <strong>{{ lastStructure }}</strong> a été créée avec succès !
    </md-snackbar>

  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { minLength, required } from 'vuelidate/lib/validators';
import { save } from '../../services/structureService';

export default {
  name: 'CreateStructure',
  mixins: [validationMixin],
  data: () => ({
    showDialog: false,
    form: {
      structureName: null,
    },
    structureSaved: false,
    sending: false,
    lastStructure: null,
  }),
  validations: {
    form: {
      structureName: {
        required,
        minLength: minLength(3),
      },
    },
  },
  methods: {
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty,
        };
      }
      return null;
    },
    clearForm() {
      this.$v.$reset();
      this.form.structureName = null;
    },
    saveUser() {
      this.sending = true;
      this.lastStructure = `${this.form.structureName}`;

      const vm = this;

      save({ name: this.lastStructure })
        .then((response) => {
          vm.onSave(response.data);
        });
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    },
    onSave(structure) {
      this.structureSaved = true;
      this.sending = false;
      this.clearForm();
      this.$emit('on-save', structure);
    },
    onCloseDialog() {
      this.showDialog = false;
      this.$emit('on-close');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
