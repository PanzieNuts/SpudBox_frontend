<template>
  <component :is="layout">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.fullPath" />
      </Transition>
    </RouterView>
  </component>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { useRoute } from 'vue-router'

import AuthLayout from './layouts/AuthLayout.vue'
import HomeLayout from './layouts/HomeLayout.vue'
import RedirectLayout from './layouts/RedirectLayout.vue'

const route = useRoute()

const layout = computed<Component>(() => {
  switch (route.meta.layout) {
    case 'home':
      return HomeLayout
    case 'redirect':
      return RedirectLayout
    default:
      return AuthLayout
  }
})
</script>
