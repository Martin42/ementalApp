import React, { useState, useCallback, useEffect} from 'react';
import { ScrollView, Checkbox, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert , TextInput} from "react-native";
import { Entypo } from '@expo/vector-icons'
import YoutubePlayer from "react-native-youtube-iframe";
import { db, auth } from '../../../Firebase';

function Ep1_Sara({route, navigation}){

    useEffect(() => {
        getComments();
    },[mensagem])


    const [mensagem, setMensagem] = useState();
    const [playing, setPlaying] = useState(false);


    function setComment (){
        db
            .collection(route.params.episodio)
            .add({
                comentario: mensagem,
                aprovado: 'false'
            }) 
    }

    async function getComments (){
        const commentRef = db.collection(route.params.episodio);
        const snapshot = await commentRef.get();
        snapshot.forEach(doc => {
            if (doc.data().aprovado === 'false') {
                console.log('Precisa de Aprovação');
            } else {
                console.log(doc.data().comentario);
            }
        });
        }
  

    // Player 
  
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
            />
      
            <Text style={styles.title1}>Comentários</Text>

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
                        onPress={setComment}
                    >
                        <Text>Submeter</Text>     
                    </TouchableOpacity>   
                    
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

});

export default Ep1_Sara;