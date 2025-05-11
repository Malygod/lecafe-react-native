import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  FriendSearch: undefined;
};

export type NavigationStackProps = StackNavigationProp<RootStackParamList>;