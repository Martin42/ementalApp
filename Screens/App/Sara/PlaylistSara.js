
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

                {/* Episodio 1 */}
                
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

                {/* Episodio 2 */}

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
                        <Text style={styles.title2}>Episódio 2</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 3 */}

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
                        <Text style={styles.title2}>Episódio 3</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 4 */}

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
                        <Text style={styles.title2}>Episódio 4</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 5 */}

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
                        <Text style={styles.title2}>Episódio 5</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 6 */}

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
                        <Text style={styles.title2}>Episódio 6</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 7 */}

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
                        <Text style={styles.title2}>Episódio 7</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 8 */}

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
                        <Text style={styles.title2}>Episódio 8</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 9 */}

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
                        <Text style={styles.title2}>Episódio 9</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 10 */}

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
                        <Text style={styles.title2}>Episódio 10</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 11 */}

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
                        <Text style={styles.title2}>Episódio 11</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 12 */}

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
                        <Text style={styles.title2}>Episódio 12</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
                    </View>
                </View>

                {/* Episodio 13 */}

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
                        <Text style={styles.title2}>Episódio 13</Text>
                        <Text style={styles.text}>Psicoeducativo</Text>
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
        flex:1,
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

