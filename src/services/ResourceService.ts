import {Vue} from "vue-property-decorator";
import Document, {DocumentType} from "@/models/Document";
import {getModule} from "vuex-module-decorators";
import SessionModule from "@/store/SessionModule";
import SnackbarModule from "@/store/SnackbarModule";
import Resource from "@/models/Resource";
import JsonTool from "@/services/tool/JsonTool";

export default class ResourceService {

    static async getResources(component: Vue, resources: Resource[], page: number, size: number, search: string, documentType: DocumentType) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get("/public/resources", {
                params: { page, size, documentType, search }
            })
            let list = JsonTool.jsonConvert.deserializeArray(response.data, Resource)
            resources.splice(0, resources.length)
            list.forEach(v => resources.push(v))
            // @ts-ignore
            component.totalItems = Number(response.headers["x-total-count"])
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            getModule(SnackbarModule).makeToast("No se han podido obtener los recursos");
        }
    }

    static async getResource(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true
        try {
            const response = await component.axios.get("/public/resources/" + id)
            // @ts-ignore
            component.resource = JsonTool.jsonConvert.deserializeObject(response.data, Resource)
            // @ts-ignore
            component.loading = false
        } catch (err) {
            // @ts-ignore
            component.loading = false
            getModule(SnackbarModule).makeToast("Error al obtener el recurso")
        }
    }


    static async postResource(component: Vue, documentFile: File, documentType: DocumentType, description: string, title: string) {
        // @ts-ignore
        component.loading = true

        const formData = new FormData()
        formData.set("documentFile", documentFile)
        formData.set("documentType", documentType)
        formData.set("description", description)
        formData.set("title", title)

        try {
            await component.axios.post("/api/resources", formData, {
                headers: {Authorization: getModule(SessionModule).session.token}
            })
            getModule(SnackbarModule).makeToast("Se ha creado un nuevo recurso correctamente!")
            // @ts-ignore
            component.loading = false
            // @ts-ignore
            component.refresh()
            // @ts-ignore
            component.form.reset()
        } catch (err) {
            // @ts-ignore
            component.loading = false
            getModule(SnackbarModule).makeToast("Error al crear un nuevo recurso")
        }
    }

    static async patchResource(component: Vue, id: number, documentFile: File | null, documentType: DocumentType, description: string, title: string) {
        // @ts-ignore
        component.loading = true

        const formData = new FormData()
        if (documentFile) formData.set("documentFile", documentFile)
        formData.set("documentType", documentType)
        formData.set("description", description)
        formData.set("title", title)

        try {
            await component.axios.post("/api/resources/" + id, formData, {
                headers: {Authorization: getModule(SessionModule).session.token}
            })
            getModule(SnackbarModule).makeToast("Se ha editado un recurso correctamente!")
            // @ts-ignore
            component.loading = false
            // @ts-ignore
            component.refresh()
            // @ts-ignore
            component.form.reset()
        } catch (err) {
            // @ts-ignore
            component.loading = false
            getModule(SnackbarModule).makeToast("Error al editar el recurso")
        }
    }

    static async deleteResource(component: Vue, id: number) {
        // @ts-ignore
        component.loading = true

        try {
            await component.axios.delete("/api/resources/" + id, {
                headers: {Authorization: getModule(SessionModule).session.token}
            })
            // @ts-ignore
            component.loading = false;
            // @ts-ignore
            component.refresh();
            getModule(SnackbarModule).makeToast("Se ha eliminado el recurso de manera exitosa!")
        } catch (err) {
            // @ts-ignore
            component.loading = false
            getModule(SnackbarModule).makeToast("Error al eliminar el recurso")
        }
    }
}