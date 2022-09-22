import Constants from "expo-constants";
import { Dimensions } from "react-native";

const SCALE = 375 / Dimensions.get("screen").width;

const styles = {
  appContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3C3C3C",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  scrollview: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: 25 / SCALE,
  },
  hometitles: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
  },
  top5: { marginTop: 5 / SCALE },
  top10: { marginTop: 10 / SCALE },
  top20: { marginTop: 20 / SCALE },
  top48: { marginTop: 48 / SCALE },
  top55: { marginTop: 55 / SCALE },
  Top5: { top: 5 / SCALE },
  Top15: { top: 15 / SCALE },
  Top25: { top: 25 / SCALE },
  Top26: { top: 26 / SCALE },
  Top34: { top: 34 / SCALE },
  Top45: { top: 45 / SCALE },
  Top55: { top: 55 / SCALE },
  Top60: { top: 60 / SCALE, position: "absolute" },
  top132: { position: "absolute", top: 132 / SCALE },
  Top162: { position: "absolute", top: 162 / SCALE },
  Top265: { position: "absolute", top: 265 / SCALE },
  bottom15: { marginBottom: 15 / SCALE },
  width42: { width: 42 / SCALE },
  width72: { width: 72 / SCALE },
  width320: { width: 320 / SCALE },
  l8: { left: 8 / SCALE },
  l10: { left: 10 / SCALE },
  l30: { left: 30 / SCALE },
  l55: { position: "absolute", left: 55 / SCALE },
  l110: { left: 110 / SCALE, position: "absolute" },
  l153: { position: "absolute", left: 153 / SCALE },
  l195: { position: "absolute", left: 195 / SCALE },
  r100: { marginRight: 100 / SCALE },
  r1t1: { right: 1 / SCALE, position: "absolute", top: 1 / SCALE },
  r9t3: { right: 9 / SCALE, top: 3 / SCALE },
  h3: { marginHorizontal: 3 / SCALE },
  m2: { margin: 2 / SCALE },
  t40l61: { top: 40 / SCALE, left: 61 / SCALE },
  t225l20: { position: "absolute", top: 225 / SCALE, left: 20 / SCALE },
  t2l42: { top: 2 / SCALE, left: 42 / SCALE },
  w38r3: { width: 38 / SCALE, marginRight: 3 / SCALE },
  t1h3: { top: 1 / SCALE, marginHorizontal: 3 / SCALE },
  t32l13: { position: "absolute", top: 32 / SCALE, left: 13 / SCALE },
  t32r13: { position: "absolute", top: 32 / SCALE, right: 13 / SCALE },
  b6l27: { position: "absolute", bottom: 6 / SCALE, left: 27 / SCALE },
  b6r44: { position: "absolute", bottom: 6 / SCALE, right: 44 / SCALE },
  t2l66: { top: 2 / SCALE, left: 66 / SCALE },
  l9t209: { top: 9 / SCALE, left: 209 / SCALE },
  l100t10: { left: -100 / SCALE, marginTop: 10 / SCALE },
  l100t20: { left: -100 / SCALE, marginTop: 20 / SCALE },
  t200l20: { position: "absolute", top: 200 / SCALE, left: 20 / SCALE },
  t110r22: { top: 110 / SCALE, right: 22 / SCALE, position: "absolute" },
  t110l22: { top: 110 / SCALE, left: 22 / SCALE, position: "absolute" },
  l20t68: { position: "absolute", left: 20 / SCALE, top: 68 / SCALE },
  t10h40: { top: 10 / SCALE, height: 40 / SCALE },
  font10: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10 / SCALE,
    lineHeight: 12 / SCALE,
  },
  font13: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 13 / SCALE,
    lineHeight: 15 / SCALE,
  },
  font16: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16 / SCALE,
    lineHeight: 19 / SCALE,
  },
  font16thin: {
    fontFamily: "WorkSans-Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16 / SCALE,
    lineHeight: 19 / SCALE,
  },
  font16bold: {
    fontFamily: "WorkSans-Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16 / SCALE,
    lineHeight: 19 / SCALE,
  },
  font18: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18 / SCALE,
    lineHeight: 21 / SCALE,
  },
  font20: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20 / SCALE,
    lineHeight: 23 / SCALE,
  },
  font22: {
    fontSize: 22 / SCALE,
    lineHeight: 26 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
  },
  font24: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
  },
  titletitle: {
    height: 40 / SCALE,
    width: 375 / SCALE,
    left: 15 / SCALE,
    top: 5 / SCALE,
  },
  titleprogresspos: {
    position: "absolute",
    width: 182 / SCALE,
    height: 40 / SCALE,
  },
  titlefitpos: {
    position: "absolute",
    left: 180 / SCALE,
    width: 60 / SCALE,
    height: 40 / SCALE,
  },
  titleprogress: {
    fontFamily: "WorkSans-Regular",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 34 / SCALE,
    lineHeight: 40 / SCALE,
    textShadowColor: "rgba(66, 255, 255, 0.4)",
    textShadowOffset: { width: -1, height: -1 },
    textShadowRadius: 4,
  },
  titleprogressShadow: {
    fontFamily: "WorkSans-Regular",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 34 / SCALE,
    lineHeight: 40 / SCALE,
    textShadowColor: "rgba(255, 192, 66, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  titlefit: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    width: 60 / SCALE,
    fontSize: 34 / SCALE,
    lineHeight: 40 / SCALE,
  },
  calendarcontainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 13 / SCALE,
    paddingRight: 20 / SCALE,
    paddingBottom: 20 / SCALE,
    paddingLeft: 20 / SCALE,
  },
  calendartitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 2 / SCALE,
    paddingRight: 10 / SCALE,
    paddingBottom: 2 / SCALE,
    paddingLeft: 10 / SCALE,
    width: 260 / SCALE,
    height: 39 / SCALE,
    backgroundColor: "#464646",
    borderRadius: 10 / SCALE,
  },
  calendarmonth: {
    width: 116 / SCALE,
    height: 28 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color: "#FFFFFF",
    marginHorizontal: 10 / SCALE,
  },
  calendararrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 45 / SCALE,
    height: 35 / SCALE,
    backgroundColor: "#464646",
  },
  weektitlecontainer: {
    height: 38 / SCALE,
    width: 258 / SCALE,
    marginTop: 5 / SCALE,
    display: "flex",
    flexDirection: "row",
  },
  daycontainer: {
    width: 30 / SCALE,
    height: 30 / SCALE,
    borderRadius: 8 / SCALE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  daynumber: {
    fontFamily: "WorkSans-Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 15 / SCALE,
    lineHeight: 20 / SCALE,
    width: 20 / SCALE,
    height: 20 / SCALE,
    textAlign: "center",
    color: "#454545",
  },
  workoutspluscontainer: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 12 / SCALE,
  },
  workoutsplus: {
    width: 50 / SCALE,
    height: 50 / SCALE,
    resizeMode: "cover",
  },
  workouttrailertitle: {
    position: "absolute",
    width: 106 / SCALE,
    height: 18 / SCALE,
    left: 10 / SCALE,
    top: 10 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15 / SCALE,
    lineHeight: 18 / SCALE,
    color: "white",
    textAlign: "center",
  },
  workouttrailercolor: {
    position: "absolute",
    width: 100 / SCALE,
    height: 15 / SCALE,
    left: 188 / SCALE,
    top: 12 / SCALE,
    borderRadius: 7 / SCALE,
  },
  workouttrailerdumbbell: {
    position: "absolute",
    top: 48 / SCALE,
    left: 18 / SCALE,
    width: 20 / SCALE,
    height: 14 / SCALE,
  },
  workouttrailerexercises: {
    position: "absolute",
    width: 74 / SCALE,
    height: 14 / SCALE,
    left: 46 / SCALE,
    top: 48 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12 / SCALE,
    lineHeight: 14 / SCALE,
    color: "white",
    textAlign: "center",
  },
  workouttrailerrecent: {
    position: "absolute",
    width: 39 / SCALE,
    height: 14 / SCALE,
    left: 170 / SCALE,
    top: 48 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12 / SCALE,
    lineHeight: 14 / SCALE,
    color: "white",
  },
  workouttrailertimer: {
    position: "absolute",
    top: 48 / SCALE,
    left: 217 / SCALE,
    height: 14 / SCALE,
    width: 14 / SCALE,
  },
  workouttrailertime: {
    position: "absolute",
    width: 57 / SCALE,
    height: 14 / SCALE,
    left: 238 / SCALE,
    top: 48 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12 / SCALE,
    lineHeight: 14 / SCALE,
    color: "white",
  },
  physiquebmi: {
    position: "absolute",
    width: 38 / SCALE,
    height: 23 / SCALE,
    left: 15 / SCALE,
    top: 15 / SCALE,
  },
  physiquegradient: {
    width: 280 / SCALE,
    height: 10 / SCALE,
    borderRadius: 5 / SCALE,
    marginTop: 22 / SCALE,
  },
  physiquecircle: {
    position: "absolute",
    top: 162 / SCALE,
  },
  physiquebmitext: {
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14 / SCALE,
    lineHeight: 16 / SCALE,
    color: "white",
    marginTop: 3 / SCALE,
    textAlign: "center",
  },
  physiquebody: {
    left: 15 / SCALE,
    top: 200 / SCALE,
    width: 50 / SCALE,
    height: 23 / SCALE,
    position: "absolute",
  },
  physiquesettings: {
    position: "absolute",
    width: 30 / SCALE,
    height: 30 / SCALE,
    left: 251 / SCALE,
    top: 197 / SCALE,
  },
  measureword: {
    position: "absolute",
    height: 21 / SCALE,
    top: 10 / SCALE,
    left: 15 / SCALE,
    width: 130 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18 / SCALE,
    lineHeight: 21 / SCALE,
    color: "white",
  },
  measureinput: {
    position: "absolute",
    textAlign: "right",
    height: 40 / SCALE,
    right: 50 / SCALE,
    width: 80 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18 / SCALE,
    lineHeight: 21 / SCALE,
    color: "white",
  },
  measuremes: {
    position: "absolute",
    height: 21 / SCALE,
    right: 15 / SCALE,
    width: 30 / SCALE,
    top: 10 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18 / SCALE,
    lineHeight: 21 / SCALE,
    color: "white",
    textAlign: "center",
  },
  workoutpagebody: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: 375 / SCALE,
    marginTop: 20 / SCALE,
  },
  workoutpageprogress: {
    position: "absolute",
    left: 192 / SCALE,
    top: 196 / SCALE,
  },
  workoutpageexercise: {
    position: "absolute",
    top: 241 / SCALE,
  },
  workoutpageplusc: {
    position: "absolute",
    bottom: 13 / SCALE,
  },
  workoutpageplus: {
    width: 45 / SCALE,
    height: 45 / SCALE,
    resizeMode: "cover",
  },
  nametitle: {
    position: "absolute",
    width: 250 / SCALE,
    height: 40 / SCALE,
    left: 20 / SCALE,
    top: 10 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
    textAlign: "left",
    color: "white",
  },
  namepen: {
    position: "absolute",
    top: 24 / SCALE,
    width: 20 / SCALE,
    height: 20 / SCALE,
    left: 273 / SCALE,
  },
  namedumbbell: {
    position: "absolute",
    top: 108 / SCALE,
    left: 21 / SCALE,
    width: 20 / SCALE,
    height: 14 / SCALE,
  },
  nameexercises: {
    position: "absolute",
    width: 74 / SCALE,
    height: 14 / SCALE,
    left: 47 / SCALE,
    top: 108 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12 / SCALE,
    lineHeight: 14 / SCALE,
    color: "white",
    textAlign: "center",
  },
  namerecent: {
    position: "absolute",
    width: 39 / SCALE,
    height: 14 / SCALE,
    left: 172 / SCALE,
    top: 108 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12 / SCALE,
    lineHeight: 14 / SCALE,
    color: "white",
  },
  nametimer: {
    position: "absolute",
    top: 108 / SCALE,
    left: 217 / SCALE,
    height: 14 / SCALE,
    width: 14 / SCALE,
  },
  nametime: {
    position: "absolute",
    width: 57 / SCALE,
    height: 14 / SCALE,
    left: 237 / SCALE,
    top: 108 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12 / SCALE,
    lineHeight: 14 / SCALE,
    color: "white",
  },
  progresscanvas: {
    width: 110 / SCALE,
    height: 30 / SCALE,
  },
  progresstext: {
    position: "absolute",
    color: "white",
    fontFamily: "WorkSans-Bold",
    fontWeight: "700",
    fontSize: 16 / SCALE,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 2 / SCALE, height: 2 / SCALE },
    textShadowRadius: 6 / SCALE,
    height: 19 / SCALE,
    width: 87 / SCALE,
    lineHeight: 19 / SCALE,
    top: 5 / SCALE,
    paddingLeft: 1 / SCALE,
  },
  progresstext2: {
    textShadowColor: "rgba(255, 255, 255, 0.4)",
    textShadowOffset: { width: -2 / SCALE, height: -2 / SCALE },
  },
  exercisetrailername: {
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
  },
  exercisetrailerdots: {
    position: "absolute",
    width: 24 / SCALE,
    height: 24 / SCALE,
    left: 246 / SCALE,
    top: 3 / SCALE,
  },
  exercisetrailersets: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    position: "absolute",
    top: 28 / SCALE,
    left: 8 / SCALE,
    width: 264 / SCALE,
  },
  exercisepagetitle: {
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
  exercisepagepen: {
    position: "absolute",
    top: 10 / SCALE,
    width: 20 / SCALE,
    height: 20 / SCALE,
    left: 267 / SCALE,
  },
  counterwidth: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: 280 / SCALE,
  },
  countertextbuttons: {
    position: "absolute",
    width: 13 / SCALE,
    height: 28 / SCALE,
    top: 2 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
    color: "#FFFFFF",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
  },
  counternumber: {
    position: "absolute",
    width: 22 / SCALE,
    height: 23 / SCALE,
    left: 30 / SCALE,
    top: 6 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20 / SCALE,
    lineHeight: 23 / SCALE,
    color: "white",
    textAlign: "center",
  },
  setsetnum: {
    position: "absolute",
    width: 50 / SCALE,
    height: 24 / SCALE,
    top: 9 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 24 / SCALE,
    color: "white",
    textAlign: "center",
  },
  setrepstext: {
    position: "absolute",
    width: 35 / SCALE,
    height: 19 / SCALE,
    left: 68 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16 / SCALE,
    lineHeight: 19 / SCALE,
    color: "white",
  },
  setrepsinput: {
    width: 50 / SCALE,
    height: 40 / SCALE,
    textAlign: "center",
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 22 / SCALE,
    lineHeight: 26 / SCALE,
    color: "white",
    margin: 0,
    padding: 0,
  },
  setmestext: {
    position: "absolute",
    width: 25 / SCALE,
    height: 19 / SCALE,
    left: 164 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16 / SCALE,
    lineHeight: 19 / SCALE,
    color: "white",
    textAlign: "center",
  },
  setmesinput: {
    width: 60 / SCALE,
  },
  setdots: {
    position: "absolute",
    left: 256 / SCALE,
    transform: [{ rotate: "90deg" }],
  },
  progressiontextpos: {
    position: "absolute",
    width: 120 / SCALE,
    height: 23 / SCALE,
    left: 11 / SCALE,
    top: 8 / SCALE,
  },
  progressionborder: {
    borderWidth: 2 / SCALE,
    borderColor: "rgba(98, 255, 66, 0.5)",
    borderStyle: "solid",
    borderRadius: 12 / SCALE,
  },
  progressionpartop: {
    position: "absolute",
    width: 12 / SCALE,
    height: 26 / SCALE,
    left: 5 / SCALE,
    top: 1 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 22 / SCALE,
    lineHeight: 26 / SCALE,
    color: "#42FFFF",
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
  },
  progressionparttext: {
    position: "absolute",
    width: 20 / SCALE,
    height: 19 / SCALE,
    left: 21 / SCALE,
    top: 6 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16 / SCALE,
    lineHeight: 19 / SCALE,
    color: "white",
  },
  progressionpartrepstext: {
    position: "absolute",
    width: 31 / SCALE,
    height: 16 / SCALE,
    left: 13 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14 / SCALE,
    lineHeight: 16 / SCALE,
    color: "white",
  },
  progressionpartmestext: {
    position: "absolute",
    width: 21 / SCALE,
    height: 16 / SCALE,
    left: 124 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14 / SCALE,
    lineHeight: 16 / SCALE,
    textAlign: "center",
    color: "white",
  },
  toppos: {
    display: "flex",
    alignItems: "center",
    width: 350 / SCALE,
    height: 250 / SCALE,
    marginTop: 30 / SCALE,
  },
  toptitle: {
    position: "absolute",
    width: 250 / SCALE,
    height: 65 / SCALE,
    left: 48 / SCALE,
    top: -5 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 28 / SCALE,
    lineHeight: 33 / SCALE,
    color: "white",
    textAlign: "center",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 2,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
  },
  topamount: {
    bottom: 3 / SCALE,
    position: "absolute",
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20 / SCALE,
    lineHeight: 23 / SCALE,
    color: "white",
  },
  timerexercisetext: {
    position: "absolute",
    width: 120 / SCALE,
    height: 56 / SCALE,
    left: 102 / SCALE,
    top: 16 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24 / SCALE,
    lineHeight: 28 / SCALE,
    color: "white",
    textAlign: "center",
  },
  timerexercisetime: {
    position: "absolute",
    width: 51 / SCALE,
    height: 23 / SCALE,
    left: 136 / SCALE,
    top: 78 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20 / SCALE,
    lineHeight: 23 / SCALE,
    textAlign: "center",
    color: "#FFC042",
  },
  dotscontainer: {
    marginVertical: 20 / SCALE,
    height: 20 / SCALE,
    width: 340 / SCALE,
    display: "flex",
    justifyContent: "center",
  },
  dotscanvas: {
    width: 320 / SCALE,
    height: 10 / SCALE,
    marginHorizontal: 10 / SCALE,
  },
  dotnumber: {
    position: "absolute",
    width: 16 / SCALE,
    height: 18 / SCALE,
    left: 2 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15 / SCALE,
    lineHeight: 18 / SCALE,
    color: "white",
    textAlign: "center",
  },
  trainpagetext: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20 / SCALE,
  },
  trainpagetextstyle: {
    width: 103 / SCALE,
    height: 18 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15 / SCALE,
    lineHeight: 18 / SCALE,
    color: "white",
  },
  workouttitle: {
    width: 250 / SCALE,
    height: 40 / SCALE,
    fontSize: 24 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  workoutdumbbell: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    top: 45 / SCALE,
    width: 280 / SCALE,
  },
  workoutexercisetext: {
    left: 6 / SCALE,
    width: 72 / SCALE,
    fontSize: 12 / SCALE,
    color: "white",
    height: 14 / SCALE,
    lineHeight: 14 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    textAlign: "center",
  },
  workoutdurationtext: {
    left: 50 / SCALE,
    width: 51 / SCALE,
    fontSize: 12 / SCALE,
    color: "white",
    height: 14 / SCALE,
    lineHeight: 14 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    textAlign: "center",
  },
  workouttimer: { left: 57 / SCALE, width: 14 / SCALE, height: 14 / SCALE },
  workouttime: {
    left: 63 / SCALE,
    width: 60 / SCALE,
    fontSize: 12 / SCALE,
    color: "#FFC042",
    height: 14 / SCALE,
    lineHeight: 14 / SCALE,
    fontFamily: "WorkSans-SemiBold",
    textAlign: "center",
  },
};

export default styles;
