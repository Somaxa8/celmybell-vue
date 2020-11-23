<template>
  <div>
    <v-footer dark padless>
      <v-card
          flat
          tile
          class="lighten-1 white--text text-center"
          color="#f76a8c"
      >
        <v-card-text>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
              @click="redirect(icon.url)"
          >
            <v-icon size="24px">{{ icon.icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          {{footerContent}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Celmybell</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Header extends Vue {
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
  footerContent = "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.\n" +
      "          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus\n" +
      "          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim\n" +
      "          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula\n" +
      "          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus\n" +
      "          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum\n" +
      "          tempor vel ut orci. Orci varius natoque penatibus et magnis dis\n" +
      "          parturient montes, nascetur ridiculus mus."
}

</script>