import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, TextInput} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { auth, db } from '../../Firebase';
import { AntDesign } from '@expo/vector-icons';


function Homepage({ route, navigation }) {

    const [currentStatus, setCurrentStatus] = useState('');
    const [questionarioStatus, setQuestionarioStatus] = useState(false);
    const [questionarioMarcoStatus, setQuestionarioMarcoStatus] = useState(false);
    const [aprovado, setAprovado] = useState();
    const [code, setCode] = useState();    
    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const currentUser = auth.currentUser.uid;
    let codigo = 'A6B2C4P';

    function comparar(){
        if (code === codigo) {
            db.collection('users').doc(currentUser).set({
                pedido: 'aprovado'
            }, {merge: true})
            setModal(false)
            navigation.navigate('Homepage')
        } else {
            alert('Código Errado!')
        }
    };

    function sair(){
        auth.signOut();
    }


    function getQuestionarioStatus(){
        db
        .collection('Questionário Sara Inicial')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().concluido) == undefined) {
                setQuestionarioStatus(false)
            } else {
                setQuestionarioStatus(doc.data().concluido)
            }
       
        })
    }

    function getQuestionarioMarcoStatus(){
        db
        .collection('Questionário Marco Inicial')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().concluido) == undefined) {
                setQuestionarioMarcoStatus(false)
            } else {
                setQuestionarioMarcoStatus(doc.data().concluido)
            }
            
        })
    }


   function getStatus (){ db
                        .collection('users')
                        .doc(currentUser)
                        .get()
                        .then(doc => {
                            setCurrentStatus(doc.data().status) 
                        });
                    }


    function getAprovado (){
                    db
                        .collection('users')
                        .doc(currentUser)
                        .get()
                        .then(doc => {
                            setAprovado(doc.data().pedido)
                            
                        });
    }

    useEffect(() => {
        getStatus();
        getQuestionarioStatus();
        getQuestionarioMarcoStatus();
        getAprovado();
   
    },[])



