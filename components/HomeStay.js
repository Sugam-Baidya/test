import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HeritageStayCard = ({
  title,
  imageUri,
  distance,
  price,
  rating,
  availableDate,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.rating}>⭐ {rating}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detail}>📍 Distance: {distance}</Text>
        <Text style={styles.detail}>💰 Price: {price}/night</Text>
        <Text style={styles.detail}>📅 Available: {availableDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    margin: 10,
    padding: 15,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFD700",
  },
  detailsContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "flex-start",
  },
  detail: {
    fontSize: 14,
    color: "#555",
    marginVertical: 2,
  },
});

export default HeritageStayCard;
