import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { auth, db } from '../../Firebase';


function Apoio({ route, navigation }) {


    const currentUser = auth.currentUser.uid;
    const [informacao, setInformacao] = useState([]);
    const [assegurado, setAssegurado] = useState(false);

    if ((currentUser == '0tPylHnZykWeGHN0Xft4b4De9Nk1' || currentUser == 'FydfT0GfIdeAHeU5Et9UbgzNk852')) {


            useEffect(() => {
                getPedidosAdmin();
                getPedidosFinal()
            }, [assegurado])

            async function getPedidosAdmin(){
                const pedidoAdminRef = db.collection('Pedido Esclarecimento').where('encarregue', '==', currentUser);
                const snapshot = await pedidoAdminRef.get();
                snapshot.forEach(doc => {
                    if (doc.exists) {
                        setAssegurado(true);
                    } else {
                        setAssegurado(false);
                    }
                })
    
                console.log(assegurado);
               
            }


        async function getPedidosFinal(){

           

            if (assegurado == true) {
              
                        const pedidoFinalRef = db.collection('Pedido Esclarecimento')
                        const snapshot = await pedidoFinalRef.get();
                        const infoAdmin = [];
                        snapshot.forEach(doc => {
                            infoAdmin.push(doc.data())
                            
                        })

                        setInformacao(...informacao, infoAdmin);
                
            } else {

                        const pedidoFinalRef = db.collection('Pedido Esclarecimento').where('encarregue', '==', 'negativo')
                        const snapshot = await pedidoFinalRef.get();
                        const infoAdmin = [];
                        snapshot.forEach(doc => {
                            infoAdmin.push(doc.data())
                        })

                        setInformacao(...informacao, infoAdmin);
                   
            }
        }
        

    } else {

        useEffect(() => {
            getPedidos();
           
        },[])
   
       
    
        async function getPedidos(){
            const pedidoRef = db.collection('Pedido Esclarecimento').where('user', '==', currentUser).orderBy('fulldata', 'asc');
            const snapshot = await pedidoRef.get();
            const info = [];
            snapshot.forEach(doc => {
                info.push(doc.data())
       
            })
    
            setInformacao(...informacao, info);
          
            
        }
    }

   

 

    return (
        <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View>

                <Text style={styles.title1}>Linhas de Apoio</Text>

                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim.</Text>
            </View>
            <View style={styles.container2}>

                <Text style={styles.title3}>Contacta com a nossa equipa de profissionais</Text>

            {
            
            informacao.map((item, key) => (
                <View style={styles.ticketContainer} key={key}>
                    <View style={styles.ticketLeft}>
                        <Text  style={styles.setLeft}>{item.dia}</Text>
                        <Text  style={styles.setLeft}>{item.mês}</Text>
                    </View>

                    <View style={styles.ticketRight}>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Conversa', {fulldata: item.fulldata})}
                        >

                        {/* render condicional com data da firebase Estado a verde ou a vermelho  */}
                        
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>Assunto:  <Text style={{fontWeight: 'normal'}}>{item.assunto}</Text> </Text>
                        <Text style={{fontSize: 13, fontWeight: 'bold'}}>Estado: { (item.estado == 'Resolvido') ? (
                            <Text style={{fontWeight: 'normal', color: 'green', fontWeight: 'bold'}}> {item.estado}</Text>
                        ):(
                            <Text style={{fontWeight: 'normal', color: 'red', fontWeight: 'bold'}}> {item.estado}</Text>
                        )}
                            
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            ))

            }

              
              {
                  (currentUser == '0tPylHnZykWeGHN0Xft4b4De9Nk1') || (currentUser == 'FydfT0GfIdeAHeU5Et9UbgzNk852') ? (
                      <Text></Text>
                  ) : (
                        <View style={styles.ticketContainer}>
                            <View style={styles.ticketLeft}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Esclarecimento')}
                            
                                >
                                    <Icon2 name='plus' size={25} color={'#6578B3'} style={{alignSelf: 'center'}} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.ticketRight}>
                            <Text style={{fontSize: 12, fontWeight: 'bold'}}> Realizar pedido de esclarecimento</Text>
                            </View>
                        </View>
                  )
              }


                

                <View style={styles.contacto}>
                    <Text style={styles.titulo2}>Telefone da Amizade</Text>
                    <Text style={styles.text2}>16h – 23h</Text>
                    <Text style={styles.text2}>228 323 535</Text>
                </View>

                <View style={styles.contacto}>
                    <Text style={styles.title2}>SOS Voz Amiga</Text>
                    <Text style={styles.text2}>16h - 24h</Text>
                    <Text style={styles.text2}>213 544 545 | 912 802 669 | 963 524 660</Text>
                </View>


                <View style={styles.contacto}>
                    <Text style={styles.title2}>SOS Estudante</Text>
                    <Text style={styles.text2}>20h - 1h</Text>
                    <Text style={styles.text2}>96 955 45 45 | 808 200 204</Text>
                </View>
        
                
                <View style={styles.contacto}>
                    <Text style={styles.title2}>Linha LUA (UA)</Text>
                    <Text style={styles.text2}>20h - 2h</Text>
                    <Text style={styles.text2}>800 208 448</Text>
                </View>

                <View style={styles.contacto}>
                    <Text style={styles.title2}>Saúde 24</Text>
                    <Text style={styles.text2}>Permanente</Text>
                    <Text style={styles.text2}>808 24 24 24</Text>
                </View>

                <View style={styles.contacto}>
                    <Text style={styles.title2}>INEM</Text>
                    <Text style={styles.text2}>Permanente</Text>
                    <Text style={styles.text2}>112</Text>
                </View>

                <View style={styles.contacto}>
                    <Text style={styles.title2}>Urgência de Psiquiatria (Hospital de Aveiro)</Text>
                    <Text style={styles.text2}>8h - 20h</Text>
                </View>

                <View style={styles.contacto2}>
                    <Text style={styles.title2}>Urgência Psiquiatria (Hospital de S. João, Porto)</Text>
                    <Text style={styles.text2}>Permanente</Text>
                </View>

            </View>

        </ScrollView>

            <View style={styles.tabBar}>
                <View style={{flex: 1}}>
                <Checkbox 
                    style={styles.icon}
                    onClick={() => navigation.navigate('Notificacoes')} // Alterar para Notificações
                    isChecked={false}
                    unCheckedImage={<Icon name='notifications' size={28} color='#D2D2D2'/>}
                    checkedImage={<Icon name='notifications' size={28} color='#6578B3'/>}
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
                    isChecked={true}
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
        marginRight: '10%',
        fontSize: 15,
    },

    icon: {
        padding: '10%', 
        alignSelf: 'center',
    },

    title1: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '15%',

    },
    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: '10%',
        marginBottom: '3%',
        marginTop: '7%',

    },

    titulo2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: '10%',
        marginBottom: '3%',
        marginTop: '15%',

    },

    title3: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '3%',
        marginTop: '13%',

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
    }
    



});

export default Apoio;