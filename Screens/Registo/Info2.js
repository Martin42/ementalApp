import { StyleSheet, Text, Image, View, ScrollView, Linking } from "react-native";
import React, { useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import YoutubePlayer from "react-native-youtube-iframe";


function Info2({route, navigation}){

    console.log(route.params.status);

    const [playing, setPlaying] = useState(false);

    // Player 
  
    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);

    if (route.params.status == 0){

    return (
        <View style={{flex:1}}>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>A Ferida Sara</Text>

                <Text style={styles.text}>"DEEP" É uma intervenção psicoeducativa de formato audiovisual, estruturada numa websérie designada "A Ferida Sara", de base narrativa, sobre a vida da estudante universitária Sara, intercalados com episódios psicoeducativos.</Text>

                <View style={{marginTop: '10%', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                    <YoutubePlayer
                            width={'80%'}
                            height={250}
                            play={playing}
                            videoId='ct0yVqr4emE'
                    />
                </View>

                <Text style={styles.title2}>Um Marco na Vida</Text>

                <Text style={styles.text}>O podcast “Um Marco na Vida” conta a história da vida do Marco, um estudante universitário amigo da Sara. </Text>
            
                <Image 
                    source={require('../../images/marco.png')}
                    style={styles.marco}
                
                />

                <View style={styles.seguinteContainer}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Info3', { status: route.params.status, nomePedido: 'estudante', emailPedido: 'null', mensagemPedido: 'null' }) }>
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                    
                </View>
            </ScrollView>
        </View>
    )}

    else {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={styles.container}>
                
                    <Text style={estilos.title40}>40 Segundos</Text>

                    <Text style={estilos.text}>É uma intervenção audiovisual, De sensibilização para a saúde mental, nomeadamente no que diz respeito ao reconhecimento de sinais de sofrimento psíquico e abordagem de alguém em crise suicidária. A intervenção, baseada em testemunhos reais (verídicos) e informação veiculada por profissionais de saúde, visa sensibilizar os intervenientes para a importância da saúde mental e aumentar o conhecimento sobre o risco de suicídio e para a atuação ao lidar com o invidíduo com ideias suicídas.</Text>

                    <Text style={estilos.text}>Pode ser útil para trabalhar em contexto clínico ou em grupos de apoio.</Text>

                    <Image 
                        source={require('../../images/40.png')}
                        style={estilos.segundos}
                    />
            

                        <Text style={estilos.titleSara}>A Ferida Sara</Text>

                        <Text style={estilos.text}>"DEEP" É uma intervenção psicoeducativa de formato audiovisual, estruturada numa web-série designada "A Ferida Sara", de base narrativa, sobre a vida da estudante universitária Sara, intercalados com episódios psicoeducativos.</Text>
                    
                    
                        <Image 
                            source={require('../../images/Sara.png')}
                            style={estilos.sara2}
                        
                        />
                
                        <Text style={estilos.titleMarco}>Um Marco na Vida</Text>

                        <Text style={estilos.text}>O podcast “Um Marco na Vida” conta a história da vida do Marco, um estudante universitário amigo da Sara.</Text>


                        <Image 
                            source={require('../../images/marco.png')}
                            style={estilos.sara2}
                        
                        />
                    
                    <View  style={estilos.seguinteContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Info3', { status: route.params.status }) } 
                        
                        >
                            <Text style={estilos.next2}>Seguinte</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      width: '100%',
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginBottom: '5%',
        marginTop: '15%',
      
    },

    title2: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginBottom: '5%',
    
    },

    sara: {
        width: 340,
        height: 171,
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '7%',
        marginBottom: '15%',
    },

    marco:{
        width: 340,
        height: 171,
        marginTop: '7%',
        resizeMode: 'contain',
        marginLeft: 'auto',
        marginRight: 'auto',
    },


    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
        textAlign: 'justify',
    },

    next: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '50%',
    },

    seguinteContainer: {
        width: '20%',
        alignSelf: 'flex-end', 
        marginRight: '8%', 
        marginTop: '28%', 
    },


});

const estilos = StyleSheet.create({

    title40:{
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: '15%',
        marginLeft: '10%',
        marginBottom: '5%',
        
    },

    titleSara: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '10%',   
    },

    titleMarco:{
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginTop: '10%'
    },

    sara2: {
        width: 350,
        height: 175,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%'
    },

    segundos: {
        width: 350,
        height: 175,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%',
    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '2%',
        fontSize: 15,
        textAlign: 'justify',
    
    },

    next2: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'right',
       
    },
  
    seguinteContainer: {
        width: '20%',
        alignSelf: 'flex-end', 
        marginRight: '10%', 
        marginTop: '5%',
        paddingBottom: '10%' 
    },

})




    export default Info2;