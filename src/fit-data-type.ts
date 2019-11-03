/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

export interface IFitDataType {
    name: string;
    field: [
        {
            name: string,
            format: "blob" | "floatList" | "floatPoint" |
            "integer" | "integerList" | "map" | "string",
            optional: boolean,
        }
    ];
}
