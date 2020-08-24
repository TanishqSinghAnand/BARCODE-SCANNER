import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import ScanScreen from './screens/ScanScreen';
import {Header} from 'react-native-elements'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'BarCode-Scanner',
            style: { color: '#fff', fontSize:20  , flex:1 },
          }}
        />
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg',
          }}
        />
        <ScanScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 72,
    marginTop:150,
  },
});

