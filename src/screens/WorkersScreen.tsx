import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  ImageSourcePropType,
} from "react-native";
import { Header } from "../components/Header";
import { WorkerCard } from "../components/WorkerCard";
import { Searchbar } from "react-native-paper";

export type Worker = {
  name: string;
  location: string;
  deliveryTime: string;
  distance: string;
  image: ImageSourcePropType;
  rating: number;
  reviewsAmount: number;
};

const data = [
  {
    name: "Juan Fernandez",
    location: "San Telmo, CABA",
    deliveryTime: "35 min",
    distance: "3.7 km",
    image: require("../assets/architect_1.jpg"),
    rating: 5,
    reviewsAmount: 30,
    id: 1,
  },
  {
    name: "Carlitos Sanchez",
    location: "Haedo, Buenos Aires",
    deliveryTime: "45 min",
    distance: "4.3 km",
    image: require("../assets/architect_2.webp"),
    rating: 4.5,
    reviewsAmount: 13,
    id: 2,
  },
  {
    name: "Martín Morales",
    location: "Ballester, Buenos Aires",
    deliveryTime: "25 min",
    distance: "3 km",
    image: require("../assets/architect_3.webp"),
    rating: 4,
    reviewsAmount: 14,
    id: 3,
  },
  {
    name: "Facundo Luna",
    location: "Tero Violado, Santa Fe",
    deliveryTime: "240 min",
    distance: "450 km",
    image: require("../assets/architect_4.jpg"),
    rating: 5,
    reviewsAmount: 52,
    id: 4,
  },
  {
    name: "Ignacio Castro",
    location: "Vicente Lopez, Buenos Aires",
    deliveryTime: "25 min",
    distance: "3.1 km",
    image: require("../assets/architect_5.jpg"),
    rating: 3.5,
    reviewsAmount: 17,
    id: 5,
  },
];

export const WorkersScreen = () => {
  const [search, setSearch] = useState("");
  const [workers, setWorkers] = useState([...data]);

  const searchFilterFunction = (text: string) => {
    setSearch(text);
    const filtered = data.filter((worker) => {
      return worker.name.includes(text) || worker.location.includes(text);
    });
    setWorkers(filtered);
  };

  const onClearSearch = () => {
    setWorkers([...data]);
    setSearch("");
  };

  return (
    <View style={styles.container}>
      <Header label="Architects nearby" />

      <Searchbar
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={searchFilterFunction}
        onClearIconPress={onClearSearch}
        value={search}
        mode="view"
        showDivider={false}
      />

      <StatusBar barStyle="dark-content" />

      <FlatList
        data={workers}
        renderItem={({ item }) => {
          return (
            <WorkerCard
              name={item.name}
              location={item.location}
              deliveryTime={item.deliveryTime}
              distance={item.distance}
              image={item.image}
              rating={item.rating}
              reviewsAmount={item.reviewsAmount}
            />
          );
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
  },
  searchBar: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
