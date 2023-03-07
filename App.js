import { StatusBar } from 'expo-status-bar';
import React, { useState , useRef} from 'react';
import Header from './Header';
import { StyleSheet, Text, View ,TouchableOpacity,Animated,Image, } from 'react-native';
import Login from './Login';


export default function App({ navigation }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(-200)).current;

  const toggleSidebar = () => {
    const toValue = isSidebarOpen ? -200 : 0;
    Animated.spring(sidebarAnimation, {
      toValue,
      useNativeDriver: false
    }).start();
    setIsSidebarOpen(!isSidebarOpen);
  };

  

  return (
  <View>
    <Login/>
  </View>
  );
}
