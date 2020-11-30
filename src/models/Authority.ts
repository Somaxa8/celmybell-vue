import {JsonConverter, JsonCustomConvert, JsonObject, JsonProperty} from "json2typescript";

export enum AuthorityName {
    ROLE_SUPERADMIN = "ROLE_SUPERADMIN",
    ROLE_ADMIN = "ROLE_ADMIN",
    ROLE_USER = "ROLE_USER",
    ROLE_SWAGGER = "ROLE_SWAGGER"
}

@JsonConverter
class NameConverter implements JsonCustomConvert<AuthorityName> {
    deserialize(data: any): AuthorityName {
        return (<any>AuthorityName)[data]
    }
    serialize(data: AuthorityName): any {
        return data.toString()
    }
}

@JsonObject("Authority")
export default class Authority {

    @JsonProperty("name", NameConverter, true)
    name?: AuthorityName = undefined
    @JsonProperty("title", String, true)
    description?: string = undefined
    @JsonProperty("enabled", Boolean, true)
    enabled?: boolean = undefined

}