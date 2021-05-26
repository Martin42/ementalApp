
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { auth, db } from '../../Firebase';

function Homepage() {

    const getData = () => {
        db
            .collection('users')
            .doc(auth.currentUser.uid)
            .get();
    }

    return (
        <ScrollView style={styles.container}>
            <View>
            <StatusBar style={'auto'} />

            <Text style={styles.title1}>Conteúdos</Text>

            <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.</Text>
            </View>
            <View style={styles.container2}>

                <Text style={styles.title2}>Websérie</Text>

                <Text style={styles.title3}>A Ferida Sara</Text>
                <Image
                    source={require('../../images/Sara.png')}
                    style={styles.conteudo}

                />
                <Text style={styles.title2}>Podcast</Text>
                <Text style={styles.title3}>Um Marco na Vida</Text>


                <Image
                    source={require('../../images/Sara.png')}
                    style={styles.conteudo}

                />

                <Text style={styles.title2}>Vídeos</Text>

                <Text style={styles.title3}>40 segundos</Text>
                <Image
                    source={require('../../images/Sara.png')}
                    style={styles.conteudo}

                />
                <Text style={styles.title4}>Exclusivo a profissionais de saúde</Text>
                
            </View>

        </ScrollView>
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
        alignItems:'center',
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 10,
    },

    conteudo: { //Imagem da Sara (conteudos)
        width: '90%',
        height: '35%',
        marginLeft:'5%',
        marginRight: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        resizeMode: 'contain',

    },



});

export default Homepage;


// resolução questionário inicial -> renderizar a primeira vez e passar uma variavel a confirmar o preenchimento do questionario
// no inicio do código implementar um if que apenas executa o código se o user ainda não tiver respondido, caso contrário navigation.replace('pagina seguinte') 