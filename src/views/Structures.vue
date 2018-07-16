<template>
  <div>
    <v-content>
      <v-container fluid>
        <v-data-table
          :headers="headers"
          :items="structures"
          hide-actions
          class="elevation-1"
        >
          <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="mr-2"
                @click="editItem(props.item)"
              >
                edit
              </v-icon>
              <v-icon
                small
                @click="deleteItem(props.item)"
              >
                delete
              </v-icon>
            </td>
          </template>
          <template slot="no-data">
            <v-alert :value="true" color="info" icon="info">
              Sorry, nothing to display here :(
            </v-alert>
          </template>
        </v-data-table>
      </v-container>
    </v-content>
    <CreateStructure v-on:on-save="onStructureCreate"/>
  </div>
</template>

<script>
import { list } from '../services/structureService';
import CreateStructure from '../components/structure/CreateStructure.vue';

export default {
  components: { CreateStructure },
  data: () => ({
    headers: [
      {
        text: 'Nom',
        align: 'left',
        sortable: true,
        value: 'name',
      },
      { text: 'Actions', value: 'name', sortable: false },
    ],
    structures: [],
  }),
  mounted() {
    list()
      .then((response) => {
        this.structures = response.data;
      });
  },
  methods: {
    onStructureCreate() {
      list()
        .then((response) => {
          this.structures = response.data;
        });
    },

  },
};
</script>
