import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { NavigationEvents, withOrientation } from 'react-navigation';
import TextArea from 'react-native-textarea';
import Checkbox from 'react-native-check-box';

function QiSaraD({route, navigation}){
    const [mensagem, setMensagem] = useState('');
    const [check, setCheck] = useState(false);
    const [valid, setValid] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [valid2, setValid2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [valid3, setValid3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [valid4, setValid4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [valid5, setValid5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [valid6, setValid6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [valid7, setValid7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [valid8, setValid8] = useState(false);

    function validate(){
        setCheck(true);
        setValid(false);
    }

    function validate2(){
        setCheck2(true);
        setValid2(false);
    }

    function validate3(){
        setCheck3(true);
        setValid3(false);
    }

    function validate4(){
        setCheck4(true);
        setValid4(false);
    }

    function validate5(){
        setCheck5(true);
        setValid5(false);
    }

    function validate6(){
        setCheck6(true);
        setValid6(false);
    }

    function validate7(){
        setCheck7(true);
        setValid7(false);
    }

    function validate8(){
        setCheck8(true);
        setValid8(false);
    }
    
    function troca(){
        setCheck(false);
        setValid(true);
    }

    function troca2(){
        setCheck2(false);
        setValid2(true);
    }

    function troca3(){
        setCheck3(false);
        setValid3(true);
    }

    function troca4(){
        setCheck4(false);
        setValid4(true);
    }

    function troca5(){
        setCheck5(false);
        setValid5(true);
    }

    function troca6(){
        setCheck6(false);
        setValid6(true);
    }

    function troca7(){
        setCheck7(false);
        setValid7(true);
    }

    function troca8(){
        setCheck8(false);
        setValid8(true);
    }
    
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <ScrollView 
                style={styles.balao}
                persistentScrollbar={true}
            >

                <View style={styles.balao}>
                    <Text style={styles.subtitle}>Conhecimentos sobre depressão</Text>
                    <Text style={styles.texto}>Depois de ler as afirmações que se seguem, assinala a opção que consideras mais correta: verdadeira ou falsa.</Text>


                    <Text style={styles.textobold}>15. As pessoas com depressão costumam falar de forma vaga e incoerente.</Text>

                    <Checkbox
                        onClick={() => validate()}
                        isChecked={check}
                        unCheckedImage={<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca()}
                        isChecked={valid}
                        unCheckedImage={<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />} 
                    />
                        
                    <Text style={styles.textobold}>16. As pessoas com depressão podem sentir-se culpadas sem razão.</Text>
                    
                    <Checkbox
                        onClick={() => validate2()}
                        isChecked={check2}
                        unCheckedImage={<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca2()}
                        isChecked={valid2}
                        unCheckedImage={<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />} 
                    />

                    <Text style={styles.textobold}>17. A perda de confiança e a baixa autoestima podem ser sintomas de depressão.</Text>
                    
                    <Checkbox
                        onClick={() => validate3()}
                        isChecked={check3}
                        unCheckedImage={<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca3()}
                        isChecked={valid3}
                        unCheckedImage={<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />} 
                    />

                    <Text style={styles.textobold}>18. Dormir demasiado ou dormir muito pouco pode ser um sinal de depressão.</Text>
                    
                    <Checkbox
                        onClick={() => validate4()}
                        isChecked={check4}
                        unCheckedImage={<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca4()}
                        isChecked={valid4}
                        unCheckedImage={<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />} 
                    />

                    <Text style={styles.textobold}>19. Comer demais ou perder o interesse pela comida pode ser um sinal de depressão.</Text>
                    
                    <Checkbox
                        onClick={() => validate5()}
                        isChecked={check5}
                        unCheckedImage={<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca5()}
                        isChecked={valid5}
                        unCheckedImage={<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />} 
                    />

                    <Text style={styles.textobold}>20. A depressão não afeta a memória e a concentração.</Text>
                    
                    <Checkbox
                        onClick={() => validate6()}
                        isChecked={check6}
                        unCheckedImage={<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca6()}
                        isChecked={valid6}
                        unCheckedImage={<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />} 
                    />

                    <Text style={styles.textobold}>21. Há vários tipos de tratamento eficazes para a depressão.</Text>
                    
                    <Checkbox
                        onClick={() => validate7()}
                        isChecked={check7}
                        unCheckedImage={<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca7()}
                        isChecked={valid7}
                        unCheckedImage={<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />} 
                    />
                    
                    <Text style={styles.textobold}>22. Os medicamentos antidepressivos causam dependência.</Text>
                    
                    <Checkbox
                        onClick={() => validate8()}
                        isChecked={check8}
                        unCheckedImage={<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca8()}
                        isChecked={valid8}
                        unCheckedImage={<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />} 
                    />

                    <TouchableOpacity
                        onPress={() => navigation.navigate('QiSaraE')}
                        >
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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

export default QiSaraD;