import React from 'react';
import { View, Text, Linking, TouchableNativeFeedback, TouchableHighlight } from 'react-native';
import { Button, Card, Divider } from 'react-native-elements';

const currency = (props) => {

    return (
        
  <Card
      featuredTitle={props.name}
      style={styles.featuredTitleStyle}>
        
          <Text style={{ marginBottom: 10, textAlign: 'center' }}>
            {props.name}
          </Text>

          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={styles.noteStyle}>{props.price}</Text>
          </View>


        </Card>


        );
}

const styles = {
    noteStyle: {
      margin: 5,
      fontStyle: 'italic',
      color: '#b2bec3',
      fontSize: 10,
      width: 70,
      textAlign: 'center' 
    },
    featuredTitleStyle: {
      marginHorizontal: 5,
      textShadowColor: '#00000f',
      textShadowOffset: { width: 3, height: 3 },
      textShadowRadius: 3,
      textAlign: 'center'
    }
  };

export default currency;

/*<View>
        <Text>{props.name}</Text>
        <Text>{props.price}</Text>
            </View> */