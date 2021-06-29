
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

function PlaylistMarco({ route, navigation }) {

    return (
        <ScrollView style={styles.container}>
            <View>

                <Text style={styles.title1}>Um Marco na Vida</Text>

                <Text style={styles.text}>O podcast “Um Marco na Vida” conta a história do Marco, um estudante universitário amigo da Sara. </Text>
            </View>
            <View style={styles.container2}>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AudioMarco', {episodio: 'Episódio 1', titulo: 'Um Marco na Vida - Ep. 1 Piloto', serie:'Um Marco na Vida'})}
                    >
                        <Image
                            source={require('../../../images/play.png')}
                            style={styles.icone}

                        />
                    </TouchableOpacity>
                    
                    <View>
                        <Text style={styles.title2}>Episódio 1</Text>
                        <Text style={styles.texto}>Piloto</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                    >
                        <Image
                            source={require('../../../images/play_blocked.png')}
                            style={styles.icone}

                        />
                    </TouchableOpacity>
                    
                    <View>
                        <Text style={styles.title2}>Episódio 2</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                    >
                        <Image
                            source={require('../../../images/play_blocked.png')}
                            style={styles.icone}

                        />
                    </TouchableOpacity>
                    
                    <View>
                        <Text style={styles.title2}>Episódio 3</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                    >
                        <Image
                            source={require('../../../images/play_blocked.png')}
                            style={styles.icone}

                        />
                    </TouchableOpacity>
                    
                    <View>
                        <Text style={styles.title2}>Episódio 4</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                    >
                        <Image
                            source={require('../../../images/play_blocked.png')}
                            style={styles.icone}

                        />
                    </TouchableOpacity>
                    
                    <View>
                        <Text style={styles.title2}>Episódio 5</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                    >
                        <Image
                            source={require('../../../images/play_blocked.png')}
                            style={styles.icone}

                        />
                    </TouchableOpacity>
                    
                    <View>
                        <Text style={styles.title2}>Episódio 6</Text>
                        <Text style={styles.texto}></Text>
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('')}
                    >
                        <Image
                            source={require('../../../images/play_blocked.png')}
                            style={styles.icone}

                        />
                    </TouchableOpacity>
                    
                    <View>
                        <Text style={styles.title2}>Episódio 7</Text>
                        <Text style={styles.texto2}></Text>
                    </View>
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

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
    },

    texto: {
        fontSize: 15,
        marginRight:10,
    },

    texto2: {
        fontSize: 15,
        marginRight:10,
        marginBottom:'40%',
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
        marginBottom: '5%',
        marginTop: '45%',

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

    icone: { //Icone play
        width: 60,
        height: 60,
        marginLeft: '30%',
        marginTop: '20%',
        resizeMode: 'contain',
    },



});

export default PlaylistMarco;

