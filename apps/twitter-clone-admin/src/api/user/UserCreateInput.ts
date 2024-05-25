import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RetweetCreateNestedManyWithoutUsersInput } from "./RetweetCreateNestedManyWithoutUsersInput";
import { TweetCreateNestedManyWithoutUsersInput } from "./TweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password?: string | null;
  profileImage?: InputJsonValue;
  retweets?: RetweetCreateNestedManyWithoutUsersInput;
  tweets?: TweetCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
