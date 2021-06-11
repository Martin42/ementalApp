import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

function Conversa({route, navigation}){
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

            <ScrollView 
                style={styles.container}
                persistentScrollbar={true}
                >
                    
                    
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Sintomas Depressivos</Text>
                    </View>

                    <View style={{backgroundColor: '#CFE0FB', borderWidth: 1, borderColor: '#CFE0FB', borderRadius: 25, marginLeft: '10%', marginRight: '10%'}}>
                        <View style={{paddingLeft: '5%', paddingRight: '10%', paddingTop: '5%', paddingBottom: '5%'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon2 name='person-circle' size={50} color={'black'} />
                                <View style={{paddingLeft: '2%', paddingTop: '3%'}}>
                                    
                                    <Text style={{fontWeight: 'bold', fontSize: 13}}> Luis </Text>
                                    <Text style={{fontSize: 11}}> 02/04/2021 <Text> 18:23 </Text></Text>


                                    <View style={{paddingRight: '20%', paddingTop: '2%'}}>
                                        <Text style={{textAlign: 'left'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. </Text>
                                    </View>
                                
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={{backgroundColor: '#ECEDEF', borderWidth: 1, borderColor: '#CFE0FB', borderRadius: 25, marginLeft: '10%', marginRight: '10%', marginTop: '5%'}}>
                        <View style={{paddingLeft: '5%', paddingRight: '10%', paddingTop: '5%', paddingBottom: '5%'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon2 name='person-circle' size={50} color={'black'} />
                                <View style={{paddingLeft: '2%', paddingTop: '3%'}}>
                                    
                                    <Text style={{fontWeight: 'bold', fontSize: 13}}> Drª Margarida Braga </Text>
                                    <Text style={{fontSize: 11}}> 02/04/2021 <Text> 18:23 </Text></Text>


                                    <View style={{paddingRight: '20%', paddingTop: '2%'}}>
                                        <Text style={{textAlign: 'left'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. </Text>
                                    </View>
                                
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{backgroundColor: '#ECEDEF', borderWidth: 1, borderColor: '#ECEDEF', borderRadius: 25, marginLeft: '10%', marginRight: '10%', marginTop: '5%'}}>
                        <View style={{paddingLeft: '5%', paddingRight: '10%', paddingTop: '5%', paddingBottom: '5%'}}>
                            <View style={{flexDirection: 'row'}}>
                                <Icon2 name='person-circle' size={50} color={'black'} />
                                <View style={{paddingLeft: '2%', paddingTop: '3%'}}>
                                    
                                    <Text style={{fontWeight: 'bold', fontSize: 13}}> Drª Margarida Braga </Text>
                                    <Text style={{fontSize: 11}}> 02/04/2021 <Text> 18:23 </Text></Text>


                                    <View style={{paddingRight: '20%', paddingTop: '2%'}}>
                                        <Text style={{textAlign: 'left'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. </Text>
                                    </View>
                                
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop: '5%', width: '20%', alignSelf: 'flex-end', marginBottom: '10%', marginRight: '6%'}}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Responder')}
                        >
                            <Text style={{color: '#6578B3', fontWeight: 'bold'}}>Responder</Text>
                        </TouchableOpacity>
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