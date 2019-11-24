<template>
    <div>
        <b-card title="Пользователь" >
            <b-card-text>
                <span>Имя пользователя: {{user.username}}</span>
            </b-card-text>
            <b-card-text>
            Почта: {{user.email}}
            </b-card-text>

            <b-card-text>Тип пользователя: {{group}}</b-card-text>

        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data(){
        return {
                user: {
                username: '',
                email: '',
                groups: 1,
                persons: 0
            }
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:8000/api/users_get/'+ localStorage.getItem('user_id')+'/', {headers: {Authorization: 'Token ' + localStorage.getItem('access_token')}}).then(response =>{
            this.user=response.data;
        }).catch(error => (console.log(error)));
    },
    computed:{
        group(){
            if(this.user.groups[0] == 1) return "Игрок";
            else return "Мастер";
        }
    }
}
</script>

<style>

</style>