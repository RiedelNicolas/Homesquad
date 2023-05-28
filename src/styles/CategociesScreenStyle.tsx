import { StyleSheet, Dimensions } from "react-native";

export const backgroundColor = "#9DB2BF";

const categorySize = 80;
const textSize = 18;

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: backgroundColor,
    flex: 1,
  },
  categoriesContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryContainer: {
    width: Dimensions.get("window").width * 0.3,
  },
  categoryIcon: {
    backgroundColor: "#0f172a",
    width: categorySize,
    height: categorySize,
    borderRadius: categorySize / 2,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  categoryText: {
    color: "#0f172a",
    fontSize: textSize,
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "bold",
  },
});
