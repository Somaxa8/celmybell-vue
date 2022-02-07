<template>
    <v-app-bar app clipped-left color="secondary" height="63">
        <v-img src="@/assets/logo.svg" max-width="40" max-height="40"/>
        <v-bottom-navigation v-model="value" background-color="secondary" height="63" dark style="box-shadow: none">
            <v-btn v-for="item in buttons" :key="item.title" @click="$router.push(item.url)" :value="item.value" style="font-size: medium" >
                {{ item.title }}
            </v-btn>
        </v-bottom-navigation>
        <div style="width: 40px" />
    </v-app-bar>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {getModule} from "vuex-module-decorators";
import SnackbarModule from "@/store/SnackbarModule";
import LoginService from "@/services/LoginService";
import SessionModule from "@/store/SessionModule";
import ConstantTool from "@/services/tool/ConstantTool";
@Component
export default class NavbarComponent extends Vue {
    sessionModule: SessionModule = getModule(SessionModule)
    snackbarModule: SnackbarModule = getModule(SnackbarModule)
    projectName: string = ConstantTool.PROJECT_NAME
    value: String = "home"
    buttons: Array<any> =  [
        { title: "Home", value: "home", url: "#" },
        { title: "Ilustrations", value: "illustrations", url: "#" },
        { title: "3D Models", value: "3dModels", url: "#" },
        { title: "Contact", value: "contact", url: "#" }
    ]


    get dark() {
        return this.$vuetify.theme.dark
    }

    set dark(v: boolean) {
        this.sessionModule.session.dark = v
        this.sessionModule.saveSession()
        this.$vuetify.theme.dark = v
    }
}
</script>
