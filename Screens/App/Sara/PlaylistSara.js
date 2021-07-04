import React, { useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { db, auth } from '../../../Firebase';

function PlaylistSara({ route, navigation }) {

    useEffect(() => {
        getEP2();
    }, []);


    const currentUser = auth.currentUser.uid;
    const [EP2, setEP2] = useState(false);

    function getEP2(){

        const currentTime = new Date() / 1000;
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EPI2) == undefined) {
                console.log('BOAS');
            } else {
                if ((doc.data().EPI2.seconds + 15000) <= currentTime) {
                    console.log('Video Disponivel');
                    setEP2(true);
                } else {
                    console.log('Video Indisponivel');
                }
            }
        })


    }


    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>

                <View>
                    <Text style={styles.title1}>A Ferida Sara</Text>
                    <Text style={styles.text}>Esta websérie explica a jornada de Sara, uma recém estudante do ensino superior, que apresenta sintomas depressivos.</Text>
                </View>

                <View style={styles.container2}>

                    <View style={styles.containerepisodios}>

                        {/* Episodio 1 psicoeducativo (dia 1)  */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP1PSI', video: '3xFja2DpzNE', titulo: 'A Ferida Sara - Ep. 1 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnail.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 1</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>

                        {/* Ferida Sara Episodio 1 (dia 2) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP1SARA', video: 'a_Po_QQWSa0', titulo: 'A Ferida Sara - Ep. 1 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 1</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Psicoeducativo Episodio 2 (dia 5) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP2PSI', video: 'HhoYc8vR9CY', titulo: 'A Ferida Sara - Ep. 2 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 2</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>

                        {/* Ferida Sara Episodio 2 (dia 7)*/}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP2SARA', video: 'GEzKXcHighA', titulo: 'A Ferida Sara - Ep. 2 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 2</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Desafio 1 (dia 7) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES1', video: 'thFvboH9RdQ', titulo: 'A Ferida Sara - Desafio 1' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 1</Text>
                                <Text style={styles.text}>dhjds</Text>
                            </View>
                        </View>

                        {/* Episodio 3 Psicoeducativo (dia 9) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP3PSI', video: 'xdaxmlnb318', titulo: 'A Ferida Sara - Ep. 3 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 3</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>

                        {/* Episodio 3 Ferida Sara (dia 10) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP3SARA', video: '6-9817rZzZQ', titulo: 'A Ferida Sara - Ep. 3 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 3</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Episodio 4 Psicoeducativo (dia 11) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4PSI', video: '9EtDFX56b0Y', titulo: 'A Ferida Sara - Ep. 4 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 4</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>

                        {/* Episodio 4 parte 1 Ferida Sara (dia 13)*/}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4_1SARA', video: 'MeY9V2hoheY', titulo: 'A Ferida Sara - Ep. 4 parte I Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 4: Parte I</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Desafio 2 (dia 13)*/}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES2', video: '73tI-PF2Wts', titulo: 'A Ferida Sara - Desafio 2' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 2</Text>
                                <Text style={styles.text}>huei</Text>
                            </View>
                        </View>

                        {/* Episodio 4 parte 2 ferida Sara (dia 14) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4_2SARA', video: 'PFim1HS6UqU', titulo: 'A Ferida Sara - Ep. 4 parte II Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 4: parte II</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Episodio 5 Psicoeducativo (dia 17) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP5PSI', video: 'aKEnz8U0Rk0', titulo: 'A Ferida Sara - Ep. 5 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 5</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>

                        {/* Episodio 5 ferida Sara (dia 20) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP5SARA', video: 'qiRAt17222s', titulo: 'A Ferida Sara - Ep. 5 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 5</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>


                        {/* Desafio 3 (dia 20) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES3', video: 'B-XCGPRTYxc', titulo: 'A Ferida Sara - Desafio 3' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 3</Text>
                                <Text style={styles.text}>fjfjfj</Text>
                            </View>
                        </View>


                        {/* Episodio 6 psicoeducativo (dia 21) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP6PSI', video: 'vNn8IsMLJCQ', titulo: 'A Ferida Sara - Ep. 6 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 6</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>

                        {/* Episodio 6 ferida Sara (dia 23) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP6SARA', video: 'ju6adpcXpZY', titulo: 'A Ferida Sara - Ep. 6 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 6</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Desafio 4 (dia 23) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES4', video: 'BOE2CfddAIU', titulo: 'A Ferida Sara - Desafio 4' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 4</Text>
                                <Text style={styles.text}>ffff</Text>
                            </View>
                        </View>

                        {/* Episodio 7 ferida Sara (dia 24) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP7SARA', video: 'svmo1kUByzs', titulo: 'A Ferida Sara - Ep. 7 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 7</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Desafio 5 (dia 24) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES5', video: 'jHY0rSBumnI', titulo: 'A Ferida Sara - Desafio 5' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 5</Text>
                                <Text style={styles.text}>ffff</Text>
                            </View>
                        </View>


                        {/* Episodio 7 psicoeducativo (dia 27) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP7PSI', video: 'Rx5vYuJevPg', titulo: 'A Ferida Sara - Ep. 7 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 7</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>


                        {/* Episodio 8 ferida Sara (dia 28) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP8SARA', video: 'VQlyrsG2SH0', titulo: 'A Ferida Sara - Ep. 8 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 8</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>


                        {/* Desafio 6 (dia 28) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES6', video: '5IWgzT7LO7Q', titulo: 'A Ferida Sara - Desafio 6' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 6</Text>
                                <Text style={styles.text}>aaa</Text>
                            </View>
                        </View>


                        {/* Episodio 8 Psicoeducativo (dia 30) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP8PSI', video: 'JgW2rzNwQpc', titulo: 'A Ferida Sara - Ep. 8 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 9</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>

                        {/* Episodio 9 ferida Sara (dia 31) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP9SARA', video: '0B0WzdWMvDw', titulo: 'A Ferida Sara - Ep. 9 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 10</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>


                        {/* Episodio 9 psicoeducativo (dia 34) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP9PSI', video: '6pfnZXSHeKw', titulo: 'A Ferida Sara - Ep. 9 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 9</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>


                        {/* Episodio 10 ferida Sara (dia 35) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP10SARA', video: '5hd0XjDv5pM', titulo: 'A Ferida Sara - Ep. 10 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 10</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Desafio 7 (dia 35) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES7', video: 'jN8QyY_-5lg', titulo: 'A Ferida Sara - Desafio 7' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 7</Text>
                                <Text style={styles.text}>bbbb</Text>
                            </View>
                        </View>

                        {/* Episodio 11 ferida Sara (dia 37) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP11SARA', video: 'n5Sl7KeMa0Q', titulo: 'A Ferida Sara - Ep. 11 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 11</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Episodio 12 ferida Sara (dia 38) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP12SARA', video: 'CPLqqARxBb8', titulo: 'A Ferida Sara - Ep. 12 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 12</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Desafio 8 (dia 38) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES8', video: 'F3VfKFI7NHg', titulo: 'A Ferida Sara - Desafio 8' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 8</Text>
                                <Text style={styles.text}>ffff</Text>
                            </View>
                        </View>


                        {/* Episodio 10 Psicoeducativo (dia 40) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP10PSI', video: 'ZgAxypXcAe0', titulo: 'A Ferida Sara - Ep. 10 Psicoeducativo' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 10</Text>
                                <Text style={styles.text}>Psicoeducativo</Text>
                            </View>
                        </View>


                        {/* Episodio 13 ferida Sara (dia 42) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP13SARA', video: 'BWvXqDZQ0xQ', titulo: 'A Ferida Sara - Ep. 13 Webserie' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Episódio 13</Text>
                                <Text style={styles.text}>A Ferida Sara</Text>
                            </View>
                        </View>

                        {/* Desafio 9 (dia 42) */}

                        <View style={styles.container3}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES9', video: '4qRM3JG826U', titulo: 'A Ferida Sara - Desafio 9' })}
                            >
                                <Image
                                    source={require('../../../images/thumbnailBloqueada.png')}
                                    style={styles.episodio}

                                />
                            </TouchableOpacity>

                            <View style={styles.container4}>
                                <Text style={styles.title2}>Desafio 9</Text>
                                <Text style={styles.text}>qqqqqq</Text>
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
        marginTop: '5%',

    },

    containerepisodios: {
        flex: 1,
        marginTop: '2%',
        marginBottom: '8%',

    },

    text: {
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
        marginBottom: '5%',
        marginTop: '4%',
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
export default PlaylistSara;