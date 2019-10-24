/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import { StopId, StopShortName, TripId } from "./type-util";
import { VEHICLE_STATUS } from "./vehicle-status";

export interface ITripPassage {
    actualTime: string;
    status: VEHICLE_STATUS;
    stop: {
        id: StopId;
        name: string;
        shortName: StopShortName;
    };
    stop_seq_num: string;
}

export interface IDepartedTripPassage extends ITripPassage {
    status: VEHICLE_STATUS.DEPARTED;
}
export interface IActualTripPassage extends ITripPassage {
    status: VEHICLE_STATUS.PLANNED | VEHICLE_STATUS.PREDICTED | VEHICLE_STATUS.STOPPING;
}
/**
 * Response from:
 * ```
 * end/asdf
 * ```
 * @since 0.5.0
 */
export interface ITripPassages {
    actual: IActualTripPassage[];
    old: IDepartedTripPassage[];
    directionText: string;
    routeName: string;
    /**
     * The trip id
     * @since 1.2.0
     */
    tripId: TripId;
}
