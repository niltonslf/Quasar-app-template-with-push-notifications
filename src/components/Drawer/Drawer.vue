<template>
 <q-layout-drawer
      v-model="status"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item v-for="(item, index) in drawerItems" :key="index" :to="item.destination">
          <q-item-side :icon="item.icon"/>
          <q-item-main :label="item.label" :sublabel="item.sublabel"/>
        </q-item>
      </q-list>
    </q-layout-drawer>
</template>

<script>
export default {
  data: () => ({
    drawerItems: [
      {
        label: 'Menu item',
        sublabel: ' sublabel',
        destination: 'home',
        icon: 'home'
      }
    ]
  }),
  computed: {
    status: {
      get () {
        return this.$store.getters['Drawer/getStatus']
      },
      set () {
        this.$store.commit('Drawer/toggleStatus')
      }
    }
  }
}
</script>

<style>

</style>
