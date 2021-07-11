import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import TextArea from 'react-native-textarea';
import { db, auth } from '../../Firebase';
import { set } from 'react-native-reanimated';


function Esclarecimento({route, navigation}){

    const currentUser = auth.currentUser.uid;

    const [modal, setModal] = useState(false);
    const [nome, setNome] = useState();
    const [assunto, setAssunto] = useState();
    const [mensagem, setMensagem] = useState();
    const [month, setMonth] = useState();
    


    useEffect(() => {
      getMonth();
    },[])


    function getMonth(){
          const mes = new Date().getMonth()+1;
          switch (mes) {
            case 1:
                setMonth('Jan')
                break;
            case 2: 
                setMonth('Feb')
                break;
            case 3: 
                setMonth('Mar')
                break;
            case 4: 
                setMonth('Abr')
                break;
            case 5: 
                setMonth('Mai')
                break;
            case 6: 
                setMonth('Jun')
                break;
            case 7: 
                setMonth('Jul')
                break;
            case 8: 
                setMonth('Ago')
                break;
            case 9: 
                setMonth('Set')
                break;
            case 10: 
                setMonth('Out')
                break;
            case 11: 
                setMonth('Nov')
                break;
            case 12: 
                setMonth('Dez')
                break;
            default:
                break;
        }
    }


    function setPedido(){
     
      if (nome == undefined) {
        db
        .collection('Pedido Esclarecimento')
        .add({
          nome: 'Anónimo',
          assunto: assunto,
          mensagem: mensagem,
          user: currentUser,
          estado: 'Por resolver',
          mês: month,
          dia: new Date().getDate(),
          fulldata: new Date().toUTCString(),
          destinatario1: 'Dra Margarida Braga',
          destinatario2: 'Dra Ana Cristina',
          encarregue: 'negativo'
          
        })
      } else {
        db
        .collection('Pedido Esclarecimento')
        .add({
          nome: nome,
          assunto: assunto,
          mensagem: mensagem,
          user: currentUser,
          estado: 'Por resolver',
          mês: month,
          dia: new Date().getDate(),
          fulldata: new Date().toUTCString(),
          destinatario1: 'Dra Margarida Braga',
          destinatario2: 'Dra Ana Cristina',
          encarregue: 'negativo'
          
        });

       
      }
    }

    function setConversa(){

      if (nome == undefined) {
        db
        .collection('Tickets')
        .add({
          assunto: assunto,
          mensagem: mensagem,
          remetente: currentUser,
          destinatario1: 'Dra Margarida Braga',
          destinatario2: 'Dra Ana Cristina',
          fulldata: new Date().toUTCString(),
          nome: 'Anónimo',
          respostaPDS: '',
          horaPDS: '',
          respostaUser: '',
          horaUser: '',
          respostaFinal: '',
          horaFinal: '',
          encarregue: 'negativo'
        })
      } else {
        db
        .collection('Tickets')
        .add({
          assunto: assunto,
          mensagem: mensagem,
          remetente: currentUser,
          destinatario1: 'Dra Margarida Braga',
          destinatario2: 'Dra Ana Cristina',
          fulldata: new Date().toUTCString(),
          nome: nome,
          respostaPDS: '',
          horaPDS: '',
          respostaUser: '',
          horaUser: '',
          respostaFinal: '',
          horaFinal: '',
          encarregue: 'negativo'
      })
      
    }
  }

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

        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.introText}>
              <Text style={styles.text}>Após o preenchimento dos campos de envio da mensagem, o teu pedido será enviado a um dos nossos profissionais de saúde. Relembramos que estes pedidos não precisam de estar identificados e a sua resposta não será imediata.</Text>
          </View>

          <View  style={styles.inputField}>
              <TextInput
                  style={styles.inputText}
                  placeholder={'Nome (Opcional)'}
                  backgroundColor= '#CFE0FB'
                  placeholderTextColor= 'white'
                  onChangeText={(nome) => setNome(nome)}
              />

              <TextInput 
                  style={styles.inputText}  
                  backgroundColor= '#CFE0FB'
                  placeholderTextColor= 'white'
                  placeholder={'Assunto'}
                  onChangeText={assunto => setAssunto(assunto)}
              />

              <TextArea 
                  style={styles.inputMensagem} 
                  backgroundColor= '#CFE0FB'
                  placeholderTextColor= 'white'
                  placeholder={'Mensagem'}
                  multiline={true}
                  onChangeText={mensagem => setMensagem(mensagem)}
              />

              <View style={{marginTop: '40%'}} >
                          <TouchableOpacity
                                  onPress={() => {setPedido(); setConversa(); setModal(true)}}
                                  style={styles.enviar}
                                  >
                                      <Text style={{color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}> Enviar </Text>
                          </TouchableOpacity>
              </View>
            
          </View>
          </ScrollView>

      <Modal
            animationType='fade'
            transparent={true}
            visible={modal}
          >
            <View style={styles.modalView}>
              <View style={styles.modalContainer}>
                <Image
                  source={require('../../images/enviado_pop.png')}
                  style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>A tua mensagem foi enviada!</Text>
                <Text style={styles.modalSubtitle}>A resposta não é imediata, serás notificado quando esta for respondida.</Text>
                <TouchableOpacity
                  style={styles.entendi}
                  onPress={() => {navigation.navigate('Apoio'); setModal(false) }}
                >
                  <Text style={styles.entendiText}>Entendi!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignContent: 'center',
    justifyContent: 'center',

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

  inputField: {
    flex: 4,
    width: '80%',
    marginBottom: '10%',
    marginLeft: '10%',
    marginTop: '5%',
    alignContent: 'center',
  },

  inputText: {
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: 'black',
    borderRadius: 20,

  },

  inputMensagem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 20,
    padding: 15,
    textAlign: 'left',


  },

  enviar: {
    borderColor: '#6578B3',
    height: 50,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#6578B3',
    width: '100%',
    padding: '3%',
    alignSelf: 'center',

  },

  introText: {
    width: '80%',
    alignSelf: 'center',
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: '5%'
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

  // modal styling

  entendi: {
    marginTop: '15%',
    width: '80%',
    borderColor: '#6578B3',
    borderStyle: 'solid',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#6578B3',
    padding: '4%',
},

modalView: {
    alignContent: 'center',
    justifyContent: 'center', 
    flex: 1,
},

modalContainer: {
    marginLeft: '12%', 
    marginRight: '12%', 
    backgroundColor:'white', 
    alignItems: 'center', 
    padding: 25, 
    shadowColor: 'red', 
    shadowOffset: {width: 0, height: 2}, 
    shadowOpacity: 0.25, 
    shadowRadius: 4, 
    elevation: 4, 
    borderWidth: 1, 
    borderRadius: 30, 
    borderColor: 'white',
},

modalImage:{
    marginBottom:'12%', 
    marginTop: '5%', 
    height: 107, 
    width: '72%'
},

modalTitle: {
    fontWeight: 'bold', 
    fontSize: 20, 
    textAlign: 'center',
    marginBottom: '10%',  
    marginLeft: '5%', 
    marginRight: '5%',
},

modalSubtitle: {
    fontSize: 15, 
    textAlign: 'center', 
    marginLeft: '10%', 
    marginRight: '10%'
},

entendiText: {
    textAlign: 'center', 
    color: 'white', 
    fontWeight: 'bold'
}

})

export default Esclarecimento;