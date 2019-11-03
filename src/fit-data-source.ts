/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

export interface IFitDataSource {
    dataStreamId: string;
    name: string;
    dataStreamName: string;
    type: "derived" | "raw";
    dataType: {
        name: string,
        field: [
            {
                name: string,
                format: "blob" | "floatList" | "floatPoint" |
                "integer" | "integerList" | "map" | "string",
                optional: boolean,
            }
        ],
    };
    device: {
        uid: string,
        type: "chestStrap" | "headMounted" | "phone" | "scale" | "tablet" | "unknown" | "watch",
        version: string,
        model: string,
        manufacturer: string,
    };
    application: {
        packageName?: string,
        version: string,
        detailsUrl?: string,
        name: string,
    };
}
