import { StyleSheet, Text, Image, View } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Info2({route, navigation}){

    console.log(route.params.status);

    if (route.params.status == 0){

    return (
        <View style={styles.container}>
     
                <View style={styles.container}>
                    <Text style={styles.title}>A Ferida Sara</Text>

                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.</Text>
                
                    <Image 
                        source={require('../../images/Sara.png')}
                        style={styles.sara}
                    
                    />
                </View>

                <View style={styles.container2}>
                    <Text style={styles.title2}>Um Marco na Vida</Text>

                    <Text style={styles.text}> Em breve!</Text>
              
                    <TouchableOpacity
                     onPress={() => navigation.navigate('Info3', { status: route.params.status, nomePedido: 'estudante', emailPedido: 'null', mensagemPedido: 'null' }) }>
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                </View>

        
        </View>
    )}

    else {
        return (
            <View style={estilos.container}>
                    <View style={estilos.container}>
                        
                            <Text style={estilos.title4}>40 Segundos</Text>

                            <Text style={estilos.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.</Text>

                            <Image 
                                    source={require('../../images/40.png')}
                                    style={estilos.segundos}
                                
                            />
                        
                    </View>
                    
                    <View style={estilos.container}>

                            <Text style={estilos.title}>A Ferida Sara</Text>

                            <Text style={estilos.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.</Text>
                        
                      
                            <Image 
                                source={require('../../images/Sara.png')}
                                style={estilos.sara2}
                            
                            />
                    </View>

                    <View style={estilos.container2}>
                            <Text style={estilos.title3}>Um Marco na Vida</Text>

                            <Text style={estilos.text}> Em breve!</Text>
                      
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Info3', { status: route.params.status }) } 
                            
                            >
                                <Text style={estilos.next2}>Seguinte</Text>
                            </TouchableOpacity>
                    </View>
        
        </View>
    )}

}




const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: 'white',
      width: '100%',
    },

    container2: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    
      },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginBottom: '5%',
        marginTop: '15%',
      
    },

    title2: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginBottom: '5%',
    
    },

    sara: {
        width: '80%',
        height: '38%',
        marginTop: '5%',
        resizeMode: 'contain',
        marginLeft: '10%',
        marginRight: '10%',
        
    },


    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
        textAlign: 'justify',
    },

    next: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '20%',
        marginRight: '10%',
        textAlign: 'right'
      
    },


});

const estilos = StyleSheet.create({

    container: {
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
      },
  
      container2: {
          flex: 1,
          backgroundColor: 'white',
          width: '100%',
      
        },

        title: {
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: '10%',
            marginTop: '5%',
        
          
        },
  
      title3:{
          fontSize: 30,
          fontWeight: 'bold',
          marginLeft: '10%',
      },
  
      title4:{
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: '10%',
          marginLeft: '10%',
         
      },
  
      sara2: {
          width: '80%',
          height: '40%',
          resizeMode: 'contain',
          marginLeft: '10%',
          marginTop: '3%',
      },
  
      segundos: {
          resizeMode: 'contain',
          width: '80%',
          height: '40%',
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: '3%',
        
      },
  
      text: {
          marginLeft: '10%',
          marginRight: '10%',
          fontSize: 15,
          textAlign: 'justify',
      },
  
      next2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: '10%',
        textAlign: 'right'
      
      },
  

})




    export default Info2;