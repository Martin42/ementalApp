import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert, TextInput, Modal } from "react-native";
import { Entypo } from '@expo/vector-icons';
import Checkbox from 'react-native-check-box';
import { SwipeablePanel} from 'rn-swipeable-panel';
import { db, auth } from '../../../Firebase';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
 


function AudioMarco({ route, navigation }) {

    // validar 

    function validate(){

        if (checkPause === false) {
            setCheckPause(true);
         
        } else {
            setCheckPause(false);
            
        }
    }



    // player 

    const [sound, setSound] = useState();

    async function playSound(){
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('./Audios/Marco1.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    async function stopSound(){
        await sound.pauseAsync();
    }



    const [modal, setModal] = useState(false);
    const [image, setImage] = useState(false);
    const [check, setCheck] = useState(false);
 

  function changeImage() {

      if (image === false) {
          setImage(true);
       
      } else {
          setImage(false);
      
      }
  }

    useEffect(() => {
            getComments()
    }, [])


  useEffect(() => {
     
       return sound ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
      } : undefined;
  },[sound])






  const [mensagem, setMensagem] = useState();
  const [modal2, setModal2] = useState(false);
  const [comments, setComments] = useState([]);
  const [checkPause, setCheckPause] = useState(false);

  

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
      const snapshot = await commentRef.get()
      const comentarios = [];
      snapshot.forEach(doc => {
          if (doc.data().aprovado === 'true') {
                console.log(doc.data().comentario);
                comentarios.push(doc.data().comentario);
                console.log(comentarios);
          } 
      })

        setComments(...comments, comentarios);
     
  }

  const [panelProps, setPanelProps] = useState({
      fullWidth: true,
      openLarge: false,
      showCloseButton: true,
      onClose: () => closePanel(),
      onPressCloseButton: () => closePanel(),
      // ...or any prop you want
    });
    const [isPanelActive, setIsPanelActive] = useState(false);
  
    const openPanel = () => {
      setIsPanelActive(true);
    };
  
    const closePanel = () => {
      setIsPanelActive(false);
    };
    

    if (isPanelActive == false) {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', height: 40, marginTop: '7.5%', alignItems: 'center', marginBottom: '2.5%' }}>
                    <TouchableOpacity
                        onPress={() => setModal(true)}
                        style={styles.icon}>
                        <Entypo name="chevron-thin-left" size={24} color="black" />
                    </TouchableOpacity>
      
      
                    <Text style={{ fontSize: 20 }}>
                        {route.params.titulo}
                    </Text>
                </View>
      
                <Image
                    source={require('../../../images/ep_marco.png')}
                    style={styles.imagem}
                />
      
                <Text style={styles.titulo}>
                    {route.params.episodio}
                </Text>
                <Text style={styles.subtitulo}>
                    {route.params.serie}
                </Text>
      
                
      
             {/* PLAYER  */}
      
                 {
                     checkPause ? (
                         <TouchableOpacity 
                              style={{marginTop: '25%', alignItems: 'center', width: '12%',  alignSelf: 'center'}}
                              onPress={() => {validate(), stopSound()}}
                         >
                          <Image 
                                  style={{width: 50, height: 50, alignSelf: 'center'}}
                                  source={require('../../../images/pause.png')}
                          />
                         </TouchableOpacity>
                     ) : (
                          <TouchableOpacity 
                              style={{marginTop: '25%',  width: '12%', alignSelf: 'center'}}
                              onPress={() => {validate(), playSound()}}
                          >
                              <Image 
                                      style={{width: 50, height: 50, alignSelf: 'center'}}
                                      source={require('../../../images/play.png')}
                              />
                       </TouchableOpacity>
                     )
                 } 
      
                 {/* esconder botão quando slider está ativo */}
      
              
      
               
                <View style={styles.container}>
                <View style={{ flex: 1}}>
                <AntDesign name="up" size={24} color="#6578B3" style={{alignSelf: 'center', position: 'absolute', top: 110}} onPress={openPanel}/>
                <Text style={styles.subtitulo, {marginTop: '30%', alignSelf: 'center', color: '#6578B3', fontWeight: 'bold'}} onPress={openPanel}>
                    Comentários      
                </Text>
            
                </View>
                <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                    <View>
                        {comments.map((e, key) => (
                            <View style={{flexDirection:'row', marginLeft: '10%', marginRight: '10%', marginBottom: '5%'}}>
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
                                        <Text key={key} style={{flexDirection:'column'}, styles.inputMensagem2}>
                                        {e}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
      
      
      
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
      
                    {/* modal 1 */}

                    <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modal2}
                        >
                            <View style={styles.modalView}>
                                <View style={styles.modalContainer}>
                                <Image 
                                    source={require('../../../images/comentario-pop.png')}
                                    style={styles.modalImage}
                                />
                                <Text>O teu comentário precisa de aprovação!</Text>
                                <Text>Terás de aguardar que o teu comentário seja aprovado.</Text>
                                <TouchableOpacity
                                    style={styles.entendi}
                                    onPress={()=> { setModal2(false)}}
                                >
                                    <Text style={styles.entendiText}>Entendi!</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                            
                        
                        </Modal>
      
                </SwipeablePanel>
                </View>
      
      
      
                    {/* modal 2 */}
      
                    <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal}
                    >
                    <View style={styles.modalView}>
                        <View style={styles.modalContainer}>
                            <Image
                                source={require('../../../images/feedback_pop.png')}
                                style={styles.modalImage}
                            />
                            <Text style={styles.modalTitle}>Recomendarias esta aplicação?</Text>
      
                            <View style={styles.ratingContainer}>
      
                                <TouchableOpacity
                                    onPress={() => changeImage()}
                                   >
                                </TouchableOpacity>
      
      
      
                                {/*
                            <Checkbox
                                    style={styles.ratingCheckbox}
                                    onClick={() => validate()}
                                    isChecked={check}
                                    unCheckedImage={<Image source={require('../../../images/rating/1.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/1_selecionado.png')} style={styles.ratingImage} />}
                                />
      
                                <Checkbox
                                    style={styles.ratingCheckbox}
                                    onClick={() => validate()}
                                    isChecked={check}
                                    unCheckedImage={<Image source={require('../../../images/rating/2.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/2_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <Checkbox
                                    style={styles.ratingCheckbox}
                                    onClick={() => validate()}
                                    isChecked={check}
                                    unCheckedImage={<Image source={require('../../../images/rating/3.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/3_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <Checkbox
                                    style={styles.ratingCheckbox}
                                    onClick={() => validate()}
                                    isChecked={check}
                                    unCheckedImage={<Image source={require('../../../images/rating/4.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/4_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <Checkbox
                                    style={styles.ratingCheckbox}
                                    onClick={() => validate()}
                                    isChecked={check}
                                    unCheckedImage={<Image source={require('../../../images/rating/5.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/5_selecionado.png')} style={styles.ratingImage} />}
                                /> */}
      
      
                            </View>
      
                            <TouchableOpacity
                                style={styles.entendi}
                                onPress={() => { setModal(false), navigation.navigate('PlaylistMarco') }}
                            >
                                <Text style={styles.entendiText}>Submeter</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
      
      
                </Modal>
      
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
            <View>
            <Text style={styles.subtitulo, {marginTop: '30%', justifyContent: 'center', alignContent: 'center', textAlign: 'center', marginLeft: '10%', marginRight: '10%'}} onPress={openPanel}>Comentários</Text>
            <AntDesign name="down" size={24} color="black" style={{justifyContent: 'center', alignContent: 'center', textAlign: 'center', marginLeft: '10%', marginRight: '10%'}} onPress={openPanel}/>
            </View>
            <SwipeablePanel {...panelProps} isActive={isPanelActive}>
                <View>
                    {comments.map((e, key) => (
                        <View style={{flexDirection:'row', marginLeft: '10%', marginRight: '10%', marginBottom: '5%'}}>
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
                                    <Text key={key} style={{flexDirection:'column'}, styles.inputMensagem2}>
                                    {e}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
  
  
  
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
  
                <Modal
                        animationType='fade'
                        transparent={true}
                        visible={modal2}
                    >
                        <View style={styles.modalView}>
                            <View style={styles.modalContainer}>
                            <Image 
                                source={require('../../../images/comentario-pop.png')}
                                style={styles.modalImage}
                            />
                            <Text>O teu comentário precisa de aprovação!</Text>
                            <Text>Terás de aguardar que o teu comentário seja aprovado.</Text>
                            <TouchableOpacity
                                style={styles.entendi}
                                onPress={()=> { setModal2(false)}}
                            >
                                <Text style={styles.entendiText}>Entendi!</Text>
                            </TouchableOpacity>
                            </View>
                        </View>
                        
                    
                    </Modal>
  
            </SwipeablePanel>
            </View>
        )
    }
 

}


const styles = StyleSheet.create({

  container: {
      flex: 1,
      backgroundColor: 'white',
      width: '100%',
  },

  imagem: {
      marginTop: '25%',
      resizeMode: 'contain',
      marginLeft: 'auto',
      marginRight: 'auto',
  },

  title1: {
      fontSize: 20,
      fontWeight: 'bold',
      marginLeft: '10%',
      marginRight: '10%',
      marginBottom: '5%',
      marginTop: '-5%',
  },

  titulo: {
      marginTop: '8%',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontWeight: 'bold',
      fontSize: 20,
  },

  subtitulo: {
      marginTop: '2%',
      textAlign: 'center'
  },

  inputField: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      marginLeft: '10%',
      marginRight: '10%',
  },

  inputField2: {
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

  // modal styling

  ratingContainer: {
      flex: 1,
      flexDirection: 'row',
      marginBottom: '10%',
      alignItems: 'center',
      marginTop: '10%',


  },

  ratingImage: {
      width: 46,

  },

  ratingCheckbox: {
      flex: 1,
      alignItems: 'center',

  },


  entendi: {
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
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 25,
      shadowColor: 'red',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 4,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: 'white',
  },

  modalImage: {
      marginBottom: '12%',
      marginTop: '5%',
      height: 100,
      width: '50%'
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

export default AudioMarco;