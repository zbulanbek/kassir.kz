import { createApp } from 'vue'
import App from './App.vue'
import VueUniversalModal from 'vue-universal-modal'
import 'vue-universal-modal/dist/index.css'

const app = createApp(App);
app.use(VueUniversalModal, {
  teleportTarget: '#modals',
   modalComponent: 'Modal',
});
app.mount('#app');


