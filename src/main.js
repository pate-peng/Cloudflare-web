import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { initConsole } from '@/utils/console';

import { addCollection } from '@iconify/vue';
import mdiIcons from '@iconify-json/mdi/icons.json';

const app = createApp(App);
const pinia = createPinia();

addCollection(mdiIcons);

app.use(pinia);
app.mount('#app');

initConsole();