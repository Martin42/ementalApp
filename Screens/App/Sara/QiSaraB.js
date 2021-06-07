import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import TextArea from 'react-native-textarea';
import Checkbox from 'react-native-check-box';

function QiSaraB({route, navigation}){

    // Imagens A Carregar nas CheckBoxes

    const SimUnchecked = (<Image source={require('../../../images/Sim_unchecked.png')} style={styles.aceito} />)
    const SimChecked  = (<Image source={require('../../../images/Sim_checked.png')} style={styles.aceito} />)

    const NaoUnchecked = (<Image source={require('../../../images/Nao_unchecked.png')} style={styles.aceito2} />)
    const NaoChecked = (<Image source={require('../../../images/Nao_checked.png')} style={styles.aceito2} />)

    // UseStates

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

    const [mensagem, setMensagem] = useState('');

    // funções de validação

    function validate(){ setCheck(true); setValid(false); }
    function validate2(){ setCheck2(true); setValid2(false); }
    function validate3(){ setCheck3(true); setValid3(false); }
    function validate4(){ setCheck4(true); setValid4(false); }
    function validate5(){ setCheck5(true); setValid5(false); }
    
    function troca(){ setCheck(false); setValid(true); }
    function troca2(){ setCheck2(false); setValid2(true); }
    function troca3(){ setCheck3(false); setValid3(true); }
    function troca4(){ setCheck4(false); setValid4(true); }
    function troca5(){ setCheck5(false); setValid5(true); }

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

            <ScrollView 
                style={styles.balao}
                showsVerticalScrollIndicator={false}
            >

                    <Text style={styles.subtitle}>Conhecimentos sobre depressão</Text>
                    <Text style={styles.textobold}>1. Sabes o que é a depressão?</Text>

                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox}
                        onClick={() => validate()}
                        isChecked={check}
                        unCheckedImage={SimUnchecked} 
                        checkedImage={SimChecked} 
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}    
                        onClick={() => troca()}
                        isChecked={valid}
                        unCheckedImage={NaoUnchecked} 
                        checkedImage={NaoChecked} 
                    />

                </View>

                    <Text style={styles.textobold}>2. Descreve depressão em duas palavras:</Text>

                    <View style={styles.inputField}>
                        <TextArea
                        style={styles.inputMensagem}
                        placeholder= 'Responde aqui...'
                        backgroundColor= 'white'
                        placeholderTextColor= 'black'
                        containerStyle={styles.inputMensagemContainer}
                        onChangeText={mensagem => setMensagem(mensagem)}
                        />
                    </View>                
                    
                    <Text style={styles.textobold}>3. Consideras ter conhecimentos suficientes que te permitam detetar sintomas de depressão em algum familiar ou amigo/colega próximo?</Text>

                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox}    
                        onClick={() => validate2()}
                        isChecked={check2}
                        unCheckedImage={SimUnchecked} 
                        checkedImage={SimChecked} 
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}     
                        onClick={() => troca2()}
                        isChecked={valid2}
                        unCheckedImage={NaoUnchecked} 
                        checkedImage={NaoChecked} 
                    />
                </View>

                    <Text style={styles.textobold}>4. Alertarias essa pessoa, dizendo-lhe que pode estar a sofrer de depressão?</Text>

                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox}
                        onClick={() => validate3()}
                        isChecked={check3}
                        unCheckedImage={SimUnchecked} 
                        checkedImage={SimChecked} 
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}     
                        onClick={() => troca3()}
                        isChecked={valid3}
                        unCheckedImage={NaoUnchecked} 
                        checkedImage={NaoChecked} 
                    />
                </View>

                    <Text style={styles.textobold}>5. Recomendarias a essa pessoa que procurasse apoio de profissionais de saúde?</Text>

                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox}    
                        onClick={() => validate4()}
                        isChecked={check4}
                        unCheckedImage={SimUnchecked} 
                        checkedImage={SimChecked} 
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}     
                        onClick={() => troca4()}
                        isChecked={valid4}
                        unCheckedImage={NaoUnchecked} 
                        checkedImage={NaoChecked} 
                    />
                </View>

                    <Text style={styles.textobold}>6. Consideras que já tiveste (ou tens) alguma depressão?</Text>

                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox}    
                        onClick={() => validate5()}
                        isChecked={check5}
                        unCheckedImage={SimUnchecked} 
                        checkedImage={SimChecked} 
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}     
                        onClick={() => troca5()}
                        isChecked={valid5}
                        unCheckedImage={NaoUnchecked} 
                        checkedImage={NaoChecked} 
                    />
                </View>

                    <Text style={styles.textobold}>7. Aproximadamente há quanto tempo?</Text>
                    
                    {/* erro aqui!! */}
                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => clicar1()}
                        isChecked={botao1}
                        unCheckedImage={<Image source={require('../../../images/hamaisdeumano_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/hamaisdeumano_checked.png')} style={styles.aceito} />} 
                    />
                </View>

                <View style={styles.checkMid}>

                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => clicar2()}
                        isChecked={botao2}
                        unCheckedImage={<Image source={require('../../../images/entreumetres_unchecked.png')} style={styles.aceito} />} 
                        checkedImage={<Image source={require('../../../images/entreumetres_checked.png')} style={styles.aceito} />} 
                    />
                </View>


                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => clicar3()}
                        isChecked={botao3}
                        unCheckedImage={<Image source={require('../../../images/ultimostres_unchecked.png')} style={styles.aceito2} />} 
                        checkedImage={<Image source={require('../../../images/ultimostres_checked.png')} style={styles.aceito2} />} 
                    />
                </View>

                    <View style={styles.seguinteContainer}>
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

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    seguinteContainer: {
        width: '20%',
        alignSelf: 'flex-end', 
        marginRight: '10%', 
        marginTop: '10%', 
        paddingBottom: '10%',
    },


    inputField: {
        marginTop: '5%',
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: 'white',
        height: 45,
        width: '70%',
        marginBottom: '10%',
        alignSelf: 'center',
      },

    inputMensagem: {
        fontSize: 14,
        color: 'black',
        borderRadius: 30,
        marginLeft: '9%',
        marginTop: '3%',
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
        marginTop: '10%',
        color: 'black',
        paddingBottom: '10%',
    },

    textobold: {
        marginLeft: '10%',
        marginRight: '10%',
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
       
    },

    aceito: {
        resizeMode: 'contain',
        height: 45,

    },

    aceito2: {
        resizeMode: 'contain',
        height: 45,
    },

    checkbox: {
        alignSelf: 'center',
    },

    checkDown: {
        height: 45, 
        marginTop: '2%', 
        marginBottom: '5%'
    },

    checkUp: {
        height: 45, 
        marginTop: '4%',
    },

    checkMid: {
        height: 45, 
        marginTop: '2%',
    },



});

export default QiSaraB;