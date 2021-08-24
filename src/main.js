import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import dateFilter from "@/filter/date.filter";
import currencyFilter from "@/filter/currency.filter";
import messagePlugin from "@/utils/message.plugin";
import "materialize-css/dist/js/materialize.min.js";
import Loader from "@/components/app/Loader.vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.component("Loader", Loader);

firebase.initializeApp({
  apiKey: "AIzaSyBVP-_jlHFSw_QFP0vGSIzXwS2xF7o79uE",
  authDomain: "crm-projec.firebaseapp.com",
  projectId: "crm-projec",
  storageBucket: "crm-projec.appspot.com",
  messagingSenderId: "941790754496",
  appId: "1:941790754496:web:690caa60f17b06a5e51f25",
  // measurementId: "G-ZKZTCYJNW2",
});

firebase.auth().onAuthStateChanged(() => {
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
});
