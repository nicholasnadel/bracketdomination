import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button, Alert  } from 'react-native';

export default class CategoryScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

componentDidMount(){
    return fetch('http://localhost:3000/api/v1/tournaments/1/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.brackets,
        }, function(){

        });
        console.log(this.state.dataSource);

      })
      .catch((error) =>{
        console.error(error);
      });
  }

postRequest() {
  fetch('http://localhost:3000/api/v1/tournaments/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: 'yourValue',
      secondParam: 'yourOtherValue',
    }),
  });
}

  render(){
    const {navigate} = this.props.navigation;

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.hello}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text 
            onPress={() => navigate('Home')} 
            style={styles.categoryStyle}>{item.title}</Text>}
            keyExtractor={({id}, index) => id.toString()}
          
        />
        <Button onPress={() => { Alert.alert('You tapped the button!'); }} title="Press Me"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    paddingTop: 100
  },
  categoryStyle: {
    backgroundColor: '#1B72AC',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    marginTop: 10,
    width: 100
  }
});

