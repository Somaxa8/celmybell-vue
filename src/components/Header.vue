<template>
  <div>
    <v-app-bar
        app
        color="#f76a8c"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-threshold="100"
    >
      <template v-slot:img="{ props }">
        <v-img
            v-bind="props"
            gradient="to top right, rgba(246, 103, 139, 0.7), rgba(75, 30, 41, 0.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

<!--      <v-toolbar-title style="padding:0">-->
<!--        <v-img :src="white" width="50px"></v-img>-->
<!--      </v-toolbar-title>-->

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
              v-for="item in icons"
              :key="item.id"
              class="icon-hover"
              @click="redirect(item.url)"
          >
            <v-icon class="menu-icon">{{ item.icon }}</v-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
            color="#f76a8c"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title-menu" style="font-size: 20px;">Menu</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-animation</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Briefcase</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component
export default class Header extends Vue {
  drawer = false
  icons = [
    {
      icon: "mdi-facebook",
      url: "",
      id: 1
    },
    {
      icon: "mdi-twitter",
      url: "",
      id: 2
    },
    {
      icon: "mdi-telegram",
      url: "",
      id: 3
    },
    {
      icon: "mdi-instagram",
      url: "",
      id: 4
    }
  ]
}

</script>