import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { NavigationEvents, withOrientation } from 'react-navigation';
import TextArea from 'react-native-textarea';
import Checkbox from 'react-native-check-box';

function QiSaraC({route, navigation}){
    const [mensagem, setMensagem] = useState('');
    const [check, setCheck] = useState(false);
    const [valid, setValid] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [valid2, setValid2] = useState(false);

    function validate(){
        setCheck(true);
        setValid(false);
    }

    function validate2(){
        setCheck2(true);
        setValid2(false);
    }

    function troca(){
        setCheck(false);
        setValid(true);
    }

    function troca2(){
        setCheck2(false);
        setValid2(true);
    }
    
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.balao}>
                <Text style={styles.subtitle}>Conhecimentos sobre depressão</Text>

                <Text style={styles.textobold}>8. Realizaste ou estás a realizar algum tratamento?</Text>

                <Checkbox
                    onClick={() => validate()}
                    isChecked={check}
                    unCheckedImage={<Image source={require('../../../images/Sim_unchecked.png')} style={styles.aceito} />} 
                    checkedImage={<Image source={require('../../../images/Sim_checked.png')} style={styles.aceito} />} 
                />

                <Checkbox 
                    onClick={() => troca()}
                    isChecked={valid}
                    unCheckedImage={<Image source={require('../../../images/Nao_unchecked.png')} style={styles.aceito2} />} 
                    checkedImage={<Image source={require('../../../images/Nao_checked.png')} style={styles.aceito2} />} 
                />
                    
                <Text style={styles.textobold}>9. Se sim, que tipo de tratamento?</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <Text style={styles.textobold}>10. Alguém muito próximo de ti teve ou tem depressão?</Text>
                
                <Checkbox
                    onClick={() => validate2()}
                    isChecked={check2}
                    unCheckedImage={<Image source={require('../../../images/Sim_unchecked.png')} style={styles.aceito} />} 
                    checkedImage={<Image source={require('../../../images/Sim_checked.png')} style={styles.aceito} />} 
                />

                <Checkbox 
                    onClick={() => troca2()}
                    isChecked={valid2}
                    unCheckedImage={<Image source={require('../../../images/Nao_unchecked.png')} style={styles.aceito2} />} 
                    checkedImage={<Image source={require('../../../images/Nao_checked.png')} style={styles.aceito2} />} 
                />

                <Text style={styles.textobold}>11. Essa pessoa é:</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <Text style={styles.textobold}>12. Aproximadamente há quanto tempo?</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <Text style={styles.textobold}>13. Essa pessoa realizou ou está a realizar algum tratamento?</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <Text style={styles.textobold}>14. Que tipo de tratamento?</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <TouchableOpacity
                    onPress={() => navigation.navigate('QiSaraD')}
                    >
                    <Text style={styles.next}>Seguinte</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    inputField: {
        marginTop: '5%',
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        height: 50,
        marginBottom: '10%'
    },

    inputMensagem: {
        fontSize: 15,
        color: 'black',
        borderRadius: 30,
        marginLeft: '8%',
        marginTop: '4%',
    },

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
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
        marginBottom: '5%',
    },

    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '10%',
        color: '#6578B3',
    },

    next: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: '70%',
        marginTop: '10%',
        color: 'black'
    },

    texto: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '5%',
        fontSize: 15,
    },

    textobold: {
        marginLeft: '10%',
        marginRight: '10%',
        fontWeight: 'bold',
        fontSize: 15,
    },

    aceito: {
        marginLeft: '10%',
        marginRight: '10%',  
        resizeMode: 'contain',
        width: '80%',
        marginTop: '2%',
    },

    aceito2: {
        marginLeft: '10%',
        marginRight: '10%',  
        resizeMode: 'contain',
        width: '80%',
        marginBottom:'10%',
        marginTop: '2%',
    },

    buttonText: {
        fontSize: 15,
        marginLeft: '8%',
        marginTop: '5%',
    },

    botao:{
        marginTop: '7%',
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        height: 42,
    },

    opcao :{
        marginTop: '5%',
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginLeft: '10%',
        marginRight: '10%',
        height: 50,
    },
});

export default QiSaraC;