import { Text, View } from "react-native";
import { Neomorphism } from "../../Neomorphism";
import Svg, { Path } from "react-native-svg";
import { Settrailer } from "./Settrailer";

export const ExerciseTrailer = (props) => {
  let SCALE = props.scale;
  let BG2 = props.bg2;
  let sets = props.sets;
  return (
    <Neomorphism
      width={280 / SCALE}
      height={sets.length < 7 ? 80 / SCALE : 124 / SCALE}
      x={4 / SCALE}
      y={4 / SCALE}
      r={10 / SCALE}
      b={4 / SCALE}
      colorB={BG2}
      colorS1="rgba(0, 0, 0, 0.6)"
      colorS2="rgba(153, 153, 153, 0.6)"
      inset={true}
    >
      <Text
        style={{
          position: "absolute",
          height: 19 / SCALE,
          left: 10 / SCALE,
          top: 5 / SCALE,
          fontFamily: "WorkSans-SemiBold",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: 16 / SCALE,
          lineHeight: 19 / SCALE,
          color: "white",
        }}
      >
        {props.name}
      </Text>
      <View
        style={{
          position: "absolute",
          width: 24 / SCALE,
          height: 24 / SCALE,
          left: 246 / SCALE,
          top: 3 / SCALE,
        }}
      >
        <Svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M4.5 14.25C3.90326 14.25 3.33097 14.0129 2.90901 13.591C2.48705 13.169 2.25 12.5967 2.25 12C2.25 11.4033 2.48705 10.831 2.90901 10.409C3.33097 9.98705 3.90326 9.75 4.5 9.75C5.09674 9.75 5.66903 9.98705 6.09099 10.409C6.51295 10.831 6.75 11.4033 6.75 12C6.75 12.5967 6.51295 13.169 6.09099 13.591C5.66903 14.0129 5.09674 14.25 4.5 14.25ZM12 14.25C11.4033 14.25 10.831 14.0129 10.409 13.591C9.98705 13.169 9.75 12.5967 9.75 12C9.75 11.4033 9.98705 10.831 10.409 10.409C10.831 9.98705 11.4033 9.75 12 9.75C12.5967 9.75 13.169 9.98705 13.591 10.409C14.0129 10.831 14.25 11.4033 14.25 12C14.25 12.5967 14.0129 13.169 13.591 13.591C13.169 14.0129 12.5967 14.25 12 14.25ZM19.5 14.25C18.9033 14.25 18.331 14.0129 17.909 13.591C17.4871 13.169 17.25 12.5967 17.25 12C17.25 11.4033 17.4871 10.831 17.909 10.409C18.331 9.98705 18.9033 9.75 19.5 9.75C20.0967 9.75 20.669 9.98705 21.091 10.409C21.5129 10.831 21.75 11.4033 21.75 12C21.75 12.5967 21.5129 13.169 21.091 13.591C20.669 14.0129 20.0967 14.25 19.5 14.25Z"
            fill="white"
          />
        </Svg>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          position: "absolute",
          top: 28 / SCALE,
          left: 8 / SCALE,
          width: 264 / SCALE,
        }}
      >
        {sets.map((set) => {
          return (
            <View key={Math.random()} style={{ margin: 2 / SCALE }}>
              <Settrailer scale={SCALE} set={set} />
            </View>
          );
        })}
      </View>
    </Neomorphism>
  );
};