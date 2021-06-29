
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";

function PlaylistSara({ route, navigation }) {

    return (
        <ScrollView style={styles.container}>
            <View>

                <Text style={styles.title1}>A Ferida Sara</Text>

                <Text style={styles.text}>Esta websérie explica a jornada de Sara, uma recém estudante do ensino superior, que apresenta sintomas depressivos.</Text>
            </View>

            <View style={styles.container2}>

                <View style={styles.containerepisodios}>

                    {/* Teaser (dia 1)  */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnail.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Teaser</Text>
                            <Text style={styles.text}>dkjfhe</Text>
                        </View>
                    </View>

                    {/* Episodio 1 psicoeducativo (dia 1)  */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnail.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 1</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>

                    {/* Ferida Sara Episodio 1 (dia 2) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 2</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Psicoeducativo Episodio 2 (dia 5) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 2</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>

                    {/* Ferida Sara Episodio 2 (dia 7)*/}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 2</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Desafio 1 (dia 7) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 1</Text>
                            <Text style={styles.text}>dhjds</Text>
                        </View>
                    </View>

                    {/* Episodio 3 Psicoeducativo (dia 9) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 3</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>

                    {/* Episodio 3 Ferida Sara (dia 10) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 3</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Episodio 4 Psicoeducativo (dia 11) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 4</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>

                    {/* Episodio 4 parte 1 Ferida Sara (dia 13)*/}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 4: Parte I</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Desafio 2 (dia 13)*/}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 2</Text>
                            <Text style={styles.text}>huei</Text>
                        </View>
                    </View>

                    {/* Episodio 4 parte 2 ferida Sara (dia 14) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 4: parte II</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Episodio 5 Psicoeducativo (dia 17) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 5</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>

                    {/* Episodio 5 ferida Sara (dia 20) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 5</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>


                    {/* Desafio 3 (dia 20) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 3</Text>
                            <Text style={styles.text}>fjfjfj</Text>
                        </View>
                    </View>


                    {/* Episodio 6 psicoeducativo (dia 21) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 6</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>

                    {/* Episodio 6 ferida Sara (dia 23) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 6</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Desafio 4 (dia 23) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 4</Text>
                            <Text style={styles.text}>ffff</Text>
                        </View>
                    </View>

                    {/* Episodio 7 ferida Sara (dia 24) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 7</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Desafio 4 (dia 24) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 5</Text>
                            <Text style={styles.text}>ffff</Text>
                        </View>
                    </View>


                    {/* Episodio 7 psicoeducativo (dia 27) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 7</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>


                    {/* Episodio 8 ferida Sara (dia 28) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 8</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>


                    {/* Desafio 6 (dia 28) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 6</Text>
                            <Text style={styles.text}>aaa</Text>
                        </View>
                    </View>


                    {/* Episodio 8 ferida Sara (dia 30) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 8</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>

                    {/* Episodio 9 ferida Sara (dia 31) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 9</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>


                    {/* Episodio 9 ferida Sara (dia 34) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 9</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>


                    {/* Episodio 10 ferida Sara (dia 35) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 10</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Desafio 7 (dia 35) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 7</Text>
                            <Text style={styles.text}>bbbb</Text>
                        </View>
                    </View>

                    {/* Episodio 11 ferida Sara (dia 37) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 11</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Episodio 12 ferida Sara (dia 38) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 12</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Desafio 8 (dia 38) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 8</Text>
                            <Text style={styles.text}>ffff</Text>
                        </View>
                    </View>


                    {/* Episodio 10 Psicoeducativo (dia 40) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 10</Text>
                            <Text style={styles.text}>Psicoeducativo</Text>
                        </View>
                    </View>


                    {/* Episodio 13 ferida Sara (dia 42) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Episódio 13</Text>
                            <Text style={styles.text}>A Ferida Sara</Text>
                        </View>
                    </View>

                    {/* Desafio 9 (dia 42) */}

                    <View style={styles.container3}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Ep1_Sara')}
                        >
                            <Image
                                source={require('../../../images/thumbnailBloqueada.png')}
                                style={styles.episodio}

                            />
                        </TouchableOpacity>

                        <View>
                            <Text style={styles.title2}>Desafio 9</Text>
                            <Text style={styles.text}>qqqqqq</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView >
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
        alignItems: 'center',
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



});

export default PlaylistSara;

