import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { color } from 'react-native-reanimated';
import { auth, db } from '../../Firebase'

function Notificacoes({ route, navigation }) {
    
    const currentUser = auth.currentUser.uid;
    const [conteudo, setConteudo] = useState([]);
    const [notificacao, setNotificacao] = useState([])

    useEffect(() => {
        getNotificacoes();
    }, [])

    async function getNotificacoes(){
      const NotificacoesRef = db.collection('Notificacoes').where('User', '==', currentUser).orderBy('fulldata', 'asc');
      const snapshot = await NotificacoesRef.get();
      const Notificacao = [];
      snapshot.forEach(doc => { 
        setNotificacao(state => ({
            ...state,
            [ doc.id ] : doc.data()
        }))
      });
    }

    function setVisto(id){
        db
        .collection('Notificacoes')
        .doc(id)
        .set({
            Visto: true
        }, {merge: true})
    }

    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View style={{backgroundColor: '#CFE0FB', paddingTop: '10%'}} />
            <Image source={require('../../images/Notificacoes.png')} style={{width: '100%'}} />
                {Object.entries(notificacao).map(([id, value]) => (
                        <View key={[id]} style={styles.container3}>

                            <TouchableOpacity
                            onPress={() => {setVisto(id), navigation.navigate(value.Destino)}}>
                                { value.Visto == true ? (
                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>
                                    <Text 
                                    style={styles.title4}>
                                    {[value.Conteudo]}
                                    </Text>
                                    </View>
                                ) : (
                                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>
                                    <Text 
                                    style={styles.title3}>
                                    {[value.Conteudo]}
                                    </Text>
                                    
                                    <Image
                                    source={require('../../images/notificacao.png')}
                                    style={styles.imagem}
                                    />
                                    </View>

                                )}
                            </TouchableOpacity>
                </View>
                ))}

        </ScrollView>

            <View style={styles.tabBar}>
                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Notificacoes')} // Alterar para Notificações
                    isChecked={true}
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



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',

    },

    container2: {
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: '100%',
        width: '100%',
        marginTop: '10%',
        paddingBottom: '15%',

    },

    

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
    },

    text2: {
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
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '5%',
        marginTop: '15%',

    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: '10%',
        marginBottom: '3%',
        marginTop: '7%',

    },

    titulo2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: '10%',
        marginBottom: '3%',
        marginTop: '15%',

    },

    title3: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '7%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '13%',
        paddingRight:'6%',

    },

    title4: {
        fontSize: 20,
        marginBottom: '7%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '13%',
        paddingRight:'6%',

    },

    tabBar: {
        flexDirection: 'row', 
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#D7D7D7',
        
    },

    contacto: {
        borderBottomWidth: 1, 
        borderColor: '#ECEDEF',
        width: '80%', 
        alignSelf: 'center', 
        paddingBottom: '7%'
    },

    contacto2: {
        width: '80%', 
        alignSelf: 'center', 
        paddingBottom: '7%'
    },

    ticketContainer: {
        flexDirection: 'row', 
        marginLeft: '10%', 
        marginRight: '10%', 
        marginTop: '5%',
    },

    ticketLeft: {
        flex: 1, 
        backgroundColor: '#CFE0FB', 
        padding: '8%', 
        borderWidth: 1, 
        borderTopLeftRadius: 30, 
        borderBottomLeftRadius: 30,
        borderColor: '#CFE0FB', 
        marginRight: '1%'
    },

    ticketRight: {
        flex: 5, 
        backgroundColor: '#ECEDEF', 
        padding: '6%', 
        borderWidth: 1, 
        borderTopRightRadius: 30, 
        borderBottomRightRadius: 30, 
        borderColor: '#ECEDEF', 
        justifyContent: 'center',
    },

    setLeft: {
       fontSize: 18, 
       fontWeight: 'bold', 
       alignSelf: 'center',
       color: '#6578B3',
    },
    
    imagem: {
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: '10%',
        marginTop: '7%'
        
    },



});

export default Notificacoes;