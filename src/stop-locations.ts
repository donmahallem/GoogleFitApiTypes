/*!
 * Source https://github.com/donmahallem/TrapezeApiTypes
 */

import { StopId, StopShortName } from "./type-util";

/**
 * Information about the stop location
 * @since 1.1.0
 * @category Cat1
 */
export interface IStopLocation {
    /**
     * Type of vehicle
     */
    category: string | "bus";
    /**
     * Stop Id
     */
    id: StopId;
    /**
     * Latitude in arcmiliseconds
     */
    latitude: number;
    /**
     * Longitutde in arcmiliseconds
     */
    longitude: number;
    /**
     * Humanreadable name of the stop
     */
    name: string;
    /**
     * Stop short id
     */
    shortName: StopShortName;
}

/**
 * Response for
 * ```
 * /internetservice/geoserviceDispatcher/services/stopinfo/stops
 * ```
 * @since 1.1.0
 * @category Cat2
 */
export interface IStopLocations {
    /**
     * List of StopLocation
     */
    stops: IStopLocation[];
}
