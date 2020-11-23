<template>
  <v-app>
    <Banner/>
    <Briefcase/>
    <Contact/>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Banner from "@/components/Banner.vue";
import Briefcase from "@/components/Briefcase.vue";
import Contact from "@/components/Contact.vue";

@Component({components: {Banner, Briefcase, Contact}})
export default class Home extends Vue {

}
</script>