import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Homepage } from "./pages/Homepage";
import { Workoutpage } from "./pages/Workoutpage";
import { Exercisepage } from "./pages/Exercisepage";
import { Trainpage } from "./pages/Trainpage";
import { Graphpage } from "./pages/Graphpage";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { Del, Get, Save } from "./Store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dimensions, Text } from "react-native";

if (Text.defaultProps == null) Text.defaultProps = {};
Text.defaultProps.allowFontScaling = false;

export default function App() {
  // const SCALE = 375 / Dimensions.get("screen").width;
  // const BG2 = "#454545";
  const [calendar, setCalendar] = useState(0);
  const [workouts, setWorkouts] = useState(0);
  const [physique, setPhysique] = useState(0);

  useEffect(() => {
    // get calendar/database
    Get("calendar", setCalendar);
    Get("workouts", setWorkouts);
    Get("physique", setPhysique);
  }, []);

  // load the WorkSans fonts

  const [fontsLoaded] = useFonts({
    "WorkSans-Regular": require("./assets/fonts/WorkSans-Regular.ttf"),
    "WorkSans-SemiBold": require("./assets/fonts/WorkSans-SemiBold.ttf"),
    "WorkSans-Bold": require("./assets/fonts/WorkSans-Bold.ttf"),
    "WorkSans-Light": require("./assets/fonts/WorkSans-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  // Check if workouts or calendar or physique have already been created / saved
  // if not it returns null and first save of empty calendar, physique and
  // workout takes place

  if (!workouts) {
    if (workouts === null) {
      console.log("first load workouts");
      Save("workouts", {});
    }
    if (workouts === 0) {
      return null;
    }
  }

  if (!calendar) {
    if (calendar === null) {
      console.log("first load calendar");
      Save("calendar", {});
    }
    if (calendar === 0) {
      return null;
    }
  }

  if (!physique) {
    if (physique === null) {
      console.log("first load physique");
      Save("physique", {});
    }
    if (physique === 0) {
      return null;
    }
  }

  // Wrap App (SafeAreaView) in NavigationContainer for navigation
  // Wrap all in gestureHandlerRoot
  // to account for gesture detection over the whole app

  const Stack = createNativeStackNavigator();

  const App = gestureHandlerRootHOC(() => (
    <NavigationContainer>
      <StatusBar backgroundColor={"transparent"} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={Homepage} />
        <Stack.Screen name="workout" component={Workoutpage} />
        <Stack.Screen name="exercise" component={Exercisepage} />
        <Stack.Screen name="train" component={Trainpage} />
        <Stack.Screen name="graph" component={Graphpage} />
      </Stack.Navigator>
    </NavigationContainer>
  ));

  return <App />;
}
