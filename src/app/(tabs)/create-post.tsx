import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import ButtonSubmit from "~/src/components/button";

export default function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string>();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleCaptionChange = (newValue: string) => {
    setCaption(newValue);
  };

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);
  return (
    <View className="p-3 items-center flex-1">
      {/* Image picker */}

      {image ? (
        <Image
          source={{
            uri: image,
          }}
          className="w-52 aspect-[3/4] rounded-lg bg-slate-300"
        />
      ) : (
        <View className="w-52 aspect-[3/4] rounded-lg bg-slate-300"></View>
      )}
      <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
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
        <ButtonSubmit title="submit" onPress={() => {}} />
      </View>
    </View>
  );
}
