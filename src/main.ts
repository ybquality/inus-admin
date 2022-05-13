import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { createPinia } from "pinia";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 自动引入elementicon图标
for (const name in ElementPlusIconsVue) {
  app.component(name,(ElementPlusIconsVue as any)[name])
}

app.use(createPinia())
app.use(router)
app.mount('#app')
