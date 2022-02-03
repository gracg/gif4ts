import { Analytics } from "./Analytics";
import { Images } from "./Images";
import { User } from "./User";

export interface Gif  {
    type :string;
    id :string
    url :string;
    slug: string;
    bitly_gif_url :string;
    bitly_url :string;
    embed_url :string;
    username :string;
    source :string;
    title :string;
    rating :string;
    content_url :string;
    source_tld :string;
    source_post_url :string
    is_sticker :number;
    import_datetime :string;
    trending_datetime :string;
    images :Images;
    user :User;
    analytics_response_payload :string;
    analytics :Analytics;
}