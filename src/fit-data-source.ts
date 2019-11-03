/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

import { IFitDataType } from "./fit-data-type";

export interface IFitDataSource {
    dataStreamId: string;
    name: string;
    dataStreamName: string;
    type: "derived" | "raw";
    dataType: IFitDataType;
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

export type IFitCreateDataSourceRequest = Omit<IFitDataSource, "dataStreamId">;
