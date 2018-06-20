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

    <CreateStructure on-save="onStructureCreate()"/>
  </div>
</template>

<script>
import CreateStructure from '../components/structure/CreateStructure.vue';

export default {
  name: 'Structures',
  components: { CreateStructure },
  data: () => ({
    structures: [
      {
        id: 1,
        name: 'Shawna Dubbin',
      },
      {
        id: 2,
        name: 'Odette Demageard',
      },
      {
        id: 3,
        name: 'Lonnie Izkovitz',
      },
      {
        id: 4,
        name: 'Thatcher Stave',
      },
      {
        id: 5,
        name: 'Clarinda Marieton',
      },
    ],
  }),
  methods: {
    onStructureCreate(newStructure) {
      this.structures.push({ id: -1, name: newStructure });
    },
  },
};
</script>
