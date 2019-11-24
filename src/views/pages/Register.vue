<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form>
                <h1>Регистрация</h1>
                <p class="text-muted">Создайте ваш аккаунт</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="material-icons md-16">account_circle</i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" placeholder="Имя пользователя" autocomplete="username" v-model="username"/>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="material-icons md-16">email</i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" placeholder="Почта" autocomplete="email" v-model="email"/>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="material-icons md-16">lock</i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control" placeholder="Пароль" autocomplete="new-password" v-model="password"/>
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="material-icons md-16">lock</i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control" placeholder="Повторите пароль" autocomplete="new-password" v-model="repeatpassword"/>
                </b-input-group>

                <b-button variant="success" block @click="register" to="/login">Create Account</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Register',
  data() {
      return{
        username: "",
        email: "",
        password: "", 
        repeatpassword: ""
      }
  },
  methods: {
      register(){
        var postBody = {
          "username":this.username,
          "email": this.email,
          "password":this.password,
          "groups": [1],
          "person": []
          };
        const str = JSON.stringify(postBody);
        console.log(str);
        axios.post('http://127.0.0.1:8000/api/users/', {"username": this.username, "email": this.email, "groups": [1], "password": this.password, "persons": []}).then(response=>{
                console.log("register succesfull");
                console.log(response.data);
            }).catch(error => console.log(error));               
      }
  }
}
</script>
