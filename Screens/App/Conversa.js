import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { db, auth } from '../../Firebase';

function Conversa({route, navigation}){


    useEffect(() => {
        getConversa();
        getUserStatus();
    }, [])

    const currentUser = auth.currentUser.uid;
    const [ticketData, setTicketData] = useState([]);
    const [userStatus, setUserStatus] = useState();
    const [encarregue, setEncarregue] = useState();

        async function getUserStatus(){
        const userRef = db.collection('users').doc(currentUser);
        const snapshotUser = await userRef.get();
        if (!snapshotUser.exists) {
            console.log('No document');
        } else {
            setUserStatus(snapshotUser.data().status);
        }   
    }


    async function getConversa(){
        const conversaRef = db.collection('Tickets').where('fulldata', '==', route.params.fulldata);
        const snapshot = await conversaRef.get();
        const ticket = [];
        snapshot.forEach(doc => {
            ticket.push(doc.data())
            setEncarregue(doc.data().encarregue)
        });

        setTicketData(...ticketData, ticket);
    }


    if ((userStatus == 0 )|| (userStatus == 1)) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>

                        <View style={{position: 'absolute', left: 30}}>
                        <TouchableOpacity
                                onPress={() => navigation.navigate('Apoio')}
                                style={{flex: 1}}
                        >
                                <Icon name='left' size={30} color={'black'}/>
                                <Text style={{fontSize: 9, alignSelf: 'center', color: '#CFE0FB'}}>Voltar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 1}}>
                            <Text style={styles.title}>Pedido de Esclarecimento</Text>
                        </View>
                    </View>
                </View>
    
                <ScrollView 
                    style={styles.container}
                    persistentScrollbar={true}
                    >
                        
                        {
                            ticketData.map((item, key) => (
                                
                                    
                                    <View key={key}>
                                        <View style={styles.subtitleContainer}>
                                            <Text style={styles.subtitle}>Assunto: <Text style={{fontWeight: 'normal'}}> {item.assunto} </Text></Text>
                                        </View>
                    
                                        <View style={{backgroundColor: '#CFE0FB', borderWidth: 1, borderColor: '#CFE0FB', borderRadius: 25, marginLeft: '10%', marginRight: '10%', alignItems: 'flex-end'}}>
                                            <View style={{paddingLeft: '10%', paddingRight: '5%', paddingTop: '5%', paddingBottom: '5%'}}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <View style={{paddingRight: '2%', paddingTop: '3%'}}>
                                                        
                                                        <Text style={{fontWeight: 'bold', fontSize: 13, textAlign: 'right'}}> {item.nome}</Text>
                                                        <Text style={{fontSize: 11, textAlign: 'right'}}> {item.fulldata}</Text>
                    
                    
                                                        <View style={{paddingTop: '2%'}}>
                                                            <Text style={{textAlign: 'right'}}> {item.mensagem}</Text>
                                                        </View>
                                                    
                                                    </View>
                                                    <Icon2 name='person-circle' size={50} color={'black'} />
                                                   
                                                </View>
                                            </View>
                                        </View>
                                       
                                        {/* Resposta PDS */}
    
                                        { 
                                            (item.respostaPDS != '') ? (
                                                <View style={{backgroundColor: '#ECEDEF', borderWidth: 1, borderColor: '#CFE0FB', borderRadius: 25, marginLeft: '10%', marginRight: '10%', marginTop: '5%', marginBottom: '5%'}}>
                                                <View style={{paddingLeft: '5%', paddingRight: '10%', paddingTop: '5%', paddingBottom: '5%'}}>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Icon2 name='person-circle' size={50} color={'black'} />
                                                        <View style={{paddingLeft: '2%', paddingTop: '3%'}}>
                                                            
                                                            {(encarregue == '0tPylHnZykWeGHN0Xft4b4De9Nk1') ? (
                                                                <Text style={{fontWeight: 'bold', fontSize: 13}}> Dra Margarida Braga </Text>
                                                            ): (
                                                                <Text style={{fontWeight: 'bold', fontSize: 13}}> Dra Ana Cristina </Text>
                                                            )
                                                        
                                                        } 
                                                            <Text style={{fontSize: 11}}> {item.horaPDS}</Text>
                        
                        
                                                            <View style={{paddingTop: '2%'}}>
                                                                <Text style={{textAlign: 'left'}}> {item.respostaPDS} </Text>
                                                            </View>
                                                        
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            ) : (
                                                <Text></Text>
                                            )
                                        }
    
                                       
    
                                    {/* Resposta User */}
    
                                    {
                                        (item.respostaUser != '') ? (
                                            <View style={{backgroundColor: '#CFE0FB', borderWidth: 1, borderColor: '#CFE0FB', borderRadius: 25, marginLeft: '10%', marginRight: '10%', alignItems: 'flex-end'}}>
                                            <View style={{paddingLeft: '10%', paddingRight: '5%', paddingTop: '5%', paddingBottom: '5%'}}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <View style={{paddingRight: '2%', paddingTop: '3%'}}>
                                                        
                                                        <Text style={{fontWeight: 'bold', fontSize: 13, textAlign: 'right'}}> {item.nome}</Text>
                                                        <Text style={{fontSize: 11, textAlign: 'right'}}> {item.horaUser}</Text>
                    
                    
                                                        <View style={{paddingLeft: '20%', paddingTop: '2%'}}>
                                                            <Text style={{textAlign: 'right'}}> {item.respostaUser}</Text>
                                                        </View>
                                                    
                                                    </View>
                                                    <Icon2 name='person-circle' size={50} color={'black'} />
                                                   
                                                </View>
                                            </View>
                                        </View>
    
                                        ) : (
                                            <Text></Text>
                                        )
                                    }
                                    
                                   
    
                                        {/* Resposta Final */}
                                        
    
                                        {
                                            (item.respostaFinal != '') ? (
                                                <View style={{backgroundColor: '#ECEDEF', borderWidth: 1, borderColor: '#CFE0FB', borderRadius: 25, marginLeft: '10%', marginRight: '10%', marginTop: '5%'}}>
                                                <View style={{paddingLeft: '5%', paddingRight: '10%', paddingTop: '5%', paddingBottom: '5%'}}>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Icon2 name='person-circle' size={50} color={'black'} />
                                                        <View style={{paddingLeft: '2%', paddingTop: '3%'}}>
                                                            
                                                        {(encarregue == '0tPylHnZykWeGHN0Xft4b4De9Nk1') ? (
                                                                <Text style={{fontWeight: 'bold', fontSize: 13}}> Dra Margarida Braga </Text>
                                                            ): (
                                                                <Text style={{fontWeight: 'bold', fontSize: 13}}> Dra Ana Cristina </Text>
                                                            )
                                                        
                                                        }
                                                            <Text style={{fontSize: 11}}> {item.horaFinal}</Text>
                        
                        
                                                            <View style={{paddingRight: '20%', paddingTop: '2%'}}>
                                                                <Text style={{textAlign: 'left'}}> {item.respostaFinal} </Text>
                                                            </View>
                                                        
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                            ) : (
                                                <Text></Text>
                                            )
                                        }
    
                                    
    
                                        {/* Aparecer botão de resposta apenas após a resposta do PDS */}
    
                                        {
    
                                            ((item.respostaPDS != '') && (item.respostaUser == '')) ? (
                                                <View style={{marginTop: '5%', width: '20%', alignSelf: 'flex-end', marginBottom: '10%', marginRight: '6%'}}>
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate('Responder', {fulldata: route.params.fulldata, userstatus: userStatus})}
                                                >
                                                    <Text style={{color: '#6578B3', fontWeight: 'bold'}}>Responder</Text>
                                                </TouchableOpacity>
                                            </View>
                                            ) : (
                                                <Text></Text>
                                            )
                                        }
    
                                </View>
    
                            ))
                        }
    
                    
                       
                      
                </ScrollView>
    
                   
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>

                        <View style={{position: 'absolute', left: 30}}>
                        <TouchableOpacity
                                onPress={() => navigation.navigate('Apoio')}
                                style={{flex: 1}}
                        >
                                <Icon name='left' size={28} color={'black'}/>
                                <Text style={{fontSize: 9, alignSelf: 'center', color: '#CFE0FB'}}>Voltar</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flex: 1}}>
                            <Text style={styles.title}>Pedido de Esclarecimento</Text>
                        </View>
                    </View>
                </View>

            <ScrollView 
                style={styles.container}
                persistentScrollbar={true}
                >
                    
                    {
                        ticketData.map((item, key) => (
                            
                                
                                <View key={key}>
                                <View style={styles.subtitleContainer}>
                                    <Text style={styles.subtitle}>Assunto: <Text style={{fontWeight: 'normal'}}> {item.assunto} </Text></Text>
                                </View>
            
                                <View style={{backgroundColor: '#ECEDEF', borderWidth: 1, borderColor: '#ECEDEF', borderRadius: 25, marginLeft: '10%', marginRight: '10%'}}>
                                    <View style={{paddingLeft: '5%', paddingRight: '10%', paddingTop: '5%', paddingBottom: '5%'}}>
                                        <View style={{flexDirection: 'row'}}>
                                           
                                            <Icon2 name='person-circle' size={50} color={'black'} />
                                            <View style={{paddingLeft: '2%', paddingTop: '3%'}}>
                                                
                                                <Text style={{fontWeight: 'bold', fontSize: 13}}> {item.nome}</Text>
                                                <Text style={{fontSize: 11}}> {item.fulldata}</Text>
            
            
                                                <View style={{paddingTop: '2%'}}>
                                                    <Text style={{textAlign: 'left'}}> {item.mensagem}</Text>
                                                </View>
                                            
                                            </View>
                                        
                                        </View>
                                    </View>
                                </View>
                                   
                                    {/* Resposta PDS */}

                                    { 
                                        (item.respostaPDS != '') ? (
                                            <View style={{backgroundColor: '#CFE0FB', borderWidth: 1, borderColor: '#CFE0FB', borderRadius: 25, marginLeft: '10%', marginRight: '10%', marginTop: '5%', marginBottom: '5%', alignItems: 'flex-end'}}>
                                            <View style={{paddingLeft: '10%', paddingRight: '5%', paddingTop: '5%', paddingBottom: '5%'}}>
                                                <View style={{flexDirection: 'row'}}>
                                                    <View style={{paddingRight: '2%', paddingTop: '3%'}}>
                                                        
                                                        {(encarregue == '0tPylHnZykWeGHN0Xft4b4De9Nk1') ? (
                                                                <Text style={{fontWeight: 'bold', fontSize: 13, textAlign: 'right'}}> Dra Margarida Braga </Text>
                                                            ): (
                                                                <Text style={{fontWeight: 'bold', fontSize: 13, textAlign: 'right'}}> Dra Ana Cristina </Text>
                                                            )
                                                        
                                                        } 
                                                        <Text style={{fontSize: 11}}> {item.horaPDS}</Text>
                    
                    
                                                        <View style={{paddingTop: '2%'}}>
                                                            <Text style={{textAlign: 'right'}}> {item.respostaPDS} </Text>
                                                        </View>
                                                    
                                                    </View>
                                                    <Icon2 name='person-circle' size={50} color={'black'} />
                                                 
                                                </View>
                                            </View>
                                        </View>
                                        ) : (
                                            <Text></Text>
                                        )
                                    }

                                   

                                {/* Resposta User */}

                                {
                                        (item.respostaUser != '') ? (
                                            <View style={{backgroundColor: '#ECEDEF', borderWidth: 1, borderColor: '#ECEDEF', borderRadius: 25, marginLeft: '10%', marginRight: '10%'}}>
                                            <View style={{paddingLeft: '5%', paddingRight: '10%', paddingTop: '5%', paddingBottom: '5%'}}>
                                                <View style={{flexDirection: 'row'}}>
                                                   
                                                    <Icon2 name='person-circle' size={50} color={'black'} />
                                                    <View style={{paddingLeft: '2%', paddingTop: '3%'}}>
                                                        
                                                        <Text style={{fontWeight: 'bold', fontSize: 13}}> {item.nome}</Text>
                                                        <Text style={{fontSize: 11}}> {item.horaUser}</Text>
                    
                    
                                                        <View style={{paddingRight: '20%', paddingTop: '2%'}}>
                                                            <Text style={{textAlign: 'left'}}> {item.respostaUser}</Text>
                                                        </View>
                                                    
                                                    </View>
                                                   
                                                </View>
                                            </View>
                                        </View>
    
                                        ) : (
                                            <Text></Text>
                                        )
                                    }
                                
                               

                                    {/* Resposta Final */}
                                    

                                    {
                                        (item.respostaFinal != '') ? (
                                            <View style={{backgroundColor: '#CFE0FB', borderWidth: 1, borderColor: '#CFE0FB', borderRadius: 25, marginLeft: '10%', marginRight: '10%', marginTop: '5%', alignItems: 'flex-end'}}>
                                            <View style={{paddingLeft: '10%', paddingRight: '5%', paddingTop: '5%', paddingBottom: '5%'}}>
                                                <View style={{flexDirection: 'row'}}>
                                                <View style={{paddingRight: '2%', paddingTop: '3%'}}>
                                                        
                                                        {(encarregue == '0tPylHnZykWeGHN0Xft4b4De9Nk1') ? (
                                                                    <Text style={{fontWeight: 'bold', fontSize: 13, textAlign: 'right'}}> Dra Margarida Braga </Text>
                                                                ): (
                                                                    <Text style={{fontWeight: 'bold', fontSize: 13, textAlign: 'right'}}> Dra Ana Cristina </Text>
                                                                )
                                                            
                                                            }
                                                            <Text style={{fontSize: 11, textAlign: 'right'}}> {item.horaFinal}</Text>
                        
                        
                                                            <View style={{paddingTop: '2%'}}>
                                                                <Text style={{textAlign: 'right'}}> {item.respostaFinal} </Text>
                                                            </View>
                                                        
                                                        </View>
                                                    <Icon2 name='person-circle' size={50} color={'black'} />
                                                  
                                                </View>
                                            </View>
                                        </View>
                                        ) : (
                                            <Text></Text>
                                        )
                                    }

                                

                                    {/* Aparecer botão de resposta apenas após a resposta do PDS */}

                                    {

                                        ((item.respostaUser != '') || (item.mensagem != '')) ? (
                                            <View style={{marginTop: '5%', width: '20%', alignSelf: 'flex-end', marginBottom: '10%', marginRight: '6%'}}>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate('Responder', {fulldata: route.params.fulldata})}
                                            >
                                                <Text style={{color: '#6578B3', fontWeight: 'bold'}}>Responder</Text>
                                            </TouchableOpacity>
                                        </View>
                                        ) : (
                                            <Text></Text>
                                        )
                                    }

                                    


                            </View>

                        ))
                    }

                
                   
                  
            </ScrollView>

               
        </View>
        )
    }

    
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
   
    },

    arrowLeft: {
        position: 'absolute', 
        left: 40, 
        top: 45, 
        alignSelf: 'center'
    },

    header: {
        backgroundColor: '#CFE0FB', 
        paddingTop: '10%', 
        paddingBottom: '5%', 
        borderWidth: 1, 
        borderColor: '#CFE0FB', 
        borderBottomLeftRadius: 50, 
        borderBottomRightRadius: 50,
      },

      introText: {
        width: '80%', 
        alignSelf: 'center', 
        flex: 1, 
        alignContent: 'center'
      },

      text: {
        textAlign: 'justify', 
        marginTop: '15%'
      },
 
      title: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 20,
      },

      subtitle: {
        textAlign: 'left', 
        fontWeight: 'bold', 
        fontSize: 18,
      },

      subtitleContainer: {
        flex: 1,
        marginTop: '7%', 
        marginLeft: '10%',
        marginBottom: '5%',
      },


})

export default Conversa;