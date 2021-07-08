
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Svg, {Circle, Rect, Path} from 'react-native-svg';
import Checkbox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { db, auth } from '../../../Firebase';

function PlaylistMarco({ route, navigation }) {

    useEffect(() => {
        getStatus();
        getEP1();
        getEP2();
        getEP3();
        getEP4();
        getEP5();
        getEP6();
        getEP7();
    }, []);

    const currentUser = auth.currentUser.uid;
    const [currentStatus, setCurrentStatus] = useState('');
    const currentTime = new Date() / 1000;
    const [EP1MARCO, setEP1MARCO] = useState(true);
    const [EP2MARCO, setEP2MARCO] = useState(false);
    const [EP3MARCO, setEP3MARCO] = useState(false);
    const [EP4MARCO, setEP4MARCO] = useState(false);
    const [EP5MARCO, setEP5MARCO] = useState(false);
    const [EP6MARCO, setEP6MARCO] = useState(false);
    const [EP7MARCO, setEP7MARCO] = useState(false);
    const [all, setAll] = useState(false)


   async function getEP1(){
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP1MARCO) != undefined) {
                setEP1MARCO(false);
                if ((doc.data().EP1MARCO.seconds + 10) <= currentTime) {
                    setEP2MARCO(true);
                    db
                    .collection('Notificacoes')
                    .add({
                        Conteudo: 'O Episódio 2 do Marco na Vida encontra-se disponível!',
                        User: currentUser,
                        Visto: false,
                        fulldata: new Date(),
                        Destino: 'PlaylistMarco'
                    })
                  
                }
            }
        })
    }

   async function getEP2(){
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP2MARCO) != undefined) {
                setEP2MARCO(false);
                if ((doc.data().EP2MARCO.seconds + 10) <= currentTime) {
                    setEP3MARCO(true);
                    db
                    .collection('Notificacoes')
                    .add({
                        Conteudo: 'O Episódio 3 do Marco na Vida encontra-se disponível!',
                        User: currentUser,
                        Visto: false,
                        fulldata: new Date(),
                        Destino: 'PlaylistMarco'
                    })
                   
                }
            }
        })
    }


  async function getEP3(){
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP3MARCO) != undefined) {
                setEP3MARCO(false);
                if ((doc.data().EP3MARCO.seconds + 10) <= currentTime) {
                    setEP4MARCO(true);
                    db
                    .collection('Notificacoes')
                    .add({
                        Conteudo: 'O Episódio 4 do Marco na Vida encontra-se disponível!',
                        User: currentUser,
                        Visto: false,
                        fulldata: new Date(),
                        Destino: 'PlaylistMarco'
                    })
                    
                }
            }
        })
    }


  async function getEP4(){
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP4MARCO) != undefined) {
                setEP4MARCO(false);
                if ((doc.data().EP4MARCO.seconds + 10) <= currentTime) {
                    setEP5MARCO(true);
                    db
                    .collection('Notificacoes')
                    .add({
                        Conteudo: 'O Episódio 5 do Marco na Vida encontra-se disponível!',
                        User: currentUser,
                        Visto: false,
                        fulldata: new Date(),
                        Destino: 'PlaylistMarco'
                    })
                   
                }
            }
        })
    }

    async function getEP5(){
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP5MARCO) != undefined) {
                setEP5MARCO(false);
                if ((doc.data().EP5MARCO.seconds + 10) <= currentTime) {
                    setEP6MARCO(true);
                    db
                    .collection('Notificacoes')
                    .add({
                        Conteudo: 'O Episódio 6 do Marco na Vida encontra-se disponível!',
                        User: currentUser,
                        Visto: false,
                        fulldata: new Date(),
                        Destino: 'PlaylistMarco'
                    })
                  
                }
            }
        })
    }

    async function getEP6(){
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP6MARCO) != undefined) {
                setEP6MARCO(false);
                if ((doc.data().EP6MARCO.seconds + 10) <= currentTime) {
                    setEP7MARCO(true);
                    db
                    .collection('Notificacoes')
                    .add({
                        Conteudo: 'O Episódio 7 do Marco na Vida encontra-se disponível!',
                        User: currentUser,
                        Visto: false,
                        fulldata: new Date(),
                        Destino: 'PlaylistMarco'
                    })
                   
                }
            }
        })
    }

    async function getEP7(){
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP7MARCO) != undefined) {
                setAll(true);
                db
                    .collection('Questionário Marco Final')
                    .doc(currentUser)
                    .get()
                    .then(doc => {
                        if ((doc.data().concluido) == 'false') {
                            navigation.navigate('QiMarcoAFinal');
                        }
 
                    })
            }
        })
    }







  async function getStatus (){ db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            setCurrentStatus(doc.data().status) 
        });
    }


    if ((currentStatus == 2) || (all == true)) {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    <View>
        
                        <Text style={styles.title1}>Um Marco na Vida</Text>
        
                        <Text style={styles.text}>O podcast “Um Marco na Vida” conta a história do Marco, um estudante universitário amigo da Sara. </Text>
                    </View>
                    <View style={styles.container2}>
        
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                               style={{marginLeft: '5%'}}
                                onPress={() => navigation.navigate('AudioMarco', {episodio: 'EP1MARCO', titulo: 'Um Marco na Vida - Ep. 1', serie:'Um Marco na Vida', url: "'./Audios/Marco1.mp3'"})}
                            >
                                <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                    <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                                </Svg>
        
                            </TouchableOpacity>
                            
                            <View  style={{marginTop: '12%'}}>
                                <Text style={styles.title2}>Episódio 1</Text>
                             
                            </View>
                        </View>
        
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                                style={{marginLeft: '5%'}}
                                onPress={() => navigation.navigate('AudioMarco2', {episodio: 'EP2MARCO', titulo: 'Um Marco na Vida - Ep. 2', serie:'Um Marco na Vida', url: "'./Audios/Marco2.mp3'"})}
                            >
                                <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                    <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                                </Svg>
        
                            </TouchableOpacity>
                            
                            <View  style={{marginTop: '12%'}}>
                                <Text style={styles.title2}>Episódio 2</Text>
                              
                            </View>
                        </View>
        
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                               style={{marginLeft: '5%'}}
                                onPress={() => navigation.navigate('AudioMarco3', {episodio: 'EP3MARCO', titulo: 'Um Marco na Vida - Ep. 3', serie:'Um Marco na Vida', url: "'./Audios/Marco3.mp3'"})}
                            >
                                 <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                    <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                                </Svg>
        
                            </TouchableOpacity>
                            
                            <View  style={{marginTop: '12%'}}>
                                <Text style={styles.title2}>Episódio 3</Text>
                              
                            </View>
                        </View>
        
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                              style={{marginLeft: '5%'}}
                                onPress={() => navigation.navigate('AudioMarco4', {episodio: 'EP4MARCO', titulo: 'Um Marco na Vida - Ep. 4', serie:'Um Marco na Vida', url: "'./Audios/Marco4.mp3'"})}
                            >
                                 <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                    <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                                </Svg>
        
                            </TouchableOpacity>
                            
                            <View  style={{marginTop: '12%'}}>
                                <Text style={styles.title2}>Episódio 4</Text>
                              
                            </View>
                        </View>
        
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                                style={{marginLeft: '5%'}}
                                onPress={() => navigation.navigate('AudioMarco5', {episodio: 'EP5MARCO', titulo: 'Um Marco na Vida - Ep. 5', serie:'Um Marco na Vida', url: "'./Audios/Marco5.mp3'"})}
                            >
                                <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                    <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                                </Svg>
        
                            </TouchableOpacity>
                            
                            <View  style={{marginTop: '12%'}}>
                                <Text style={styles.title2}>Episódio 5</Text>
                              
                            </View>
                        </View>
        
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity
                                style={{marginLeft: '5%'}}
                                onPress={() => navigation.navigate('AudioMarco6', {episodio: 'EP6MARCO', titulo: 'Um Marco na Vida - Ep. 6', serie:'Um Marco na Vida', url: "'./Audios/Marco6.mp3'"})}
                            >
                                 <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                    <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                                </Svg>
        
                            </TouchableOpacity>
                            
                            <View  style={{marginTop: '12%'}}>
                                <Text style={styles.title2}>Episódio 6</Text>
                             
                            </View>
                        </View>
        
                        <View style={{flexDirection:'row', marginBottom: '10%'}}>
                            <TouchableOpacity
                                style={{marginLeft: '5%'}}
                                onPress={() => navigation.navigate('AudioMarco7', {episodio: 'EP7MARCO', titulo: 'Um Marco na Vida - Ep. 7', serie:'Um Marco na Vida', url: "'./Audios/Marco7.mp3'"})}
                            >
                               <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                    <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                                </Svg>
                                
                            </TouchableOpacity>
                            
                            <View style={{marginTop: '12%'}}>
                                <Text style={styles.title2}>Episódio 7</Text>
                             
                            </View>
                        </View>
                    </View>
        
                </ScrollView >
        
                <View style={styles.tabBar}>
                        <View style={{flex: 1}}>
                        <Checkbox 
                            style={styles.icon}
                            onClick={() => navigation.navigate('Notificacoes')}
                            isChecked={false}
                            unCheckedImage={<Icon name='notifications' size={28} color='#D2D2D2'/>}
                            checkedImage={<Icon name='notifications' size={28} color='#6578B3'/>}
                        />           
                        </View>
        
                        <View style={{flex: 1}}>
                        <Checkbox 
                            style={styles.icon}
                            onClick={() => navigation.navigate('Homepage')}
                            isChecked={false}
                            unCheckedImage={<Icon1 name='home' size={30} color='#D2D2D2' />}
                            checkedImage={<Icon1 name='home' size={30} color='#6578B3'/>}
                        />   
                        </View>
        
                        <View style={{flex: 1}}>
                        <Checkbox 
                            style={styles.icon}
                            onClick={() => navigation.navigate('Apoio')} 
                            isChecked={false}
                            unCheckedImage={<Icon2 name='questioncircle' size={28} color='#D2D2D2' />}
                            checkedImage={<Icon2 name='questioncircle' size={28} color='#6578B3'/>}
                        />  
                        </View>

                        { (currentStatus == 2) ? (
                        <View style={{flex: 1}}>
                        <Checkbox 
                            style={styles.icon}
                            onClick={() => navigation.navigate('PainelControlo')} 
                            isChecked={false}
                            unCheckedImage={<Icon1 name='equalizer' size={30} color='#D2D2D2' />}
                            checkedImage={<Icon1 name='equalizer' size={30} color='#6578B3'/>}
                        />  
                        </View>
                    ) : (
                        <Text></Text>
                    ) }

        
                    </View>
        
            </View>
            )
    } else {
        
    return (

    <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View>

                <Text style={styles.title1}>Um Marco na Vida</Text>

                <Text style={styles.text}>O podcast “Um Marco na Vida” conta a história do Marco, um estudante universitário amigo da Sara. </Text>
            </View>
            <View style={styles.container2}>

                <View style={{flexDirection:'row'}}>

                    {
                        (EP1MARCO == true) ? (
                            <TouchableOpacity
                            style={{marginLeft: '5%'}}
                             onPress={() => navigation.navigate('AudioMarco', {episodio: 'EP1MARCO', titulo: 'Um Marco na Vida - Ep. 1', serie:'Um Marco na Vida', url: "'./Audios/Marco1.mp3'"})}
                         >
                             <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                 <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                             </Svg>
     
                         </TouchableOpacity>
                        ) : (
                        <TouchableOpacity
                        style={{marginLeft: '5%'}}
                            onPress={() => alert('Conteúdo Bloqueado')}
                        >
                            <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                            </Svg>
                        </TouchableOpacity>
                        )
                    }

                    
                    
                    <View  style={{marginTop: '12%'}}>
                        <Text style={styles.title2}>Episódio 1</Text>
                     
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>

                    {
                        (EP2MARCO == true) ? (
                            <TouchableOpacity
                            style={{marginLeft: '5%'}}
                            onPress={() => navigation.navigate('AudioMarco2', {episodio: 'EP2MARCO', titulo: 'Um Marco na Vida - Ep. 2', serie:'Um Marco na Vida', url: "'./Audios/Marco2.mp3'"})}
                        >
                            <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                 <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                             </Svg>
    
                        </TouchableOpacity>
                        ) : (
                    <TouchableOpacity
                        style={{marginLeft: '5%'}}
                        onPress={() => alert('Conteúdo Bloqueado')}
                    >
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>

                    </TouchableOpacity>
                        )
                    }

                    
                    
                    <View  style={{marginTop: '12%'}}>
                        <Text style={styles.title2}>Episódio 2</Text>
                      
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>

                    {
                        (EP3MARCO == true) ? (
                            <TouchableOpacity
                                style={{marginLeft: '5%'}}
                                onPress={() => navigation.navigate('AudioMarco3', {episodio: 'EP3MARCO', titulo: 'Um Marco na Vida - Ep. 3', serie:'Um Marco na Vida', url: "'./Audios/Marco3.mp3'"})}
                        >
                            <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                 <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                             </Svg>

                        </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={{marginLeft: '5%'}}
                                onPress={() => alert('Conteúdo Bloqueado')}
                            >
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>

                    </TouchableOpacity>
                        )
                    }

                    
                    
                    <View  style={{marginTop: '12%'}}>
                        <Text style={styles.title2}>Episódio 3</Text>
                      
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>

                    {
                        (EP4MARCO == true) ? (
                            <TouchableOpacity
                            style={{marginLeft: '5%'}}
                              onPress={() => navigation.navigate('AudioMarco4', {episodio: 'EP4MARCO', titulo: 'Um Marco na Vida - Ep. 4', serie:'Um Marco na Vida', url: "'./Audios/Marco4.mp3'"})}
                          >
                              <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                 <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                             </Svg>
      
                          </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                            style={{marginLeft: '5%'}}
                            onPress={() => alert('Conteúdo Bloqueado')}
                          >
                              <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                                  <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                              </Svg>
      
                          </TouchableOpacity>
                        )
                    }

                  
                    
                    <View  style={{marginTop: '12%'}}>
                        <Text style={styles.title2}>Episódio 4</Text>
                      
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>

                    {
                        (EP5MARCO == true) ? (
                            <TouchableOpacity
                        style={{marginLeft: '5%'}}
                        onPress={() => navigation.navigate('AudioMarco5', {episodio: 'EP5MARCO', titulo: 'Um Marco na Vida - Ep. 5', serie:'Um Marco na Vida', url: "'./Audios/Marco5.mp3'"})}
                    >
                         <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                 <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                             </Svg>

                    </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                        style={{marginLeft: '5%'}}
                        onPress={() => alert('Conteúdo Bloqueado')}
                    >
                        <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                            <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                        </Svg>

                    </TouchableOpacity>
                        )
                    }

                    
                    
                    <View  style={{marginTop: '12%'}}>
                        <Text style={styles.title2}>Episódio 5</Text>
                      
                    </View>
                </View>

                <View style={{flexDirection:'row'}}>

                    {
                        (EP6MARCO == true) ? (
                            <TouchableOpacity
                            style={{marginLeft: '5%'}}
                            onPress={() => navigation.navigate('AudioMarco6', {episodio: 'EP6MARCO', titulo: 'Um Marco na Vida - Ep. 6', serie:'Um Marco na Vida', url: "'./Audios/Marco6.mp3'"})}
                        >
                              <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                 <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                             </Svg>
    
                        </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                            style={{marginLeft: '5%'}}
                            onPress={() => alert('Conteúdo Bloqueado')}
                        >
                            <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                                <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                            </Svg>
    
                        </TouchableOpacity>
                        )
                    }

                  
                    
                    <View  style={{marginTop: '12%'}}>
                        <Text style={styles.title2}>Episódio 6</Text>
                     
                    </View>
                </View>

                <View style={{flexDirection:'row', marginBottom: '10%'}}>

                    {
                        (EP7MARCO == true) ? (
                            <TouchableOpacity
                            style={{marginLeft: '5%'}}
                            onPress={() => navigation.navigate('AudioMarco7', {episodio: 'EP7MARCO', titulo: 'Um Marco na Vida - Ep. 7', serie:'Um Marco na Vida', url: "'./Audios/Marco7.mp3'"})}
                        >
                             <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Circle cx="25" cy="25" r="25" fill="#8FBBFF"/>
                                 <Path d="M19.1665 16.5525V32.6141C19.1665 33.8389 20.5243 34.5831 21.57 33.9164L34.2741 25.8856C35.2417 25.281 35.2417 23.8857 34.2741 23.2655L21.57 15.2502C20.5243 14.5836 19.1665 15.3278 19.1665 16.5525Z" fill="white"/>
                             </Svg>
                            
                        </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                            style={{marginLeft: '5%'}}
                            onPress={() => alert('Conteúdo Bloqueado')}
                        >
                            <Svg style={styles.icone} width="60" height="60" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Circle cx="25" cy="25" r="25" fill="#3F3D56"/>
                                <Path d="M33.5217 33.8909L18.1198 18.6364L17 19.7455L18.8725 21.6C18.3034 21.9091 17.9179 22.5 17.9179 23.1818V32.2727C17.9179 33.2727 18.744 34.0909 19.7536 34.0909H30.7681C30.9792 34.0909 31.1812 34.0455 31.3739 33.9818L32.4019 35L33.5217 33.8909ZM22.4155 19.5455C22.4155 17.9909 23.6913 16.7273 25.2609 16.7273C26.8304 16.7273 28.1063 17.9909 28.1063 19.5455V21.3636H23.113L32.6039 30.7636V23.1818C32.6039 22.1818 31.7778 21.3636 30.7681 21.3636H29.8502V19.5455C29.8502 17.0364 27.7942 15 25.2609 15C22.9111 15 21.0019 16.7545 20.7266 19L22.4155 20.6727V19.5455Z" fill="white"/>
                            </Svg>
                            
                        </TouchableOpacity>
                        )
                    }

                  
                    
                    <View style={{marginTop: '12%'}}>
                        <Text style={styles.title2}>Episódio 7</Text>
                     
                    </View>
                </View>
            </View>

        </ScrollView >

        <View style={styles.tabBar}>
                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Notificacoes')}
                    isChecked={false}
                    unCheckedImage={<Icon name='notifications' size={28} color='#D2D2D2'/>}
                    checkedImage={<Icon name='notifications' size={28} color='#6578B3'/>}
                />           
                </View>

                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Homepage')}
                    isChecked={false}
                    unCheckedImage={<Icon1 name='home' size={30} color='#D2D2D2' />}
                    checkedImage={<Icon1 name='home' size={30} color='#6578B3'/>}
                />   
                </View>

                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Apoio')} 
                    isChecked={false}
                    unCheckedImage={<Icon2 name='questioncircle' size={28} color='#D2D2D2' />}
                    checkedImage={<Icon2 name='questioncircle' size={28} color='#6578B3'/>}
                />  
                </View>

            </View>

    </View>
    )
    }
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

    icon: {
        padding: '10%', 
        alignSelf: 'center',
    },

    tabBar: {
        flexDirection: 'row', 
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#D7D7D7',
        
    },
});

export default PlaylistMarco;

