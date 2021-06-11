import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Info2({route, navigation}){

    console.log(route.params.status);

    if (route.params.status == 0){

    return (
        <View style={styles.container}>
     
                <View style={styles.container}>
                    <Text style={styles.title}>A Ferida Sara</Text>

                    <Text style={styles.text}>"DEEP" É uma intervenção psicoeducativa de formato audiovisual, estruturada numa websérie designada "A Ferida Sara", de base narrativa, sobre a vida da estudante universitária Sara, intercalados com episódios psicoeducativos.</Text>
                
                    <Image 
                        source={require('../../images/Sara.png')}
                        style={styles.sara}
                    
                    />
                </View>

                <View style={styles.container2}>
                    <Text style={styles.title2}>Um Marco na Vida</Text>

                    <Text style={styles.text}> Em breve!</Text>
              
                    <View style={styles.seguinteContainer}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Info4', { status: route.params.status, nomePedido: 'estudante', emailPedido: 'null', mensagemPedido: 'null' }) }>
                            <Text style={styles.next}>Seguinte</Text>
                        </TouchableOpacity>
                    </View>
                </View>

        
        </View>
    )}

    else {
        return (
            <View style={{flex: 1}}>
            <ScrollView>
               
                    <Text style={estilos.title40}>40 Segundos</Text>

                    <Text style={estilos.text}>É uma intervenção psicoeducativa,​ composta por vídeos, promotores da sensibilização para o diálogo sobre sinais de risco suicidário. A intervenção visa sensibilizar os intervenientes para a importância da saúde mental e para os procedimentos de atuação ao lidar com um indivíduo com ideias suicidas.</Text>

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

                        <Text style={estilos.text}> Podcast a ser adicionado em breve!</Text>
                    
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
      flex: 2,
      backgroundColor: 'white',
      width: '100%',
    },

    container2: {
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
        width: '80%',
        height: '38%',
        marginTop: '5%',
        resizeMode: 'contain',
        marginLeft: '10%',
        marginRight: '10%',
        
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
        textAlign: 'center'
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
        marginTop: '4%',
    },

    segundos: {
        width: 350,
        height: 175,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '2%',
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