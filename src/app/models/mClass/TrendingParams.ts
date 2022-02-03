import { Rating } from "../mEnum/RATING";

export class TrendingParams {
    public limit :number|null=null;
    public offset :number|null=null;
    public rating :Rating|null=null;
}