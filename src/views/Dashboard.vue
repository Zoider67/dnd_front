<template>
<!-- https://media-waterdeep.cursecdn.com/avatars/10/12/636336422983071263.jpeg warlock -->
    <div>
      <b-card-group deck class="mt-2">
       <b-card style="min-width: 20rem; max-width: 20rem; margin-bottom: 10px;" v-for="person in textpersons" v-bind:key="person.name">   
        <b-card-title>
          <b-row>
            <b-col sm=3>
              <img src="https://media-waterdeep.cursecdn.com/avatars/10/11/636336418370446635.jpeg" alt="Wizard Image" style="width:60px; height:60px;"> 
              </b-col>
              <b-col sm=6>
                <h4>{{person.name}}</h4>
                <h6 style="color:gray">{{person.personClass}} {{person.level}} уровня</h6>
              </b-col>
               <b-col sm=3>
           <b-button block variant="danger" size="sm" v-on:click="deletePerson(person.pk)"><i class="material-icons md-18" > clear </i></b-button>
            </b-col>
            </b-row>
          </b-card-title>
          <b-list-group flush>
            <b-list-group-item href="#">
              <p>
                <span style="font-weight:bold" > Раса: </span> {{person.race}}
              </p>
            </b-list-group-item>
            <b-list-group-item href="#">
              <p>
                <span style="font-weight:bold" > Игрок: </span> {{person.player}}
              </p>
            </b-list-group-item>
            <b-list-group-item>
              <p>Опыт:</p>
              <b-progress :max="max">
                <b-progress-bar :value="person.exp">
                  <strong>{{ person.exp.toFixed(0) }} / {{ max }}</strong>
                </b-progress-bar>
              </b-progress>
            </b-list-group-item>
          </b-list-group>
          <b-button block :to="{name: 'Inventory'}" variant="primary" v-on:click="savePersonId(person.pk)">Показать снаряжение персонажа</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>


<script>
import { type } from 'os';
export default {
    name: 'Dashboard',
    data() {
      return {
        max: 250,
        persons: [],
        textpersons: []
      };
    },
    mounted(){
      //Да, это ужасный код, но сейчас 23:30 
      //TODO: если когда нибудь вернусь, переделать это
      var classes = ["Бард", "Варвар", "Воин", "Волшебник", "Друид", "Жрец", "Колдун", "Монах",
      "Паладин", "Плут", "Следопыт", "Чародей"];
      var races = ["Дварф", "Эльф", "Полурослик", "Человек", "Драконорожденный", "Гном", "Полуэльф", "Полуорк",
      "Тифлинг"];
        this.asyncLoad().then(() => {
          //console.log(this.persons[0].race);
          for (let i = 0; i < this.persons.length; i++) {
            this.persons[i].race = races[this.persons[i].race - 1];
            this.persons[i].personClass = classes[this.persons[i].personClass - 1];
            if(this.persons[i].player == localStorage.getItem('user_id')) this.textpersons.push( this.persons[i]);
          }
          
        });
    },
    methods: {
      async asyncLoad(){
        await axios.get('http://127.0.0.1:8000/api/simplepersons/', {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
        .then(response =>{
            var body = response.data;
            this.persons = body;
         })
        .catch(error => (console.log(error)));      
      },
      savePersonId(id){
        localStorage.setItem("current_person", id);
      },
      async deletePerson(id){
        await axios.delete('http://127.0.0.1:8000/api/simplepersons/' + id , {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
        .then(response =>{
            console.log('deleted');
         })
        .catch(error => (console.log(error))); 
        this.asyncLoad().then(response => {
          //console.log(this.persons[0].race);
          for (let i = 0; i < this.persons.length; i++) {
            this.persons[i].race = races[this.persons[i].race - 1];
            this.persons[i].personClass = classes[this.persons[i].personClass - 1];
            if(this.persons[i].player == localStorage.getItem('user_id')) this.textpersons.push( this.persons[i]);
          }
        });
      },
    },
}
</script>

<style>
  .card-deck{
    overflow-y:scroll;
  }

</style>