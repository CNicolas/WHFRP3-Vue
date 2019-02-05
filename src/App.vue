<template>
    <div class="page-container">
        <md-app>
            <md-app-toolbar class="md-primary"
                            md-elevation="0">
                <md-button to="/"
                           class="md-icon-button">
                    <md-icon>home</md-icon>
                </md-button>
                <h1 class="md-title">Un titre</h1>
            </md-app-toolbar>

            <md-app-drawer md-permanent="clipped">
                <md-list>
                    <md-list-item to="/one">
                        <md-icon>update</md-icon>
                        <span class="md-list-item-text">One</span>
                    </md-list-item>
                    <md-list-item to="/two">
                        <md-icon>euro_symbol</md-icon>
                        <span class="md-list-item-text">Two</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <router-view></router-view>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @import "~vue-material/dist/theme/engine"; // Import the theme engine

    @include md-register-theme("default", (
            primary: md-get-palette-color(bluegrey, 500), // The primary color of your application
            accent: md-get-palette-color(teal, 500) // The accent or secondary color
    ));

    @import "~vue-material/dist/theme/all";

    body {
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .md-app-drawer {
        width: 256px;
    }
</style>
