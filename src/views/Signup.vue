<template>
    <div class="signup">
        <p>Let's create a new account</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="signUp">Sign up</button>
        <span>Go back to <router-link to="/login">login</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'signup',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods: {
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('home')
                },
                (error) => {
                    alert('Oopps' + error.message)
                }
            )
        }
    }
}
</script>

<style scoped>
.login{
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 15%;
    cursor: pointer;
    padding: 15px;
}
span{
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>