<template>
  <div>

    <v-card class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="contact-title" style="font-size: 30px;"
          >Contact</v-list-item-title
          >
          <v-list-item-subtitle>Celmybell</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img src="https://picsum.photos/1920/1080?random" height="150"></v-img>

      <v-card-text>
        You can contact me through these links.
      </v-card-text>
      <v-card-text>
        <v-list dense>
          <v-list-item-group color="#f76a8c">
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="redirect(item.url)">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                    v-text="item.text"
                    class="icon-rosita"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Contact extends Vue {
  items = [
    { text: "Celmybell@gmail.com", icon: "mdi-email" },
    { text: "@Celmy", url: "https://t.me/Celmy", icon: "mdi-telegram" },
    {
      text: "Facebook.com/celmybell",
      url: "http://www.facebook.com/celmybell",
      icon: "mdi-facebook"
    }
  ]
  redirect(url: string): void {
    window.open(url, "_blank");
  }
}
</script>

<style>
  .contact-title {
    font-family: "Dancing Script", cursive;
    color: #f76a8c;
  }
</style>