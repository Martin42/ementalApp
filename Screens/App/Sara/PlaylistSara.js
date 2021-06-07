
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";

function PlaylistSara({ route, navigation }) {

    return (
        <ScrollView style={styles.container}>
            <View>
                <StatusBar style={'auto'} />

                <Text style={styles.title1}>A Ferida Sara</Text>

                <Text style={styles.text}>Esta websérie explica a vida de Sara, uma recém estudante do ensino superior, que apresenta sintomas depressivos.</Text>
            </View>
            <View style={styles.container2}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Ep1_Sara')}

                >
                    <Image
                        source={require('../../../images/Sara.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>
                
            </View>

        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFE0FB',
        width: '100%',

    },

    container2: {
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: '100%',
        width: '100%',
        marginTop: '10%',

    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
    },

    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '15%',

    },
    title2: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '3%',
        marginTop: '13%',

    },

    title3: {
        fontSize: 20,
        fontWeight: 'normal',
        marginRight: '10%',
        marginBottom: '2%',
        marginTop: '3%',
        marginLeft: '10%',

    },

    title4: {
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 10,
    },

    conteudo: { //Imagem da Sara (conteudos)
        width: 365,
        height: 180,
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '3%',
        resizeMode: 'contain',
       
    },



});

export default PlaylistSara;

