import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import ButtonSubmit from "~/src/components/button";

export default function Profile() {
  const [image, setImage] = useState<string>();
  const [userName, setUserName] = useState<string>();

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

  return (
    <View className="  p-3 flex-1">
      {/* Avatar image picker */}
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          className="w-52 aspect-[1/1] rounded-full bg-slate-300 self-center"
        />
      ) : (
        <View className="w-52 aspect-[1/1] rounded-full bg-slate-300 self-center"></View>
      )}
      <Text
        onPress={pickImage}
        className="text-blue-500 font-semibold m-5 self-center"
      >
        Change
      </Text>

      {/* form */}
      <Text className="mb-2 text-gray-500 font-semibold">User Name</Text>
      <TextInput
        placeholder="User name"
        value={userName}
        onChangeText={setUserName}
        className="border border-gray-300 p-3 rounded-md w-full"
      />
      {/* button */}
      <View
        style={{ marginTop: "auto", width: "100%", marginBottom: 90, gap: 5 }}
      >
        <ButtonSubmit title="Update Profile" onPress={() => {}} />
        <ButtonSubmit title="Sign Out" onPress={() => {}} />
      </View>
    </View>
  );
}
