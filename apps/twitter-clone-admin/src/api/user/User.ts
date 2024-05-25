import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { Retweet } from "../retweet/Retweet";
import { Tweet } from "../tweet/Tweet";

export type User = {
  createdAt: Date;
  email: string | null;
  id: string;
  likes?: Array<Like>;
  password: string | null;
  profileImage: JsonValue;
  retweets?: Array<Retweet>;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string | null;
};
