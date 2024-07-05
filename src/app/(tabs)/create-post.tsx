import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState } from "react";

export default function CreatePost() {
  const [caption, setCaption] = useState("");

  const handleCaptionChange = (newValue: string) => {
    setCaption(newValue);
  };

  return (
    <View className="p-3 items-center flex-1">
      {/* Image picker */}

      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
      />
      <Text onPress={() => {}} className="text-blue-500 font-semibold m-5">
        Change
      </Text>
      {/* caption  */}
      <TextInput
        value={caption}
        onChangeText={handleCaptionChange}
        placeholder="What's on your mind"
        className="w-full p-3"
      />
      {/* button */}
      <View style={{ marginTop: "auto", width: "100%", marginBottom: 90 }}>
        <Pressable className=" bg-blue-500 p-4 items-center w-full  rounded-lg">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
}
