
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";


function PlaylistSara({ route, navigation }) {

    return (
        <ScrollView style={styles.container}>
            <View>

                <Text style={styles.title1}>A Ferida Sara</Text>

                <Text style={styles.text}>Esta websérie explica a jornada de Sara, uma recém estudante do ensino superior, que apresenta sintomas depressivos.</Text>
            </View>
            <View style={styles.container2}>

                <View style={styles.container3}>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                    >
                        <Image
                            source={require('../../../images/thumbnail.png')}
                            style={styles.episodio}

                        />
                    </TouchableOpacity>


                    <Text style={styles.title2}>Episódio 1</Text>
                    <Text style={styles.text}>Psicoeducativo</Text>

                </View>

            </View>

        </ScrollView >
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

    container3: {
        flex: 1,
        flexDirection: 'column',

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
        fontSize: 20,
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

    episodio: { //Imagem do episodio
        width: 150,
        height: 90,
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '3%',
        resizeMode: 'contain',

    },



});

export default PlaylistSara;

