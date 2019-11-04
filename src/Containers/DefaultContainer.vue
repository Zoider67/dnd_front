<template>
    <div id="app">  
        <DefaultHeader/>
        <div>
            <div class="sidenav">
                <SideBar/>
            </div>
            <div class="main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import DefaultHeader from './DefaultHeader'
import SideBar from './SideBar'

export default {
    name: 'DefaultContainer',
    components: {
        DefaultHeader,
        SideBar
    }
}
</script>>

<style>
    .container-fluid{
        padding-left: 0px;
        height: 100%;
    }
    #app{
        height: 100%;
    }

    .sidenav {
        height: 100%; /* Full-height: remove this if you want "auto" height */
        width: 200px; /* Set the width of the sidebar */
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        left: 0;
        overflow-x: hidden; /* Disable horizontal scroll */
        margin-top: 36px;
    }
    .main {
        margin-left: 200px; /* Same as the width of the sidebar */
        padding: 0px 10px;
        }

        /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
    }
</style>