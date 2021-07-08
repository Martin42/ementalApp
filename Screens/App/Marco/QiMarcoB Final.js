import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Text, Image, View, CheckBox} from "react-native";
import TextArea from 'react-native-textarea';
import { auth, db } from '../../../Firebase';


function QiMarcoB({route, navigation}){

    const currentUser = auth.currentUser.uid;
    const collection = route.params.collection;

    function setQuestionario(){
        //pergunta 1

        if (check == true) {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta1: 'Verdadeira'
            }, {merge: true})
        } else {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta1: 'Falsa'
            }, {merge: true})
        }

        //pergunta 2

        if (check2 == true) {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta2: 'Verdadeira'
            }, {merge: true})
        } else {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta2: 'Falsa'
            }, {merge: true})
        }

        //pergunta 3

        if (check3 == true) {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta3: 'Verdadeira'
            }, {merge: true})
        } else {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta3: 'Falsa'
            }, {merge: true})
        }

        //pergunta 4

        if (check4 == true) {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta4: 'Verdadeira'
            }, {merge: true})
        } else {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta4: 'Falsa'
            }, {merge: true})
        }

        //pergunta 5

        if (check5 == true) {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta5: 'Verdadeira'
            }, {merge: true})
        } else {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta5: 'Falsa'
            }, {merge: true})
        }

        //pergunta 6 

        if (check6 == true) {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta6: 'Verdadeira'
            }, {merge: true})
        } else {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta6: 'Falsa'
            }, {merge: true})
        }

        //pergunta 7

        if (check7 == true) {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta7: 'Verdadeira'
            }, {merge: true})
        } else {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta7: 'Falsa'
            }, {merge: true})
        }

        //pergunta 8

        if (check8 == true) {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta8: 'Verdadeira'
            }, {merge: true})
        } else {
            db
            .collection(collection)
            .doc(currentUser)
            .set({
                pergunta8: 'Falsa'
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
    const [check6, setCheck6] = useState(false);
    const [valid6, setValid6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [valid7, setValid7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [valid8, setValid8] = useState(false);

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

                <Text style={styles.subtitle}>Conhecimentos sobre depressão</Text>
                <Text style={styles.texto}>Depois de ler as afirmações que se seguem, assinala a opção que consideras mais correta: verdadeira ou falsa.</Text>

                <Text style={styles.textobold}>1. Se uma pessoa próxima de mim estivesse com sintomas de depressão, oferecia-me para ajudar.</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check}
                        onValueChange={() => validate()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Verdadeira</Text>
                        <CheckBox
                        value={valid}
                        onValueChange={() => troca()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Falsa</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>2. A prática de exercício físico contribui para uma boa saúde mental.</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check2}
                        onValueChange={() => validate2()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Verdadeira</Text>
                        <CheckBox
                        value={valid2}
                        onValueChange={() => troca2()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Falsa</Text>
                    </View>
                </View>
                
                <Text style={styles.textobold}>3. Uma pessoa com depressão sente-se muito infeliz.</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check3}
                        onValueChange={() => validate3()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Verdadeira</Text>
                        <CheckBox
                        value={valid3}
                        onValueChange={() => troca3()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Falsa</Text>
                    </View>
                </View>
            
                <Text style={styles.textobold}>4. Se eu estivesse sintomas de depressão, procuraria ajuda de pessoas da minha família.</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check4}
                        onValueChange={() => validate4()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Verdadeira</Text>
                        <CheckBox
                        value={valid4}
                        onValueChange={() => troca4()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Falsa</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>5. Se uma pessoa próxima de mim estivesse com depressão, eu encorajava-a a procurar um psicólogo.</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check5}
                        onValueChange={() => validate5()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Verdadeira</Text>
                        <CheckBox
                        value={valid5}
                        onValueChange={() => troca5()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Falsa</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>6. A depressão não afeta o comportamento das pessoas.</Text>

                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check6}
                        onValueChange={() => validate6()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Verdadeira</Text>
                        <CheckBox
                        value={valid6}
                        onValueChange={() => troca6()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Falsa</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>7. Dormir bem contribui para uma boa saúde mental.</Text>
                
                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check7}
                        onValueChange={() => validate7()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Verdadeira</Text>
                        <CheckBox
                        value={valid7}
                        onValueChange={() => troca7()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Falsa</Text>
                    </View>
                </View>

                <Text style={styles.textobold}>8. Se eu estivesse com sintomas de depressão, procuraria a ajuda de um psicólogo/ psiquiatra.</Text>
                
                <View style={styles.container}>
                    <View style={styles.checkboxContainer}>
                        <CheckBox
                        value={check8}
                        onValueChange={() => validate8()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label}>Verdadeira</Text>
                        <CheckBox
                        value={valid8}
                        onValueChange={() => troca8()}
                        style={styles.checkbox}
                        />
                        <Text style={styles.label2}>Falsa</Text>
                    </View>
                </View>

                {/* Aparecer apenas quando as respostas estão todas dadas aka --> if check || valid == true && check2 || valid2 == true (...) */}
                

                { (check == true || valid == true) && (check2 == true || valid2 == true) && (check3 == true || valid3 == true) && (check4 == true || valid4 == true) && (check5 == true || valid5 == true) && (check6 == true || valid6 == true) && (check7 == true || valid7 == true) && (check8 == true || valid8 == true) ? (
                    <View style={styles.seguinteContainer}> 
                    <TouchableOpacity
                        onPress={() => {navigation.navigate('QiMarcoC', {collection: route.params.collection}), setQuestionario()}}> 
                        <Text style={styles.next}>Seguinte</Text>
                    </TouchableOpacity>
                    </View> 
                ): (
                    <Text></Text>
                )}
              
            </ScrollView>

            <View style={styles.container3}>
                    <Text style={styles.progressoDotSelected}>•</Text>
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

    texto: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingBottom: '5%',
        fontSize: 15,
        color: 'black',
    },

});

export default QiMarcoB;