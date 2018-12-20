import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button, Alert  } from 'react-native';

const data = [
  {key: 'Devin'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
];
export default class PlayScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      itemsCount: 2,
    }
  }
  static navigationOptions = {
    title: 'Single Category',
  };
  renderNewItem = () => {
    if (this.state.itemsCount < data.length) {
      this.setState((prevState) => ({ itemsCount: (prevState.itemsCount + 1) }));
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={data.slice(0, this.state.itemsCount)}
          keyExtractor={(item, index) => item.key}
          renderItem={({ item }) => <Text onPress={this.renderNewItem}>{item.key}</Text>}
        />
      </View>
    );
  }
}