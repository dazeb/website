import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  profileImage?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
