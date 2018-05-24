<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Animenfance</span>
      </md-app-toolbar>
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <router-link to="/creche">
            <md-ripple>
              <md-list-item>
                <md-icon>child_care</md-icon>
                <span class="md-list-item-text">Cr&egrave;che</span>
              </md-list-item>
            </md-ripple>
          </router-link>

          <router-link to="/partenaire">
            <md-ripple>
              <md-list-item>
                <md-icon>people</md-icon>
                <span class="md-list-item-text">Partenaires</span>
              </md-list-item>
            </md-ripple>
          </router-link>

          <router-link to="/events">
            <md-ripple>
              <md-list-item>
                <md-icon>event</md-icon>
                <span class="md-list-item-text">R&eacute;servation</span>
              </md-list-item>
            </md-ripple>
          </router-link>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false,
  }),
};
</script>

