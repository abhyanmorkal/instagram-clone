import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import PostListItems from "~/src/components/postListItems";

import data from "~/assets/data/post.json";

export default function TabsIndex() {
  return (
    <>
      {/* <PostListItems post={data[0]} />
      <PostListItems post={data[1]} /> */}

      <FlatList
        data={data}
        contentContainerStyle={{ maxWidth: 512, gap: 10, width: "100%" }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostListItems post={item} />}
      />
    </>
  );
}
