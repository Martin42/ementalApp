import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { NavigationEvents, withOrientation } from 'react-navigation';
import TextArea from 'react-native-textarea';
import Checkbox from 'react-native-check-box';

function QiSaraB({route, navigation}){
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
    const [botao1, setBotao1] = useState(false);
    const [botao2, setBotao2] = useState(false);
    const [botao3, setBotao3] = useState(false);

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

    function clicar1(){
        setBotao1(true);
        setBotao2(false);
        setBotao3(false);
    }

    function clicar2(){
        setBotao2(true);
        setBotao1(false);
        setBotao3(false);
    }

    function clicar3(){
        setBotao3(true);
        setBotao1(false);
        setBotao2(false);
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
                    <Text style={styles.textobold}>1. Sabes o que é a depressão?</Text>

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

                    <Text style={styles.textobold}>2. Descreve depressão em duas palavras:</Text>

                    <View style={styles.inputField}>
                        <TextArea
                        style={styles.inputMensagem}
                        placeholder= 'Responde aqui...'
                        backgroundColor= 'white'
                        placeholderTextColor= 'black'
                        multiline={true}
                        containerStyle={styles.inputMensagemContainer}
                        onChangeText={mensagem => setMensagem(mensagem)}
                        />
                    </View>                
                    
                    <Text style={styles.textobold}>3. Consideras ter conhecimentos suficientes que te permitam detetar sintomas de depressão em algum familiar ou amigo/colega próximo?</Text>

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

                    <Text style={styles.textobold}>4. Alertarias essa pessoa, dizendo-lhe que pode estar a sofrer de depressão?</Text>

                    <Checkbox
                        onClick={() => validate3()}
                        isChecked={check3}
                        unCheckedImage={<Image source={require('../../../images/Sim_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/Sim_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca3()}
                        isChecked={valid3}
                        unCheckedImage={<Image source={require('../../../images/Nao_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/Nao_checked.png')} style={styles.aceito2} />} 
                    />

                    <Text style={styles.textobold}>5. Recomendarias a essa pessoa que procurasse apoio de profissionais de saúde?</Text>

                    <Checkbox
                        onClick={() => validate4()}
                        isChecked={check4}
                        unCheckedImage={<Image source={require('../../../images/Sim_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/Sim_checked.png')} style={styles.aceito} />} 
                    />

                    <Checkbox 
                        onClick={() => troca4()}
                        isChecked={valid4}
                        unCheckedImage={<Image source={require('../../../images/Nao_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/Nao_checked.png')} style={styles.aceito2} />} 
                    />

                    <Text style={styles.textobold}>6. Consideras que já tiveste (ou tens) alguma depressão?</Text>
                    <Checkbox
                        onClick={() => validate5()}
                        isChecked={check5}
                        unCheckedImage={<Image source={require('../../../images/Sim_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/Sim_checked.png')} style={styles.aceito} />} 
                    />
                    <Checkbox 
                        onClick={() => troca5()}
                        isChecked={valid5}
                        unCheckedImage={<Image source={require('../../../images/Nao_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/Nao_checked.png')} style={styles.aceito2} />} 
                    />

                    <Text style={styles.textobold}>7. Aproximadamente há quanto tempo?</Text>
                    
                    {/* erro aqui!! */}
                    
                    <Checkbox
                        onClick={() => clicar1()}
                        isChecked={botao1}
                        unCheckedImage={<Image source={require('../../../images/hamaisdeumano_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/hamaisdeumano_checked.png')} style={styles.aceito} />} 
                    />
                    <Checkbox 
                        onClick={() => clicar2()}
                        isChecked={botao2}
                        unCheckedImage={<Image source={require('../../../images/entreumetres_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/entreumetres_checked.png')} style={styles.aceito} />} 
                    />
                    <Checkbox
                        onClick={() => clicar3()}
                        isChecked={botao3}
                        unCheckedImage={<Image source={require('../../../images/ultimostres_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/ultimostres_checked.png')} style={styles.aceito2} />} 
                    />

                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('QiSaraC')}>
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
        height: 42,
        marginBottom: '10%'
      },

    inputMensagem: {
        fontSize: 14,
        color: 'black',
        borderRadius: 30,
        marginLeft: '9%',
        marginTop: '3%',
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
        marginLeft: 0,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '10%',
        marginBottom: '5%',
        color: 'black',
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
        color: 'black',
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
        marginLeft: '4%',
        marginTop: '4%',
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
});

export default QiSaraB;