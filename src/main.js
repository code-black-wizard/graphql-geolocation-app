import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueI18n from 'vue-i18n'
import VueApollo from 'vue-apollo'
import { apolloProvider } from './apolloClient'
import locales from './locales/locales'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages: locales
})

Vue.use(VueApollo)

Vue.filter('checkVal', (value) => {
  if (!value) {
    return '—'
  } else {
    return value
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  i18n,
  apolloProvider
}).$mount('#app')
