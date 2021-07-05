import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, Image, View, CheckBox} from "react-native";
import TextArea from 'react-native-textarea';
import { auth, db } from '../../../Firebase';


function QiSaraB({route, navigation}){

   
    // EXEMPLO DE COMO RETIRAR O NUMERO DE RESPOSTAS 

    // const [respostas, setRespostas] = useState(0);

    // async function getPergunta1(){  
    //     const questionario = db.collection('Questionário Sara').doc(currentUser); 
    //     const snapshot = await questionario.get();
    //     snapshot.forEach(doc => {
    //        setRespostas(Object.keys(doc.data()).length);  
    //         
    //     });
    
    //     console.log('linha 19 ' + respostas); 
    // }

    
    // useEffect(() => {
    //     getPergunta1();
    // })


    const currentUser = auth.currentUser.uid;
    const collection = route.params.collection;

    function setQuestionario(){

                //pergunta 1
 
                    if (check == true) {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta1: 'Sim' 
                        }, { merge: true })
                    } else {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta1: 'Não'
                        }, { merge: true })
                    }

                //pergunta 2

                    if (mensagem != '') {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta2: mensagem
                        }, {merge: true})
                    } 

                //pergunta 3

                    if (check2 == true) {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta3: 'Sim'
                        }, {merge: true})
                    } else {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta3: 'Não'
                        }, {merge: true})
                    }

                //pergunta 4

                    if (check3 == true) {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta4: 'Sim'
                        }, {merge: true})
                    } else {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta4: 'Não'
                        }, {merge: true})
                    }

                //pergunta 5

                    if (check4 == true) {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta5: 'Sim'
                        }, {merge: true})
                    } else {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta5: 'Não'
                        }, {merge: true})
                    }

                //pergunta 6
                    
                    if (check5 == true) {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta6: 'Sim'
                        }, {merge: true})
                    } else {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta6: 'Não'
                        }, {merge: true})
                    }

                //pergunta 7

                    if (botao1 == true) {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta7: 'Há mais de 1 ano'
                        }, {merge: true})
                    } else if (botao2 == true) {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta7: 'Entre 1 ano e 3 meses'
                        }, {merge: true})
                    } else {
                        db
                        .collection(collection)
                        .doc(currentUser)
                        .set({
                            pergunta7: 'Nos últimos 3 meses'
                        }, {merge: true})
                    }

    }

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
        setBotao1(false);
        setBotao2(true);
        setBotao3(false);

    }

    function clicar3(){
        setBotao1(false);
        setBotao2(false);
        setBotao3(true);
    }

    return(
        <View style={styles.container}>

            <ScrollView 
                style={styles.balao}
                showsVerticalScrollIndicator={false}
            >

                <Text style={styles.subtitle}>Conhecimentos sobre depressão</Text>
                <Text style={styles.textobold}>1. Sabes o que é a depressão?</Text>

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
            
                <Text style={styles.textobold}>4. Alertarias essa pessoa, dizendo-lhe que pode estar a sofrer de depressão?</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={check3}
                        onValueChange={() => validate3()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Sim</Text>
                        <CheckBox
                        value={valid3}
                        onValueChange={() => troca3()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Não</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>5. Recomendarias a essa pessoa que procurasse apoio de profissionais de saúde?</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={check4}
                        onValueChange={() => validate4()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Sim</Text>

                        <CheckBox
                        value={valid4}
                        onValueChange={() => troca4()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Não</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>6. Consideras que já tiveste (ou tens) alguma depressão?</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={check5}
                        onValueChange={() => validate5()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Sim</Text>

                        <CheckBox
                        value={valid5}
                        onValueChange={() => troca5()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Não</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>7. Aproximadamente há quanto tempo?</Text>
                
                <View style={styles.container2}>
                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao1}
                        onValueChange={() => clicar1()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Há mais de 1 ano</Text>
                    </View>

                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao2}
                        onValueChange={() => clicar2()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Entre 1 ano e 3 meses</Text>
                    </View>

                    <View style={styles.checkboxContainer2}>
                    <CheckBox
                        value={botao3}
                        onValueChange={() => clicar3()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Nos últimos 3 meses</Text>
                    </View>
                </View>

                { (check == true || valid == true) && (check2 == true || valid2 == true) && (check3 == true || valid3 == true) && (check4 == true || valid4 == true) && (check5 == true || valid5 == true) && (mensagem != '') && (botao1 == true || botao2 == true || botao3 == true)
                ? ( 
                    <View style={styles.seguinteContainer}> 
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('QiSaraC', {collection: route.params.collection}), setQuestionario()}}> 
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                    </View> 
                    ) : (
                        <Text></Text>
                    )
                }
               
            </ScrollView>

            <View style={styles.container3}>
                    <Text style={styles.progressoDotSelected}>•</Text>
                    <Text style={styles.progressoDot}>•</Text>
                    <Text style={styles.progressoDot}>•</Text>
                    <Text style={styles.progressoDot}>•</Text>
                    <Text style={styles.progressoDot}>•</Text>
            </View>
        

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

    container3: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        marginBottom: '10%',
    },

    progressoDot: {
        textAlign: 'center',
        flex: 1,
        color: '#D2D2D2',
        fontSize: 50,
        opacity: 50,
    },

    progressoDotSelected: {
        textAlign: 'center',
        flex: 1,
        color: '#8FBBDD',
        fontSize: 50,
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
        marginBottom: '15%',
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

export default QiSaraB;