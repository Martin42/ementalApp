import React, { useState, useCallback, useEffect} from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert , TextInput, Modal} from "react-native";
import { Entypo } from '@expo/vector-icons'
import YoutubePlayer from "react-native-youtube-iframe";
import { db, auth } from '../../../Firebase';
import { AntDesign } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box';

function Ep1_Sara({route, navigation}){

    useEffect(() => {
        getComments();
        getCommentsAdmin();
        getStatus ()
        if (route.params.episodio === 'EP4_1SARA'){
            setEp4(true);
        };
    },[mensagem])

    const currentUser = auth.currentUser.uid;
    const [currentStatus, setCurrentStatus] = useState('');

    const [mensagem, setMensagem] = useState();
    const [playing, setPlaying] = useState(false);
    const [modal, setModal] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentsAdmin, setCommentsAdmin] = useState([]);
    const [ep4, setEp4] = useState(false);
    const [confirmar, setConfirmar] = useState(false);

    const [modal2, setModal2] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);

    function validate1(){

        if (check1 === false) {
            setCheck1(true);
            setCheck2(false);
            setCheck3(false);
            setCheck4(false);
            setCheck5(false);
        }
    }

    function validate2(){

        if (check2 === false) {
            setCheck2(true);
            setCheck1(false);
            setCheck3(false);
            setCheck4(false);
            setCheck5(false);
        }
    }

    function validate3(){

        if (check3 === false) {
            setCheck3(true);
            setCheck1(false);
            setCheck2(false);
            setCheck4(false);
            setCheck5(false);
        }
    }

    function validate4(){

        if (check4 === false) {
            setCheck4(true);
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
            setCheck5(false);
        }
    }

    function validate5(){

        if (check5 === false) {
            setCheck5(true);
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
            setCheck4(false);
        }
    }

    function test() {
        if (ep4 == true){
            setModal2(true);
           
        } else {
            navigation.navigate('PlaylistSara');
        }
    };


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

    async function getCommentsAdmin (){
        const commentRef = db.collection(route.params.episodio);
        const snapshot = await commentRef.get()
        const comentariosAdmin = [];
        snapshot.forEach(doc => {
                comentariosAdmin.push({'id':doc.id, 'comentario': doc.data().comentario})
                
        })


        setCommentsAdmin(...commentsAdmin, ...comentariosAdmin);
        

       
    }


    function getStatus (){ db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            setCurrentStatus(doc.data().status)
         
            
        });
    }
    // Player 
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    
    if ((currentStatus == 0) || (currentStatus == 1)) {
        return(
            <View style={styles.container}>
            
            <ScrollView style={styles.container}>
                <View style={{flexDirection: 'row', height: 40, marginTop: '7.5%', alignItems: 'center', marginBottom: '2.5%'}}>
                    <TouchableOpacity
                        onPress={test}
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

                {comments.map((e, key) => (
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
                                {e}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}


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
                                <Text style={styles.modalTitle}>O teu comentário aguarda aprovação!</Text>
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

                <Modal  animationType='fade'
                        transparent={true}
                        visible={modal2}>
                    
                    <View style={styles.modalView}>
                        <View style={styles.modalContainer}>
                            <Image
                                source={require('../../../images/feedback_pop.png')}
                                style={styles.modalImage}
                            />
                            <Text style={styles.modalTitle}>Recomendarias esta aplicação?</Text>
        
                            <View style={styles.ratingContainer}>
                                
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate1(), setConfirmar(true)}}
                                    isChecked={check1}
                                    unCheckedImage={<Image source={require('../../../images/rating/1.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/1_selecionado.png')} style={styles.ratingImage} />}
                                />
        
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate2(), setConfirmar(true)}}
                                    isChecked={check2}
                                    unCheckedImage={<Image source={require('../../../images/rating/2.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/2_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate3(), setConfirmar(true)}}
                                    isChecked={check3}
                                    unCheckedImage={<Image source={require('../../../images/rating/3.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/3_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate4(), setConfirmar(true)}}
                                    isChecked={check4}
                                    unCheckedImage={<Image source={require('../../../images/rating/4.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/4_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate5(), setConfirmar(true)}}
                                    isChecked={check5}
                                    unCheckedImage={<Image source={require('../../../images/rating/5.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/5_selecionado.png')} style={styles.ratingImage} />}
                                />

        
                            </View>
                            { confirmar == true ? (
                                <TouchableOpacity
                                style={styles.entendi}
                                onPress={() => { setModal2(false), navigation.navigate('PlaylistSara') }}
                            >
                           
                                <Text style={styles.entendiText}>Submeter</Text>
                            </TouchableOpacity>
                            ) : (
                            <Text></Text>
                            )}
        
                        </View>
                    </View>
                </Modal>

                </View>
    )
} else {
    return(
        <View style={styles.container}>
            
            <ScrollView style={styles.container}>
                <View style={{flexDirection: 'row', height: 40, marginTop: '7.5%', alignItems: 'center', marginBottom: '2.5%'}}>
                    <TouchableOpacity
                        onPress={test}
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

                {/* {commentsAdmin.map((e) => (
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
                                {e.comentario}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))} */}


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
                                <Text style={styles.modalTitle}>O teu comentário aguarda aprovação!</Text>
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

                <Modal  animationType='fade'
                        transparent={true}
                        visible={modal2}>
                    
                    <View style={styles.modalView}>
                        <View style={styles.modalContainer}>
                            <Image
                                source={require('../../../images/feedback_pop.png')}
                                style={styles.modalImage}
                            />
                            <Text style={styles.modalTitle}>Recomendarias esta aplicação?</Text>
        
                            <View style={styles.ratingContainer}>
                                
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate1(), setConfirmar(true)}}
                                    isChecked={check1}
                                    unCheckedImage={<Image source={require('../../../images/rating/1.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/1_selecionado.png')} style={styles.ratingImage} />}
                                />
        
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate2(), setConfirmar(true)}}
                                    isChecked={check2}
                                    unCheckedImage={<Image source={require('../../../images/rating/2.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/2_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate3(), setConfirmar(true)}}
                                    isChecked={check3}
                                    unCheckedImage={<Image source={require('../../../images/rating/3.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/3_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate4(), setConfirmar(true)}}
                                    isChecked={check4}
                                    unCheckedImage={<Image source={require('../../../images/rating/4.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/4_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate5(), setConfirmar(true)}}
                                    isChecked={check5}
                                    unCheckedImage={<Image source={require('../../../images/rating/5.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/5_selecionado.png')} style={styles.ratingImage} />}
                                />
        
        
                            </View>
                            { confirmar == true ? (
                                <TouchableOpacity
                                style={styles.entendi}
                                onPress={() => { setModal2(false), navigation.navigate('PlaylistSara') }}
                            >
                           
                                <Text style={styles.entendiText}>Submeter</Text>
                            </TouchableOpacity>
                            ) : (
                            <Text></Text>
                            )}
        
                        </View>
                    </View>
                </Modal>

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
    paddingBottom: '10%',
},


entendi: {
    width: '80%',
    borderColor: '#6578B3',
    borderStyle: 'solid',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#6578B3',
    padding: '4%',
    marginTop: '10%',
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

export default Ep1_Sara;