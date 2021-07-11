import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import { auth } from '../Firebase';



function Login({navigation}){

  const [LoginEmail, setLoginEmail] = useState('');
  const [LoginPassword, setLoginPassword] = useState('');

  const signIn = () => {
    auth
        .signInWithEmailAndPassword(LoginEmail, LoginPassword)
        .then(() => {
          navigation.replace('Homepage');
        })
        .catch((error) => alert(error.message));
    
  };


 function forgotPassword(){

  if (LoginEmail == '') {
    alert('Por favor indique o seu email')
  } else {
    auth.sendPasswordResetEmail(LoginEmail)
    .then(function () {
      alert('Por favor verifique a sua caixa de correio')
    }).catch(function (e) {
      console.log(e)
    })
  }

  
  }


  return (
    // Front End Concluido 
    
    <ScrollView contentContainerStyle={styles.container}>

      <Image source={require('../images/relief.png')} style={styles.relief} />

      <View style={styles.container2} >

        <TextInput 
          placeholder='Email'
          placeholderTextColor= '#D7D7D7'
          style={styles.inputEmail}
          onChangeText={LoginEmail => setLoginEmail(LoginEmail)}
          keyboardType='email-address'
        />
                    
        <TextInput 
          secureTextEntry={true}
          placeholder='Palavra-Passe'
          placeholderTextColor= '#D7D7D7'
          style={styles.inputPassword}
          onChangeText={LoginPassword => setLoginPassword(LoginPassword)}
        />

        <TouchableOpacity
          onPress={() => forgotPassword()}
        >
          <Text style={styles.subtitle2}> Esqueceste-te da palavra-passe? </Text>
        </TouchableOpacity>

      </View>

        <View style={styles.container3}>
  
    
          <TouchableOpacity 
            style={styles.entrar}
            onPress={() => signIn()}
            >
              <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.subtitle} > Ainda não tens conta?  <Text 
              style={styles.link}
              onPress={() => navigation.navigate('Selecionar')}> 
                Regista-te 
            </Text>  
            
          </Text>

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  container2: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  container3: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

    relief: {
    marginTop: '15%',
    width: 200,
    resizeMode: 'contain',
    flex: 1,
      
  },
  
  loginText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18, 
    marginTop:'1%',
  },

  subtitle: {
      fontWeight: 'bold',
      color: '#D7D7D7',
      textAlign: 'center',
      marginTop: '6%',
      fontSize: 15,
  },

  subtitle2: {
      marginTop: '5%',
      fontWeight: 'bold',
      color: '#D7D7D7',
      textAlign: 'center',
      fontSize: 15,
  },


  link: {
    color: '#6578B3',
    textDecorationLine: 'none',
    textDecorationColor: '#6578B3',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',      
  },

  inputEmail: {
      borderColor: '#D7D7D7',
      borderBottomWidth: 1,
      padding: 5,
      fontSize: 15,
      fontWeight: 'bold',
      color: 'black',
      width: '80%',
      
    
  },

  inputPassword: {
    borderColor: '#D7D7D7',
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: '3%',
    width: '80%',
  }, 

  entrar: {
    marginTop: '10%',
    borderColor: '#6578B3',
    borderStyle: 'solid',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#6578B3',
    width: '80%',
    height: 50,
    padding: '2%',
  
  }
  
  
  
  });

  export default Login;