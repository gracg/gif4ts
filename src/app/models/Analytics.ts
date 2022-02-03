import { AnalyticsObject } from "./AnalyticsObject";

export interface Analytics {
    onload :AnalyticsObject;
    onclick :AnalyticsObject;
    onsent :AnalyticsObject;
}