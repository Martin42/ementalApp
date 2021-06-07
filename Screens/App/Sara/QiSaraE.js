import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import Checkbox from 'react-native-check-box';

function QiSaraE({route, navigation}){


    const TrueChecked=(<Image source={require('../../../images/verdadeira_checked.png')} style={styles.aceito} />)
    const TrueUnchecked=(<Image source={require('../../../images/verdadeira_unchecked.png')} style={styles.aceito} />)

    const FalseUnchecked=(<Image source={require('../../../images/falsa_unchecked.png')} style={styles.aceito2} />)
    const FalseChecked=(<Image source={require('../../../images/falsa_checked.png')} style={styles.aceito2} />)


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
            <ScrollView 
                style={styles.balao}
                showsVerticalScrollIndicator={false}
            >

                <View>
                    <Text style={styles.subtitle}>Conhecimentos sobre depressão</Text>
                    <Text style={styles.texto}>Depois de ler as afirmações que se seguem, assinala a opção que consideras mais correta: verdadeira ou falsa.</Text>


                    <Text style={styles.textobold}>23. Os medicamento antidepressivos podem demorar a produzir efeito.</Text>

                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => validate()}
                        isChecked={check}
                        unCheckedImage={TrueUnchecked} 
                        checkedImage={TrueChecked}  
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => troca()}
                        isChecked={valid}
                        unCheckedImage={FalseUnchecked} 
                        checkedImage={FalseChecked}  
                    />
                </View>     

                    <Text style={styles.textobold}>24. Estilos de vida saudáveis auxiliam o tratamento (medicamentoso) e a recuperação da depressão.</Text>


                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => validate2()}
                        isChecked={check2}
                        unCheckedImage={TrueUnchecked} 
                        checkedImage={TrueChecked} 
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => troca2()}
                        isChecked={valid2}
                        unCheckedImage={FalseUnchecked} 
                        checkedImage={FalseChecked} 
                    />
                </View>

                    <Text style={styles.textobold}>25. A depressão é comum na adolescência.</Text>

                <View style={styles.checkUp}> 
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => validate3()}
                        isChecked={check3}
                        unCheckedImage={TrueUnchecked} 
                        checkedImage={TrueChecked}
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => troca3()}
                        isChecked={valid3}
                        unCheckedImage={FalseUnchecked} 
                        checkedImage={FalseChecked} 
                    />
                </View>

                    <Text style={styles.textobold}>26. A depressão pode ser controlada com força de vontade.</Text>
                    
                    
                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => validate4()}
                        isChecked={check4}
                        unCheckedImage={TrueUnchecked} 
                        checkedImage={TrueChecked} 
                    />
                </View>


                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => troca4()}
                        isChecked={valid4}
                        unCheckedImage={FalseUnchecked} 
                        checkedImage={FalseChecked} 
                    />
                </View>

                    <Text style={styles.textobold}>27. A depressão pode ter diversas causas.</Text>
                
                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => validate5()}
                        isChecked={check5}
                        unCheckedImage={TrueUnchecked} 
                        checkedImage={TrueChecked}  
                    />
                </View>


                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => troca5()}
                        isChecked={valid5}
                        unCheckedImage={FalseUnchecked} 
                        checkedImage={FalseChecked} 
                    />
                </View>
                    <Text style={styles.textobold}>28. Mudanças de comportamento podem ser o primeiro sinal de depressão.</Text>
                    

                <View style={styles.checkUp}>    
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => validate6()}
                        isChecked={check6}
                        unCheckedImage={TrueUnchecked} 
                        checkedImage={TrueChecked} 
                    />
                </View>

                
                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => troca6()}
                        isChecked={valid6}
                        unCheckedImage={FalseUnchecked} 
                        checkedImage={FalseChecked} 
                    />
                </View>

                    <Text style={styles.textobold}>29. A depressão é uma doença tratável.</Text>
                    

                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => validate7()}
                        isChecked={check7}
                        unCheckedImage={TrueUnchecked} 
                        checkedImage={TrueChecked} 
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => troca7()}
                        isChecked={valid7}
                        unCheckedImage={FalseUnchecked} 
                        checkedImage={FalseChecked} 
                    />
                </View>
                    
                    <Text style={styles.textobold}>30. Uma pessoa com depressão sente-se triste na maior parte do tempo.</Text>
                
                <View style={styles.checkUp}>
                    <Checkbox
                        style={styles.checkbox} 
                        onClick={() => validate8()}
                        isChecked={check8}
                        unCheckedImage={TrueUnchecked} 
                        checkedImage={TrueChecked} 
                    />
                </View>

                <View style={styles.checkDown}>
                    <Checkbox
                        style={styles.checkbox}  
                        onClick={() => troca8()}
                        isChecked={valid8}
                        unCheckedImage={FalseUnchecked} 
                        checkedImage={FalseChecked} 
                    />
                </View>



                    <View style={styles.seguinteContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('QiSaraF')}
                            >
                            <Text style={styles.next}>Seguinte</Text>
                        </TouchableOpacity>
                    </View>
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
        marginTop: '10%',
        color: 'black'
    },

    seguinteContainer: {
        width: '20%',
        alignSelf: 'flex-end', 
        marginRight: '10%', 
        paddingBottom: '10%',
    },

    checkbox: {
        alignSelf: 'center',
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
        resizeMode: 'contain',
        height: 45,
    },

    aceito2: {
        resizeMode: 'contain',
        height: 45,
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


});

export default QiSaraE;