<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col lg="8" class="my-1">
        <b-form-group
          label="Сортировка"
          label-cols-sm="2"
          label-size="sm"
          label-for="sortBySelect"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-select v-model="sortBy" id="sortBySelect" :options="sortOptions" class="w-75">
              <template v-slot:first>
                <option value=""></option>
              </template>
            </b-form-select>
            <b-form-select v-model="sortDesc" :disabled="!sortBy" class="w-25">
              <option :value="false">по возрастанию</option>
              <option :value="true">по убыванию</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="4" class="my-1">
        <b-form-group
          label="Поиск"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Введите для поиска"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Очистить</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

    <b-col sm="12" md="12" class="my-1" v-if="userType==2">
        <b-form inline>
            <b-input
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Название"
            type="text"
            v-model="form.name"
            style="border: 1px solid lightgray; border-radius: 5px;"
            ></b-input>
            <b-input 
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Стоимость" type="number" v-model="form.cost"
            style="border: 1px solid lightgray; border-radius: 5px;"
            ></b-input>
            <b-input
            class="mb-2 mr-sm-2 mb-sm-0"            
            placeholder="Вес" type="number" v-model="form.weight"
            style="border: 1px solid lightgray; border-radius: 5px;"
            ></b-input>
            <b-button variant="success" @click="addItem"> Добавить </b-button>
        </b-form>
     </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="На странице"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          label-for="perPageSelect"
          class="mb-0"
        >
          <b-form-select
            v-model="perPage"
            id="perPageSelect"
            size="sm"
            :options="pageOptions"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      small
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :filterIncludedFields="filterOn"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
    >


      <template v-slot:cell(actions)="row" v-if="userType == 2">
        <b-button size="sm" @click="row.toggleDetails" variant="warning" class="mr-1">
          <i class="material-icons md-18"> create </i>
        </b-button>
        <b-button size="sm" @click="deleteItem(row.item.id)" variant="danger">
          <i class="material-icons md-18"> delete </i>
        </b-button>
      </template>

      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <b-form inline>
            <b-input
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Название"
            type="text"
            v-model="row.item.name"
            style="border: 1px solid lightgray; border-radius: 5px;"
            ></b-input>
            <b-input 
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Стоимость" type="number" v-model="row.item.cost"
            style="border: 1px solid lightgray; border-radius: 5px;"
            ></b-input>
            <b-input
            class="mb-2 mr-sm-2 mb-sm-0"            
            placeholder="Вес" type="number" v-model="row.item.weight"
            style="border: 1px solid lightgray; border-radius: 5px;"
            ></b-input>
            <b-button variant="success" @click="editItem(row.item.id, row.item.name, row.item.cost, row.item.weight)" class="mt-4"> Добавить </b-button>
        </b-form>
          </ul>
        </b-card>
      </template>
    </b-table>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        items: [],
        fields: [
          { key: 'name', label: 'Название'},
          { key: 'cost', label: 'Стоимость', sortable: true, class: 'text-center' },
          { key: 'weight', label: 'Вес', sortable: true, class: 'text-center' },
          { key: 'actions', label: 'Действия' }
        ],
        totalRows: 1,
        currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        sortBy: '',
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        filterOn: [],
        infoModal: {
          id: 'info-modal',
          title: '',
          content: ''
        },
        form: {
            name: '',
            cost: 0,
            weight: 0
        },
        userType: 1
      }
    },
    computed: {
      sortOptions() {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => {
            return { text: f.label, value: f.key }
          })
      },
    },
    mounted() {
      // Set the initial number of items
        this.getItems().then(() => {
            this.totalRows = this.items.length;
        });
        this.getGroup();
        console.log(this.userType);
    },
    methods: {
      info(item, index, button) {
        this.infoModal.title = `Row index: ${index}`
        this.infoModal.content = JSON.stringify(item, null, 2)
        this.$root.$emit('bv::show::modal', this.infoModal.id, button)
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      },
      async getItems(){
          await axios.get('http://127.0.0.1:8000/api/items/', {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
          .then(response =>{
              this.items = response.data;
              console.log('load items');
          }).catch(error => (console.log(error)));
      },
      async deleteItem(id){
          await axios.delete('http://127.0.0.1:8000/api/items/' + id, {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
          .then(response =>{
              console.log('deleted items');
          }).catch(error => (console.log(error)));
            this.getItems();

      },
      async addItem(){
          await axios.post('http://127.0.0.1:8000/api/items/', {
              'name': this.form.name,
              'cost': this.form.cost,
              'weight': this.form.weight
          }, {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
          .then(response =>{
              console.log('added items');
          }).catch(error => (console.log(error)));
          this.getItems();
      },
      async editItem(id, name, cost, weight){
          await axios.put('http://127.0.0.1:8000/api/items/' + id, {
                'name': name,
                'cost': cost,
                'weight': weight
          }, {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
          .then(response =>{
              console.log('deleted items');
          }).catch(error => (console.log(error)));
                    this.getItems();

      },
	  async getGroup(){
      await axios.get('http://127.0.0.1:8000/api/users_get/' + localStorage.getItem('user_id') + '/', {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}})
            .then(response =>{
                console.log(response.data);
                this.userType = response.data['groups'][0];
            }).catch(error => (console.log(error)));
      }
    }
  }
</script>