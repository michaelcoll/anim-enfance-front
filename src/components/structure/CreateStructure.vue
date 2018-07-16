<template>
  <div>
    <v-dialog v-model="showDialog" persistent max-width="300px">
      <v-card>
        <v-progress-linear indeterminate v-if="sending"></v-progress-linear>
        <v-card-title>
          <span class="headline">Nouvelle structure</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  label="Nom"
                  required
                ></v-text-field>
              </v-form>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="onCloseDialog()">Fermer</v-btn>
          <v-btn color="primary" @click="submit" :disabled="sending">Ajouter</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-btn fab bottom right fixed color="primary" @click.stop="showDialog = true">
      <v-icon>add</v-icon>
    </v-btn>

    <v-snackbar v-model="structureSaved" bottom>
      La structure &nbsp; <strong>{{ lastStructure }}</strong> &nbsp; a été créée avec succès !
    </v-snackbar>

  </div>
</template>

<script>
import { save } from '../../services/structureService';

export default {
  data: () => ({
    showDialog: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Un nom est requis',
      v => (v && v.length >= 3) || 'Nom invalide',
    ],
    structureSaved: false,
    sending: false,
    lastStructure: null,
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.sending = true;
        this.lastStructure = this.name;

        const vm = this;

        save({ name: this.name })
          .then((response) => {
            vm.onSave(response.data);
          });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    onSave(structure) {
      this.structureSaved = true;
      this.sending = false;
      this.clear();
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
