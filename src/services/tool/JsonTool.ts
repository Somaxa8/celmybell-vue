import {JsonConvert} from "json2typescript";

export default class JsonTool {

    // static readonly jsonConvert: JsonConvert = new JsonConvert(OperationMode.ENABLE, ValueCheckingMode.ALLOW_NULL, false, PropertyMatchingRule.CASE_INSENSITIVE)
    static readonly jsonConvert: JsonConvert = new JsonConvert()

    // Object.keys(jsonObject).forEach(key => console.log(key));

}
