import { Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tailwind from "twrnc";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { style } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import { useState } from "react";
import MovieLists from "../components/MovieLists";

const ios = Platform.OS == "ios";

export default function HomeScreen() {
  const [trendingMovies, setTrendingMovies] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);

  return (
    <View style={tailwind`flex-1 bg-neutral-900`}>
      {/* Search bar and logo */}
      <SafeAreaView style={tailwind`${ios ? "-mb-2" : "mt-3"}`}>
        <StatusBar style="light" />
        <View style={tailwind`flex-row justify-between items-center mx-4`}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={tailwind`text-white text-3xl font-bold`}>
            <Text style={style.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10 }}>
        {/* Trending movie carousel */}
        <TrendingMovies data={trendingMovies} />

        <MovieLists title={"Upcoming"} data={upcoming} />
        <MovieLists title={"Top Rated"} data={topRated} />
      </ScrollView>
    </View>
  );
}
