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
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{this.state.categoryTitle}</Text>
        <View style={styles.bracketWrapper}>
        <FlatList
          numColumns={2}
          data={this.state.dataSource}
          renderItem={({item}) => <Text 
            onPress={() => navigate('Home')} 
            style={styles.bracketStyle}>{item.title}</Text>}
            keyExtractor={({id}, index) => id.toString()}
          
        />
        </View>
        <Button onPress={() => navigate('Play')} title="Play!"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fbf8f6',
    flex: 1,
    justifyContent: 'space-around',
  },
  bracketWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
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
    width: 100,
    borderWidth: 1,
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
  },
  bracketWrapper: {
      justifyContent: 'space-between',
  }
});

