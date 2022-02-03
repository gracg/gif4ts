import { Image } from "./Image";

/*
    Many of these properties only have a few Image properties. 
    Beware when accessing them.

    property 480w_still is missing due to it starts with a number;
*/

export interface Images {
    original :Image;
    downsized :Image;
    downsized_large :Image;
    downsized_medium :Image;
    downsized_small :Image;
    downsized_still :Image;
    fixed_height :Image;
    fixed_height_downsampled :Image;
    fixed_height_small :Image;
    fixed_height_small_still :Image;
    fixed_height_still :Image;
    fixed_width :Image;
    fixed_width_downsampled :Image;
    fixed_width_small :Image;
    fixed_width_small_still :Image;
    fixed_width_still :Image;
    looping :Image;
    original_still :Image;
    original_mp4 :Image;
    preview :Image;
    preview_gif :Image;
    preview_webp :Image;
}