import {JsonProperty} from "json2typescript";
import {DateTime} from "luxon";
import DateTimeConverter from "@/models/converters/DateTimeConverter";

export default class Auditing {
    @JsonProperty("createdAt", DateTimeConverter, true)
    createdAt?: DateTime = undefined
}
