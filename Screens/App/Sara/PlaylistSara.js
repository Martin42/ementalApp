<<<<<<< Updated upstream

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import { auth, db } from '../../Firebase';
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

>>>>>>> Stashed changes

function PlaylistSara({ route, navigation }) {

    return (
        <ScrollView style={styles.container}>
            <View>
                <StatusBar style={'auto'} />

                <Text style={styles.title1}>A Ferida Sara</Text>

<<<<<<< Updated upstream
                <Text style={styles.text}>Esta websérie explica a vida de Sara, uma recém estudante do ensino superior, que apresenta sintomas depressivos.</Text>
            </View>
            <View style={styles.container2}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('QiSaraA')}

                >
                    <Image
                        source={require('../../images/Sara.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>
                
            </View>

=======
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



>>>>>>> Stashed changes
        </ScrollView>
    )
}


<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFE0FB',
        width: '100%',

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
    },

    container2: {
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: '100%',
        width: '100%',
        marginTop: '10%',

    },

<<<<<<< Updated upstream
=======
    container3: {
        flex: 1,
        flexDirection: 'column',

    },

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        fontSize: 30,
=======
        fontSize: 20,
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
    conteudo: { //Imagem da Sara (conteudos)
        width: 365,
        height: 180,
=======
    episodio: { //Imagem do episodio
        width: 150,
        height: 90,
>>>>>>> Stashed changes
        marginLeft: '8%',
        marginRight: '8%',
        marginTop: '3%',
        resizeMode: 'contain',
<<<<<<< Updated upstream
       
=======

>>>>>>> Stashed changes
    },



});

<<<<<<< Updated upstream
export default PlaylistSara;

=======
export default PlaylistSara;
>>>>>>> Stashed changes
