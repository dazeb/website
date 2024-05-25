import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { RetweetUpdateManyWithoutUsersInput } from "./RetweetUpdateManyWithoutUsersInput";
import { TweetUpdateManyWithoutUsersInput } from "./TweetUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string | null;
  profileImage?: InputJsonValue;
  retweets?: RetweetUpdateManyWithoutUsersInput;
  tweets?: TweetUpdateManyWithoutUsersInput;
  username?: string | null;
};
