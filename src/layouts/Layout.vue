<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="toggleDrawer" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>
          {{this.$route.meta.title}}
          <div slot="subtitle">{{this.$route.meta.subtitle}}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <!-- DRAWER -->
    <Drawer />
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import Drawer from '../components/Drawer/Drawer'

export default {
  name: 'Layout',
  components: { Drawer },
  data () {
    return {

    }
  },
  methods: {
    openURL,
    toggleDrawer () {
      this.$store.commit('Drawer/toggleStatus')
    }
  }
}
</script>

<style>
</style>
