import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };

  return (
    <View style={tailwind`mt-4 mb-8`}>
      <Text style={tailwind`text-xl mx-4 text-white mb-4`}>Trending</Text>

      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick} />}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image source={require("../assets/icon.png")} style={{ width: width * 0.6, height: height * 0.4, borderRadius: 16 }} />
    </TouchableWithoutFeedback>
  );
};
