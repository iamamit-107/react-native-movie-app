import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import tailwind from "twrnc";

export default function Cast({ cast, navigation }) {
  return (
    <View style={tailwind`my-6`}>
      <Text style={tailwind`text-white mx-4 text-lg mb-4`}>Cast</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
        {cast &&
          cast.map((person, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("Person", person)}
              style={tailwind`w-[80px] mr-4 items-center truncate`}
            >
              <Image source={require("../assets/icon.png")} style={{ width: 50, height: 50, borderRadius: 50, marginBottom: 10 }} />
              <Text style={tailwind`text-neutral-400 `}>John</Text>
              <Text style={tailwind`w-[70px] text-neutral-400`}>Real Name</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}
