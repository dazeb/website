import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TweetList } from "./tweet/TweetList";
import { TweetCreate } from "./tweet/TweetCreate";
import { TweetEdit } from "./tweet/TweetEdit";
import { TweetShow } from "./tweet/TweetShow";
import { FollowList } from "./follow/FollowList";
import { FollowCreate } from "./follow/FollowCreate";
import { FollowEdit } from "./follow/FollowEdit";
import { FollowShow } from "./follow/FollowShow";
import { RetweetList } from "./retweet/RetweetList";
import { RetweetCreate } from "./retweet/RetweetCreate";
import { RetweetEdit } from "./retweet/RetweetEdit";
import { RetweetShow } from "./retweet/RetweetShow";
import { LikeList } from "./like/LikeList";
import { LikeCreate } from "./like/LikeCreate";
import { LikeEdit } from "./like/LikeEdit";
import { LikeShow } from "./like/LikeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TwitterClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Tweet"
          list={TweetList}
          edit={TweetEdit}
          create={TweetCreate}
          show={TweetShow}
        />
        <Resource
          name="Follow"
          list={FollowList}
          edit={FollowEdit}
          create={FollowCreate}
          show={FollowShow}
        />
        <Resource
          name="Retweet"
          list={RetweetList}
          edit={RetweetEdit}
          create={RetweetCreate}
          show={RetweetShow}
        />
        <Resource
          name="Like"
          list={LikeList}
          edit={LikeEdit}
          create={LikeCreate}
          show={LikeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
