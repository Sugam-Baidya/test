import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

const DetailsScreen = ({
  title,
  imageUri,
  distance,
  price,
  rating,
  availableDate,
  pricePerAdult,
}) => {
  const [guests, setGuests] = useState(1);
  const [grandTotal, setGrandTotal] = useState(pricePerAdult);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  const handleGuestChange = (value) => {
    const numberOfGuests = parseInt(value) || 0;
    setGuests(numberOfGuests);
    setGrandTotal(numberOfGuests * pricePerAdult);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
        <View style={styles.itenaries}>
          <Text style={styles.title}>Whats Included</Text>
          <Text style={styles.detail}>👨‍🍳 Cooking Classes</Text>
          <Text style={styles.detail}>🍽️ 3 Meals a Day</Text>
          <Text style={styles.detail}>🏠 Accomodation</Text>
          <Text style={styles.detail}>🚶‍♀️Community Excursions</Text>
        </View>
        <View style={styles.card2}>
          <View style={styles.dateRow}>
            {/* <View style={styles.dateBox}>
              <Text style={styles.label}>From</Text>
              <TextInput placeholder="Select Date" style={styles.input} />
            </View>
            <View style={styles.dateBox}>
              <Text style={styles.label}>To</Text>
              <TextInput placeholder="Select Date" style={styles.input} />
            </View> */}
            <View style={styles.dateContainer}>
              <View>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setShowStartPicker(true)}
                >
                  <Text style={styles.dateText}>
                    From: {startDate.toDateString()}
                  </Text>
                </TouchableOpacity>
                <DateTimePicker
                  value={startDate}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowStartPicker(false);
                    if (selectedDate) setStartDate(selectedDate);
                  }}
                />
              </View>

              <View>
                <TouchableOpacity
                  style={styles.datePicker}
                  onPress={() => setShowEndPicker(true)}
                >
                  <Text style={styles.dateText}>
                    To: {endDate.toDateString()}
                  </Text>
                </TouchableOpacity>
                <DateTimePicker
                  value={endDate}
                  mode="date"
                  display="default"
                  onChange={(event, selectedDate) => {
                    setShowEndPicker(false);
                    if (selectedDate) setEndDate(selectedDate);
                  }}
                />
              </View>
            </View>
          </View>

          <View style={styles.dropdown}>
            <Text style={styles.label}>Guests</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={String(guests)}
              onChangeText={handleGuestChange}
            />
          </View>

          <TouchableOpacity style={styles.activities}>
            <Text style={styles.addActivities}>Add Activities ↓</Text>
          </TouchableOpacity>

          <View style={styles.priceRow}>
            <Text style={styles.label}>Cost</Text>
            <Text style={styles.price}>${pricePerAdult}/adult</Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.label}>Grand Total</Text>
            <Text style={styles.price}>${grandTotal.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.inquireButton}>
            <Text style={styles.inquireText}>Book Now</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Prices are adjustable according to the number of attendees.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  itenaries: {
    paddingTop: 20,
  },
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  rating: {
    fontSize: 25,
    fontWeight: "600",
    color: "blue",
  },
  detailsContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "flex-start",
  },
  detail: {
    fontSize: 20,
    color: "#555",
    marginVertical: 2,
  },
  card2: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    margin: 16,
    paddingBottom: 20,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dateBox: {
    flex: 1,
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    padding: 8,
  },
  dropdown: {
    marginBottom: 16,
  },
  activities: {
    marginBottom: 16,
  },
  addActivities: {
    color: "#007BFF",
    fontSize: 16,
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  inquireButton: {
    backgroundColor: "#FFA500",
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },
  inquireText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 16,
    fontSize: 12,
    color: "#555",
    textAlign: "center",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default DetailsScreen;
