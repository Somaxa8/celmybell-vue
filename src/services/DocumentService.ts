import Document from "@/models/Document";
import axios from "axios";
import {Vue} from "vue-property-decorator";
import ConstantTool from "@/services/tool/ConstantTool";
import JsonTool from "@/services/tool/JsonTool";
import SnackbarModule from "@/store/SnackbarModule";
import {getModule} from "vuex-module-decorators";

export default class DocumentService {
    static async getDocuments(component: Vue, documents: Document[]) {
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/documents", {
                headers: {"Access-Control-Allow-Origin": "*"}
            })
            console.log(ConstantTool.BASE_URL + "hola")
            let list = JsonTool.jsonConvert.deserializeArray(response.data, Document)
            documents.splice(0, documents.length)
            list.forEach(p => documents.push(p))
        } catch {
            getModule(SnackbarModule).makeToast("No se han podido obtener los dibujos")
        }
    }
    static async getDocument(component: Vue, documentId: number) {
        try {
            const response = await component.axios.get(ConstantTool.BASE_URL + "/public/documents/" + documentId);
            (<any>component).document = JsonTool.jsonConvert.deserializeObject(response.data, Document)
        } catch {
            getModule(SnackbarModule).makeToast("No se pudo obtener el dibujo")
        }
    }
}