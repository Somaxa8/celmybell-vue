<template>
  <div style="background: #f3f3f3;">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-subheader
              class="briefcase-title"
              style="color:#f76a8c;font-size:30px;"
          >Briefcase</v-subheader
          >
          <div>
            <v-container fluid>
              <v-row dense>
                <silent-box :gallery="gallery">
                  <template v-slot:silentbox-item="{ silentboxItem }">
                    <v-card>
                      <v-img
                          width="400px"
                          :src="silentboxItem.src"
                          class="white--text align-end"
                          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                          height="200px"
                      >
                      </v-img>
                    </v-card>
                  </template>
                </silent-box>
              </v-row>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component
export default class Briefcase extends Vue {
  gallery = [
    {
      description: "Ergo Proxy vincent drawing",
      alt: "Fanart",
      src: "http://51.178.19.230:8082/storage/image/6D1606096249889.jpg"
    },
    {
      description: "Ashita no Joe drawing",
      alt: "Fanart",
      src: "http://51.178.19.230:8082/storage/image/2D1606095702382.jpeg"
    },
    {
      description: "Evangelion Misato drawing",
      alt: "Fanart",
      src: "http://51.178.19.230:8082/storage/image/3D1606095955857.jpeg"
    },
    {
      description: "Legend Of Galactic Heroes Rainhard drawing",
      alt: "Fanart",
      src: "http://51.178.19.230:8082/storage/image/5D1606096207112.jpeg"
    }
  ]
}
</script>

<style>
  .briefcase-title {
    font-family: "Dancing Script", cursive;
    font-size: 40px;
  }

  #silentbox-gallery {
    width: 100%;
  }

  .silentbox-item {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    margin-right: 10px;
  }

  @media (min-width: 600px) {
    .silentbox-item {
      flex: 0 0 30%;
      max-width: 31%;
    }
  }
</style>