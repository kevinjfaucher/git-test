// Start by importing necessary components
import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

export default class SimpleFlatListApp extends React.Component {

  // Define the data for our list
  data = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape',
    'Honeydew',
  ];

  // Define how each item in the list should be rendered
  renderItem = ({ item }) => (
      <Text style={styles.itemText}>
        {item}
      </Text>
  );

  render() {
    return (
        <View style={styles.container}>
          {/* This is the FlatList component which displays the list of items */}
          <FlatList
              data={this.data}                   // Provide the data that should be displayed
              renderItem={this.renderItem}       // Specify how to render each item
              keyExtractor={(item) => item}      // Specify a unique key for each item
          />
        </View>
    );
  }
}

// Define styles for our components
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
