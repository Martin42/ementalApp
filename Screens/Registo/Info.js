import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';




function Info({ route, navigation }) {

    console.log(route.params.status);
    return (
       
        <View  style={styles.container}>
       

                       <StatusBar style="auto" />
                        <Image
                            source={require('../../images/emental.png')}
                            style={styles.emental}
                        /> 

                    <View style={{flex: 2}}>
                        <Text style={styles.title}>O que é o eMental ?</Text>

                        <Text style={styles.subtitle}>O projeto eMental envolve uma equipa multidisciplinar e visa finalizar e avaliar intervenções digitais dirigidas a jovens, estruturadas em conteúdos digitais transmedia, de promoção da literacia em depressão e suicídio. Pretende-se ainda desenhar uma proposta de futura intervenção alargada à população jovem portuguesa. </Text>
                        
                        <View style={styles.seguinteContainer}>
                            <TouchableOpacity
                            onPress={() => navigation.navigate('Info2', {status: route.params.status }) }

                            >
                                        <Text style={styles.next}>Seguinte</Text>
                            </TouchableOpacity>
                        </View>


                    </View> 
                  
             
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',
     
    

    },

    emental: {
  
        width: '100%',
        height: '25%',
        marginTop: '20%',
        resizeMode: 'contain',
        marginLeft: '30%',
  
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '15%',
        marginRight: '10%',
        marginTop: '15%',
        marginBottom: '5%',
        
    },

    subtitle: {
        fontSize: 15,
        color: '#6B6B6B',
        fontWeight: 'normal',
        marginLeft: '15%',
        marginRight: '10%',
        marginTop: '3%',
        marginBottom: '5%',
      
        
    },
    next: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    seguinteContainer: {
        width: '20%',
        alignSelf: 'flex-end', 
        marginRight: '10%', 
        marginTop: '35%', 
    },

});

export default Info;