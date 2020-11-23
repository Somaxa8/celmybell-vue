<template>
  <div>
    <v-card elevation="0" outlined>
      <v-img
          class="white--text align-center justify-center"
          style="margin-left:auto;margin-right:auto;max-height:400px;"
          width="400px"
          :src="pinkBanner"
      >
      </v-img>

      <v-card-actions class="d-flex justify-center">
        <v-btn
            color="#f76a8c"
            text
            v-for="icon in icons"
            :key="icon"
            @click="redirect(icon.url)"
        >
          <v-icon>{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Banner extends Vue {
  pinkBanner = require("../assets/pink.png")
  icons = [
    {
      icon: "mdi-facebook",
      url: ""
    },
    {
      icon: "mdi-twitter",
      url: ""
    },
    {
      icon: "mdi-telegram",
      url: ""
    },
    {
      icon: "mdi-instagram",
      url: ""
    }
  ]
  redirect(url: string): void {
    window.open(url, "_blank");
  }
}
</script>