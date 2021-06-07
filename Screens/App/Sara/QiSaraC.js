import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import Checkbox from 'react-native-check-box';

function QiSaraC({route, navigation}){

    const SimUnchecked = (<Image source={require('../../../images/Sim_unchecked.png')} style={styles.aceito} />)
    const SimChecked  = (<Image source={require('../../../images/Sim_checked.png')} style={styles.aceito} />)

    const NaoUnchecked = (<Image source={require('../../../images/Nao_unchecked.png')} style={styles.aceito2} />)
    const NaoChecked = (<Image source={require('../../../images/Nao_checked.png')} style={styles.aceito2} />)


    const [mensagem, setMensagem] = useState('');
    const [check, setCheck] = useState(false);
    const [valid, setValid] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [valid2, setValid2] = useState(false);

    function validate(){ setCheck(true); setValid(false); }
    function validate2(){setCheck2(true); setValid2(false); }
    function troca(){ setCheck(false); setValid(true); }
    function troca2(){ setCheck2(false); setValid2(true); }
    
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.balao}>
                <Text style={styles.subtitle}>Conhecimentos sobre depressão</Text>

                <Text style={styles.textobold}>8. Realizaste ou estás a realizar algum tratamento?</Text>

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
                    
                <Text style={styles.textobold}>9. Se sim, que tipo de tratamento?</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <Text style={styles.textobold}>10. Alguém muito próximo de ti teve ou tem depressão?</Text>
                
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

            
                <Text style={styles.textobold}>11. Essa pessoa é:</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <Text style={styles.textobold}>12. Aproximadamente há quanto tempo?</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <Text style={styles.textobold}>13. Essa pessoa realizou ou está a realizar algum tratamento?</Text>
                {/* falta aqui 3 opçoes de resposta */}

                <Text style={styles.textobold}>14. Que tipo de tratamento?</Text>
                {/* falta aqui 3 opçoes de resposta */}

            <View style={styles.seguinteContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('QiSaraD')}
                    >
                    <Text style={styles.next}>Seguinte</Text>
                </TouchableOpacity>
            </View>
            </View>
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
        marginTop: '10%', 
        paddingBottom: '10%',
    },

    textobold: {
        marginLeft: '10%',
        marginRight: '10%',
        fontWeight: 'bold',
        fontSize: 15,
    },

    aceito: { 
        height: 45, 
        resizeMode: 'contain',
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
});

export default QiSaraC;