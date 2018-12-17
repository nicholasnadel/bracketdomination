import React from 'react';
import { FlatList, ActivityIndicator, Text, View, StyleSheet, Button, Alert  } from 'react-native';

export default class CategoryScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  static navigationOptions = {
    title: 'Single Category',
  };
componentDidMount(){
    return fetch('http://localhost:3000/api/v1/tournaments/1/')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.brackets,
          categoryTitle: responseJson.title,
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
    }
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
        <Text style={styles.title}>{this.state.categoryTitle}</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text 
            onPress={() => navigate('Home')} 
            style={styles.categoryStyle}>{item.title}</Text>}
            keyExtractor={({id}, index) => id.toString()}
          
        />
        <Button onPress={() => navigate('Home')} title="Play!"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    backgroundColor: 'white',
    color: 'black',
    justifyContent: 'center',
    flex: 1,
  },
  categoryStyle: {
    backgroundColor: '#1B72AC',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    height: 80,
    marginTop: 10,
    width: 100,
    borderWidth: 5,
    borderColor: 'black',
  },
  title: {
      fontSize: 28,
      color: 'black',
      textAlign: 'left',
      fontWeight: 'bold'
  },
  play: {
      backgroundColor: 'green',
      height: 100,
      width: 100,
  }
});

