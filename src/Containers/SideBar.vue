<template>
    <div id="sidebar">
        <div id="search">
            <b-row class="my-1">
                <b-col sm="2">
                    <label for="search-input" class="mt-3 ml-2"><i class="material-icons md-48"> search </i></label>
                </b-col>
                <b-col sm="10">
                    <b-form-input id="search-input" placeholder="Search"></b-form-input>
                </b-col>
            </b-row>
        </div>
        <div id="navigation">
            <b-nav vertical align="start">
                <b-nav-item active>Active</b-nav-item>
                <b-nav-item>Link</b-nav-item>
                <b-nav-item>Another Link</b-nav-item>
                <b-nav-item disabled>Disabled</b-nav-item>
            </b-nav>
        </div>
        <div id="fav">
            favorites
        </div>
        <div id="bottom">
            Bottom
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
        height: inherit;
        min-height: 580px;
        padding-bottom: 20%;
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
</style>