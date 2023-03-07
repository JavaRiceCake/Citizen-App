
import React, { useState , useRef} from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Animated,Image, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SidebarMenu from './SidebarMenu';

export default function Header() {
 


  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./assets/logo.png')} />
        <Text style={styles.title}>Your one-stop-app for disaster preparedness</Text>
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#333',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor:'#6495ed'
  },
  
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  
});
