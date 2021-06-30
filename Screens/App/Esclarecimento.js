import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Modal, Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import TextArea from 'react-native-textarea';

function Esclarecimento({ route, navigation }) {

  const [modal, setModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <TouchableOpacity
          style={styles.arrowLeft}
          onPress={() => navigation.navigate('Apoio')}
        >
          <Icon name='left' size={28} color={'black'} />
        </TouchableOpacity>

        <Text style={styles.title}>Pedido de Esclarecimento</Text>

      </View>

      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.introText}>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, ve.</Text>
        </View>

        <View style={styles.inputField}>
          <TextInput
            style={styles.inputText}
            placeholder={'Nome (Opcional)'}
            backgroundColor='#CFE0FB'
            placeholderTextColor='white'
          />

          <TextInput
            style={styles.inputText}
            backgroundColor='#CFE0FB'
            placeholderTextColor='white'
            placeholder={'Assunto'}
          />

          <TextArea
            style={styles.inputMensagem}
            backgroundColor='#CFE0FB'
            placeholderTextColor='white'
            placeholder={'Mensagem'}
            multiline={true}
          />

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
                  onPress={() => { setModal(false), navigation.navigate('Apoio') }}
                >
                  <Text style={styles.entendiText}>Entendi!</Text>
                </TouchableOpacity>
              </View>
            </View>


          </Modal>

          <View style={{ marginTop: '40%' }} >
            <TouchableOpacity
              onPress={() => { setModal(true) }}
              style={styles.enviar}
            >
              <Text style={{ color: 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}> Enviar </Text>
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
    borderRadius: 20,
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