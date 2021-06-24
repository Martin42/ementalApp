import React, { useState, useCallback, useRef } from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert } from "react-native";
import { NavigationEvents, withOrientation } from 'react-navigation';
import { Entypo } from '@expo/vector-icons'
import { WebView } from 'react-native-webview';
import YoutubePlayer from "react-native-youtube-iframe";
import TextArea from 'react-native-textarea';
import { AntDesign } from '@expo/vector-icons';

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
        <View style={{width: '100%', height: 80, backgroundColor: 'white', marginLeft: 25}}>
        <TouchableOpacity onPress={() => navigation.navigate('PlaylistSara')} >
                <Entypo name="chevron-thin-left" size={24} color="black" style={styles.icon}>
                    <Text style={styles.text}>A Ferida Sara - Ep. 1 Psicoeducativo</Text>
                </Entypo>
            </TouchableOpacity>
        </View>

        <View style={[{flexDirection:'row'}]} />
        <View style={{width: '100%', height: 250, backgroundColor: 'white'}}>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={"a_Po_QQWSa0"}
                onChangeState={onStateChange}
            />
        </View>

        <View style={{width: '100%', height: 100, backgroundColor: 'white'}}>
            <Text style={styles.title1}>Comentários</Text>
        </View>

        <View style={{marginLeft: 25}}>
            <View style={[{flexDirection:'row'}]}>
                <AntDesign name="smile-circle" size={50} color="lightblue" style={{marginTop: 20}}/>
                <Text style={ [{flexDirection:'column'}], styles.Author}>
                    mariachii
                </Text>
                <Text style={[{flexDirection:'column'}], styles.commentsection}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor, vivamus diam nec cras.
                </Text>              
            </View>  
                                    
            <View style={[{flexDirection:'row'}]}>
                <AntDesign name="smile-circle" size={50} color="lightblue" style={{marginTop: 20}}/>
                <Text style={ [{flexDirection:'column'}], styles.Author}>
                    astronada
                </Text>
                <Text style={[{flexDirection:'column'}], styles.commentsection}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor nulla magna tincidunt quisque quis. Quis vulputate viverra vulputate senectus. Dignissim tempus ut venenatis, in velit dignissim lectus vitae.
                </Text>
            </View>        

            <View style={[{flexDirection:'row'}]}>
                <AntDesign name="smile-circle" size={50} color="lightblue" style={{marginTop: 20}}/>
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
    fontSize: 20,
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
    borderRadius: 15,
    marginLeft: '10%',
    marginRight: '10%',
    height: 42,
},

inputMensagem: {
    fontSize: 14,
    color: 'black',
    borderRadius: 15,
    marginLeft: '5%',
    marginTop: '5%',
    width: 300,
},

commentsection: {
    backgroundColor:'#CFE0FB',
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 14,
    color: 'black',
    borderRadius: 15,
    marginLeft: '-10%',
    marginTop: '5%',
    height: 'auto',
    width: 300,
},

Author: {
    color: 'black',
    fontSize: 14,
    color: 'black',
},
});

export default Ep1_Sara;