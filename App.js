import React, { useState } from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { tweets } from "./tweets";
import TweetCard from "./src/components/TweetCard";

const MyList = () => {
  return (
    <FlashList
      data={tweets}
      contentContainerStyle={{backgroundColor: 'aliceblue', paddingVertical: 50}}
      renderItem={({item}) => <TweetCard {...item} />}
      estimatedItemSize={200}
      numColumns={1}
    />
  );
};

const MyFlat = () => {
  return (
    <FlatList
      data={tweets}
      contentContainerStyle={{backgroundColor: 'aliceblue', paddingVertical: 50}}
      renderItem={({item}) => <TweetCard {...item} />}
      numColumns={1}
    />
  );
};

export default function App() {
  return (
      <MyList />
      // <MyFlat />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
