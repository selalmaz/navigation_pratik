import {User} from './userData';

export type RootStackParamList = {
  Welcome: undefined;
  MemberSign: undefined;
  MemberResult: {user: User};
};
