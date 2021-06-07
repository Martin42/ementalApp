import React, { useState, useCallback, useRef } from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert } from "react-native";
import { NavigationEvents, withOrientation } from 'react-navigation';
import { Entypo } from '@expo/vector-icons'
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import TextArea from 'react-native-textarea';

function Ep1_Sara({route, navigation}){

    const [mensagem, setMensagem] = useState('');
    const [playing, setPlaying] = useState(false);
  
    const onStateChange = useCallback((state) => {
      if (state === "ended") {
        setPlaying(false);
        Alert.alert("You got Jebaited!");
      }
    }, []);
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <ScrollView style={{width:'100%'}}>
            
            <View style={[{flexDirection:'row'}], styles.title} />
            <View style={{width: '100%', height: 80, backgroundColor: 'white'}}>
                <Entypo name="chevron-thin-left" size={24} color="black" style={styles.icon}>
                <Text style={styles.text}>A Ferida Sara - Ep. 1 Psicoeducativo</Text>
                </Entypo>
            </View>

            <View style={[{flexDirection:'row'}]} />
            <View style={{width: '100%', height: 250, backgroundColor: 'white'}}>
            <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={"d1YBv2mWll0"}
                    onChangeState={onStateChange}
            />
            </View>

            <View style={[{flexDirection:'row'}]} />
            <View style={{width: '100%', height: 200, backgroundColor: 'white'}}>
            <Text style={styles.title1}>Comentários</Text>

            </View>

            <View style={styles.inputField}>
                        <TextArea
                        style={styles.inputMensagem}
                        placeholder= 'Comente aqui...'
                        backgroundColor= '#CFE0FB'
                        placeholderTextColor= 'black'
                        multiline={true}
                        containerStyle={styles.inputMensagemContainer}
                        onChangeText={mensagem => setMensagem(mensagem)}
                        />
                    </View>                



            </ScrollView>
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

    title: {
        marginTop: '5%',
    },

    text: {
        textAlign: 'center',
        marginTop: 25,
    },

    icon: {
        marginTop: 25,
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '10%',
    },

    inputField: {
        borderRadius: 30,
        marginLeft: '10%',
        marginRight: '10%',
        height: 42,
      },

    inputMensagem: {
        fontSize: 14,
        color: 'black',
        borderRadius: 30,
        marginLeft: '5%',
        marginTop: '5%',
    },

});

export default Ep1_Sara;