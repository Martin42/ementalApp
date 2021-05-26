
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet} from "react-native";
import { auth, db } from '../../Firebase';

function Homepage(){

const getData = () => {
    db
        .collection('users')
        .doc(auth.currentUser.uid)
        .get();
}

return(
    <View style={styles.container}>
        <StatusBar style={'auto'} />
        <Text>Hello</Text>
        
    </View>
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

});

export default Homepage;


// resolução questionário inicial -> renderizar a primeira vez e passar uma variavel a confirmar o preenchimento do questionario
// no inicio do código implementar um if que apenas executa o código se o user ainda não tiver respondido, caso contrário navigation.replace('pagina seguinte') 