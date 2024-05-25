import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { RetweetListRelationFilter } from "../retweet/RetweetListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  retweets?: RetweetListRelationFilter;
  user?: UserWhereUniqueInput;
};
