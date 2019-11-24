<template>
    <div class="ml-4">
        <b-row>
            <div id="purse">
                <span>{{personID}}</span>
                <i class="fas fa-coins" style="color:#7f7679;"></i>
                <span> 2 </span>
                <i class="fas fa-coins" style="color:gold;"></i>
                <span> 8 </span>
                <i class="fas fa-coins" style="color:silver;"></i>
                <span> 2 </span>
                <i class="fas fa-coins" style="color:#B87333;"></i>
                <span> 3 </span>
            </div>
        </b-row>
        <b-row>
            <div>
                <b-form inline>
                    <b-input
                    id="inline-form-input-name"
                    class="mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Предмет"
                    type="text"
                    style="border: 1px solid lightgray; border-radius: 5px;"
                    list="item-list"
                    v-model="addItemName"></b-input>
                    <datalist id="item-list">
                        <option v-for="item in items" v-bind:key="item.id">{{item.name}}</option>
                    </datalist>
                    <b-input
                     id="inline-form-input-username"
                    placeholder="Количество"
                    type="number"
                    style="border: 1px solid lightgray; border-radius: 5px;"
                    v-model="addItemCount">
                    </b-input>
                    <b-button variant="primary" class="ml-4" to="/inventory" @click="addItem">Добавить</b-button>
                </b-form>
            </div>
        </b-row>
        <div>
            <b-table striped hover :items="table" :fields="fields">
                <template v-slot:cell(Actions) = "row">
                    <b-button size="sm" variant="warning" class="mr-4" @click="removeOne(row.item)">-1</b-button>
                    <b-button size="sm" variant="danger" @click="removeAll(row.item)">Х</b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>


<script>

import axios from 'axios';
import { type } from 'os';

export default {
    name: 'Inventory',
    data() {
      return {
        items: [],
        inventoryInfo: [],
        table: [],
        person: null,
        addItemName: '',
        addItemCount: 0,
        fields: ['name', 'amount', 'weight', 'Actions'],
        personID: 0
      }
    },
    mounted() {
        this.updateTable();
  },
  methods: {
      async getItems(){
          await axios.get('http://127.0.0.1:8000/api/items/', {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
          .then(response =>{
              this.items = response.data;
          }).catch(error => (console.log(error)));
      },
      async getEquip(){
          await axios.get('http://127.0.0.1:8000/api/inventory/', {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
          .then(response =>{
              this.inventoryInfo = response.data;
          }).catch(error => (console.log(error)));
      },
      updateTable(){
        this.getItems();
        this.getEquip().then(()=>{
            this.table = this.inventoryInfo.find((element, index, array) =>{
                if(element.person == localStorage.getItem("current_person")){
                    localStorage.setItem("current_person_inventory", element.id);
                    return true;
                }
            }).items;
            for (let i = 0; i < this.table.length; i++) {
                this.table[i].weight = this.items.find((element, index, array) => {
                    if(element.id == this.table[i].item) return true;
                }).weight * this.table[i].amount;
            }
        });
        this.personID = localStorage.getItem("current_person");
      },
      removeOne(item){
        console.log(item);
        var data = [];
        for (let i = 0; i < this.table.length; i++) {
            data.push({
                "item": this.items.find((element) => {if(element.name == this.table[i].name) return true;}).id,
                "name": this.table[i].name,
                "amount": this.table[i].amount
            });
        }
        data.find((element) => {
                if(element.name == item.name) return true;
              }).amount -= 1;
        if(data.find((element) => {if(element.name == item.name) return true;}).amount == 0){
            data.splice(data.findIndex((element) => {if(element.name == item.name) return true;}), 1);
        }
        console.log(data);
          axios.put('http://127.0.0.1:8000/api/inventory/' + localStorage.getItem('current_person_inventory') + '/',
          {"person" : localStorage.getItem('current_person'), "items": data},
           {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}}
          ).then(response => (this.updateTable())).catch(error => (console.log(error)));
      },
      removeAll(item){
        console.log(item);
        var data = [];
        for (let i = 0; i < this.table.length; i++) {
            data.push({
                "item": this.items.find((element) => {if(element.name == this.table[i].name) return true;}).id,
                "name": this.table[i].name,
                "amount": this.table[i].amount
            });
        }
        data.splice(data.findIndex((element) => {if(element.name == item.name) return true;}), 1);
        console.log(data);
          axios.put('http://127.0.0.1:8000/api/inventory/' + localStorage.getItem('current_person_inventory') + '/',
          {"person" : localStorage.getItem('current_person'), "items": data},
           {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}}
          ).then(response => (this.updateTable())).catch(error => (console.log(error)));
      },
      addItem(){
          var data = [];
          for (let i = 0; i < this.table.length; i++) {
              data.push({
                  "item": this.items.find((element) => {if(element.name == this.table[i].name) return true;}).id,
                  "name": this.table[i].name,
                  "amount": this.table[i].amount
              });
          }
          if(data.find((element) => {if(element.name == this.addItemName) return true}) == undefined){
              data.push({
                  "item": this.items.find((element) => {if(element.name == this.addItemName) return true;}).id,
                  "name": this.addItemName,
                  "amount": this.addItemCount
              });
          }else{
              data.find((element) => {
                  if(element.name == this.addItemName) return true;
              }).amount += Number(this.addItemCount);
          }
          console.log(data);
          axios.put('http://127.0.0.1:8000/api/inventory/' + localStorage.getItem('current_person_inventory') + '/',
          {"person" : localStorage.getItem('current_person'), "items": data},
           {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}}
          ).then(response => (this.updateTable())).catch(error => (console.log(error)));
      }

  }
}
</script>

<style>
    #purse{
        padding: 5px;
        background-color:lightgoldenrodyellow;
        border-radius: 5px;
        max-width: 140px;
    }
</style>
