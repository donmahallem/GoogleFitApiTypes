/*!
 * Source https://github.com/donmahallem/GoogleFitApiTypes
 */

export interface IFitSession {
    activityType: number;
    application: {
        packageName: string;
    };
    packageName: string;
    description: string;
    endTimeMillis: string;
    id: string;
    modifiedTimeMillis: string;
    name: string;
    startTimeMillis: string;
}
