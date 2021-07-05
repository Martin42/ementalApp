import React, { useState, useCallback, useEffect} from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert , TextInput, Modal} from "react-native";
import { Entypo } from '@expo/vector-icons'
import YoutubePlayer from "react-native-youtube-iframe";
import { db, auth } from '../../../Firebase';
import { AntDesign } from '@expo/vector-icons';

function EP40({route, navigation}){

    const currentUser = auth.currentUser.uid;
    const [currentStatus, setCurrentStatus] = useState('');


    useEffect(() => {
        getComments();
        getCommentsAdmin();
    }, [])


    const [mensagem, setMensagem] = useState();
    const [playing, setPlaying] = useState(false);
    const [modal, setModal] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentsAdmin, setCommentsAdmin] = useState([]);
    
    

    function setComment (){
        db
            .collection(route.params.episodio)
            .add({
                comentario: mensagem,
                aprovado: 'false',
            }) 
    }

    async function getComments (){
        const commentRef = db.collection(route.params.episodio);
        const snapshot = await commentRef.get()
        const comentarios = [];
        snapshot.forEach(doc => {
            if (doc.data().aprovado === 'false') {
                console.log('Precisa de Aprovação');
            } else {
                comentarios.push(doc.data().comentario);
            }
            
        })

        setComments(...comments, comentarios)
    }

 
    // Player 
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);


        return(


            <View style={styles.container}>
            
            <ScrollView style={styles.container}>
                <View style={{flexDirection: 'row', height: 40, marginTop: '7.5%', alignItems: 'center', marginBottom: '2.5%'}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PlaylistSara')}
                        style={styles.icon}>
                        <Entypo name="chevron-thin-left" size={24} color="black"/>
                    </TouchableOpacity>
    
                    <Text
                        style={{fontSize: 20}}>
                            {route.params.titulo}
                    </Text>
    
                </View>
    
                
                <View>
    
                <YoutubePlayer
                        height={300}
                        play={playing}
                        videoId={route.params.video}
                />
    
                </View>
          
                <Text style={styles.title1}>Comentários</Text>
    
                {/* {Object.keys(commentsAdmin).map((e, key) => {             
                    <View key={key} style={{flexDirection:'row', marginLeft: '10%', marginRight: '10%', marginBottom: '5%'}}>
                        <View style={{marginTop: '7.5%', flex: 1, marginRight: '-12.5%', marginLeft: '7.5%'}}>
                            <AntDesign name="smile-circle" size={50} color="lightblue"/>
                        </View>
                        <View style={{width: '90%'}}>
                            <View>
                                <Text style={{marginLeft: '20%'}}>
                                Anónimo
                                </Text>
                            </View>
                            <View style={styles.inputComment}>
                                <Text style={{flexDirection:'column'}, styles.inputMensagem2}>
                                    {commentsAdmin[e]}
                                </Text>
                            </View>
                            <TouchableOpacity>
                                    <Text>Aceitar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                    <Text>Recusar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                })} */}

               

    
    
                <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modal}
                        >
                            <View style={styles.modalView}>
                                <View style={styles.modalContainer}>
                                <Image 
                                    source={require('../../../images/comentario-pop.png')}
                                    style={styles.modalImage}
                                />
                                <Text>O teu comentário aguarda aprovação!</Text>
                                <Text>Terás de aguardar que o teu comentário seja aprovado.</Text>
                                <TouchableOpacity
                                    style={styles.entendi}
                                    onPress={()=> { setModal(false)}}
                                >
                                    <Text style={styles.entendiText}>Entendi!</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                            
                        
                        </Modal>
    
            </ScrollView>
    
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: '2.5%'}}>
                        <TextInput
                            style={styles.inputMensagem}
                            width='80%'
                            marginLeft="10%"
                            placeholder= 'Comente aqui...'
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'black'
                            multiline={true}
                            onChangeText={mensagem => setMensagem(mensagem)}
                            />
    
                        <TouchableOpacity
                            onPress={()=> {setComment(); setModal(true)}}
                            style={styles.icon2}>
                            <AntDesign name="right" size={24} color="black"/>     
                        </TouchableOpacity>
    
                </View> 
    
                </View>
        )
    }


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '-5%',
    },

    inputField: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '5%',
        marginLeft: '10%',
        marginRight: '10%',
    },

    inputMensagem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',
    },

    inputMensagem2: {
        fontSize: 18,
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',
    },

    inputComment: {
        flex: 1,
        backgroundColor: '#CFE0FB',
        borderRadius: 20,
        padding: 0,
        textAlign: 'left',
        width: '80%',
        marginLeft: '20%',
    },

    icon: {
        marginLeft: '5%',
        marginRight: '5%',
    },

    icon2: {
        marginLeft: '2%',
        marginRight: '2%',
    },
  
    entendi: {
        marginTop: '15%',
        width: '80%',
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        padding: '4%',
    },

    modalView: {
        alignContent: 'center',
        justifyContent: 'center', 
        flex: 1,
    },

    modalContainer: {
        marginLeft: '12%', 
        marginRight: '12%', 
        backgroundColor:'white', 
        alignItems: 'center', 
        padding: 25, 
        shadowColor: 'red', 
        shadowOffset: {width: 0, height: 2}, 
        shadowOpacity: 0.25, 
        shadowRadius: 4, 
        elevation: 4, 
        borderWidth: 1, 
        borderRadius: 30, 
        borderColor: 'white',
    },

    modalImage:{
        marginBottom:'12%', 
        marginTop: '5%', 
        height: 130, 
        width: '66%'
    },

    modalTitle: {
        fontWeight: 'bold', 
        fontSize: 20, 
        textAlign: 'center',
        marginBottom: '10%',  
        marginLeft: '5%', 
        marginRight: '5%',
    },

    modalSubtitle: {
        fontSize: 15, 
        textAlign: 'center', 
        marginLeft: '10%', 
        marginRight: '10%'
    },

    entendiText: {
        textAlign: 'center', 
        color: 'white', 
        fontWeight: 'bold'
    },

    color: {
        backgroundColor: 'red',
    },
});

export default EP40;