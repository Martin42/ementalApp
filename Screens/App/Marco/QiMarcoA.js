import React, { useState } from 'react';
import {StatusBar, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import Checkbox from 'react-native-check-box';



function QiMarcoA({route, navigation}){

    const [check, setCheck] = useState(false);

    function validate(){

        if (check === false) {
            setCheck(true);
        } else {
            setCheck(false);
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.balao}>
                <Text style={styles.title}>Do you mind?</Text>
                <Text style={styles.texto}>Antes de iniciares a visualização de Um Marco na Vida pedimos que respondas a este questionário.</Text>
                <Text style={styles.texto}>Aceito participar neste estudo e permito a utilização dos dados, que de forma voluntária forneço, confiando em que apenas serão utilizados para fins científicos e publicações que dela decorram e nas garantias de confidencialidade e anonimato que me são dados pelos investigadores.</Text>

                <View>
                    <Checkbox 
                        style={styles.checkbox}
                        onClick={() => validate()}
                        isChecked={check}
                        unCheckedImage={<Image source={require('../../../images/Participar_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/Participar_checked.png')} style={styles.aceito} />} 
                    />
                </View>
                
                { check ? (

                    <View style={styles.seguinteContainer}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('QiMarcoB', {collection: 'Questionário Sara Inicial'})}
                        >
                            <Text style={styles.next}>Seguinte</Text>
                        </TouchableOpacity>
                    </View>
                    ) : (
                        <Text></Text>
                    )
                }
            </View>
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

    balao: {
        backgroundColor: '#CFE0FB',
        borderColor: '#CFE0FB',
        borderRadius: 30,
        height: '85%',
        width: '80%',
        marginTop: '15%',
        marginBottom: '15%',
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
        marginBottom: '5%',
    },

    next: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: '10%',
    },

    seguinteContainer: {
        width: '20%',
        alignSelf: 'flex-end', 
        marginRight: '10%', 
    },

    texto: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '5%',
        fontSize: 15,
        color: 'black',
    },

    textobold: {
        marginLeft: '10%',
        marginRight: '10%',
        fontWeight: 'bold',
        fontSize: 15,
    },

    aceito: {
        marginLeft: '10%',
        marginRight: '10%',  
        resizeMode: 'contain',
        height: 50,
        width: 280,
       

    },

      checkbox: {
        width: '100%', 
        height: '23.5%', 
        marginTop: '10%',
    
    },
});

export default QiMarcoA;