import './assets/tailwind/index.css'
import 'primeicons/primeicons.css'
import './shared/configuration/http'
import FocusTrap from 'primevue/focustrap'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import { definePreset } from '@primeuix/themes'
import Aura from '@primeuix/themes/aura'

import { VueQueryPlugin } from '@tanstack/vue-query'
import { ConfirmationService, KeyFilter, Ripple, ToastService, Tooltip } from 'primevue'

const DefaultPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          color: '#2a6ea7ff',
          inverseColor: '#ffffff',
          hoverColor: '#3e92cc',
          activeColor: '#2a6ea7ff',
        },
      },
    },
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: DefaultPreset,
    options: {
      darkModeSelector: false,
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})

app.use(ConfirmationService)
app.use(ToastService)
app.use(VueQueryPlugin)

app.directive('tooltip', Tooltip)
app.directive('ripple', Ripple)
app.directive('keyfilter', KeyFilter)
app.directive('focustrap', FocusTrap)

app.mount('#app')
