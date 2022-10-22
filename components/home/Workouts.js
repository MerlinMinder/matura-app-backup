import { Image, View, Text } from "react-native";
import { WorkoutTrailer } from "./parts/WorkoutTrailer";
import { Neomorphism } from "../../Neomorphism";
import styles from "../../Styles";
import { neostyles } from "../../NeoStyles";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useSharedValueEffect, useValue } from "@shopify/react-native-skia";
import { useSharedValue } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { Get, Merge, Save } from "../../Store";

export const Workouts = (props) => {
  const [data, setData] = useState({});
  const colorS1 = useValue("rgba(130, 130, 130, 0.7)");
  const colorS2 = useValue("rgba(0, 0, 0, 0.5)");
  const [plus, onChangePlus] = useState(require("../../assets/pngs/Plus.png"));

  const pressed = useSharedValue(false);

  useEffect(() => {
    Get("workouts", setData);
  }, []);

  useSharedValueEffect(() => {
    colorS1.current = pressed.value
      ? "rgba(90, 90, 90, 0.7)"
      : "rgba(130, 130, 130, 0.7)";

    colorS2.current = pressed.value
      ? "rgba(50, 50, 50, 0.5)"
      : "rgba(0, 0, 0, 0.5)";

    pressed.value
      ? onChangePlus(require("../../assets/pngs/Plus2.png"))
      : onChangePlus(require("../../assets/pngs/Plus.png"));

    if (pressed.value == true) {
      const timeid = Date.now();
      const datasend = new Object();
      datasend[timeid] = {
        title: "",
        color: "",
        exercises: "",
        time: "",
        id: timeid,
      };

      Merge("workouts", datasend);

      Get("workouts", setData).then(() => {
        pressed.value = false;
        props.nav.navigate("workout", { id: timeid });
      });
    }

    // testing
    if (pressed.value == "reset") {
      Save("workouts", {})
        .then(() => {
          pressed.value = false;
        })
        .then(() => {
          Get("workouts", setData);
        });
    }
  }, pressed);

  const gesture = Gesture.Tap().onBegin(() => {
    pressed.value = true;
  });

  // testing
  const reset = Gesture.Tap().onBegin(() => {
    pressed.value = "reset";
  });

  return (
    <View>
      {Object.values(data).map((workout) => {
        return <WorkoutTrailer key={workout.id} workout={workout} />;
      })}
      <GestureDetector gesture={gesture}>
        <View style={styles.workoutspluscontainer}>
          <Neomorphism
            center
            settings={{
              ...neostyles.workouts,
              ...{ colorS1: colorS1, colorS2: colorS2 },
            }}
            inset
          >
            <Image style={styles.workoutsplus} source={plus} />
          </Neomorphism>
        </View>
      </GestureDetector>
      {/* testing */}
      <GestureDetector gesture={reset}>
        <Text>Reset</Text>
      </GestureDetector>
    </View>
  );
};
