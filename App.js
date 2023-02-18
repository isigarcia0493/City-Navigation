import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function ArtOfChicagoScreen({ navigation }) {
  const art = require('./assets/art.png');
  return (
    <View style={styles.view}>
      <Image source={art} style={styles.image} />
    </View>
  );
}

function MagnificentMileScreen({ navigation }) {
  const mile = require('./assets/mile.png');
  return (
    <View style={styles.view}>    
      <Image source={mile} style={styles.image} />
    </View>
  );
}

function NavyPierScreen({ navigation }) {
  const pier = require('./assets/pier.png');
  return (
    <View style={styles.view}>    
      <Image source={pier} style={styles.image} />
    </View>
  );
}

function WaterTowerScreen({ navigation }) {
  const water = require('./assets/water.png');
  return (
    <View style={styles.view}>    
      <Image source={water} style={styles.image} />
    </View>
  );
}

function WillisTowerScreen({ navigation }) {
  const willis = require('./assets/willis.png');
  return (
    <View style={styles.view}>    
      <Image source={willis} style={styles.image} />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Art Institute of Chicago">
        <Drawer.Screen name="Art Institue of Chicago" component={ArtOfChicagoScreen} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMileScreen} />
        <Drawer.Screen name="Navy Pier" component={NavyPierScreen} />
        <Drawer.Screen name="Water Tower" component={WaterTowerScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisTowerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  view:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    height: 480,
    width: 320,
  }
})
