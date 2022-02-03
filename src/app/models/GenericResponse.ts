/*
    Most giphy endpoints use this as json response.
*/

import { Gif } from "./Gif";
import { Pagination } from "./Pagination";
import { Meta } from "./Meta";


export interface GenericResponse {
    data :Gif[];
    pagination :Pagination;
    meta :Meta;
}