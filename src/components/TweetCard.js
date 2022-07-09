import { View, Text, Image, StyleSheet } from "react-native";

export default function TweetCard({
    id,
    author,
    fullText
}) {
  return(
    <View style={styles.singleItem}>
      <View style={styles.row}>
        <Image source={{uri: author.avatar}} style={styles.avatar} />
        <View style={styles.tweetContent}>
          <Text style={styles.description}>{fullText}</Text>
        </View>
      </View>
    </View>
  )
}  

const styles = StyleSheet.create({
  singleItem: {
    margin: 8,
    padding: 8,
    minHeight: 44,
    flex: 1,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    backgroundColor: 'ivory'
  },
  description: {
    fontSize: 14,
    color: 'darkslategray',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 16,
    marginTop: 4
  },
  row: {
    flexDirection: 'row'
  },
  tweetContent: {
    flexShrink: 1,
    flexGrow: 1
  }
})