if (currentStatus == 2) {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View>
                <StatusBar style={'auto'} />

                <Checkbox 
                    style={styles.sair}
                    onClick={() => {setModal2(true)}}
                    isChecked={true}
                    unCheckedImage={<Icon name='power' size={23} color='#D2D2D2' />}
                    checkedImage={<Icon name='power' size={23} color='#6578B3'/>}
                />   

                <Text style={styles.title1}>Intervenções</Text>

                <Text style={styles.text}>Estas intervenções foram estruturadas em narrativas audiovisuais que poderás acompanhar após responderes a um breve questionário.</Text>
            </View>
            <View style={styles.container2}>

                <Text style={styles.title2}>Websérie</Text>

                <Text style={styles.title3}>A Ferida Sara</Text>

                <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {if (questionarioStatus == 'true') {
                        navigation.navigate('PlaylistSara');
                    } else {
                        navigation.navigate('QiSaraA');
                    }
                }}

                >
                    <Image
                    
                        source={require('../../images/Sara.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>
                <Text style={styles.title2}>Podcast</Text>
                <Text style={styles.title3}>Um Marco na Vida</Text>

                <TouchableOpacity
                     style={{alignSelf: 'center'}}
                     onPress={() => { if (questionarioMarcoStatus == 'true') {
                         navigation.navigate('PlaylistMarco');
                     } else {
                         navigation.navigate('QiMarcoA');
                        }
                    }}
                    >
                    <Image
                        source={require('../../images/marco.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>

                <Text style={styles.title2}>Vídeos</Text>

                <Text style={styles.title3}>40 segundos</Text>

                <TouchableOpacity
                    style={{alignSelf: 'center', marginBottom: '10%'}}
                    onPress={() => navigation.navigate('Playlist40')}
                    // Adicionar onPress
                >
                    <Image
                        source={require('../../images/40.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>
        

            </View>

            <View>

            </View>

            <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal2}
                    >
                    <View style={styles.modalView}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Tens a certeza que queres terminar sessão?</Text>      
                                <View style={styles.modalContainer2}>
                                    <TouchableOpacity
                                        style={styles.entendi}
                                        onPress={() => { setModal2(false), sair(), navigation.navigate('Landing') }}
                                    >
                                        <Text style={styles.entendiText}>Sim</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.entendi}
                                        onPress={() => { setModal2(false), navigation.navigate('Homepage') }}
                                    >
                                        <Text style={styles.entendiText}>Não</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
      
      
                </Modal>
      

        </ScrollView>

            <View style={styles.tabBar}>
                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => {navigation.navigate('Notificacoes')}} 
                    isChecked={false}
                    unCheckedImage={<Icon name='notifications' size={28} color='#D2D2D2'/>}
                    checkedImage={<Icon name='notifications' size={28} color='#6578B3'/>}
                />           
                </View>

                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Homepage')}
                    isChecked={true}
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

                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('PainelControlo')} 
                    isChecked={false}
                    unCheckedImage={<Icon1 name='equalizer' size={30} color='#D2D2D2' />}
                    checkedImage={<Icon1 name='equalizer' size={30} color='#6578B3'/>}
                />  
                </View>

            </View>
        </View>
    )
} else if (currentStatus == 1) {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View>
                <StatusBar style={'auto'} />

                <Checkbox 
                    style={styles.sair}
                    onClick={() => {setModal2(true)}}
                    isChecked={true}
                    unCheckedImage={<Icon name='power' size={23} color='#D2D2D2' />}
                    checkedImage={<Icon name='power' size={23} color='#6578B3'/>}
                />   

                <Text style={styles.title1}>Intervenções</Text>

                <Text style={styles.text}>Estas intervenções foram estruturadas em narrativas audiovisuais que poderás acompanhar após responderes a um breve questionário.</Text>
            </View>
            <View style={styles.container2}>

                <Text style={styles.title2}>Websérie</Text>

                <Text style={styles.title3}>A Ferida Sara</Text>

                <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {if (questionarioStatus == 'true') {
                        navigation.navigate('PlaylistSara');
                    } else {
                        navigation.navigate('QiSaraA');
                    }
                }}

                >
                    <Image
                    
                        source={require('../../images/Sara.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>
                <Text style={styles.title2}>Podcast</Text>
                <Text style={styles.title3}>Um Marco na Vida</Text>

                <TouchableOpacity
                     style={{alignSelf: 'center'}}
                     onPress={() => { if (questionarioMarcoStatus == 'true') {
                         navigation.navigate('PlaylistMarco');
                     } else {
                         navigation.navigate('QiMarcoA');
                        }
                    }}
                    >
                    <Image
                        source={require('../../images/marco.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>

                <Text style={styles.title2}>Vídeos</Text>

                <Text style={styles.title3}>40 segundos</Text>


                {
                    (aprovado == 'aprovado') ? (
                        <TouchableOpacity
                            style={{alignSelf: 'center', marginBottom: '10%'}}
                            onPress={() => navigation.navigate('Playlist40')}
                            // Adicionar onPress
                        >
                            <Image
                                source={require('../../images/40.png')}
                                style={styles.conteudo}
        
                            />
                        </TouchableOpacity>
                    ) : (
                        <View>
                            <TouchableOpacity
                            style={{alignSelf: 'center'}}
                            onPress={() => {setModal(true)}}
                            >
                                <Image
                                    source={require('../../images/conteudoBloqueado.png')}
                                    style={styles.conteudo}

                                    />
                            </TouchableOpacity>
                            <TouchableOpacity
                                 style={{alignSelf: 'center', marginBottom: '10%'}}
                                 onPress={() => navigation.navigate('Pedido', {status: currentStatus})}>
                                <Text style={styles.title4}>Pedir Acesso</Text>
                                </TouchableOpacity>
                        </View>
                    )
                }   

            </View>

            <View>

            </View>

            <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal2}
                    >
                    <View style={styles.modalView}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Tens a certeza que queres terminar sessão?</Text>      
                                <View style={styles.modalContainer2}>
                                    <TouchableOpacity
                                        style={styles.entendi}
                                        onPress={() => { setModal2(false), sair(), navigation.navigate('Landing') }}
                                    >
                                        <Text style={styles.entendiText}>Sim</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.entendi}
                                        onPress={() => { setModal2(false), navigation.navigate('Homepage') }}
                                    >
                                        <Text style={styles.entendiText}>Não</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
      
      
                </Modal>

                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal}
                    >
                    <View style={styles.modalView}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Insira o código de acesso que recebeu por favor</Text>    
                                <View style={{flexDirection: 'row', marginTop: '10%', marginBottom: '10%'}}>  
                                    <TextInput
                                        style={styles.inputMensagem}
                                        width='60%'
                                        height= "100%"
                                        marginLeft="5%"
                                        placeholder= 'Código aqui...'
                                        backgroundColor= '#CFE0FB'
                                        placeholderTextColor= 'black'
                                        onChangeText={code => setCode(code)}
                                        />
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity
                                    style={styles.voltar}
                                onPress={() => { comparar()}}>
                                <Text style={styles.entendiText2}>Submeter</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                style={styles.voltar}
                                onPress={() => {setModal(false)}}>
                                <Text style={styles.entendiText2}>Voltar</Text>
                                </TouchableOpacity>
                                </View>
                        </View>
                    </View>
      
      
                </Modal>
      

        </ScrollView>

            <View style={styles.tabBar}>
                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => {navigation.navigate('Notificacoes')}} 
                    isChecked={false}
                    unCheckedImage={<Icon name='notifications' size={28} color='#D2D2D2'/>}
                    checkedImage={<Icon name='notifications' size={28} color='#6578B3'/>}
                />           
                </View>

                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Homepage')}
                    isChecked={true}
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
} else {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View>
                <StatusBar style={'auto'} />

                <Checkbox 
                    style={styles.sair}
                    onClick={() => {setModal2(true)}}
                    isChecked={true}
                    unCheckedImage={<Icon name='power' size={23} color='#D2D2D2' />}
                    checkedImage={<Icon name='power' size={23} color='#6578B3'/>}
                />   

                <Text style={styles.title1}>Intervenções</Text>

                <Text style={styles.text}>Estas intervenções foram estruturadas em narrativas audiovisuais que poderás acompanhar após responderes a um breve questionário.</Text>
            </View>

            <View style={styles.container2}>

                <Text style={styles.title2}>Websérie</Text>

                <Text style={styles.title3}>A Ferida Sara</Text>

                <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => {if (questionarioStatus == 'true') {
                        navigation.navigate('PlaylistSara');
                    } else {
                        navigation.navigate('QiSaraA');
                    }
                }}

                >
                    <Image
                    
                        source={require('../../images/Sara.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>
                <Text style={styles.title2}>Podcast</Text>
                <Text style={styles.title3}>Um Marco na Vida</Text>

                <TouchableOpacity
                     style={{alignSelf: 'center', marginBottom: '10%'}}
                     onPress={() => { if (questionarioMarcoStatus == 'true') {
                        navigation.navigate('PlaylistMarco');
                    } else {
                        navigation.navigate('QiMarcoA');
                       }
                   }}
                >
                    <Image
                        source={require('../../images/marco.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>


            </View>

            <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modal2}
                    >
                    <View style={styles.modalView}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>Tens a certeza que queres terminar sessão?</Text>      
                                <View style={styles.modalContainer2}>
                                    <TouchableOpacity
                                        style={styles.entendi}
                                        onPress={() => { setModal2(false), sair(), navigation.navigate('Landing')}}
                                    >
                                        <Text style={styles.entendiText}>Sim</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={styles.entendi}
                                        onPress={() => { setModal2(false), navigation.navigate('Homepage') }}
                                    >
                                        <Text style={styles.entendiText}>Não</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    </View>
      
      
                </Modal>

        </ScrollView>

            <View style={styles.tabBar}>
                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => {navigation.navigate('Notificacoes')}}
                    isChecked={false}
                    unCheckedImage={<Icon name='notifications' size={28} color='#D2D2D2'/>}
                    checkedImage={<Icon name='notifications' size={28} color='#6578B3'/>}
                />           
                </View>

                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Homepage')}
                    isChecked={true}
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

    sair: {
        position: 'absolute',
        right: 25,
        top: 50,
    },

    icon: {
        padding: '10%', 
        alignSelf: 'center',
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
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '3%',
        marginTop: '13%',

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
        fontSize: 15,
    },

    conteudo: {       //Imagem da Sara (conteudos)
        width: 332,
        height: 167,
        marginTop: '3%',
        resizeMode: 'contain',
    },

    tabBar: {
        flexDirection: 'row', 
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#D7D7D7',
        
    },

    login: {
        marginTop: '2%',
        width: '35%',
        height: 40,
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 300,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        padding: '2%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
        
    },

    loginText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18, 
        marginTop: '1%',
  
    },

    entendi: {
        width: '40%',
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        padding: '7.5%',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
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
        fontWeight: 'bold',
        fontSize: 15,
    },

    modalContainer2: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: '10%',
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
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',
    },

    voltar: {
        width: '40%',
        borderColor: '#6578B3',
        borderStyle: 'solid',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },

    entendiText2: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 15
    },

});

export default Homepage;


// resolução questionário inicial -> renderizar a primeira vez e passar uma variavel a confirmar o preenchimento do questionario
// no inicio do código implementar um if que apenas executa o código se o user ainda não tiver respondido, caso contrário navigation.replace('pagina seguinte') 