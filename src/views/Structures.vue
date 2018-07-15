<template>
  <div>
    <md-table v-model="structures" md-sort="name" md-sort-order="asc" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Structures</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
      </md-table-row>
    </md-table>
    <CreateStructure v-on:on-save="onStructureCreate"/>
  </div>
</template>

<script>
import { list } from '../services/structureService';
import CreateStructure from '../components/structure/CreateStructure.vue';

export default {
  name: 'Structures',
  components: { CreateStructure },
  data: () => ({
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
