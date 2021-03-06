import React, { useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { db, auth } from '../../../Firebase';

function PlaylistSara({ route, navigation }) {

    useEffect(() => {
        getStatus();
        getAll();
    }, []);


    const currentUser = auth.currentUser.uid;
    const [currentStatus, setCurrentStatus] = useState('');
    const currentTime = new Date() / 1000;
    const [EP1PSI, setEP1PSI] = useState(true);
    const [EP1SARA, setEP1SARA] = useState(false);
    const [EP2PSI, setEP2PSI] = useState(false);
    const [EP2SARA, setEP2SARA] = useState(false);
    const [DES1, setDES1] = useState(false);
    const [EP3PSI, setEP3PSI] = useState(false);
    const [EP3SARA, setEP3SARA] = useState(false);
    const [EP4PSI, setEP4PSI] = useState(false);
    const [EP4_1SARA, setEP4_1SARA] = useState(false);
    const [DES2, setDES2] = useState(false);
    const [EP4_2SARA, setEP4_2SARA] = useState(false);
    const [EP5PSI, setEP5PSI] = useState(false);
    const [EP5SARA, setEP5SARA] = useState(false);
    const [DES3, setDES3] = useState(false);
    const [EP6PSI, setEP6PSI] = useState(false);
    const [EP6SARA, setEP6SARA] = useState(false);
    const [DES4, setDES4] = useState(false);
    const [EP7SARA, setEP7SARA] = useState(false);
    const [DES5, setDES5] = useState(false);
    const [EP7PSI, setEP7PSI] = useState(false);
    const [EP8SARA, setEP8SARA] = useState(false);
    const [DES6, setDES6] = useState(false);
    const [EP8PSI, setEP8PSI] = useState(false);
    const [EP9SARA, setEP9SARA] = useState(false);
    const [EP9PSI, setEP9PSI] = useState(false);
    const [EP10SARA, setEP10SARA] = useState(false);
    const [DES7, setDES7] = useState(false);
    const [EP11SARA, setEP11SARA] = useState(false);
    const [EP12SARA, setEP12SARA] = useState(false);
    const [DES8, setDES8] = useState(false);
    const [EP10PSI, setEP10PSI] = useState(false);
    const [EP13SARA, setEP13SARA] = useState(false);
    const [DES9, setDES9] = useState(false);
    const [all, setAll] = useState(false);
    


    async function getAll(){

        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().completadoSara) == true) {
                setAll(true);

                db
                .collection('Question??rio Sara Final')
                .doc(currentUser)
                .get()
                .then(doc => {
                    if ((doc.data().concluido) == 'false') {
                        navigation.navigate('QiSaraAFinal');
                    }

                })
            } else if ((doc.data().completadoSara) == null) {
  

        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP1PSI) != undefined) {
                setEP1PSI(false);
                if ((doc.data().EP1PSI.seconds + 93600) <= currentTime) {
                    setEP1SARA(true);
                        db.collection('Notificacoes').where('notiID', '==', 'EP1PSI').get().then(doc => {
                            if (doc.empty) {
                                db
                                .collection('Notificacoes')
                                .add({
                                    Conteudo: 'O Epis??dio 1 da Ferida Sara encontra-se dispon??vel!',
                                    User: currentUser,
                                    Visto: false,
                                    fulldata: new Date(),
                                    Destino: 'PlaylistSara',
                                    notiID: 'EP1PSI',
                            })
                            } else {
                                db.collection('Notificacoes').where('notiID', '==', 'EP1PSI').where('User', '==', currentUser).get().then(doc => {
                                    if (doc.empty) {
                                        db
                                        .collection('Notificacoes')
                                        .add({
                                            Conteudo: 'O Epis??dio 1 da Ferida Sara encontra-se dispon??vel!',
                                            User: currentUser,
                                            Visto: false,
                                            fulldata: new Date(),
                                            Destino: 'PlaylistSara',
                                            notiID: 'EP1PSI',
                                    })
                                    }
                                })
                            }
                        })
                }
            } 
        })
    

        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP1SARA) != undefined ) {
                setEP1SARA(false);
                

                if ((doc.data().EP1SARA.seconds + 262800) <= currentTime) {
                
                    setEP2PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP2PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 2 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP2PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP2PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 2 Psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP2PSI',
                                })
                                }
                            })
                        }
                    })
                    
                }
            }
        })
    

        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP2PSI) != undefined) {
                setEP2PSI(false);
               
                if ((doc.data().EP2PSI.seconds + 165600) <= currentTime ) {
                   
                    setEP2SARA(true);
                    setDES1(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP2SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 2 da Ferida Sara e o Desafio 1 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP2SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP2SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 2 da Ferida Sara e o Desafio 1 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP2SARA',
                                })
                                }
                            })
                        }
                    })
                   
                } 
            }
        })
    

        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {

            if ((doc.data().EP2SARA) != undefined) {
                setEP2SARA(false);
            }

            if ((doc.data().DES1) != undefined) {
                setDES1(false);
              
                if ((doc.data().DES1.seconds + 169200) <= currentTime) {
           
                    setEP3PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP3PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 3 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP3PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP3PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 3 Psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP3PSI',
                                })
                                }
                            })
                        }
                    })
                   
                } 
            }
        })

  
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP3PSI) != undefined) {

                setEP3PSI(false);
                
                if ((doc.data().EP3PSI.seconds + 93600) <= currentTime) {
                
                    setEP3SARA(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP3SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 3 da Ferida Sara encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP3SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP3SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 3 da Ferida Sara encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP3SARA',
                                })
                                }
                            })
                        }
                    })
                    
                   
                } 
            }
        })
   

        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP3SARA) != undefined) {

                setEP3SARA(false);
              
                if ((doc.data().EP3SARA.seconds + 90000) <= currentTime) {

                    setEP4PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP4PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 4 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP4PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP4PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 4 Psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP4PSI',
                                })
                                }
                            })
                        }
                    })
                  
                } 
            }
        })


        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP4PSI) != undefined) {

                setEP4PSI(false);
            
                if ((doc.data().EP4PSI.seconds + 169200) <= currentTime) {

                    setEP4_1SARA(true);
                    setDES2(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP4_1SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'A primeira parte do Epis??dio 4 da Ferida Sara e o Desafio 2 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP4_1SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP4_1SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'A primeira parte do Epis??dio 4 da Ferida Sara e o Desafio 2 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP4_1SARA',
                                })
                                }
                            })
                        }
                    })
                   
                } 
            }
        })


        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {

            if ((doc.data().EP4_1SARA) != undefined) {
                setEP4_1SARA(false);
            }

            if ((doc.data().DES2) != undefined) {

                setDES2(false);
              
                if ((doc.data().DES2.seconds + 90000) <= currentTime) {

                    setEP4_2SARA(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP4_2SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'A segunda parte do Epis??dio 4 da Ferida Sara encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP4_2SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP4_2SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'A segunda parte do Epis??dio 4 da Ferida Sara encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP4_2SARA',
                                })
                                }
                            })
                        }
                    })
                   
                } 
            }
        })


        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP4_2SARA) != undefined) {

                setEP4_2SARA(false);
                
                if ((doc.data().EP4_2SARA.seconds + 248400) <= currentTime) {

                    setEP5PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP5PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 5 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP5PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP5PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 5 Psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP5PSI',
                                })
                                }
                            })
                        }
                    })
                   
                } 
            }
        })


        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP5PSI) != undefined) {
 
                setEP5PSI(false);
              
                if ((doc.data().EP5PSI.seconds + 270000) <= currentTime) {

                    setEP5SARA(true);
                    setDES3(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP5SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 5 da Ferida Sara e o Desafio 3 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP5SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP5SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 5 da Ferida Sara e o Desafio 3 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP5SARA',
                                })
                                }
                            })
                        }
                    })
                  
                } 
            }
        })
 



        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {

            if ((doc.data().EP5SARA) != undefined) {
                setEP5SARA(false);
            }

            if ((doc.data().DES3) != undefined) {

                setDES3(false);
               
                if ((doc.data().DES3.seconds + 79200) <= currentTime) {

                    setEP6PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP6PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 6 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP6PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP6PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 6 Psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP6PSI',
                                })
                                }
                            })
                        }
                    })
                    
                } 
            }
        })


   
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {


            if ((doc.data().EP6PSI) != undefined) {

                setEP6PSI(false);
            
                if ((doc.data().EP6PSI.seconds + 169200) <= currentTime) {

                    setEP6SARA(true);
                    setDES4(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP6SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 6 da Ferida Sara e o Desafio 4 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP6SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP6SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 6 da Ferida Sara e o Desafio 4 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP6SARA',
                                })
                                }
                            })
                        }
                    })
                   
                } 
            }
        })
 


   
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {

            if ((doc.data().EP6SARA) != undefined) {
                setEP6SARA(false);
            }


            if ((doc.data().DES4) != undefined) {

                setDES4(false);
           
                if ((doc.data().DES4.seconds + 93600) <= currentTime) {

                    setEP7SARA(true);
                    setDES5(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP7SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 7 da Ferida Sara e o Desafio 5 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP7SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP7SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 7 da Ferida Sara e o Desafio 5 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP7SARA',
                                })
                                }
                            })
                        }
                    })
                   
                }
            }
        })
 



        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {

            
            if ((doc.data().EP7SARA) != undefined) {
                setEP7SARA(false);
            }


            if ((doc.data().DES5) != undefined) {

                setDES5(false);
              
                if ((doc.data().DES5.seconds + 255600) <= currentTime) {

                    setEP7PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP7PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 7 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP7PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP7PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 7 Psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP7PSI',
                                })
                                }
                            })
                        }
                    })
                  
                } 
            }
        })


 
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP7PSI) != undefined) {

                setEP7PSI(false);
                
                if ((doc.data().EP7PSI.seconds + 93600) <= currentTime) {

                    setEP8SARA(true);
                    setDES6(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP8SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 8 da Ferida Sara e o Desafio 6 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP8SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP8SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 8 da Ferida Sara e o Desafio 6 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP8SARA',
                                })
                                }
                            })
                        }
                    })
                 
                }  
            }
        })
 
    


   
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {

            
            if ((doc.data().EP8SARA) != undefined) {
                setEP8SARA(false);
            }


            if ((doc.data().DES6) != undefined) {

                setDES6(false);
              
                if ((doc.data().DES6.seconds + 158400) <= currentTime) {

                    setEP8PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP8PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 8 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP8PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP8PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 8 Psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP8PSI',
                                })
                                }
                            })
                        }
                    })
                 
                }  
            }
        })
  


   
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP8PSI) != undefined) {

                setEP8PSI(false);
            
                if ((doc.data().EP8PSI.seconds + 97200) <= currentTime) {

                    setEP9SARA(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP9SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 9 da Ferida Sara encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP9SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP9SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 9 da Ferida Sara encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP9SARA',
                                })
                                }
                            })
                        }
                    })
                
                }
            }
        })
   




    
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP9SARA) != undefined) {

                setEP9SARA(false);
               
                if ((doc.data().EP9SARA.seconds + 252000) <= currentTime) {

                    setEP9PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP9PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 9 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP9PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP9PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 9 Psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP9PSI',
                                })
                                }
                            })
                        }
                    })
                    
                } 
            }
        })
  

  
        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP9PSI) != undefined) {

                setEP9PSI(false);
              
                if ((doc.data().EP9PSI.seconds + 90000) <= currentTime) {
                    setEP10SARA(true);
                    setDES7(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP10SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 10 da Ferida Sara e o Desafio 7 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP10SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP10SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 10 da Ferida Sara e o Desafio 7 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP10SARA',
                                })
                                }
                            })
                        }
                    })
                  
                } 
            }
        })
  


        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {

            
            if ((doc.data().EP10SARA) != undefined) {
                setEP10SARA(false);
            }

            if ((doc.data().DES7) != undefined) {

                setDES7(false);
             
                if ((doc.data().DES7.seconds + 165600) <= currentTime) {
    
                    setEP11SARA(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP11SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 11 da Ferida Sara encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP11SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP11SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 11 da Ferida Sara encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP11SARA',
                                })
                                }
                            })
                        }
                    })
              
                } 
            }
        })
  

        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP11SARA) != undefined) {
                setEP11SARA(false);
               
                if ((doc.data().EP11SARA.seconds + 97200) <= currentTime) {
                    setEP12SARA(true);
                    setDES8(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP12SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 12 da Ferida Sara e o Desafio 8 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP12SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP12SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 12 da Ferida Sara e o Desafio 8 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP12SARA',
                                })
                                }
                            })
                        }
                    })
                    
                }
            }
        })


        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {

            if ((doc.data().EP12SARA) != undefined) {
                setEP12SARA(false);
            }

            if ((doc.data().DES8) != undefined) {
                setDES8(false);
          
                if ((doc.data().DES8.seconds + 165600) <= currentTime) {

                    setEP10PSI(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP10PSI').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 10 Psicoeducativo encontra-se dispon??vel!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP10PSI',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP10PSI').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 10 psicoeducativo encontra-se dispon??vel!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP10PSI',
                                })
                                }
                            })
                        }
                    })
                   
                }
            }
        })
 

        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            if ((doc.data().EP10PSI) != undefined) {

                setEP10PSI(false);
     
                if ((doc.data().EP10PSI.seconds + 180000) <= currentTime) {
                    setEP13SARA(true);
                    setDES9(true);
                    db.collection('Notificacoes').where('notiID', '==', 'EP13SARA').get().then(doc => {
                        if (doc.empty) {
                            db
                            .collection('Notificacoes')
                            .add({
                                Conteudo: 'O Epis??dio 13 da Ferida Sara e o Desafio 9 encontram-se dispon??veis!',
                                User: currentUser,
                                Visto: false,
                                fulldata: new Date(),
                                Destino: 'PlaylistSara',
                                notiID: 'EP13SARA',
                        })
                        } else {
                            db.collection('Notificacoes').where('notiID', '==', 'EP13SARA').where('User', '==', currentUser).get().then(doc => {
                                if (doc.empty) {
                                    db
                                    .collection('Notificacoes')
                                    .add({
                                        Conteudo: 'O Epis??dio 13 da Ferida Sara e o Desafio 9 encontram-se dispon??veis!',
                                        User: currentUser,
                                        Visto: false,
                                        fulldata: new Date(),
                                        Destino: 'PlaylistSara',
                                        notiID: 'EP13SARA',
                                })
                                }
                            })
                        }
                    })
                   
                } 
            }
        })


        db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            
            if ((doc.data().EP13SARA) != undefined) {
                setEP13SARA(false);
            }

            if ((doc.data().DES9) != undefined) {
                setDES9(false);
                if (EP13SARA == false) {

                    db
                    .collection('users')
                    .doc(currentUser)
                    .set({
                        completadoSara: true
                    }, {merge: true})
                    
                }
            }
        })

        }
    })


}
    

    async function getStatus(){

      db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            setCurrentStatus(doc.data().status) 
        });

    }



    if ((currentStatus == 2) || (all == true)) {

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>

                    <View>
                        <Text style={styles.title1}>A Ferida Sara</Text>
                        <Text style={styles.text}>Esta webs??rie explica a jornada de Sara, uma rec??m estudante do ensino superior, que apresenta sintomas depressivos.</Text>
                    </View>

                    <View style={styles.container2}>

                        <View style={styles.containerepisodios}>

                            {/* Episodio 1 psicoeducativo (dia 1)  */}


                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP1PSI', video: '3xFja2DpzNE', titulo: 'A Ferida Sara - Ep. 1 Psicoeducativo' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 1</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>


                            {/* Ferida Sara Episodio 1 (dia 2) */}


                        
                                <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP1SARA', video: 'a_Po_QQWSa0', titulo: 'A Ferida Sara - Ep. 1 Webserie' })}
                                >
                                    <Image
                                        source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 1</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
    

                              


                        

                            {/* Psicoeducativo Episodio 2 (dia 5) */}

                        
                                    <View style={styles.container3}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP2PSI', video: 'HhoYc8vR9CY', titulo: 'A Ferida Sara - Ep. 2 Psicoeducativo' })}
                                        >
                                            <Image
                                                 source={require('../../../images/SaraOpen.png')}
                                                style={styles.episodio}

                                            />
                                        </TouchableOpacity>

                                        <View style={styles.container4}>
                                            <Text style={styles.title2}>Epis??dio 2</Text>
                                            <Text style={styles.text}>Psicoeducativo</Text>
                                        </View>
                                    </View>
                            
                        
                            {/* Ferida Sara Episodio 2 (dia 7)*/}


                          
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP2SARA', video: 'GEzKXcHighA', titulo: 'A Ferida Sara - Ep. 2 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 2</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                              

                                 



                            {/* Desafio 1 (dia 7) */}

                           
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES1', video: 'thFvboH9RdQ', titulo: 'A Ferida Sara - Desafio 1' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 1</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                             


                        

                            {/* Episodio 3 Psicoeducativo (dia 9) */}


                          
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP3PSI', video: 'xdaxmlnb318', titulo: 'A Ferida Sara - Ep. 3 Psicoeducativo' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 3</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                               


                        

                            {/* Episodio 3 Ferida Sara (dia 10) */}
                            
                           
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP3SARA', video: '6-9817rZzZQ', titulo: 'A Ferida Sara - Ep. 3 Webserie' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 3</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                               



                        

                            {/* Episodio 4 Psicoeducativo (dia 11) */}

                           
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4PSI', video: '9EtDFX56b0Y', titulo: 'A Ferida Sara - Ep. 4 Psicoeducativo' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                               

                        

                            {/* Episodio 4 parte 1 Ferida Sara (dia 13)*/}

                          
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4_1SARA', video: 'MeY9V2hoheY', titulo: 'A Ferida Sara - Ep. 4 parte I Webserie' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4: Parte I</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                               

                            {/* Desafio 2 (dia 13)*/}

                           
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES2', video: '73tI-PF2Wts', titulo: 'A Ferida Sara - Desafio 2' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 2</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                               

                        
                            {/* Episodio 4 parte 2 ferida Sara (dia 14) */}
                            
                           
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4_2SARA', video: 'PFim1HS6UqU', titulo: 'A Ferida Sara - Ep. 4 parte II Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4: parte II</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                

                        
                            {/* Episodio 5 Psicoeducativo (dia 17) */}

                           
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP5PSI', video: 'aKEnz8U0Rk0', titulo: 'A Ferida Sara - Ep. 5 Psicoeducativo' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 5</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                              

                            

                            {/* Episodio 5 ferida Sara (dia 20) */}

                           
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP5SARA', video: 'qiRAt17222s', titulo: 'A Ferida Sara - Ep. 5 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 5</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                            

                        


                            {/* Desafio 3 (dia 20) */}

                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES3', video: 'B-XCGPRTYxc', titulo: 'A Ferida Sara - Desafio 3' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 3</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                            </View>
                               
                            


                            {/* Episodio 6 psicoeducativo (dia 21) */}

                           
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP6PSI', video: 'vNn8IsMLJCQ', titulo: 'A Ferida Sara - Ep. 6 Psicoeducativo' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 6</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                            </View>
                               

                            

                            {/* Episodio 6 ferida Sara (dia 23) */}

                          
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP6SARA', video: 'ju6adpcXpZY', titulo: 'A Ferida Sara - Ep. 6 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 6</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                             

                            

                            {/* Desafio 4 (dia 23) */}

                      
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES4', video: 'BOE2CfddAIU', titulo: 'A Ferida Sara - Desafio 4' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 4</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                              

                            

                            {/* Episodio 7 ferida Sara (dia 24) */}

                         
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP7SARA', video: 'svmo1kUByzs', titulo: 'A Ferida Sara - Ep. 7 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 7</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                              
                            

                            {/* Desafio 5 (dia 24) */}

                       
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES5', video: 'jHY0rSBumnI', titulo: 'A Ferida Sara - Desafio 5' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 5</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                            </View>
                             
                            


                            {/* Episodio 7 psicoeducativo (dia 27) */}

                     
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP7PSI', video: 'Rx5vYuJevPg', titulo: 'A Ferida Sara - Ep. 7 Psicoeducativo' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 7</Text>
                                    <Text style={styles.text}>Psicoeducativo</Text>
                                </View>
                            </View>
                              

                        


                            {/* Episodio 8 ferida Sara (dia 28) */}

                       
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP8SARA', video: 'VQlyrsG2SH0', titulo: 'A Ferida Sara - Ep. 8 Webserie' })}
                                    >
                                        <Image
                                           source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 8</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                

                            


                            {/* Desafio 6 (dia 28) */}

                          
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES6', video: '5IWgzT7LO7Q', titulo: 'A Ferida Sara - Desafio 6' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 6</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                             

                            


                            {/* Episodio 8 Psicoeducativo (dia 30) */}

                        
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP8PSI', video: 'JgW2rzNwQpc', titulo: 'A Ferida Sara - Ep. 8 Psicoeducativo' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 8</Text>
                                    <Text style={styles.text}>Psicoeducativo</Text>
                                </View>
                            </View>
                              

                            

                            {/* Episodio 9 ferida Sara (dia 31) */}

                  
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP9SARA', video: '0B0WzdWMvDw', titulo: 'A Ferida Sara - Ep. 9 Webserie' })}
                                >
                                    <Image
                                        source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 9</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                               

                            


                            {/* Episodio 9 psicoeducativo (dia 34) */}

                         
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP9PSI', video: '6pfnZXSHeKw', titulo: 'A Ferida Sara - Ep. 9 Psicoeducativo' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 9</Text>
                                    <Text style={styles.text}>Psicoeducativo</Text>
                                </View>
                            </View>
                               
                            


                            {/* Episodio 10 ferida Sara (dia 35) */}

                        
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP10SARA', video: '5hd0XjDv5pM', titulo: 'A Ferida Sara - Ep. 10 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 10</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                               

                            

                            {/* Desafio 7 (dia 35) */}

                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES7', video: 'jN8QyY_-5lg', titulo: 'A Ferida Sara - Desafio 7' })}
                                >
                                    <Image
                                       source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 7</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                               

                            

                            {/* Episodio 11 ferida Sara (dia 37) */}

                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP11SARA', video: 'n5Sl7KeMa0Q', titulo: 'A Ferida Sara - Ep. 11 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 11</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                               
                            

                            {/* Episodio 12 ferida Sara (dia 38) */}

                          
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP12SARA', video: 'CPLqqARxBb8', titulo: 'A Ferida Sara - Ep. 12 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 12</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                               

                            

                            {/* Desafio 8 (dia 38) */}
                            
                        
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES8', video: 'F3VfKFI7NHg', titulo: 'A Ferida Sara - Desafio 8' })}
                                >
                                    <Image
                                        source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 8</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                               

                            


                            {/* Episodio 10 Psicoeducativo (dia 40) */}

                            
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP10PSI', video: 'ZgAxypXcAe0', titulo: 'A Ferida Sara - Ep. 10 Psicoeducativo' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 10</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
        
                              

                            


                            {/* Episodio 13 ferida Sara (dia 42) */}

                         
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP13SARA', video: 'BWvXqDZQ0xQ', titulo: 'A Ferida Sara - Ep. 13 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 13</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                

                            

                            {/* Desafio 9 (dia 42) */}

                            
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES9', video: '4qRM3JG826U', titulo: 'A Ferida Sara - Desafio 9' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 9</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                               

                            
                        </View>
                    </View>
                </ScrollView >

                <View style={styles.tabBar}>
 
                    { currentStatus == 2 ? (
                        <View style={{flex: 1}}>
                        <Checkbox 
                            style={styles.icon}
                            onClick={() => navigation.navigate('PainelControlo')} 
                            isChecked={false}
                            unCheckedImage={<Icon1 name='equalizer' size={30} color='#D2D2D2' />}
                            checkedImage={<Icon1 name='equalizer' size={30} color='#6578B3'/>}
                        />  
                        </View>
                    ) : (
                        <View style={{flex: 1}}>
                        <Checkbox 
                            style={styles.icon}
                            onClick={() => navigation.navigate('Notificacoes')} // Alterar para Notifica????es
                            isChecked={false}
                            unCheckedImage={<Icon name='notifications' size={28} color='#D2D2D2'/>}
                            checkedImage={<Icon name='notifications' size={28} color='#6578B3'/>}
                        />           
                        </View>
                    )}
                    

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
        
    } else {

        return (
            <View style={styles.container}>
                <ScrollView style={styles.container}>

                    <View>
                        <Text style={styles.title1}>A Ferida Sara</Text>
                        <Text style={styles.text}>Esta webs??rie explica a jornada de Sara, uma rec??m estudante do ensino superior, que apresenta sintomas depressivos.</Text>
                    </View>

                    <View style={styles.container2}>

                        <View style={styles.containerepisodios}>

                            {/* Episodio 1 psicoeducativo (dia 1)  */}


                            {

                                (EP1PSI === true) ? (

                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP1PSI', video: '3xFja2DpzNE', titulo: 'A Ferida Sara - Ep. 1 Psicoeducativo' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 1</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>

                                ) : (

                                    <View style={styles.container3}>
                                        <TouchableOpacity
                                            onPress={() => alert('Conte??do Bloqueado')}
                                        >
                                            <Image
                                                source={require('../../../images/thumbnailBloqueada.png')}
                                                style={styles.episodio}

                                            />
                                        </TouchableOpacity>

                                        <View style={styles.container4}>
                                            <Text style={styles.title2}>Epis??dio 1</Text>
                                            <Text style={styles.text}>Psicoeducativo</Text>
                                        </View>
                                    </View>
                                )

                            }

                            

                            {/* Ferida Sara Episodio 1 (dia 2) */}


                            {
                            (EP1SARA == true) ? (
                                <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP1SARA', video: 'a_Po_QQWSa0', titulo: 'A Ferida Sara - Ep. 1 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 1</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
    
                            ) : (

                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 1</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>

                            
                            )
                            }


                        

                            {/* Psicoeducativo Episodio 2 (dia 5) */}

                            {

                                (EP2PSI == true) ? (
                                    <View style={styles.container3}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP2PSI', video: 'HhoYc8vR9CY', titulo: 'A Ferida Sara - Ep. 2 Psicoeducativo' })}
                                        >
                                            <Image
                                                 source={require('../../../images/SaraOpen.png')}
                                                style={styles.episodio}

                                            />
                                        </TouchableOpacity>

                                        <View style={styles.container4}>
                                            <Text style={styles.title2}>Epis??dio 2</Text>
                                            <Text style={styles.text}>Psicoeducativo</Text>
                                        </View>
                                    </View>
                                ) : (
                                    <View style={styles.container3}>
                                        <TouchableOpacity
                                            onPress={() => alert('Conte??do Bloqueado')}
                                        >
                                            <Image
                                                source={require('../../../images/thumbnailBloqueada.png')}
                                                style={styles.episodio}
            
                                            />
                                        </TouchableOpacity>
            
                                        <View style={styles.container4}>
                                            <Text style={styles.title2}>Epis??dio 2</Text>
                                            <Text style={styles.text}>Psicoeducativo</Text>
                                        </View>
                                    </View>
        
                                )

                            }

                        
                            {/* Ferida Sara Episodio 2 (dia 7)*/}


                            {
                                (EP2SARA == true) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP2SARA', video: 'GEzKXcHighA', titulo: 'A Ferida Sara - Ep. 2 Webserie' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 2</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                ) : (

                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 2</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                )
                            }



                            {/* Desafio 1 (dia 7) */}

                            {
                                (DES1 == true) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES1', video: 'thFvboH9RdQ', titulo: 'A Ferida Sara - Desafio 1' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 1</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                                ) : (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 1</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                                )
                            }


                        

                            {/* Episodio 3 Psicoeducativo (dia 9) */}


                            {
                                (EP3PSI == true) && (EP2SARA == false) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP3PSI', video: 'xdaxmlnb318', titulo: 'A Ferida Sara - Ep. 3 Psicoeducativo' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 3</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 3</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                )
                            }


                        

                            {/* Episodio 3 Ferida Sara (dia 10) */}
                            
                            {
                                (EP3SARA == true) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP3SARA', video: '6-9817rZzZQ', titulo: 'A Ferida Sara - Ep. 3 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 3</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                ) : (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 3</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                )
                            }



                        

                            {/* Episodio 4 Psicoeducativo (dia 11) */}

                            {
                                (EP4PSI == true) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4PSI', video: '9EtDFX56b0Y', titulo: 'A Ferida Sara - Ep. 4 Psicoeducativo' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                ) : (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                )
                            }

                        

                            {/* Episodio 4 parte 1 Ferida Sara (dia 13)*/}

                            {
                                (EP4_1SARA == true) ? (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4_1SARA', video: 'MeY9V2hoheY', titulo: 'A Ferida Sara - Ep. 4 parte I Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4: Parte I</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                ) : (

                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4: Parte I</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                )
                            }


                            {/* Desafio 2 (dia 13)*/}

                            {
                                (DES2 == true) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES2', video: '73tI-PF2Wts', titulo: 'A Ferida Sara - Desafio 2' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 2</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                                ) : (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 2</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
        
                                )
                            }

                        
                            {/* Episodio 4 parte 2 ferida Sara (dia 14) */}
                            
                            {
                                (EP4_2SARA == true) && (EP4_1SARA == false) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP4_2SARA', video: 'PFim1HS6UqU', titulo: 'A Ferida Sara - Ep. 4 parte II Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4: parte II</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                ) : (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 4: parte II</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
        
                                )
                            }

                        
                            {/* Episodio 5 Psicoeducativo (dia 17) */}

                            {
                                (EP5PSI == true ) ? (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP5PSI', video: 'aKEnz8U0Rk0', titulo: 'A Ferida Sara - Ep. 5 Psicoeducativo' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 5</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 5</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                )
                            }

                            

                            {/* Episodio 5 ferida Sara (dia 20) */}

                            {
                                (EP5SARA == true) ? (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP5SARA', video: 'qiRAt17222s', titulo: 'A Ferida Sara - Ep. 5 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 5</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                ) : (
                                    <View style={styles.container3}>
                                        <TouchableOpacity
                                            onPress={() => alert('Conte??do Bloqueado')}
                                        >
                                            <Image
                                                source={require('../../../images/thumbnailBloqueada.png')}
                                                style={styles.episodio}
            
                                            />
                                        </TouchableOpacity>
            
                                        <View style={styles.container4}>
                                            <Text style={styles.title2}>Epis??dio 5</Text>
                                            <Text style={styles.text}>A Ferida Sara</Text>
                                        </View>
                                    </View>
                                )
                            }

                        


                            {/* Desafio 3 (dia 20) */}

                            {
                                (DES3 == true) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES3', video: 'B-XCGPRTYxc', titulo: 'A Ferida Sara - Desafio 3' })}
                                    >
                                        <Image
                                            source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 3</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                            </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 3</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                                )
                            }

                            


                            {/* Episodio 6 psicoeducativo (dia 21) */}

                            {
                                (EP6PSI == true) && (EP5SARA == false) ? (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP6PSI', video: 'vNn8IsMLJCQ', titulo: 'A Ferida Sara - Ep. 6 Psicoeducativo' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 6</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                            </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 6</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                )
                            }

                            

                            {/* Episodio 6 ferida Sara (dia 23) */}

                            {
                                (EP6SARA == true) ? (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP6SARA', video: 'ju6adpcXpZY', titulo: 'A Ferida Sara - Ep. 6 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 6</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 6</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                )
                            }

                            

                            {/* Desafio 4 (dia 23) */}

                            {
                                (DES4 == true) ? (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES4', video: 'BOE2CfddAIU', titulo: 'A Ferida Sara - Desafio 4' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 4</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 4</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>
                                )
                            }

                            

                            {/* Episodio 7 ferida Sara (dia 24) */}

                            {
                                (EP7SARA == true) && (EP6SARA == false) ? (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP7SARA', video: 'svmo1kUByzs', titulo: 'A Ferida Sara - Ep. 7 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 7</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 7</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                            </View>
                                )
                            }

                            

                            {/* Desafio 5 (dia 24) */}

                            {
                                (DES5 == true) ? (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES5', video: 'jHY0rSBumnI', titulo: 'A Ferida Sara - Desafio 5' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 5</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                        <TouchableOpacity
                                           onPress={() => alert('Conte??do Bloqueado')}
                                        >
                                            <Image
                                                source={require('../../../images/thumbnailBloqueada.png')}
                                                style={styles.episodio}

                                            />
                                        </TouchableOpacity>

                                        <View style={styles.container4}>
                                            <Text style={styles.title2}>Desafio 5</Text>
                                            <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                        </View>
                                    </View>
                                )
                            }

                            


                            {/* Episodio 7 psicoeducativo (dia 27) */}

                            {
                                (EP7PSI == true) && (EP7SARA == false) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP7PSI', video: 'Rx5vYuJevPg', titulo: 'A Ferida Sara - Ep. 7 Psicoeducativo' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 7</Text>
                                    <Text style={styles.text}>Psicoeducativo</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 7</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                )
                            }

                        


                            {/* Episodio 8 ferida Sara (dia 28) */}

                            {
                                (EP8SARA == true) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP8SARA', video: 'VQlyrsG2SH0', titulo: 'A Ferida Sara - Ep. 8 Webserie' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 8</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 8</Text>
                                        <Text style={styles.text}>A Ferida Sara</Text>
                                    </View>
                                </View>
                                )
                            }

                            


                            {/* Desafio 6 (dia 28) */}

                            {
                                (DES6 == true) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES6', video: '5IWgzT7LO7Q', titulo: 'A Ferida Sara - Desafio 6' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 6</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Desafio 6</Text>
                                        <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                    </View>
                                </View>

                                )
                            }

                            


                            {/* Episodio 8 Psicoeducativo (dia 30) */}

                            {
                                (EP8PSI == true) && (EP8SARA == false) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP8PSI', video: 'JgW2rzNwQpc', titulo: 'A Ferida Sara - Ep. 8 Psicoeducativo' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 8</Text>
                                    <Text style={styles.text}>Psicoeducativo</Text>
                                </View>
                            </View>
                                ) : (
                                <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => alert('Conte??do Bloqueado')}
                                    >
                                        <Image
                                            source={require('../../../images/thumbnailBloqueada.png')}
                                            style={styles.episodio}

                                        />
                                    </TouchableOpacity>

                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 8</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
                                )
                            }

                            

                            {/* Episodio 9 ferida Sara (dia 31) */}

                            {
                                (EP9SARA == true) && (EP8SARA == false) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP9SARA', video: '0B0WzdWMvDw', titulo: 'A Ferida Sara - Ep. 9 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 9</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 9</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                )
                            }

                            


                            {/* Episodio 9 psicoeducativo (dia 34) */}

                            {
                                (EP9PSI == true) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP9PSI', video: '6pfnZXSHeKw', titulo: 'A Ferida Sara - Ep. 9 Psicoeducativo' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 9</Text>
                                    <Text style={styles.text}>Psicoeducativo</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 9</Text>
                                    <Text style={styles.text}>Psicoeducativo</Text>
                                </View>
                            </View>
                                )
                            }

                            


                            {/* Episodio 10 ferida Sara (dia 35) */}

                            {
                                (EP10SARA == true) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP10SARA', video: '5hd0XjDv5pM', titulo: 'A Ferida Sara - Ep. 10 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 10</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 10</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                )
                            }

                            

                            {/* Desafio 7 (dia 35) */}

                            {
                                (DES7 == true) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES7', video: 'jN8QyY_-5lg', titulo: 'A Ferida Sara - Desafio 7' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 7</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 7</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                                )
                            }

                            

                            {/* Episodio 11 ferida Sara (dia 37) */}

                            {
                                (EP11SARA == true) && (EP10SARA == false) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP11SARA', video: 'n5Sl7KeMa0Q', titulo: 'A Ferida Sara - Ep. 11 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 11</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 11</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                )
                            }

                            

                            {/* Episodio 12 ferida Sara (dia 38) */}

                            {
                                (EP12SARA == true) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP12SARA', video: 'CPLqqARxBb8', titulo: 'A Ferida Sara - Ep. 12 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 12</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 12</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                )
                            }

                            

                            {/* Desafio 8 (dia 38) */}
                            
                            {
                                (DES8 == true) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES8', video: 'F3VfKFI7NHg', titulo: 'A Ferida Sara - Desafio 8' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 8</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                   onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 8</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                                )
                            }

                            


                            {/* Episodio 10 Psicoeducativo (dia 40) */}

                            {
                                (EP10PSI == true) && (EP12SARA == false) ? (
                                    <View style={styles.container3}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP10PSI', video: 'ZgAxypXcAe0', titulo: 'A Ferida Sara - Ep. 10 Psicoeducativo' })}
                                    >
                                        <Image
                                             source={require('../../../images/SaraOpen.png')}
                                            style={styles.episodio}
        
                                        />
                                    </TouchableOpacity>
        
                                    <View style={styles.container4}>
                                        <Text style={styles.title2}>Epis??dio 10</Text>
                                        <Text style={styles.text}>Psicoeducativo</Text>
                                    </View>
                                </View>
        
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                   onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 10</Text>
                                    <Text style={styles.text}>Psicoeducativo</Text>
                                </View>
                            </View>
                                )
                            }

                            


                            {/* Episodio 13 ferida Sara (dia 42) */}

                            {
                                (EP13SARA == true) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'EP13SARA', video: 'BWvXqDZQ0xQ', titulo: 'A Ferida Sara - Ep. 13 Webserie' })}
                                >
                                    <Image
                                         source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 13</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                   onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Epis??dio 13</Text>
                                    <Text style={styles.text}>A Ferida Sara</Text>
                                </View>
                            </View>
                                )
                            }

                            

                            {/* Desafio 9 (dia 42) */}

                            {
                                (DES9 == true) ? (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Ep1_Sara', { episodio: 'DES9', video: '4qRM3JG826U', titulo: 'A Ferida Sara - Desafio 9' })}
                                >
                                    <Image
                                        source={require('../../../images/SaraOpen.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 9</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                                ) : (
                                    <View style={styles.container3}>
                                <TouchableOpacity
                                    onPress={() => alert('Conte??do Bloqueado')}
                                >
                                    <Image
                                        source={require('../../../images/thumbnailBloqueada.png')}
                                        style={styles.episodio}

                                    />
                                </TouchableOpacity>

                                <View style={styles.container4}>
                                    <Text style={styles.title2}>Desafio 9</Text>
                                    <Text style={styles.text}>Lan??amos-te um novo desafio!</Text>
                                </View>
                            </View>
                                )
                            }

                            
                        </View>
                    </View>
                </ScrollView >

                <View style={styles.tabBar}>
                    <View style={{flex: 1}}>
                    <Checkbox 
                        style={styles.icon}
                        onClick={() => navigation.navigate('Notificacoes')} // Alterar para Notifica????es
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
                        isChecked={false}
                        unCheckedImage={<Icon2 name='questioncircle' size={28} color='#D2D2D2' />}
                        checkedImage={<Icon2 name='questioncircle' size={28} color='#6578B3'/>}
                    />  
                    </View>


                </View>

            </View>

        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CFE0FB',
        width: '100%',
    },
    container2: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        height: '100%',
        width: '100%',
        marginTop: '10%',
    },
    container3: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: '5%',
        marginLeft: '5%',

    },

    container4: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: '2.5%',

    },

    containerepisodios: {
        flex: 1,
        marginTop: '2%',
        marginBottom: '8%',

    },

    text: {
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 15,
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
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '4%',
    },
    title3: {
        fontSize: 20,
        fontWeight: 'normal',
        marginRight: '10%',
        marginBottom: '2%',
        marginTop: '3%',
        marginLeft: '10%',
    },
    title4: {
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%',
        fontSize: 10,
    },
    episodio: { //Imagem do episodio
        width: 150,
        height: 90,
        marginLeft: '13%',
        marginTop: '5%',
        resizeMode: 'contain',
    },

    icon: {
        padding: '10%', 
        alignSelf: 'center',
    },

    tabBar: {
        flexDirection: 'row', 
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#D7D7D7',
        
    },
});
export default PlaylistSara;