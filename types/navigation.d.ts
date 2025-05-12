import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  FriendSearch: undefined;
  SideBar: undefined;
};

export type NavigationStackProps = StackNavigationProp<RootStackParamList>;