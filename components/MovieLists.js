import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";
import { style } from "../theme";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function MovieLists({ title, data, hideSeeAll = false }) {
  const navigation = useNavigation();

  return (
    <View style={tailwind`mt-2 mb-4 mx-4`}>
      <View style={tailwind`flex-row justify-between items-center`}>
        <Text style={tailwind`text-white text-xl`}>{title}</Text>
        {hideSeeAll ? (
          <></>
        ) : (
          <TouchableOpacity>
            <Text style={style.text}>See All</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Movie row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => navigation.push("Movie", item)}>
            <View style={tailwind`mr-4 mt-2`}>
              <Image source={require("../assets/icon.png")} style={{ width: width * 0.33, height: height * 0.22, borderRadius: 16 }} />
              <Text style={tailwind`text-white`}>Movie Name</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
