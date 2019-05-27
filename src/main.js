import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import firebase from 'firebase'

Vue.config.productionTip = false
let app = '';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAxLfcZt2ZsTHaBTFcpzJBDKm4NzLmDAHs",
    authDomain: "vue-firebase-auth-69a32.firebaseapp.com",
    databaseURL: "https://vue-firebase-auth-69a32.firebaseio.com",
    projectId: "vue-firebase-auth-69a32",
    storageBucket: "vue-firebase-auth-69a32.appspot.com",
    messagingSenderId: "614302361614",
    appId: "1:614302361614:web:63a4b6f240f875d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
