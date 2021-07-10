import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { db, auth } from '../../../Firebase';

function Playlist40({ route, navigation }) {

    useEffect(() => {
        getStatus();
    }, [])

    const currentUser = auth.currentUser.uid;
    const [currentStatus, setCurrentStatus] = useState('');


    function getStatus (){ db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            setCurrentStatus(doc.data().status) 
        });
    }


    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>

                <View>
                    <Text style={styles.title1}>40 Segundos</Text>
                    <Text style={styles.text2}>Trata-se de uma intervenção audiovisual, dirigida  a profissionais de saúde,​ de sensibilização e promoção de literacia em suicídio, com desmistificação de algumas crenças existentes.</Text>
                </View>

                <View style={styles.container2}>

                    <View style={styles.containerepisodios}>


                    <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_NATALIA', video: 'Lwwq5rk_SSE', titulo: 'D. Natália Testemunho' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Testemunho 1</Text>
                                <Text style={styles.text}>D. Natália Testemunho</Text>
                            </View>
                        </View>


                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_FAMILIA', video: 'qcqzoRvT3fg', titulo: 'Família Testemunho' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Testemunho 2</Text>
                                <Text style={styles.text}>Família Testemunho</Text>
                            </View>
                        </View>


                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_JORGE', video: 'AoQg11ngA54', titulo: 'Jorge Testemunho' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Testemunho 3</Text>
                                <Text style={styles.text}>Jorge Testemunho</Text>
                            </View>
                        </View>


                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_OPINIAO', video: 'xeWwg0-xSLE', titulo: 'Opinião Clínica' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Testemunho 4</Text>
                                <Text style={styles.text}>Opinião Clínica</Text>
                            </View>
                        </View>





                        {/* Mito 1  */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_1', video: 'pqU40OGrizw', titulo: 'Mito 1 - A pessoa que fala sobre suicídio...' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Mito 1</Text>
                                <Text style={styles.text}>A pessoa que fala sobre suicídio...</Text>
                            </View>
                        </View>

                        {/* Mito 2 */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_2', video: 'uYu9RE4OY7Q', titulo: 'Mito 2 - O suicídio é...' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Mito 2</Text>
                                <Text style={styles.text}>O suicídio é...</Text>
                            </View>
                        </View>

                        {/* Mito 3 */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_3', video: 'S-2xk-nByT0', titulo: 'Mito 3 - As pessoas que se suicidam...' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Mito 3</Text>
                                <Text style={styles.text}>As pessoas que se suicidam...</Text>
                            </View>
                        </View>

                        {/* Mito 4*/}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_4', video: 'FXU3EYUEjMc', titulo: 'Mito 4 - Se perguntarmos à pessoa se tem pensamentos suicidas, isso...' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Mito 4</Text>
                                <Text style={styles.text}>Se perguntarmos à pessoa se tem pensamentos suicidas, isso...</Text>
                            </View>
                        </View>

                        {/* Mito 5 */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_5', video: 'VfjxTTXEn8E', titulo: 'Mito 5 - Quando alguém mostra sinais de melhoria ou sobrevive a uma tentativa de suicídio...' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Mito 5</Text>
                                <Text style={styles.text}>Quando alguém mostra sinais de melhoria ou sobrevive a uma tentativa de suicídio...</Text>
                            </View>
                        </View>

                        {/* Mito 6 */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_6', video: 'AgEozo7_a3o', titulo: 'Mito 6 - A tendência para o suicídio...' })}
                            >
                                <Image
                                    source={require('../../../images/40.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Mito 6</Text>
                                <Text style={styles.text}>A tendência para o suicídio...</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >

            <View style={styles.tabBar}>
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
                    
                    <View style={{flex: 1}}>
                    <Checkbox 
                        style={styles.icon}
                        onClick={() => navigation.navigate('Notificacoes')} 
                        isChecked={false}
                        unCheckedImage={<Icon name='notifications' size={28} color='#D2D2D2'/>}
                        checkedImage={<Icon name='notifications' size={28} color='#6578B3'/>}
                    />           
                    </View>
                    )}

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
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: '100%',
        width: '100%',
        marginTop: '10%',
    },
    container3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: '5%',

    },

    container4: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: '2.5%',

    },

    containerepisodios: {
        flex: 1,
        marginTop: '2%',
        marginBottom: '8%',
        marginLeft:'3%',
        marginRight: '3%',
    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
    },

    text2: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
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
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '3%',
        marginTop: '5%'
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
    episodio: { //Imagem do episodio
        width: 150,
        height: 90,
        marginLeft: '13%',
        marginTop: '5%',
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
export default Playlist40;