<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Вход</h1>
                  <p class="text-muted">Войти в свой аккаунт</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="material-icons md-16">lock</i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Имя пользователя" autocomplete="username email" v-model="username"/>
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="material-icons md-16">account_circle</i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Пароль" autocomplete="current-password" v-model="password"/>
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" to="/" class="px-4" @click="login">Войти </b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Забыли пароль?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Регистрация</h2>
                  <p></p>
                  <b-button variant="primary" class="active mt-3" to="/reg">Зарегистрироваться</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Login',
  data() {
      return{
        username: "",
        password: ""
      }
  },
  methods: {
      login(){
            console.log(localStorage.getItem('access_token'));
            axios.post('http://127.0.0.1:8000/api/login/', {"username":this.username,"password":this.password}).then(response=>{
                console.log("login succesfull");
                localStorage.setItem('access_token', response.data['token']);
                localStorage.setItem('username', this.username);
                localStorage.setItem('user_id', response.data['id']);
                console.log(response.data['group']);
                this.$router.push('/');
            }).catch(error => console.log(error));          
            //TODO: username to localstorage
      }
  }
}
</script>

<style scoped>
    i{
        vertical-align:bottom;
    }
    .form-control{
      height: 38px;
    }
</style>