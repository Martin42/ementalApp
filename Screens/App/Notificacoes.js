import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { auth, db } from '../../Firebase';
import { color } from 'react-native-reanimated';

function Notificacoes({ route, navigation }) {

    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View>

                <Text style={styles.title1}>Notificações</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1}}>

                        <Text 
                        style={styles.title3}
                        onPress={() => navigation.navigate('Conversa')}>
                        Um profissional de saúde respondeu ao teu pedido de esclarecimento.
                        </Text>

                        <Image
                            source={require('../../images/notificacao.png')}
                            style={styles.imagem}
                        />
                    </View>
                </View>
                <Text style={styles.title4}>Novo episódio de Um Marco na Vida disponível!</Text>

                <Text style={styles.title4}>Novo episódio de A Ferida Sara disponível!</Text>

                <Text style={styles.title4}>Novo episódio de A Ferida Sara disponível!</Text>

                <Text style={styles.title4}>Novo episódio de A Ferida Sara disponível!</Text>

                <Text style={styles.title4}>Novo episódio de A Ferida Sara disponível!</Text>

                <Text style={styles.title4}>Novo episódio de A Ferida Sara disponível!</Text>


            </View>

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
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '7%',

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