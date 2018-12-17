import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Bracket Domination',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      <Button
        title="Check Out Categories"
        onPress={() => navigate('Categories', {name: 'Jane'})}
      />
      <Button
        title="Or Create Your Own!"
        onPress={() => navigate('Categories', {name: 'Jane'})}
      />
        </View>
    );
  }
}
const styles = StyleSheet.create({

});

export default HomeScreen;