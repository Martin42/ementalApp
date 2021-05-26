import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, Image, View } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';





function Info2({route, navigation}){

    console.log(route.params.status);

    if (route.params.status == 0){

    return (
        <SafeAreaView style={styles.container}>
             <StatusBar style="auto" />
             
            <View>

                    <Text style={styles.title}>A Ferida Sara</Text>

                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.</Text>
                
                <View>
                    <Image 
                        source={require('../../images/Sara.png')}
                        style={styles.sara}
                    
                    />

        
                    <Text style={styles.title2}>Um Marco na Vida</Text>

                    <Text style={styles.text}> Em breve!</Text>
                </View>

                <View>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('Consentimento', { status: route.params.status, nomePedido: 'estudante', emailPedido: 'null', mensagemPedido: 'null' }) }>
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                </View>

        </View>
        
        
        </SafeAreaView>
    )}

    else {
        return (
            <SafeAreaView style={styles.container}>
             <StatusBar style="auto" />


             <View style={styles.container}>
                 
                    <Text style={styles.title4}>40 Segundos</Text>

                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.</Text>

                    <Image 
                            source={require('../../images/40.png')}
                            style={styles.segundos}
                        
                    />
                  
             </View>
             
            <View style={{flex: 2, marginTop: '25%'}}>

                    <Text style={styles.title}>A Ferida Sara</Text>

                    <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.</Text>
                
                <View>
                    <Image 
                        source={require('../../images/Sara.png')}
                        style={styles.sara2}
                    
                    />

        
                    <Text style={styles.title3}>Um Marco na Vida</Text>

                    <Text style={styles.text}> Em breve!</Text>
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Consentimento', { status: route.params.status }) } // alterar consentimento
                    
                    >
                        <Text style={styles.next2}>Seguinte</Text>
                    </TouchableOpacity>
                </View>

        </View>
        
        
        </SafeAreaView>
    )}

}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      width: '100%',
  
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '5%',
      
    },

    title2: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '15%',
        marginLeft: '10%',
    
    },

    title3:{
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '10%',
        marginLeft: '10%',
    },

    title4:{
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '30%',
        marginLeft: '10%',
    },


    sara: {
        width: '100%',
        height: '38%',
        marginTop: '10%',
        resizeMode: 'contain',
        
    },

    sara2: {
        width: '100%',
        height: '45%',
        marginTop: '5%',
        resizeMode: 'contain',
    },

    segundos: {
        resizeMode: 'contain',
        marginTop: '5%',
        width: '100%',
        height: '60%',
      
    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
    },

    next: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginTop: '30%',
      
    },

    next2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginBottom: '5%',
    },


});



    export default Info2;