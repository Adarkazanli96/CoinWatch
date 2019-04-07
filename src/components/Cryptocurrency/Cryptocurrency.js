import React from 'react';
import {View, Text, Linking, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import { Button, Card, Divider } from 'react-native-elements';

const currency = (props) => {

  return (
    <TouchableHighlight
        useForeground
        onPress={() => Linking.openURL(props.url)}
        style = {styles.card}
      >
        <View>
          <Text style={styles.name}>
              {props.name}
          </Text>
          <Divider style={{ backgroundColor: '#FF0057' }} />
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.price}>{props.price}</Text>
          </View>
        </View>
      </TouchableHighlight>    

  );
}

const styles = {
    price: {
      margin: 5,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: 15,
      textAlign: 'center',
      width: 90,
      color: 'white'
    },
    name: {
      color: '#FF0057',
      marginBottom: 10,
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
    },
    card: {
      marginHorizontal: 5,
      backgroundColor: '#262626',
      marginTop: 20,
      padding: 8,
      borderRadius: 2
    }
  };

export default currency;