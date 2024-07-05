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
        contentContainerClassName="gap-3"
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <PostListItems post={item} />}
      />
    </>
  );
}
