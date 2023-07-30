import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import tailwind from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { style, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "../components/Cast";
import MovieLists from "../components/MovieLists";

const { width, height } = Dimensions.get("window");

export default function MovieScreen() {
  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4, 5]);
  const [similar, setSimilar] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {}, []);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={tailwind`flex-1 bg-neutral-900 pt-2`}>
      <View style={tailwind`w-full`}>
        <SafeAreaView style={tailwind`absolute z-20 flex-row px-4 justify-between items-center w-full`}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ ...style.background, borderRadius: 12, padding: 3 }}>
            <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <HeartIcon size={35} strokeWidth={2} color={isFavorite ? theme.background : "white"} />
          </TouchableOpacity>
        </SafeAreaView>

        <View>
          <Image source={require("../assets/icon.png")} style={{ width, height: height * 0.55 }} />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.7)", "rgba(23,23,23, 1)"]}
            style={{ width, height: height * 0.4, position: "absolute", bottom: 0 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
          />
        </View>
      </View>

      {/* Movie Details */}
      <View style={tailwind`-mt-10`}>
        <Text style={tailwind`text-white text-center text-3xl font-bold mb-4`}>Ant-Man and the Wasp: Quantumania</Text>
        <Text style={tailwind`text-neutral-400 text-center text-base font-semibold`}>Release . 2020 . 170 min</Text>
        <View style={tailwind`flex-row justify-center mx-4 gap-x-2`}>
          <Text style={tailwind`text-neutral-400 text-center text-base font-semibold`}>Action .</Text>
          <Text style={tailwind`text-neutral-400 text-center text-base font-semibold`}>Thriller .</Text>
          <Text style={tailwind`text-neutral-400 text-center text-base font-semibold`}>Comedy</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={tailwind`text-neutral-400 mx-4 text-justify mt-4`}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
        Extremes of Good and Evil) by Cicero, written in
      </Text>

      <Cast cast={cast} navigation={navigation} />

      <MovieLists title="Similar Movies" data={similar} hideSeeAll />
    </ScrollView>
  );
}
