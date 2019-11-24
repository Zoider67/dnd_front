<template>
    <div id="sidebar">
        <div id="search">
            <b-row class="my-1">
                <b-col sm="2">
                    <label for="search-input" class="mt-3 ml-2"><i class="material-icons md-48"> search </i></label>
                </b-col>
                <b-col sm="10">
                    <b-form-input id="search-input" placeholder="Поиск"></b-form-input>
                </b-col>
            </b-row>
        </div>
        <div id="navigation">
            <b-nav vertical align="start" card-header>
                <b-nav-item to="/dashboard" class="navigation"><i class="material-icons md-24" > person_outline </i> Персонажи</b-nav-item>
                <b-nav-item to="/groups" class="navigation"><i class="material-icons md-24"> people_outline </i> Группы</b-nav-item>
                <b-nav-item to="/info" class="navigation"><i class="material-icons md-24"> info_outline </i> Предметы</b-nav-item>
            </b-nav>
        </div>
        <div id="fav">
            <i class="material-icons md-48" style="color:orange"> star </i> Избранное
        </div>
        <div id="bottom">
            <b-button class="mt-2" variant="link"><i class="material-icons md-24"> group_add </i>Новая группа</b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style>
    #sidebar{
        height: 94%;
        min-height: 580px;
        top: 0;
    }
    #search{
        height: 10%;
        border-right: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
    }
    #navigation{
        height: 30%;
        border-right: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
        padding-top: 5px;
    }
    #fav{
        height: 50%;
        border-right: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
    }
    #bottom{
        height: 10%;
        border-right: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
    }
    .form-control{
        border-width: 0;
        border-radius: 0;
        height:100%;
    }
    .my-1{
        height: 100%;
    }
    i{
        vertical-align:bottom;
    }
    .nav-link{
        color:black;
    }
    .navigation a:hover{
        color: black;
        background-color: lightblue;
    }
    .btn-link:hover{
        text-decoration: none;
    }
    .btn-link{
        text-decoration: none;
        color: black;
    }
</style>