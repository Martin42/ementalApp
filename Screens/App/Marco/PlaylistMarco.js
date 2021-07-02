
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Svg, {Circle, Rect, Path} from 'react-native-svg';

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
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                            <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                        </Svg>

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
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>

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
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>

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
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>

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
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>

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
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>

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
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>
                        
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
        marginLeft: '30%',
        marginTop: '20%',
        resizeMode: 'contain',
    },



});

export default PlaylistMarco;

