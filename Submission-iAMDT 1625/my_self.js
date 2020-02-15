import React from 'react';
import { StyleSheet, Text, View ,Button, Alert,Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <Text style={styles.bigBlue}>My Self</Text>
      
<Image source={require('./my.jpg')}  style={{width: 180, height: 140}} />
      <Button color= "#696969"
          title="View"
          onPress={() => Alert.alert('Welcome to Go Getters Team')}
        />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
    justifyContent: 'center',
  },
 bigBlue: {
    color: '#696969',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 10,
  },
});
