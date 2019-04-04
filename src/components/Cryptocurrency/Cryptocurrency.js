import React from 'react';
import { View, Text, Linking, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import { Button, Card, Divider } from 'react-native-elements';

const currency = (props) => {

    return (
        
  <View style = {styles.card}>
          <Text style={styles.name}>
            {props.name}
          </Text>

          <Divider style={{ backgroundColor: '#FF0057' }} />
          
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.price}>{props.price}</Text>
          </View>
          
        </View>


        );
}

const styles = {
    price: {
      margin: 5,
      fontStyle: 'italic',
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      width: 300,
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
      textShadowColor: '#00000f',
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 3,
      textAlign: 'center',
      backgroundColor: '#262626',
      marginTop: 20,
      padding: 8,
      borderRadius: 2
    }
  };

export default currency;

/*<View>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
            </View> 
            
            
            featuredTitle={props.name}
      image={{
        uri: 'http://jmd.im/black_wallpapers/I/desktop/BLACK_I_desktop-1.jpg'
      }}
      featuredTitleStyle = {styles.card}>
      */