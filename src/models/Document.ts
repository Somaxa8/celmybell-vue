import {JsonConverter, JsonCustomConvert, JsonObject, JsonProperty} from "json2typescript";

export enum DocumentType {
    IMAGE = "IMAGE",
    MODEL = "MODEL"
}

@JsonConverter
class TypeConverter implements JsonCustomConvert<DocumentType> {
    deserialize(data: any): DocumentType {
        return (<any>DocumentType)[data]
    }
    serialize(data: DocumentType): any {
        return data.toString()
    }
}

@JsonObject("Document")
export default class Document {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("url", String, true)
    url?: string = undefined
    @JsonProperty("name", String, true)
    name?: string = undefined
    @JsonProperty("baseName", String, true)
    baseName?: string = undefined
    @JsonProperty("extension", String, true)
    extension?: string = undefined
    @JsonProperty("title", String, true)
    title?: string = undefined
    @JsonProperty("description", String, true)
    description?: string = undefined
    @JsonProperty("tag", String, true)
    tag?: string = undefined
    @JsonProperty("type", TypeConverter, true)
    type?: DocumentType = undefined

}