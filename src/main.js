/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App
 */

// Vue core
import { createApp } from 'vue'

// App root
import App from './App.vue'

// Router
import router from './router/router.js'

// Plugins
import { registerPlugins } from '@/plugins'

// Styles
import 'unfonts.css'

const app = createApp(App)

registerPlugins(app)

app.use(router)

app.mount('#app')
