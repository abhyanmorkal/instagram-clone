import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
type PropType = {
  post: {
    user: { username: string; image_url: string };
    image_url: string;
  };
};
export default function PostListItems({ post }: PropType) {
  return (
    <View className="bg-white">
      {/* Header*/}
      <View className="p-2 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className=" w-14 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <Image
        source={{ uri: post.image_url }}
        className=" w-full aspect-[4/3]"
      />
      {/* Icons */}
      <View className="flex-row gap-4 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        <Feather name="bookmark" size={20} style={{ marginLeft: "auto" }} />
      </View>
    </View>
  );
}
