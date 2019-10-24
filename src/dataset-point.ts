/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

export interface IDatasetPoint {
    dataTypeName: "com.google.weight.summary" | string;
    endTimeNanos: string;
    originDataSourceId: string;
    startTimeNanos: string;
    value: Array<{
        fpVal: number, mapVal: any[],
    }>;
}
