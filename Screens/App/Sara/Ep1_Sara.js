import React, { useState, useCallback, useEffect} from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert , TextInput, Modal} from "react-native";
import { Entypo } from '@expo/vector-icons'
import YoutubePlayer from "react-native-youtube-iframe";
import { db, auth } from '../../../Firebase';

function Ep1_Sara({route, navigation}){

    useEffect(() => {
        getComments();
    },[mensagem])


    const [mensagem, setMensagem] = useState();
    const [playing, setPlaying] = useState(false);
    const [modal, setModal] = useState(false);

    
    

    function setComment (){
        db
            .collection(route.params.episodio)
            .add({
                comentario: mensagem,
                aprovado: 'false'
            }) 
    }

 
    const comentarios = [];
  

    async function getComments (){
        const commentRef = db.collection(route.params.episodio);
        const snapshot = await commentRef.get();
        snapshot.forEach(doc => {
            if (doc.data().aprovado === 'false') {
                console.log('Precisa de Aprovação');
            } else {
       
               console.log( doc.data().comentario);
               comentarios.push(doc.data().comentario);
               
               
            }
        });
        }
  


    // Player 

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
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{height: 40, backgroundColor: 'white'}}>
                <Entypo name="chevron-thin-left" size={24} color="black" style={styles.icon}>
                <Text>{route.params.titulo}</Text>
                </Entypo>
            </View>

            <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={route.params.video}
                    onChangeState={onStateChange}
            />
      
            <Text style={styles.title1}>Comentários</Text>

                {comentarios.map(e => <Text>{e}</Text>)}

                {/* Como remover o comentário depois de submetido  */}

                <View style={styles.inputField}>
                        <TextInput
                        style={styles.inputMensagem}
                        placeholder= 'Comente aqui...'
                        backgroundColor= '#CFE0FB'
                        placeholderTextColor= 'black'
                        multiline={true}
                        onChangeText={mensagem => setMensagem(mensagem)}
                        />

                    <TouchableOpacity
                        onPress={()=> {setComment(); setModal(true)}}
                    >
                        <Text>Submeter</Text>     
                    </TouchableOpacity>

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
                            <Text style={styles.modalTitle}>O teu comentário precisa de aprovação!</Text>
                            <Text style={styles.modalSubtitle}>Terás de aguardar que o teu comentário seja aprovado.</Text>
                            <TouchableOpacity
                                style={styles.entendi}
                                onPress={()=> { setModal(false)}}
                            >
                                <Text style={styles.entendiText}>Entendi!</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        
                    
                    </Modal>   
                    
                </View>
               
                  
                

        </ScrollView>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        marginTop: '10%'
    },

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
    },

    inputField: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
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
    }

});

export default Ep1_Sara;