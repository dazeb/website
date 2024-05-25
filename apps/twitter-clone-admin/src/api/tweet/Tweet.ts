import { Like } from "../like/Like";
import { Retweet } from "../retweet/Retweet";
import { User } from "../user/User";

export type Tweet = {
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  retweets?: Array<Retweet>;
  updatedAt: Date;
  user?: User | null;
};
