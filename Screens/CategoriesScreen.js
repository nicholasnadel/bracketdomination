import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button, Alert  } from 'react-native';

export default class CategoriesScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

componentDidMount(){
    return fetch('http://localhost:3000/api/v1/tournaments/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
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
      <View style={styles.categories}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text 
            onPress={() => navigate('Category')} 
            style={styles.bracketStyle}>{item.title}</Text>}
            keyExtractor={({id}, index) => id.toString()}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categories: {
    backgroundColor: '#fbf8f6',
    color: 'white',
    flex: 1,
    paddingTop: 100
  },
  bracketStyle: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
  },
});

