<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Имя персонажа"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Введите имя"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Опыт" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.exp"
          type="number"
          required
          placeholder="Введите опыт"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Уровень" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.level"
          type="number"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Раса" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.race"
          :options="races"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Класс" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.personClass"
          :options="classes"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Деньги" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.plat"
          type="number"
          required
          placeholder="Платина"
        ></b-form-input>
        <b-form-input
          id="input-2"
          v-model="form.gold"
          type="number"
          required
          placeholder="Золото"
        ></b-form-input>
        <b-form-input
          id="input-2"
          v-model="form.silver"
          type="number"
          required
          placeholder="Серебро"
        ></b-form-input>
        <b-form-input
          id="input-2"
          v-model="form.copper"
          type="number"
          required
          placeholder="Медь"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Создать</b-button>
    </b-form>
  </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "PersonCreate",
    data() {
      return {
        form: {
          name: '',
          level: '',
          exp: '',
          race: null,
          personClass: null,
          plat: '',
          gold: '',
          silver: '',
          copper: '',
        },
        classes: [],
        races: [],
        show: true
      }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/classes/', {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
        .then(response =>{
            var body = response.data;
            for (let i = 0; i < body.length; i++) {
                this.classes.push(body[i].name);
            }
            })
        .catch(error => (console.log(error)));
        axios.get('http://127.0.0.1:8000/api/races/', {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
        .then(response =>{
            var body = response.data;
            for (let i = 0; i < body.length; i++) {
                this.races.push(body[i].name);
            }
            })
        .catch(error => (console.log(error)));
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        //alert(JSON.stringify(this.form));
        this.form.personClass = this.classes.indexOf(this.form.personClass) + 1;
        this.form.race = this.races.indexOf(this.form.race) + 1;
        console.log(this.form.personClass);
        console.log(this.form.race);
        axios.post('http://127.0.0.1:8000/api/simplepersons/',
        {
            "name": this.form.name,
            "player": localStorage.getItem('user_id'),
            "level": this.form.level,
            "exp": this.form.exp,
            "personClass": this.form.personClass,
            "race": this.form.race,
            "money": this.form.copper + this.form.silver * 10 + this.form.gold * 100 + this.form.plat * 1000
        },
        {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
        .then(response =>(console.log(response.data)))
        .catch(error => (console.log(error)));
      },
    }
}
</script>

<style>

</style>