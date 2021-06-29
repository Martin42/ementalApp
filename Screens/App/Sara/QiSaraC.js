
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, Image, View, CheckBox} from "react-native";
import TextArea from 'react-native-textarea';
import { auth, db } from '../../../Firebase';


function QiSaraC({route, navigation}){

   
    // UseStates

    const [check, setCheck] = useState(false);
    const [valid, setValid] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [valid2, setValid2] = useState(false);
    const [botao1, setBotao1] = useState(false);
    const [botao2, setBotao2] = useState(false);
    const [botao3, setBotao3] = useState(false);
    const [botao4, setBotao4] = useState(false);
    const [botao5, setBotao5] = useState(false);
    const [botao6, setBotao6] = useState(false);
    const [botao7, setBotao7] = useState(false);
    const [botao8, setBotao8] = useState(false);
    const [botao9, setBotao9] = useState(false);
    const [botao10, setBotao10] = useState(false);
    const [botao11, setBotao11] = useState(false);
    const [botao12, setBotao12] = useState(false);
    const [botao13, setBotao13] = useState(false);
    const [botao14, setBotao14] = useState(false);
    const [botao15, setBotao15] = useState(false);

    const [mensagem, setMensagem] = useState('');

    // funções de validação

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
     
    function clicar1(){
        setBotao1(true);
        setBotao2(false);
        setBotao3(false);
    }

    function clicar2(){
        setBotao1(false);
        setBotao2(true);
        setBotao3(false);

    }

    function clicar3(){
        setBotao1(false);
        setBotao2(false);
        setBotao3(true);
    }
    
    function clicar4(){
        setBotao4(true);
        setBotao5(false);
        setBotao6(false);
    }

    function clicar5(){
        setBotao4(false);
        setBotao5(true);
        setBotao6(false);

    }

    function clicar6(){
        setBotao4(false);
        setBotao5(false);
        setBotao6(true);
    }

    function clicar7(){
        setBotao7(true);
        setBotao8(false);
        setBotao9(false);
    }

    function clicar8(){
        setBotao7(false);
        setBotao8(true);
        setBotao9(false);

    }

    function clicar9(){
        setBotao7(false);
        setBotao8(false);
        setBotao9(true);
    }

    function clicar10(){
        setBotao10(true);
        setBotao11(false);
        setBotao12(false);
    }

    function clicar11(){
        setBotao10(false);
        setBotao11(true);
        setBotao12(false);

    }

    function clicar12(){
        setBotao10(false);
        setBotao11(false);
        setBotao12(true);
    }

    function clicar13(){
        setBotao13(true);
        setBotao14(false);
        setBotao15(false);
    }

    function clicar14(){
        setBotao13(false);
        setBotao14(true);
        setBotao15(false);

    }

    function clicar15(){
        setBotao13(false);
        setBotao14(false);
        setBotao15(true);
    }

    return(
        <View style={styles.container}>

            <ScrollView 
                style={styles.balao}
                showsVerticalScrollIndicator={false}
            >

                <Text style={styles.subtitle}>Conhecimentos sobre depressão</Text>
                <Text style={styles.textobold}>8. Realizaste ou estás a realizar algum tratamento?</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check}
                        onValueChange={() => validate()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Sim</Text>
                        <CheckBox
                        value={valid}
                        onValueChange={() => troca()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Não</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>9. Se sim, que tipo de tratamento?</Text>

                <View style={styles.container2}>
                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao1}
                        onValueChange={() => clicar1()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Tratamento medicamentoso</Text>
                    </View>

                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao2}
                        onValueChange={() => clicar2()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Tratamento medicamentoso e psicológico</Text>
                    </View>

                    <View style={styles.checkboxContainer3}>
                    <CheckBox
                        value={botao3}
                        onValueChange={() => clicar3()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Terapias alternativas</Text>
                    </View>
                </View>    
                
                <Text style={styles.textobold}>10. Alguém muito próximo de ti teve ou tem depressão?</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={check2}
                        onValueChange={() => validate2()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Sim</Text>

                        <CheckBox
                        value={valid2}
                        onValueChange={() => troca2()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Não</Text>
                    </View>
                </View>
            
                <Text style={styles.textobold}>11. Essa pessoa é:</Text>

                <View style={styles.container2}>
                <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao4}
                        onValueChange={() => clicar4()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Familiar</Text>
                    </View>

                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao5}
                        onValueChange={() => clicar5()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Colega da Universidade</Text>
                    </View>

                    <View style={styles.checkboxContainer3}>
                    <CheckBox
                        value={botao6}
                        onValueChange={() => clicar6()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Amigo</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>12. Aproximadamente há quanto tempo?</Text>

                <View style={styles.container2}>
                <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao7}
                        onValueChange={() => clicar7()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Há mais de 1 ano</Text>
                    </View>

                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao8}
                        onValueChange={() => clicar8()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Entre 1 ano e 3 meses</Text>
                    </View>

                    <View style={styles.checkboxContainer3}>
                    <CheckBox
                        value={botao9}
                        onValueChange={() => clicar9()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Nos últimos 3 meses</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>13. Essa pessoa realizou ou está a realizar algum tratamento?</Text>

                <View style={styles.container2}>
                <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao10}
                        onValueChange={() => clicar10()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Sim</Text>
                    </View>

                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao11}
                        onValueChange={() => clicar11()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Não</Text>
                    </View>

                    <View style={styles.checkboxContainer3}>
                    <CheckBox
                        value={botao12}
                        onValueChange={() => clicar12()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Não sei</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>14. Que tipo de tratamento?</Text>
                
                <View style={styles.container2}>
                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao13}
                        onValueChange={() => clicar13()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Tratamento medicamentoso</Text>
                    </View>

                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao14}
                        onValueChange={() => clicar14()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Tratamento medicamentoso e psicológico</Text>
                    </View>

                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao15}
                        onValueChange={() => clicar15()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Terapias alternativas</Text>
                    </View>
                </View>

                {/* Aparecer apenas quando as respostas estão todas dadas aka --> if check || valid == true && check2 || valid2 == true (...) */}
                
                <View style={styles.seguinteContainer}> 
                <TouchableOpacity
                    onPress={() => {navigation.navigate('QiSaraD')}}> 
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
        width: '80%',
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

    container2: {
        marginLeft: '15%',
        marginRight: '15%',
        marginTop: 8,
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: '10%',
        marginTop: '3%',
    },

    checkboxContainer2: {
        flexDirection: 'row',
    },

    checkboxContainer3: {
        flexDirection: 'row',
        marginBottom: '15%',
    },

    checkbox: {
        alignSelf: "center",
    },

    label: {
        margin: 8,
        marginRight:'15%',
    },
    label2: {
        margin: 8,
    },

});

export default QiSaraC;