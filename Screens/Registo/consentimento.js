import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";


function Consentimento({ route, navigation }) {

    console.log(route.params.status);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <ScrollView style={styles.balao}>
                <View>
                    <Text style={styles.title}>Consentimento</Text>
                    <Text style={styles.texto}>A tua colaboração é voluntária e muito importante! Agradecemos o preenchimento dos questionários, sublinhando a natureza anónima de todos os dados recolhidos. Os resultados serão utilizados apenas no contexto do estudo em curso garantindo confidencialidade.</Text>
                    <Text style={styles.texto}>Podes desistir em qualquer momento e sem qualquer consequência negativa.</Text>
                    <Text style={styles.texto}>Esta aplicação dá cumprimento ao estipulado no Regulamento Geral de Proteção de Dados (RGPD) garantindo a segurança, anonimato e confidencialidade de todos os dados facultados pelos participantes. </Text>
                    <Text style={styles.texto}>Desde já muito obrigada pela tua colaboração!</Text>
                    <Text style={styles.textobold}>Aceito prosseguir com a utilização da aplicação e permito a utilização dos dados, que de forma voluntária forneço, confiando em que apenas serão utilizados para fins científicos  nas garantias de confidencialidade e anonimato que me são dados pelos investigadores.</Text>
                    
                    <TouchableOpacity 
                    style={styles.participar}
                        onPress={() =>{ if (route.params.status == 0) {
                            navigation.navigate('Info', { //alterar
                                status: route.params.status})
                        }else{
                            navigation.navigate('Pedido', {
                                status: route.params.status,})
                        }}
                    }
                    >

                    <Text style={styles.buttonText}>Aceito participar</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{marginTop:'100%'}}>
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    balao: {
        backgroundColor: '#CFE0FB',
        borderColor: '#CFE0FB',
        borderRadius: 30,
        height: '85%',
        width: '80%',
        marginTop: '15%',
        marginBottom: '15%',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '15%',
        marginBottom: '5%',
    },

    next: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginRight: 0,
        marginTop: '100%',
        marginBottom: '5%',
    },

    texto: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '8%',
        fontSize: 15,
    },

    textobold: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '10%',
        fontWeight: 'bold',
        fontSize: 15,
    },

    buttonText: {
        fontSize: 18,
        marginLeft: '4%',
        marginTop: '4%',
    },

    participar :{
        marginTop: '15%',
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        height: '5%',
        
      },
});

export default Consentimento;