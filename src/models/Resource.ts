import {JsonObject, JsonProperty} from "json2typescript";
import Document from "@/models/Document";

@JsonObject("Resource")
export default class Resource {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("title", String, true)
    title?: string = undefined
    @JsonProperty("description", String, true)
    description?: string = undefined
    @JsonProperty("document", Document, true)
    document?: Document = undefined

}