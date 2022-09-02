import { Dimensions, ScrollView, Text, View } from "react-native";
import { Title } from "../components/Title";
import { Timer } from "../components/train/Timer";
import { Top } from "../components/train/Top";
import Svg, { Path } from "react-native-svg";
import { ExerciseTrailer } from "../components/workout/Exercisetrailer";
import { Dots } from "../components/train/Dots";

export const Trainpage = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  let exercise = {
    name: "Straight Bar Bicep Curls",
    sets: [
      { reps: 12, weight: 150, mes: "kg" },
      { reps: 12, weight: 150, mes: "kg" },
      { reps: 12, weight: 150, mes: "kg" },
      { reps: 12, weight: 150, mes: "kg" },
      { reps: 12, weight: 150, mes: "kg" },
      { reps: 12, weight: 150, mes: "kg" },
    ],
  };

  const textstyle = {
    width: 103 / SCALE,
    height: 18 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15 / SCALE,
    lineHeight: 18 / SCALE,
    color: "white",
  };
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: 25 / SCALE,
      }}
    >
      {/* Title */}
      <Title scale={SCALE} bg2={BG2} />

      <Top scale={SCALE} title="Incline Benchpress" bg2={BG2} />

      <Timer scale={SCALE} bg2={BG2} />

      <Dots scale={SCALE} bg2={BG2} amount={5} />

      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          marginBottom: 20 / SCALE,
        }}
      >
        <Text style={[textstyle, { marginRight: 100 / SCALE }]}>
          Next Exercise
        </Text>
        <Text
          style={[textstyle, { width: 38 / SCALE, marginRight: 3 / SCALE }]}
        >
          Total
        </Text>
        <View style={{ top: 1 / SCALE, marginHorizontal: 3 / SCALE }}>
          <Svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M4.97 0C4.89574 0 4.82452 0.0294999 4.77201 0.0820101C4.7195 0.13452 4.69 0.205739 4.69 0.28V0.84C4.69 0.914261 4.7195 0.98548 4.77201 1.03799C4.82452 1.0905 4.89574 1.12 4.97 1.12H5.39V1.8613C2.36096 2.2099 0 4.78926 0 7.91C0 11.2676 2.73238 14 6.09 14C9.44762 14 12.18 11.2676 12.18 7.91C12.181 6.76078 11.8546 5.63505 11.2392 4.66452L11.8325 4.18418L12.0968 4.51066C12.12 4.53925 12.1485 4.56301 12.1808 4.58057C12.2131 4.59813 12.2486 4.60916 12.2851 4.61302C12.3217 4.61688 12.3587 4.6135 12.3939 4.60307C12.4292 4.59264 12.4621 4.57537 12.4907 4.55224L12.9261 4.19972C12.9837 4.15296 13.0204 4.08522 13.0281 4.0114C13.0358 3.93758 13.0139 3.86371 12.9672 3.80604L11.5577 2.065C11.5346 2.03641 11.506 2.01265 11.4737 1.99509C11.4414 1.97753 11.406 1.9665 11.3694 1.96264C11.3328 1.95878 11.2959 1.96216 11.2606 1.97259C11.2253 1.98302 11.1925 2.00029 11.1639 2.02342L10.7285 2.37594C10.6708 2.4227 10.6341 2.49044 10.6264 2.56426C10.6187 2.63808 10.6406 2.71195 10.6873 2.76962L10.9518 3.0961L10.361 3.57406C9.4178 2.64474 8.17362 2.0209 6.79 1.86158V1.12H7.21C7.28426 1.12 7.35548 1.0905 7.40799 1.03799C7.4605 0.98548 7.49 0.914261 7.49 0.84V0.28C7.49 0.205739 7.4605 0.13452 7.40799 0.0820101C7.35548 0.0294999 7.28426 0 7.21 0L4.97 0ZM6.09 2.8C8.918 2.8 11.2 5.082 11.2 7.91C11.2 10.738 8.918 13.02 6.09 13.02C3.262 13.02 0.98 10.738 0.98 7.91C0.98 5.082 3.262 2.8 6.09 2.8ZM6.09028 3.84202L6.09 7.91L9.34276 10.3526C9.79649 9.74834 10.0729 9.02967 10.1411 8.27713C10.2093 7.52459 10.0666 6.76792 9.72888 6.09196C9.39118 5.41602 8.87188 4.8475 8.22921 4.45012C7.58653 4.05275 6.84588 3.84223 6.09028 3.84216V3.84202Z"
              fill="#42FFFF"
            />
          </Svg>
        </View>
        <Text style={[textstyle, { color: "#FFC042", width: 72 / SCALE }]}>
          128m 23s
        </Text>
      </View>

      <ExerciseTrailer
        name={exercise.name}
        sets={exercise.sets}
        scale={SCALE}
        bg2={BG2}
      />
    </View>
  );
};
