import React from "react";
import { StyleSheet, View, StatusBar, FlatList } from "react-native";
import { Header } from "../components/Header";
import { WorkerCard } from "../components/WorkerCard";

const workers = [
  {
    name: "Juan Fernandez",
    categories: "San Telmo, CABA",
    deliveryTime: "35 min",
    distance: "3.7 km",
    image: require("../assets/architect_1.jpg"),
    rating: 5,
    reviewsAmount: 30,
    id: 1,
  },
  {
    name: "Carlitos Sanchez",
    categories: "Haedo, Buenos Aires",
    deliveryTime: "45 min",
    distance: "4.3 km",
    image: require("../assets/architect_2.webp"),
    rating: 4.5,
    reviewsAmount: 13,
    id: 2,
  },
  {
    name: "Martín Morales",
    categories: "Ballester, Buenos Aires",
    deliveryTime: "25 min",
    distance: "3 km",
    image: require("../assets/architect_3.webp"),
    rating: 4,
    reviewsAmount: 14,
    id: 3,
  },
  {
    name: "Facundo Luna",
    categories: "Tero Violado, Santa Fe",
    deliveryTime: "240 min",
    distance: "450 km",
    image: require("../assets/architect_4.jpg"),
    rating: 5,
    reviewsAmount: 52,
    id: 4,
  },
  {
    name: "Ignacio Castro",
    categories: "Vicente Lopez, Buenos Aires",
    deliveryTime: "25 min",
    distance: "3.1 km",
    image: require("../assets/architect_5.jpg"),
    rating: 3.5,
    reviewsAmount: 17,
    id: 5,
  },
];

export const WorkersScreen = () => {
  return (
    <View style={styles.container}>
      <Header label="Architects nearby" />
      {/* <Card /> */}
      <StatusBar barStyle="dark-content" />

      <FlatList
        data={workers}
        renderItem={({ item }) => {
          return <WorkerCard info={item} />;
        }}
        keyExtractor={(worker) => worker.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DB2BF",
    alignItems: "center",
    // justifyContent: 'center',
  },
});
