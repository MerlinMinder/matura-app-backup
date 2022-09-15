import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Svg, { Path } from "react-native-svg";
import { Counter } from "../components/exercise/Counter";
import { Progression } from "../components/exercise/Progression";
import { Set } from "../components/exercise/Set";
import { Title } from "../components/Title";
import { Neomorphism } from "../Neomorphism";

let SCALE = 0.954861111111111;

export const Exercisepage = (props) => {
  SCALE = props.scale;
  let BG2 = props.bg2;
  const [title, onChangeTitle] = useState("");
  const [edit, onChangeEdit] = useState(true);

  let sets = [
    { reps: 12, weight: 150, mes: "kg", num: 1 },
    { reps: 12, weight: 150, mes: "lbs", num: 2 },
    { reps: 12, weight: 150, mes: "kg", num: 3 },
    { reps: 12, weight: 150, mes: "kg", num: 12 },
  ];

  let progression = [1, 2, 3, 4];

  let extraHeight = sets.length * 61 + progression.length * 53;
  return (
    <ScrollView
      contentContainerStyle={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingBottom: 25 / SCALE,
      }}
    >
      {/* Title */}
      <Title scale={SCALE} />

      <Neomorphism
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        width={320 / SCALE}
        height={330 / SCALE + extraHeight / SCALE}
        x={10 / SCALE}
        y={10 / SCALE}
        r={15 / SCALE}
        b={10 / SCALE}
        colorB={BG2}
        colorS1="rgba(0, 0, 0, 0.7)"
        colorS2="rgba(128, 128, 128, 0.7)"
      >
        <View style={{ top: 10 / SCALE, height: 40 / SCALE }}>
          <Neomorphism
            width={300 / SCALE}
            height={40 / SCALE}
            x={3 / SCALE}
            y={3 / SCALE}
            r={10 / SCALE}
            b={2 / SCALE}
            colorB={BG2}
            colorS2="rgba(0, 0, 0, 0.7)"
            colorS1="rgba(153, 153, 153, 0.7)"
            inset={true}
          >
            <TextInput
              style={styles.title}
              onChangeText={onChangeTitle}
              placeholder="Benchpress"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={title}
              selectTextOnFocus={true}
              keyboardType="default"
              editable={edit}
              multiline={false}
              numberOfLines={1}
            ></TextInput>
            <View style={styles.pen}>
              <Svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M17.3073 0C16.6164 0 15.947 0.277927 15.4236 0.799967L15.3469 0.877489L14.831 0.387613L14.263 0.955012L1.39089 13.8139L1.21094 13.9953L1.15894 14.2534L0.255891 18.7893L0 20L1.21094 19.7443L5.75095 18.8413L6.00932 18.7893L6.19092 18.6095L19.0589 5.74822L19.6269 5.18082L19.1365 4.69177L19.1885 4.63898L19.2133 4.58785C19.4625 4.33934 19.6602 4.04421 19.7952 3.71933C19.9302 3.39445 19.9998 3.04618 20 2.69442C20.0002 2.34266 19.9311 1.9943 19.7965 1.66925C19.662 1.34419 19.4646 1.0488 19.2158 0.799967C18.7101 0.291739 18.0237 0.00413383 17.3065 0H17.3073ZM17.3073 1.62468C17.5632 1.62468 17.8356 1.74013 18.0552 1.95951C18.4952 2.3999 18.4952 2.98874 18.0552 3.42914L17.9776 3.50583L16.5083 2.03785L16.5851 1.96033C16.8046 1.74096 17.0498 1.6255 17.3073 1.6255V1.62468ZM14.8557 2.70752L17.3073 5.15525L16.1203 6.36757L13.644 3.89345L14.8574 2.70752H14.8557ZM12.509 5.07855L14.9341 7.50072L6.31804 16.1354L5.9829 14.6394L5.87889 14.1248L5.36298 14.0217L3.86561 13.6877L12.5081 5.07938L12.509 5.07855ZM2.6819 15.1029L4.48635 15.5152L4.89908 17.3189L3.2234 17.6545L2.34512 16.7787L2.68108 15.1045L2.6819 15.1029Z"
                  fill="white"
                />
              </Svg>
            </View>
          </Neomorphism>
        </View>
        <Counter
          text="Sets"
          scale={SCALE}
          bg2={BG2}
          style={{ top: 26 / SCALE }}
          width={80 / SCALE}
          textwidth={23 / SCALE}
        />
        <View style={{ top: 34 / SCALE }}>
          {sets.map((set) => {
            return <Set key={set.num} set={set} scale={SCALE} bg2={BG2} />;
          })}
        </View>
        <Counter
          text="Rest"
          scale={SCALE}
          bg2={BG2}
          style={{ top: 45 / SCALE }}
          width={100 / SCALE}
          textwidth={47 / SCALE}
        />
        <View style={{ top: 55 / SCALE }}>
          <Progression scale={SCALE} bg2={BG2} progression={progression} />
        </View>
      </Neomorphism>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 250 / SCALE,
    height: 40 / SCALE,
    left: 10 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20 / SCALE,
    lineHeight: 23 / SCALE,
    textAlign: "left",
    color: "white",
    margin: 0,
    padding: 0,
  },
  pen: {
    position: "absolute",
    top: 10 / SCALE,
    width: 20 / SCALE,
    height: 20 / SCALE,
    left: 267 / SCALE,
  },
});