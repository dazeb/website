import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { RetweetUpdateManyWithoutTweetsInput } from "./RetweetUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  retweets?: RetweetUpdateManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
