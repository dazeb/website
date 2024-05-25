import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { RetweetCreateNestedManyWithoutTweetsInput } from "./RetweetCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  retweets?: RetweetCreateNestedManyWithoutTweetsInput;
  user?: UserWhereUniqueInput | null;
};
