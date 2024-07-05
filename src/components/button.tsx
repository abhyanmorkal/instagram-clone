import { Text, Pressable } from "react-native";
import React from "react";

type PropType = {
  title: string;
  onPress: () => void;
};
export default function ButtonSubmit({ title, onPress }: PropType) {
  return (
    <Pressable
      onPress={onPress}
      className=" bg-blue-500 p-4 items-center w-full  rounded-lg"
    >
      <Text className="text-white font-semibold">{title}</Text>
    </Pressable>
  );
}
