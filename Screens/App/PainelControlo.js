import React, { useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Box, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { Entypo } from '@expo/vector-icons';
import { auth, db } from '../../Firebase';
import XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';



function PainelControlo({ route, navigation }) {

    useEffect(() => {
        getEstudantes();
        getPDS();
        getSara();
        getMarco();
        getMarcoFinal();
        getSaraFinal();
    }, [])

    const [estudantes, setEstudantes] = useState();
    const [PDS, setPDS] = useState();
    const [numeroSaraInicial, setNumeroSaraInicial] = useState();
    const [numeroMarcoInicial, setNumeroMarcoInicial] = useState();
    const [numeroSaraFinal, setNumeroSaraFinal] = useState();
    const [numeroMarcoFinal, setNumeroMarcoFinal] = useState()
    const currentUser = auth.currentUser.uid;

    const [MarcoInicial, setMarcoInicial] = useState([]);
    const [SaraInicial, setSaraInicial] = useState([]);
    const [MarcoFinal, setMarcoFinal] = useState([]);
    const [SaraFinal, setSaraFinal] = useState([]);

  async function getEstudantes(){
      const estudantesRef = db.collection('users').where('name', '==', 'estudante')
      const snapshot = await estudantesRef.get();
      let numeroEstudantes = 0;
      snapshot.forEach(doc => {
        numeroEstudantes++;
        
      })

     setEstudantes(numeroEstudantes);

    }


    async function getPDS(){
        const PDSref = db.collection('users').where('status', '==', 1)
        const snapshot = await PDSref.get();
        let numeroPDS = 0;
        snapshot.forEach(doc => {
            numeroPDS++;
        })

        setPDS(numeroPDS);
    }

    async function getSara(){
        const saraRef = db.collection('Questionário Sara Inicial').where('concluido', '==', 'true')
        const snapshot = await saraRef.get();
        const all = [];
        let numeroSaraInicial = 0;
        snapshot.forEach(doc => {
            numeroSaraInicial++;
            all.push(doc.data())
            setSaraInicial(all);
        })

        setNumeroSaraInicial(numeroSaraInicial);
    }


    async function getSaraFinal(){
        const saraRef = db.collection('Questionário Sara Final').where('concluido', '==', 'true')
        const snapshot = await saraRef.get();
        const all = [];
        let numeroSaraFinal = 0;
        snapshot.forEach(doc => {
            numeroSaraFinal++;
            all.push(doc.data())
            setSaraFinal(all);
        })
    
        setNumeroSaraFinal(numeroSaraFinal);

    }


   


    async function getMarco(){
        const marcoRef = db.collection('Questionário Marco Inicial').where('concluido', '==', 'true')
        const snapshot = await marcoRef.get();
        let numeroMarcoInicial = 0;
        const all = [];
        snapshot.forEach(doc => {
            numeroMarcoInicial++;
            all.push(doc.data());
            setMarcoInicial(all); 
            
        })

        
        setNumeroMarcoInicial(numeroMarcoInicial);
    }

    async function getMarcoFinal(){
        const marcoRef = db.collection('Questionário Marco Final').where('concluido', '==', 'true')
        const snapshot = await marcoRef.get();
        const all = [];
        let numeroMarcoFinal = 0;
        snapshot.forEach(doc => {
            numeroMarcoFinal++;
            all.push(doc.data());
            setMarcoFinal(all); 
        })

        setNumeroMarcoFinal(numeroMarcoFinal);
       
    }


    

    var data = SaraInicial

    var data2 = SaraFinal

    var data3 = MarcoInicial

    var data4 = MarcoFinal


    function exportData() {
        var ws = XLSX.utils.json_to_sheet(data);
        var ws2 = XLSX.utils.json_to_sheet(data2);
        var ws3 = XLSX.utils.json_to_sheet(data3);
        var ws4 = XLSX.utils.json_to_sheet(data4);
        var wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Dados Brutos Sara Inicial");
        XLSX.utils.book_append_sheet(wb, ws2, "Dados Brutos Sara Final");
        XLSX.utils.book_append_sheet(wb, ws3, "Dados Brutos Marco Inicial");
        XLSX.utils.book_append_sheet(wb, ws4, "Dados Brutos Marco Final");
        const wbout = XLSX.write(wb, {
        type: 'base64',
        bookType: "xlsx"
        });
        const uri = FileSystem.cacheDirectory + 'Dados Brutos.xlsx';
        FileSystem.writeAsStringAsync(uri, wbout, {
        encoding: FileSystem.EncodingType.Base64
        });
        Sharing.shareAsync(uri, {
            mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            dialogTitle: 'MyWater data',
            UTI: 'com.microsoft.excel.xlsx'
          });
    }
   


    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View>

                <Text style={styles.title1}>Painel de Controlo</Text>
            </View>
            <View style={styles.container2}>
                <View style={styles.container3}>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex:1, marginBottom:'5%'}}>

                        <Text style={styles.title2}>Dados</Text>

                        <TouchableOpacity
                            style={styles.icone}
                            onPress={exportData}>
                            <Entypo name="download" size={20} color="#6578B3" />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.caixa}>
                        <Text style={styles.valor}>
                            {estudantes}
                        </Text>
                        <Text style={styles.nome}>
                            estudantes
                        </Text>
                        <Text style={styles.nome}>
                            universitários
                        </Text>
                    </View>

                    <View style={styles.caixa2}>
                        <Text style={styles.valor}>
                            {PDS}
                        </Text>
                        <Text style={styles.nome}>
                            profissionais
                        </Text>
                        <Text style={styles.nome}>
                            de saúde
                        </Text>
                    </View>

                   



                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>

                    <View style={styles.caixa}>
                            <Text style={styles.valor}>
                                {numeroSaraInicial}
                            </Text>
                            <Text style={styles.nome}>
                                questionários
                            </Text>
                            <Text style={styles.nome}>
                                respondidos
                            </Text>
                            <Text style={styles.nome}>
                                Ferida Sara
                            </Text>
                            <Text style={styles.nome}>
                                Inicial
                            </Text>
                        </View>

                        <View style={styles.caixa2}>
                            <Text style={styles.valor}>
                            {numeroMarcoInicial}
                            </Text>
                            <Text style={styles.nome}>
                                questionários
                            </Text>
                            <Text style={styles.nome}>
                                respondidos
                            </Text>
                            <Text style={styles.nome}>
                                Marco
                            </Text>
                            <Text style={styles.nome}>
                                Inicial
                            </Text>
                        </View>

                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%'}}>

                    <View style={styles.caixa}>
                            <Text style={styles.valor}>
                                {numeroSaraFinal}
                            </Text>
                            <Text style={styles.nome}>
                                questionários
                            </Text>
                            <Text style={styles.nome}>
                                respondidos
                            </Text>
                            <Text style={styles.nome}>
                                Ferida Sara
                            </Text>
                            <Text style={styles.nome}>
                                Final
                            </Text>
                        </View>

                        <View style={styles.caixa2}>
                            <Text style={styles.valor}>
                            {numeroMarcoFinal}
                            </Text>
                            <Text style={styles.nome}>
                                questionários
                            </Text>
                            <Text style={styles.nome}>
                                respondidos
                            </Text>
                            <Text style={styles.nome}>
                                Marco
                            </Text>
                            <Text style={styles.nome}>
                                Final
                            </Text>
                        </View>

                </View>

            </View>

        </ScrollView>

            <View style={styles.tabBar}>
                <View style={{flex: 1}}>
                    <Checkbox 
                        style={styles.icon}
                        onClick={() => navigation.navigate('PainelControlo')} 
                        isChecked={true}
                        unCheckedImage={<Icon1 name='equalizer' size={30} color='#D2D2D2' />}
                        checkedImage={<Icon1 name='equalizer' size={30} color='#6578B3'/>}
                    />  
                </View>
                
                <View style={{flex: 1}}>
                    <Checkbox 
                        style={styles.icon}
                        onClick={() => navigation.navigate('Homepage')}
                        isChecked={false}
                        unCheckedImage={<Icon1 name='home' size={30} color='#D2D2D2' />}
                        checkedImage={<Icon1 name='home' size={30} color='#6578B3'/>}
                    />   
                </View>
                
                <View style={{flex: 1}}>
                    <Checkbox 
                        style={styles.icon}
                        onClick={() => navigation.navigate('Apoio')} 
                        isChecked={false}
                        unCheckedImage={<Icon2 name='questioncircle' size={28} color='#D2D2D2' />}
                        checkedImage={<Icon2 name='questioncircle' size={28} color='#6578B3'/>}
                    />  
                </View>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFE0FB',
        width: '100%',

    },

    container2: {
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: '100%',
        width: '100%',
        marginTop: '10%',
        paddingBottom: '15%',

    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
    },

    text2: {
        marginLeft: '10%',
        marginTop: '3%',
        fontSize: 17,
    },

    textobotao:{
        fontSize: 15,
        color: '#6578B3',
        fontWeight: 'bold',
        marginRight: '5%',
    },

    icon: {
        padding: '10%', 
        alignSelf: 'center',
    },

    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '10%',
        marginTop: '15%',

    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: '10%',
        marginRight:'61%',
    },

    title3: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: '10%',
        marginLeft: '10%',
    },

    title4: {
        fontSize: 20,
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '7%',

    },

    icone:{
        marginTop: '10%',
    },

    tabBar: {
        flexDirection: 'row', 
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#D7D7D7',
        
    },

    contacto: {
        borderBottomWidth: 1, 
        borderColor: '#ECEDEF',
        width: '80%', 
        alignSelf: 'center', 
        paddingBottom: '7%'
    },

    contacto2: {
        width: '80%', 
        alignSelf: 'center', 
        paddingBottom: '7%'
    },

    ticketContainer: {
        flexDirection: 'row', 
        marginLeft: '10%', 
        marginRight: '10%', 
        marginTop: '5%',
    },

    ticketLeft: {
        flex: 1, 
        backgroundColor: '#CFE0FB', 
        padding: '8%', 
        borderWidth: 1, 
        borderTopLeftRadius: 30, 
        borderBottomLeftRadius: 30,
        borderColor: '#CFE0FB', 
        marginRight: '1%'
    },

    ticketRight: {
        flex: 5, 
        backgroundColor: '#ECEDEF', 
        padding: '6%', 
        borderWidth: 1, 
        borderTopRightRadius: 30, 
        borderBottomRightRadius: 30, 
        borderColor: '#ECEDEF', 
        justifyContent: 'center',
    },

    setLeft: {
       fontSize: 18, 
       fontWeight: 'bold', 
       alignSelf: 'center',
       color: '#6578B3',
    },
    
    caixa:{
        padding: '3%',
        paddingTop: '4%',
        paddingBottom: '4%',
        backgroundColor: '#6578B3', 
        alignItems: 'center',
        borderRadius: 20,
    },

    caixa2:{
        padding: '3%',
        paddingTop: '4%',
        paddingBottom: '4%',
        backgroundColor: '#6578B3', 
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: '2%',
        marginRight: '2%',
    },

    nome:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
    },

    valor:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
    },

});

export default PainelControlo;