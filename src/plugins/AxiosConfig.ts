import VueAxios from "vue-axios";
import axios, { AxiosError } from "axios";
import {Vue} from "vue-property-decorator";
import SessionModule from "@/store/SessionModule";
import {getModule} from "vuex-module-decorators";
import ConstantTool from "@/services/tool/ConstantTool";

export default class AxiosConfig {

    static init(vue: Vue) {

        Vue.use(VueAxios, axios)

        axios.defaults.baseURL = ConstantTool.BASE_URL
        axios.interceptors.request.use(request => {
            console.log('Request:', request)
            return request
        })

        axios.interceptors.response.use(response => {
            console.log('Response:', response)
            return response
        }, (error: AxiosError) => {
            if (error.response && error.response.status == 401) {
                let sessionModule: SessionModule = getModule(SessionModule)
                sessionModule.session.token = ""
                sessionModule.saveSession()
                vue.$router.push("/login")
            }
            console.log("Error: " + error);
            console.log(error.response);
            return Promise.reject(error)
        })


    }

}