import { Dimensions } from "react-native";

const SCALE = 375 / Dimensions.get("screen").width;
const BG2 = "#464646";

export const neostyles = {
  calendarcontainer: {
    height: 330 / SCALE,
    width: 300 / SCALE,
    x: 10 / SCALE,
    y: 10 / SCALE,
    r: 15 / SCALE,
    b: 10 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(128, 128, 128, 0.7)",
    colorB: BG2,
  },
  weektitleweekshort: {
    height: 30 / SCALE,
    width: 30 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 8 / SCALE,
    b: 2 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.5)",
    colorS2: "rgba(150, 150, 150, 0.5)",
    colorB: BG2,
    padx: 6.5 / SCALE,
  },
  week: {
    height: 38 / SCALE,
    width: 265 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 10 / SCALE,
    b: 4 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.5)",
    colorS2: "rgba(153, 153, 153, 0.5)",
    colorB: BG2,
  },
  day: {
    height: 30 / SCALE,
    width: 30 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 8 / SCALE,
    b: 2 / SCALE,
    colorS1: "rgba(255, 255, 255, 0.5)",
    colorS2: "rgba(69, 69, 69, 0.5)",
  },
  workouts: {
    height: 70 / SCALE,
    width: 275 / SCALE,
    x: 10 / SCALE,
    y: 10 / SCALE,
    r: 10 / SCALE,
    b: 10 / SCALE,
    colorS1: "rgba(130, 130, 130, 0.7)",
    colorS2: "rgba(0, 0, 0, 0.5)",
    colorB: BG2,
  },
  workouttrailer: {
    height: 80 / SCALE,
    width: 300 / SCALE,
    x: 5 / SCALE,
    y: 5 / SCALE,
    r: 10 / SCALE,
    b: 4 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(153, 153, 153, 0.7)",
    colorB: BG2,
    pady: 24 / SCALE,
  },
  physiquecontainer: {
    height: 777 / SCALE,
    width: 300 / SCALE,
    x: 8 / SCALE,
    y: 8 / SCALE,
    r: 15 / SCALE,
    b: 7 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
  },
  physiqueball: {
    height: 18 / SCALE,
    width: 18 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 9 / SCALE,
    b: 1 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.5)",
    colorS1: "rgba(220, 220, 220, 0.7)",
  },
  physiqueedit: {
    height: 30 / SCALE,
    width: 130 / SCALE,
    x: 3 / SCALE,
    y: 3 / SCALE,
    r: 10 / SCALE,
    b: 3 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.5)",
    colorS1: "rgba(220, 220, 220, 0.7)",
    colorB: BG2,
  },
  measure: {
    height: 40 / SCALE,
    width: 280 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 10 / SCALE,
    b: 3 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.5)",
    colorS2: "rgba(153, 153, 153, 0.5)",
    colorB: BG2,
  },
  workoutpagecontainer: {
    width: 320 / SCALE,
    x: 10 / SCALE,
    y: 10 / SCALE,
    r: 15 / SCALE,
    b: 10 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(128, 128, 128, 0.7)",
    colorB: BG2,
  },
  nameline: {
    height: 20 / SCALE,
    width: 280 / SCALE,
    x: 3 / SCALE,
    y: 3 / SCALE,
    r: 10 / SCALE,
    b: 2 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.5)",
    colorS1: "rgba(255, 255, 255, 0.5)",
  },
  startouter: {
    height: 30 / SCALE,
    width: 120 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 5 / SCALE,
    b: 3 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.6)",
    colorS2: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
  },
  startinner: {
    height: 30 / SCALE,
    width: 120 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 5 / SCALE,
    b: 3 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.6)",
  },
  exercisetrailer: {
    height: 80 / SCALE,
    width: 280 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 10 / SCALE,
    b: 4 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.6)",
    colorS2: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
  },
  settrailer: {
    height: 40 / SCALE,
    width: 40 / SCALE,
    x: 3 / SCALE,
    y: 3 / SCALE,
    r: 8 / SCALE,
    b: 3 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.6)",
    colorS1: "rgba(153, 153, 153, 0.6)",
    colorB: "#595959",
  },
  workoutpageplus: {
    height: 60 / SCALE,
    width: 60 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 30 / SCALE,
    b: 4 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.7)",
    colorS1: "rgba(128, 128, 128, 0.7)",
    colorB: BG2,
  },
  exercisepagecontainer: {
    height: 330 / SCALE,
    width: 320 / SCALE,
    x: 10 / SCALE,
    y: 10 / SCALE,
    r: 15 / SCALE,
    b: 10 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(128, 128, 128, 0.7)",
    colorB: BG2,
  },
  exercisepagetitle: {
    height: 40 / SCALE,
    width: 300 / SCALE,
    x: 3 / SCALE,
    y: 3 / SCALE,
    r: 10 / SCALE,
    b: 2 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.7)",
    colorS1: "rgba(128, 128, 128, 0.7)",
    colorB: BG2,
  },
  counter: {
    height: 35 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 5 / SCALE,
    b: 1.5 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.6)",
    colorS2: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
  },
  setwrapper: {
    width: 280 / SCALE,
    height: 50 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 10 / SCALE,
    b: 2 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(153, 153, 153, 0.7)",
    colorB: BG2,
  },
  setnum: {
    width: 50 / SCALE,
    height: 40 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 5 / SCALE,
    b: 1.5 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.6)",
    colorS2: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
  },
  setmes: { width: 60 / SCALE },
  progressionouter: {
    width: 280 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 10 / SCALE,
    b: 3 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.6)",
    colorS2: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
  },
  progressioninner: { width: 274 / SCALE },
  progressionslide: {
    width: 54 / SCALE,
    height: 24 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 12 / SCALE,
    b: 1 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(213, 255, 204, 0.7)",
    colorB: "rgba(98, 255, 66, 0.2)",
  },
  progressionslider: {
    width: 18 / SCALE,
    height: 18 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 9 / SCALE,
    b: 1.5 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.7)",
  },
  progressionstep: {
    width: 150 / SCALE,
    height: 35 / SCALE,
    x: 3 / SCALE,
    y: 3 / SCALE,
    r: 10 / SCALE,
    b: 2.5 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.6)",
    colorS1: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
  },
  progressionpartwrapper: {
    width: 250 / SCALE,
    height: 40 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 10 / SCALE,
    b: 4 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.6)",
    colorS2: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
    pady: 13 / SCALE,
  },
  progressionpartreps: {
    width: 60 / SCALE,
    height: 30 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 5 / SCALE,
    b: 1.5 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.6)",
    colorS2: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
    pady: 13 / SCALE,
  },
  progressionpartmes: {
    width: 85 / SCALE,
  },
  exercisepagesubmit: {
    width: 120 / SCALE,
    height: 30 / SCALE,
    x: 3 / SCALE,
    y: 3 / SCALE,
    r: 10 / SCALE,
    b: 2.5 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.6)",
    colorS1: "rgba(153, 153, 153, 0.6)",
    colorB: BG2,
  },
  timercontainer: {
    width: 325 / SCALE,
    height: 115 / SCALE,
    x: 6 / SCALE,
    y: 6 / SCALE,
    r: 15 / SCALE,
    b: 6 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(153, 153, 153, 0.7)",
    colorB: BG2,
  },
  timerskip: {
    width: 70 / SCALE,
    height: 50 / SCALE,
    x: 4 / SCALE,
    y: 4 / SCALE,
    r: 15 / SCALE,
    b: 4 / SCALE,
    colorS1: "rgba(0, 0, 0, 0.7)",
    colorS2: "rgba(153, 153, 153, 0.7)",
    colorB: BG2,
  },
  timerdone: {
    colorS2: "rgba(0, 0, 0, 0.7)",
    colorS1: "rgba(153, 153, 153, 0.7)",
  },
  dot: {
    width: 20 / SCALE,
    height: 20 / SCALE,
    x: 2 / SCALE,
    y: 2 / SCALE,
    r: 10 / SCALE,
    b: 2 / SCALE,
    colorS2: "rgba(0, 0, 0, 0.5)",
    colorS1: "rgba(255, 255, 255, 0.5)",
    colorB: BG2,
  },
};
