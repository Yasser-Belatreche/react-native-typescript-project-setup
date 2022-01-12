import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackParamsList = {
  Home: undefined;
};

export type HomeStackScreenProps<
  CurrentScreen extends keyof HomeStackParamsList,
> = NativeStackScreenProps<HomeStackParamsList, CurrentScreen>;
