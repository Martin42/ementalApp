import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

function Playlist40({ route, navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>

                <View>
                    <Text style={styles.title1}>40 Segundos</Text>
                    <Text style={styles.text2}>Trata-se de uma intervenção audiovisual, dirigida  a profissionais de saúde,​ de sensibilização e promoção de literacia em suicídio, com desmistificação de algumas crenças existentes.</Text>
                </View>

                <View style={styles.container2}>

                    <View style={styles.containerepisodios}>

                        {/* Mito 1  */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('EP40', {episodio: 'EP40_1', video: '', titulo: '' })}
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
                                onPress={() => navigation.navigate('Video40s')}
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
                                onPress={() => navigation.navigate('Videos40s')}
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
                                onPress={() => navigation.navigate('Video40s')}
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
                                onPress={() => navigation.navigate('Video40s')}
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
                                onPress={() => navigation.navigate('Video40s')}
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