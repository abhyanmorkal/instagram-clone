import { View, Text } from "react-native";
import React from "react";
import data from "~/assets/data/post.json";

const post1 = data[0];
export default function TabsIndex() {
  console.log(post1);

  return (
    <View className=" flex-1 bg-purple-400">
      <Text className=" font-bold text-xl text-blue-500">TabsIndex</Text>
    </View>
  );
}
