import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

export default class SimpleFlatListApp extends React.Component {
  render() {
    // Inline data for the list.
    const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Honeydew'];

    return (
        <View style={styles.container}>
          <FlatList
              data={data}
              // Inline renderItem function to specify how to display each item
              renderItem={({ item }) => <Text style={styles.itemText}>{item}</Text>}
              // Providing a unique key for each item
              keyExtractor={(item) => item}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
  itemText: {
    fontSize: 20,
    marginVertical: 10,
  },
});
