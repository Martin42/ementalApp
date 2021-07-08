import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import TextArea from 'react-native-textarea';
import { db, auth } from '../../Firebase';



function Responder({route, navigation}){


    const [mensagemData, setMensagemData] = useState([]);
    const currentUser = auth.currentUser.uid;
    const [resposta, setResposta] = useState();

    const [replyPDS, setReplyPDS] = useState(false);
    const [replyFinal, setReplyFinal] = useState(false);
    const [replyUser, setReplyUser] = useState(false);
    const [docId, setDocId] = useState();
    const [esclarecimento, setEsclarecimento] = useState();
 

    useEffect(() => {
      getAssunto();
      getMissingResposta();
      getEsclarecimentoId();
    }, [])

    async function getAssunto(){
      const assuntoRef = db.collection('Tickets').where('fulldata', '==', route.params.fulldata)
      const snapshot = await assuntoRef.get();
      const ticket = [];
      snapshot.forEach(doc => {
    
        ticket.push(doc.data());
      })

      setMensagemData(...mensagemData, ticket);
    }

    async function getMissingResposta(){
      const missingRef = db.collection('Tickets').where('fulldata', '==', route.params.fulldata)
      const snapshot = await missingRef.get();
      snapshot.forEach(doc => {
          if ((doc.data().respostaPDS) == '') {
                  setReplyPDS(true);
                  setDocId(doc.id);
          } else if (((doc.data().respostaFinal) == '' && (doc.data().respostaPDS) != '' && (doc.data().respostaUser) != '' )) {
                  setReplyFinal(true);
                  setDocId(doc.id);
          } else if (((doc.data().respostaPDS) != '' && (doc.data().respostaFinal) == '' && ((route.params.userstatus) == 0 || (route.params.userstatus) == 1))) {
                  setReplyUser(true);
                  setDocId(doc.id);
          }
      })
    }

    async function getEsclarecimentoId(){
      const esclarecimentoRef = db.collection('Pedido Esclarecimento').where('fulldata', '==', route.params.fulldata)
      const snapshot = await esclarecimentoRef.get();
      snapshot.forEach(doc => {
        setEsclarecimento(doc.id);
      })
    }



    function setReply(){

      if (replyPDS == true) {

          db
          .collection('Tickets')
          .doc(docId)
          .set({
            respostaPDS: resposta,
            horaPDS: new Date().toUTCString(),
            encarregue: currentUser,
        }, {merge: true})


        db
        .collection('Pedido Esclarecimento')
        .doc(esclarecimento)
        .set({
          respostaPDS: resposta,
          horaPDS: new Date().toUTCString(),
          encarregue: currentUser,
      }, {merge: true})

        db
        .collection('Notificacoes')
        .add({
            Conteudo: 'Recebeste uma resposta no teu Ticket!',
            User: docId,
            Visto: false,
            fulldata: new Date(),
            Destino: 'Apoio'
        })
        
            
      } else if (replyFinal == true) {
        
          db
          .collection('Tickets')
          .doc(docId)
          .set({
            respostaFinal: resposta,
            horaFinal: new Date().toUTCString(),
            estado: 'Resolvido',
        }, {merge: true})

        db
        .collection('Pedido Esclarecimento')
        .doc(esclarecimento)
        .set({
          respostaFinal: resposta,
          horaFinal: new Date().toUTCString(),
          estado: 'Resolvido',
      }, {merge: true})

        db
        .collection('Notificacoes')
        .add({
            Conteudo: 'Recebeste uma resposta no teu Ticket!',
            User: docId,
            Visto: false,
            fulldata: new Date(),
            Destino: 'Apoio'
        })

    } else if (replyUser == true) {
          db
          .collection('Tickets')
          .doc(docId)
          .set({
            respostaUser: resposta,
            horaUser: new Date().toUTCString(),
        }, {merge: true})

          db
          .collection('Pedido Esclarecimento')
          .doc(esclarecimento)
          .set({
            respostaUser: resposta,
            horaUser: new Date().toUTCString(),
        }, {merge: true})
    }
  }


    return (

      mensagemData.map((item, key) => (
        <View style={styles.container} key={key}>
        <View style={styles.header}>
           
           <TouchableOpacity
                style={styles.arrowLeft}
                onPress={() => navigation.navigate('Conversa', {fulldata: route.params.fulldata})}
           >
                <Icon name='left' size={28} color={'black'} />
            </TouchableOpacity>

            <Text style={styles.title}>Responder</Text>

        </View>

        <ScrollView 
            style={styles.container}
            persistentScrollbar={true}
            >

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Assunto: </Text>
                    <Text style={styles.subtitleReg}>{item.assunto} </Text>
                </View>

                <View style={styles.inputField}>
                    <TextArea 
                        style={styles.inputMensagem}
                        placeholder={'Mensagem'}
                        backgroundColor= '#CFE0FB'
                        placeholderTextColor= 'white'
                        multinline={true}
                        onChangeText={(resposta) => setResposta(resposta)}
                    
                    />
                </View>

                <View style={{marginTop: '40%'}} >
                                <TouchableOpacity
                                        onPress={() => {navigation.navigate('Apoio', {fulldata: route.params.fulldata, encarregue: currentUser}); setReply()}}
                                        style={styles.enviar}
                                        >
                                            <Text style={{color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}> Enviar </Text>
                                </TouchableOpacity>
                    </View>

               
              
        </ScrollView>

           
    </View>
      ))

       
    )
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

    enviar:{
        borderColor: '#6578B3',
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#6578B3',
        width: '80%',
        padding: '3%',
        alignSelf: 'center',
    
      },


    header: {
        backgroundColor: '#CFE0FB', 
        alignContent: 'center', 
        justifyContent: 'center', 
        paddingTop: '10%', 
        paddingBottom: '5%', 
        borderWidth: 1, 
        borderColor: '#CFE0FB', 
        borderBottomLeftRadius: 50, 
        borderBottomRightRadius: 50,
        flexDirection: 'row',
      },

      inputField: {
        marginBottom:'10%',
        marginLeft: '10%',
        marginRight: '10%',
        alignContent: 'center',
      },

      inputMensagem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',

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

      subtitleReg: {
        textAlign: 'left', 
        fontWeight: 'normal', 
        fontSize: 17,
        marginTop: '1%'
      },

      subtitleContainer: {
        flex: 1,
        marginTop: '7%', 
        marginLeft: '10%',
        marginBottom: '5%',
      },


})

export default Responder;