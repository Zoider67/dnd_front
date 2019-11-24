<template>
        <b-navbar toggleable="lg" type="dark" variant="dark" sticky="true" id="defhead"> 
            <b-navbar-nav>
                 <b-nav-item-dropdown center id="user_button" align="left" alignv="center">
                    <!-- Using 'button-content' slot -->
                    <template v-slot:button-content>
                        <em> <i class="material-icons md-18" style="color:indianred"> account_circle </i> {{username}}</em>
                    </template>
                    <b-dropdown-item to="/profile">Профиль</b-dropdown-item>
                    <b-dropdown-item to="/login" @click="signout">Выход</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item id="create-btn" to="/personcreate"> <i class="material-icons md-18"> add </i> <b-tooltip target="create-btn" triggers="hover"> Создать персонажа</b-tooltip> </b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav class="ml-auto">
                 <b-nav-text>Подземелья и драконы</b-nav-text>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/help"> <i class="material-icons md-18"> live_help </i> </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
</template>

<script>
export default {
    name: 'DefaultHeader',
    computed: {
        username: function(){
            return localStorage.username;
        }
    },
    methods: {
        signout() {
            localStorage.removeItem('username');
            localStorage.removeItem('access_token')
        }
    }
}
</script>

<style>
    .navbar{
        padding: 0px;
    }
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(255,255,255,1);
    }
    .navbar-dark .navbar-text {
        color: rgba(255,255,255,1);
    }
    #user_button{
        width: 200px;
        padding-left: 10px;
        padding: 0px;
        border-right-style: solid;
        border-right-color: black;
        border-right-width: 1px;
    }
    i{
        vertical-align:bottom;
    }
</style>