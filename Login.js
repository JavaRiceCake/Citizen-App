import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';



const Login = ()=>{
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (value) => {
    setUsername(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    // sign-in 
  };

  const handleSignUp = () => {
    // sign-up 
  };

  const handleContinueGuest = () => {
   
  };

  const handleForgotPassword = () => {
    // Implement forgot password 
  };

  return(
    <View style={styles.container}>
      <Image source={require('./assets/defensys_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Let's Sign You In</Text>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Username</Text>
        <TextInput
          style={styles.formInput}
          value={username}
          onChangeText={handleUsernameChange}
        />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.formInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity onPress={handleShowPassword} style={styles.eyeIcon}>
            <Text>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formLinks}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordLink}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formButtons}>

          <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
            <Text style={styles.btnFormText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleContinueGuest} style={styles.continueGuestButton}>
          <Text style={styles.btnFormText} >Continue as Guest</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
            <Text>Don't Have Account?<Text style={styles.SignUpbtnText}> Sign Up</Text></Text>
          </TouchableOpacity>
         
        </View>
      </View>
  </View>


  );

}

const styles = StyleSheet.create({
  container: {
  flelx :1,
  flexWrap:'nowrap',
  alignItems:'center',
  justifyContent:"center",
  backgroundColor:'#f0f8ff',
  height:800,
  },
  logo: {
    width: 120,
    height: 80,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    
  },
  form: {
 
    width: '80%',
    height:'60%',
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  formLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  formInput: {
    borderWidth: 1,
    borderColor:'#ccc',
    borderRadius:4,
    padding:8,
    marginBottom:16,
    width:'100%',
    
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    marginLeft: -24,
    height:35,
  },
  forgotPasswordLink:{
    fontSize: 14,
    color: '#007aff',
  },
  formButtons: {
    marginTop: 16,
    flex:1,
    justifyContent:'space-evenly',
   
   
  },

  continueGuestButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 4,
    backgroundColor: '#ffa07a',
   

  },
  
  signInButton: {
    backgroundColor: '#007aff',
    padding: 10,
    borderRadius: 4,
   
  },
  btnFormText:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:14,
    textAlign:'center',
  },
  SignUpbtnText:{
    textDecorationLine:'underline',
    color:'#007aff',
  },
  
  

});


export default Login;