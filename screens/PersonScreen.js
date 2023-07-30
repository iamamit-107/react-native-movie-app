import { View, Text, Dimensions, Platform, TouchableOpacity, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import tailwind from "twrnc";
import { useState } from "react";
import { style, theme } from "../theme";
import { useNavigation } from "@react-navigation/native";
import MovieLists from "../components/MovieLists";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS === "ios";
const verticalMargin = ios ? "" : "my-3";

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <ScrollView style={tailwind`bg-neutral-900 flex-1`}>
      <SafeAreaView style={tailwind`z-20 flex-row px-4 justify-between items-center w-full ${verticalMargin}`}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ ...style.background, borderRadius: 12, padding: 3 }}>
          <ChevronLeftIcon size={28} strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
          <HeartIcon size={35} strokeWidth={2} color={isFavorite ? theme.background : "white"} />
        </TouchableOpacity>
      </SafeAreaView>

      <View style={tailwind`flex-row justify-center shadow-lg`}>
        <View style={tailwind`overflow-hidden items-center rounded-full border-2 w-72 h-72 border-neutral-400`}>
          <Image source={require("../assets/icon.png")} style={{ width: width * 0.8, height: height * 0.43 }} />
        </View>
      </View>

      <View style={tailwind`mt-6`}>
        <Text style={tailwind`text-white text-center text-3xl font-bold`}>Keanu Reeves</Text>
        <Text style={tailwind`text-neutral-500 text-center text-base font-bold`}>London, United Kingdom</Text>
      </View>

      <View style={tailwind`flex-row justify-between mx-3 bg-neutral-700 p-4 rounded-2xl mt-6`}>
        <View style={tailwind`items-center border-r-2 px-2 border-r-neutral-400`}>
          <Text style={tailwind`text-white font-semibold`}>Gender</Text>
          <Text style={tailwind`text-neutral-400 text-sm`}>Male</Text>
        </View>
        <View style={tailwind`items-center border-r-2 px-2 border-r-neutral-400`}>
          <Text style={tailwind`text-white font-semibold`}>Birthday</Text>
          <Text style={tailwind`text-neutral-400 text-sm`}>1964-09-02</Text>
        </View>
        <View style={tailwind`items-center border-r-2 px-2 border-r-neutral-400`}>
          <Text style={tailwind`text-white font-semibold`}>Known For</Text>
          <Text style={tailwind`text-neutral-400 text-sm`}>Acting</Text>
        </View>
        <View style={tailwind`items-center px-2`}>
          <Text style={tailwind`text-white font-semibold`}>Popularity</Text>
          <Text style={tailwind`text-neutral-400 text-sm`}>65.87</Text>
        </View>
      </View>

      <View style={tailwind`my-6 mx-4 gap-y-2`}>
        <Text style={tailwind`text-white text-lg`}>Biography</Text>
        <Text style={tailwind`text-neutral-400`}>
          Keanu Charles Reeves (/kiˈɑːnuː/ kee-AH-noo;[4][5][6] born September 2, 1964) is a Canadian[b] actor. Born in Beirut and raised in
          Toronto, Reeves began acting in theatre productions and in television films before making his feature film debut in Youngblood
          (1986). He had his breakthrough role in the science fiction comedy Bill & Ted's Excellent Adventure (1989), and he reprised his
          role in its sequels. He gained praise for playing a hustler in the independent drama My Own Private Idaho (1991) and established
          himself as an action hero with leading roles in Point Break (1991) and Speed (1994).
        </Text>
      </View>

      <MovieLists hideSeeAll title={"Movies"} data={personMovies} />
    </ScrollView>
  );
}
