import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { auth, db } from '../../Firebase';



function Homepage({ route, navigation }) {

    const [currentStatus, setCurrentStatus] = useState('');
    const [questionarioStatus, setQuestionarioStatus] = useState(false);
    const [questionarioMarcoStatus, setQuestionarioMarcoStatus] = useState(false);

    const currentUser = auth.currentUser.uid;

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

    useEffect(() => {
        getStatus();
        getQuestionarioStatus();
        getQuestionarioMarcoStatus();
    },[])



if (currentStatus == 2) {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View>
                <StatusBar style={'auto'} />

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
                     style={{alignSelf: 'center'}}
                >
                    <Image
                        source={require('../../images/conteudoBloqueado.png')}
                        style={styles.conteudo}

                    />
                </TouchableOpacity>
                <Text style={styles.title4}>Exclusivo a profissionais de saúde</Text>

            </View>

        </ScrollView>

            <View style={styles.tabBar}>
                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Notificacoes')} // Alterar para Notificações
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

        </ScrollView>

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
        width: 365,
        height: 180,
        marginTop: '3%',
        resizeMode: 'contain',
       
    },

    tabBar: {
        flexDirection: 'row', 
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#D7D7D7',
        
    },

    



});

export default Homepage;


// resolução questionário inicial -> renderizar a primeira vez e passar uma variavel a confirmar o preenchimento do questionario
// no inicio do código implementar um if que apenas executa o código se o user ainda não tiver respondido, caso contrário navigation.replace('pagina seguinte') 