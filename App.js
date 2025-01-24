import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import HomeStay from "./components/HomeStay";
import DetailsScreen from "./components/details";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView>
        <HomeStay
          title="Heritage Stay Thamel"
          imageUri="https://th.bing.com/th/id/R.388a1bb9d0df175cf4de2a6c3ace9098?rik=u0rMT%2ftN0A4ZRg&riu=http%3a%2f%2ftourism.wildasia.org%2fwp-content%2fuploads%2f2013%2f04%2fDSC03919.jpg&ehk=vwGVfk738oH37NYPra93sv4Ze9iGA%2blpZPOLkHeUn1s%3d&risl=&pid=ImgRaw&r=0"
          distance="2 km"
          price="$120"
          rating="4.5"
          availableDate="Jan 25, 2025"
        />
        <HomeStay
          title="Boudha Eco Lodge"
          imageUri="https://irisholidays.com/keralatourism/wp-content/uploads/2020/02/best-homestays-in-kerala.jpg"
          distance="5 km"
          price="$90"
          rating="4.8"
          availableDate="Feb 1, 2025"
        />
        <HomeStay
          title="Heritage Stay Thamel"
          imageUri="https://th.bing.com/th/id/R.388a1bb9d0df175cf4de2a6c3ace9098?rik=u0rMT%2ftN0A4ZRg&riu=http%3a%2f%2ftourism.wildasia.org%2fwp-content%2fuploads%2f2013%2f04%2fDSC03919.jpg&ehk=vwGVfk738oH37NYPra93sv4Ze9iGA%2blpZPOLkHeUn1s%3d&risl=&pid=ImgRaw&r=0"
          distance="2 km"
          price="$120"
          rating="4.5"
          availableDate="Jan 25, 2025"
        />
        <HomeStay
          title="Boudha Eco Lodge"
          imageUri="https://irisholidays.com/keralatourism/wp-content/uploads/2020/02/best-homestays-in-kerala.jpg"
          distance="5 km"
          price="$90"
          rating="4.8"
          availableDate="Feb 1, 2025"
        />
      </ScrollView> */}
      <DetailsScreen
        title="Heritage Stay Thamel"
        imageUri="https://th.bing.com/th/id/R.388a1bb9d0df175cf4de2a6c3ace9098?rik=u0rMT%2ftN0A4ZRg&riu=http%3a%2f%2ftourism.wildasia.org%2fwp-content%2fuploads%2f2013%2f04%2fDSC03919.jpg&ehk=vwGVfk738oH37NYPra93sv4Ze9iGA%2blpZPOLkHeUn1s%3d&risl=&pid=ImgRaw&r=0"
        distance="2 km"
        price="$120"
        rating="4.5"
        availableDate="Jan 25, 2025"
        pricePerAdult={50}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
