import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import router from './router'
import './assets/styles/index.css'
import App from './App.vue'

library.add(fas)
createApp(App)
    .use(router)
    // .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
