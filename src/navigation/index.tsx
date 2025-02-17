import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NotFound } from "./screens/not-found";
import { Home } from "./screens/home";
import { Search } from "./screens/search";
import { SafeAreaProvider } from "react-native-safe-area-context";
import colors from "../constant/color.constant";
import { Detail } from "./screens/detail";
import { RootStackParamList } from "./types";
import ToastManager from "toastify-react-native";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <ToastManager
        positionValue={24}
        textStyle={{
          fontSize: 12,
        }}
        style={{
          height: 48,
        }}
        showCloseIcon={false}
      />
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            navigationBarColor: colors.brand,
          }}
        >
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen
            name="Search"
            component={Search}
            options={{ animation: "none" }}
          />
          <RootStack.Screen name="Detail" component={Detail} />
          <RootStack.Screen name="NotFound" component={NotFound} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
