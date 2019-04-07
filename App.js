import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, RefreshControl } from 'react-native';
import axios from 'axios';
import Cryptocurrency from './src/components/Cryptocurrency/Cryptocurrency';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    // array to store fetched data
    this.state = {
      cryptos: [],
      refreshing: false
    };
  }

  
  _onRefresh = () => {
    this.setState({refreshing: true});
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,IOT,LTC,XRP,BCH&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        // store fetched data to cryptos
        this.setState({cryptos: cryptos, refreshing: false});
      })
  }


  componentDidMount() {
    //fetch data
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,IOT,LTC,XRP,BCH&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        // store fetched data to cryptos
        this.setState({cryptos: cryptos});
      })
  }

  render() {
    return (
      <ScrollView
      style = {{backgroundColor: '#353535'}}
      refreshControl={
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      }
      >
        <View style = {styles.container}>
          <Text style = {{fontWeight: "bold", fontSize: 30, color: 'white', fontFamily: 'CourierNewPS-BoldMT'}}>Coin Watch</Text>
     
          {Object.keys(this.state.cryptos).map((key) => (//within the view, print out the objects
            <Cryptocurrency
                name = {key} //name of cryptocurrency
                price = {formatter.format(this.state.cryptos[key].USD)} //price it's worth
                key = {key} // each child should have a key
                />
          ))}
        </View>
      </ScrollView>
    );
  }
}

// formats the prices
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

// {Object.keys(this.state.cryptos).map((key) => (
//   <View key = {key}>
//     <Text style={styles.left}>{key}</Text>
//     <Text>{formatter.format(this.state.cryptos[key].USD)}</Text>
//   </View>
// ))}