import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import Cryptocurrency from './src/components/Cryptocurrency/Cryptocurrency';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  

  // set the data returned to cryptos
  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,EOS,IOT,LTC,XRP,BCH&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }

  render() {
    return (
      <View style = {styles.container}>
      <Text style = {{fontWeight: "bold", fontSize: 30, color: 'white', fontFamily: 'CourierNewPS-BoldMT'}}>Coin Watch</Text>
     
      {Object.keys(this.state.cryptos).map((key) => (
            <Cryptocurrency
                name = {key}
                price = {formatter.format(this.state.cryptos[key].USD)}
                />
            ))}
      
      </View>
    );
  }
}

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