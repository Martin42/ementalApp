import React, { useState, useCallback, useEffect, useRef} from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, Text, Image, View, Alert , TextInput, Modal} from "react-native";
import { Entypo } from '@expo/vector-icons'
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";
import { db, auth } from '../../../Firebase';
import { AntDesign } from '@expo/vector-icons';
import CheckBox from 'react-native-check-box';
import Svg, {Rect, Path} from 'react-native-svg';


function Ep1_Sara({route, navigation}){

    useEffect(() => {
        getComments();
        getCommentsAdmin();
        getStatus ()
        if (route.params.episodio === 'EP4_1SARA'){
            setEp4(true);
        };

    },[])

    const playerRef = useRef();

    function getTime(){
        playerRef.current?.getCurrentTime().then(
            currentTime => {setFinished(currentTime)}
          );
    }

    function setFinished(currentTime){
        if (currentTime >= 10) {
            db
                .collection('users')
                .doc(currentUser)
                .set({
                    [route.params.episodio]: new Date()
                }, {merge: true})
        }
    }


    const currentUser = auth.currentUser.uid;
    const [currentStatus, setCurrentStatus] = useState('');

    const [mensagem, setMensagem] = useState();
    const [playing, setPlaying] = useState(false);
    const [modal, setModal] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentsAdmin, setCommentsAdmin] = useState([]);
    const [ep4, setEp4] = useState(false);
    const [confirmar, setConfirmar] = useState(false);
    const [porAprovar, setPorAprovar] = useState();
    const [remetente, setRemetente] = useState();


    const [modal2, setModal2] = useState(false);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);


    function validate1(){

        if (check1 === false) {
            setCheck1(true);
            setCheck2(false);
            setCheck3(false);
            setCheck4(false);
            setCheck5(false);
        }
    }

    function validate2(){

        if (check2 === false) {
            setCheck2(true);
            setCheck1(false);
            setCheck3(false);
            setCheck4(false);
            setCheck5(false);
        }
    }

    function validate3(){

        if (check3 === false) {
            setCheck3(true);
            setCheck1(false);
            setCheck2(false);
            setCheck4(false);
            setCheck5(false);
        }
    }

    function validate4(){

        if (check4 === false) {
            setCheck4(true);
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
            setCheck5(false);
        }
    }

    function validate5(){

        if (check5 === false) {
            setCheck5(true);
            setCheck1(false);
            setCheck2(false);
            setCheck3(false);
            setCheck4(false);
        }
    }

    function test() {
        if (ep4 == true){
            setModal2(true);
           
        } else {
            navigation.navigate('PlaylistSara');
        }
    };

    function setRating() {
        if (check1 == true) {
            db
                .collection('Ratings')
                .doc(currentUser)
                .set({
                    Rating: 1 
                })
        } else if (check2 == true) {
            db
            .collection('Ratings')
            .doc(currentUser)
            .set({
                Rating: 2 
            })
        } else if (check3 == true) {
            db
            .collection('Ratings')
            .doc(currentUser)
            .set({
                Rating: 3 
            })
        } else if (check4 == true) {
            db
            .collection('Ratings')
            .doc(currentUser)
            .set({
                Rating: 4 
            })
        } else if (check5 == true) {
            db
            .collection('Ratings')
            .doc(currentUser)
            .set({
                Rating: 5 
            })
        }
    }

    function setAprovado(id){
        db
        .collection(route.params.episodio)
        .doc(id)
        .set({
            aprovado: 'true'
        }, {merge: true});

        db
        .collection('Notificacoes')
        .add({
            Conteudo: 'O teu coment??rio j?? se encontra aprovado!',
            User: remetente,
            Visto: false,
            fulldata: new Date(),
            Destino: 'Notificacoes'
        })

    }

    function setReprovado(id){
        db
        .collection(route.params.episodio)
        .doc(id)
        .set({
            aprovado: 'false'
        }, {merge: true})
    }


    function setComment (){
        db
            .collection(route.params.episodio)
            .add({
                comentario: mensagem,
                aprovado: '',
                fulldata: new Date(),
                autor: currentUser
            }) 
    }

    async function getComments (){
        const commentRef = db.collection(route.params.episodio).orderBy('fulldata', 'asc');
        const snapshot = await commentRef.get()
        const comentarios = [];
        snapshot.forEach(doc => {
            if (doc.data().aprovado === 'true') {
                comentarios.push(doc.data().comentario);
            } 

            setRemetente(doc.data().autor)

        })

        setComments(...comments, comentarios)
    }

    async function getCommentsAdmin (){
        const commentAdminRef = db.collection(route.params.episodio).where('aprovado', '==', '');
        const snapshotAdmin = await commentAdminRef.get()
        let numeroPorAprovar = 0;
        snapshotAdmin.forEach(doc => {
                setCommentsAdmin(state => ({
                    ...state,
                    [ doc.id ] : doc.data().comentario
                }))
                numeroPorAprovar++;
                
        })

        setPorAprovar(numeroPorAprovar);

    }


    function getStatus (){ db
        .collection('users')
        .doc(currentUser)
        .get()
        .then(doc => {
            setCurrentStatus(doc.data().status)
         
        });
    }
    // Player 
  
    const togglePlaying = useCallback(() => {
      setPlaying((prev) => !prev);
    }, []);

    
    if ((currentStatus == 0) || (currentStatus == 1)) {
        return(
            <View style={styles.container}>
            
            <ScrollView style={styles.container}>
                <View style={{flexDirection: 'row', height: 40, marginTop: '7.5%', alignItems: 'center', marginBottom: '2.5%'}}>
                    <TouchableOpacity
                        onPress={test}
                        style={styles.icon}>
                        <Entypo name="chevron-thin-left" size={24} color="black"/>
                    </TouchableOpacity>

                    <Text
                        style={{fontSize: 20}}>
                            {route.params.titulo}
                    </Text>

                </View>

                <View>

                <YoutubePlayer
                        ref={playerRef}
                        height={300}
                        play={playing}
                        videoId={route.params.video}
                        onChangeState={getTime}
                />

                </View>
        
                <Text style={styles.title1}>Coment??rios</Text>

                {comments.map((e, key) => (
                    <View key={key} style={{flexDirection:'row', marginLeft: '10%', marginRight: '10%', marginBottom: '5%'}}>
                        <View style={{marginTop: '7.5%', flex: 1, marginRight: '-12.5%', marginLeft: '5%'}}>
                            <AntDesign name="smile-circle" size={50} color="lightblue"/>
                        </View>
                        <View style={{width: '90%'}}>
                            <View>
                                <Text style={{marginLeft: '20%'}}>
                                An??nimo
                                </Text>
                            </View>
                            <View style={styles.inputComment}>
                                <Text style={{flexDirection:'column'}, styles.inputMensagem2}>
                                {e}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}


                <Modal
                            animationType='fade'
                            transparent={true}
                            visible={modal}
                        >
                            <View style={styles.modalView}>
                                <View style={styles.modalContainer}>
                                <Image 
                                    source={require('../../../images/comentario-pop.png')}
                                    style={styles.modalImage}
                                />
                                <Text style={styles.modalTitle}>O teu coment??rio aguarda aprova????o!</Text>
                                <Text style={styles.modalSubtitle}>Ter??s de aguardar que o teu coment??rio seja aprovado.</Text>
                                <TouchableOpacity
                                    style={styles.entendi}
                                    onPress={()=> { setModal(false)}}
                                >
                                    <Text style={styles.entendiText}>Entendi!</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                            
                        
                        </Modal>

            </ScrollView>

                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: '2.5%'}}>
                        <TextInput
                            style={styles.inputMensagem}
                            width='80%'
                            marginLeft="10%"
                            placeholder= 'Comente aqui...'
                            backgroundColor= '#CFE0FB'
                            placeholderTextColor= 'black'
                            multiline={true}
                            onChangeText={mensagem => setMensagem(mensagem)}
                            />

                        <TouchableOpacity
                            onPress={()=> {setComment(); setModal(true)}}
                            style={styles.icon2}>
                            <AntDesign name="right" size={24} color="black"/>     
                        </TouchableOpacity>

                </View>

                <Modal  animationType='fade'
                        transparent={true}
                        visible={modal2}>
                    
                    <View style={styles.modalView}>
                        <View style={styles.modalContainer}>
                            <Image
                                source={require('../../../images/feedback_pop.png')}
                                style={styles.modalImage}
                            />
                            <Text style={styles.modalTitle}>Recomendarias esta aplica????o?</Text>
        
                            <View style={styles.ratingContainer}>
                                
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate1(), setConfirmar(true)}}
                                    isChecked={check1}
                                    unCheckedImage={<Image source={require('../../../images/rating/1.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/1_selecionado.png')} style={styles.ratingImage} />}
                                />
        
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate2(), setConfirmar(true)}}
                                    isChecked={check2}
                                    unCheckedImage={<Image source={require('../../../images/rating/2.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/2_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate3(), setConfirmar(true)}}
                                    isChecked={check3}
                                    unCheckedImage={<Image source={require('../../../images/rating/3.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/3_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate4(), setConfirmar(true)}}
                                    isChecked={check4}
                                    unCheckedImage={<Image source={require('../../../images/rating/4.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/4_selecionado.png')} style={styles.ratingImage} />}
                                />
                                <CheckBox
                                    style={styles.ratingCheckbox}
                                    onClick={() => {validate5(), setConfirmar(true)}}
                                    isChecked={check5}
                                    unCheckedImage={<Image source={require('../../../images/rating/5.png')} style={styles.ratingImage} />}
                                    checkedImage={<Image source={require('../../../images/rating/5_selecionado.png')} style={styles.ratingImage} />}
                                />

        
                            </View>
                            { confirmar == true ? (
                                <TouchableOpacity
                                style={styles.entendi}
                                onPress={() => { setModal2(false), navigation.navigate('PlaylistSara'), setRating()}}
                            >
                           
                                <Text style={styles.entendiText}>Submeter</Text>
                            </TouchableOpacity>
                            ) : (
                            <Text></Text>
                            )}
        
                        </View>
                    </View>
                </Modal>

                </View>
    )
} else {


    return(
        <View style={styles.container}>
            
            <ScrollView style={styles.container}>
                <View style={{flexDirection: 'row', height: 40, marginTop: '7.5%', alignItems: 'center', marginBottom: '2.5%'}}>
                    <TouchableOpacity
                        onPress={test}
                        style={styles.icon}>
                        <Entypo name="chevron-thin-left" size={24} color="black"/>
                    </TouchableOpacity>

                    <Text
                        style={{fontSize: 20}}>
                            {route.params.titulo}
                    </Text>

                </View>

                <View>

                <YoutubePlayer
                        height={300}
                        play={playing}
                        videoId={route.params.video}
                />

                </View>
        
                <Text style={styles.title1}>Coment??rios por aprovar ({porAprovar}) </Text>

                {
                    Object.entries(commentsAdmin).map(([id, value]) => (
                            <View style={{marginBottom: '5%'}}>
                                <View style={{alignContent: 'center'}}>
                                    <View style={styles.inputCommentGrey}>
                                        <Text style={{flexDirection:'column'}, styles.inputMensagem2}>
                                        {[value]}
                                        </Text>
                                        
                                    </View>

                                <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginRight: '9%'}}>
                                    
                                    <TouchableOpacity 
                                     style={{width: '16%', marginTop: '4%'}}
                                    onPress={() => {setReprovado(id)}}>
                                        <Text style={{textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 15}}>Recusar</Text>
                                    </TouchableOpacity>
                                    
                                    
                                    <TouchableOpacity 
                                    style={{width: '20%', marginTop: '2%', marginLeft: '4%'}}
                                    onPress={() => {setAprovado(id)}}>
                                        <Svg marginRight="10%" width="72" height="37" viewBox="0 0 73 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <Rect width="72" height="37" rx="17.3065" fill="#6578B3"/>
                                            <Path d="M22.8427 23.5483H21.3532C21.1861 23.5483 21.0477 23.5078 20.9378 23.4266C20.8328 23.3407 20.7564 23.2356 20.7087 23.1115L19.9353 20.9989H15.6457L14.8722 23.1115C14.834 23.2213 14.7577 23.3216 14.6431 23.4123C14.5333 23.503 14.3972 23.5483 14.2349 23.5483H12.7382L16.8058 13.1931H18.7751L22.8427 23.5483ZM16.1398 19.6383H19.4411L18.1807 16.1937C18.1235 16.0409 18.059 15.8619 17.9874 15.6566C17.9206 15.4465 17.8537 15.2198 17.7869 14.9763C17.72 15.2198 17.6532 15.4465 17.5864 15.6566C17.5243 15.8667 17.4622 16.0505 17.4002 16.208L16.1398 19.6383ZM28.9723 17.7549C28.9197 17.8217 28.8672 17.8742 28.8147 17.9124C28.767 17.9506 28.6954 17.9697 28.5999 17.9697C28.5092 17.9697 28.4208 17.9434 28.3349 17.8909C28.249 17.8336 28.1463 17.7716 28.027 17.7047C27.9076 17.6331 27.7644 17.571 27.5973 17.5185C27.435 17.4612 27.2321 17.4326 26.9886 17.4326C26.6783 17.4326 26.4061 17.4899 26.1722 17.6045C25.9383 17.7143 25.7425 17.8742 25.585 18.0843C25.4322 18.2943 25.3176 18.5498 25.2412 18.8505C25.1648 19.1465 25.1266 19.4831 25.1266 19.8603C25.1266 20.2518 25.1672 20.6003 25.2484 20.9058C25.3343 21.2114 25.4561 21.4692 25.6136 21.6792C25.7712 21.8845 25.9621 22.0421 26.1865 22.1519C26.4109 22.2569 26.6639 22.3094 26.9456 22.3094C27.2273 22.3094 27.4541 22.276 27.6259 22.2092C27.8026 22.1376 27.9506 22.0612 28.0699 21.98C28.1893 21.8941 28.2919 21.8177 28.3779 21.7509C28.4686 21.6792 28.5688 21.6434 28.6786 21.6434C28.8219 21.6434 28.9293 21.6983 29.0009 21.8081L29.5094 22.4527C29.3136 22.6818 29.1012 22.8752 28.872 23.0327C28.6428 23.1855 28.4041 23.3096 28.1559 23.4051C27.9124 23.4958 27.6594 23.5603 27.3968 23.5985C27.1342 23.6367 26.874 23.6558 26.6162 23.6558C26.1626 23.6558 25.7354 23.5722 25.3343 23.4051C24.9333 23.2332 24.5824 22.985 24.2816 22.6603C23.9856 22.3357 23.7493 21.9394 23.5726 21.4716C23.4008 20.9989 23.3148 20.4618 23.3148 19.8603C23.3148 19.3208 23.3912 18.8219 23.544 18.3636C23.7015 17.9005 23.9307 17.5018 24.2315 17.1676C24.5323 16.8287 24.9046 16.5637 25.3486 16.3727C25.7926 16.1818 26.3035 16.0863 26.8812 16.0863C27.4302 16.0863 27.91 16.1746 28.3206 16.3512C28.7359 16.5279 29.1083 16.7809 29.4377 17.1103L28.9723 17.7549ZM33.671 16.0863C34.1341 16.0863 34.559 16.1603 34.9457 16.3083C35.3371 16.4563 35.6737 16.6735 35.9554 16.96C36.2371 17.2416 36.4567 17.5901 36.6142 18.0055C36.7718 18.4161 36.8506 18.8863 36.8506 19.4163C36.8506 19.55 36.8434 19.6621 36.8291 19.7529C36.8195 19.8388 36.7981 19.908 36.7646 19.9605C36.736 20.0083 36.6954 20.0441 36.6429 20.068C36.5904 20.087 36.5235 20.0966 36.4424 20.0966H31.9021C31.9546 20.8509 32.1575 21.4047 32.5108 21.758C32.8641 22.1113 33.332 22.288 33.9144 22.288C34.2009 22.288 34.4468 22.2545 34.6521 22.1877C34.8621 22.1209 35.0435 22.0469 35.1963 21.9657C35.3539 21.8845 35.4899 21.8105 35.6045 21.7437C35.7239 21.6769 35.8384 21.6434 35.9482 21.6434C36.0199 21.6434 36.0819 21.6578 36.1344 21.6864C36.187 21.715 36.2323 21.7556 36.2705 21.8081L36.7861 22.4527C36.5904 22.6818 36.3708 22.8752 36.1273 23.0327C35.8838 23.1855 35.6284 23.3096 35.361 23.4051C35.0984 23.4958 34.8287 23.5603 34.5518 23.5985C34.2797 23.6367 34.0147 23.6558 33.7569 23.6558C33.2461 23.6558 32.771 23.5722 32.3318 23.4051C31.8926 23.2332 31.5106 22.9826 31.186 22.6532C30.8613 22.319 30.6059 21.9084 30.4197 21.4214C30.2335 20.9297 30.1404 20.3616 30.1404 19.717C30.1404 19.2158 30.2216 18.7455 30.3839 18.3063C30.5462 17.8623 30.7778 17.478 31.0786 17.1533C31.3841 16.8239 31.7541 16.5637 32.1886 16.3727C32.6278 16.1818 33.1219 16.0863 33.671 16.0863ZM33.7068 17.3538C33.1911 17.3538 32.7877 17.4994 32.4965 17.7907C32.2053 18.0819 32.0191 18.4949 31.9379 19.0296H35.2608C35.2608 18.8004 35.2297 18.5856 35.1677 18.385C35.1056 18.1798 35.0101 18.0007 34.8812 17.848C34.7523 17.6952 34.59 17.5758 34.3942 17.4899C34.1985 17.3992 33.9693 17.3538 33.7068 17.3538ZM40.1688 16.2009V23.5483H38.4V16.2009H40.1688ZM40.4338 14.0596C40.4338 14.2124 40.4028 14.3556 40.3407 14.4893C40.2786 14.623 40.1951 14.74 40.09 14.8402C39.9898 14.9405 39.8704 15.0216 39.732 15.0837C39.5935 15.141 39.4455 15.1696 39.288 15.1696C39.1352 15.1696 38.9896 15.141 38.8511 15.0837C38.7175 15.0216 38.6005 14.9405 38.5002 14.8402C38.4 14.74 38.3188 14.623 38.2568 14.4893C38.1995 14.3556 38.1708 14.2124 38.1708 14.0596C38.1708 13.9021 38.1995 13.7541 38.2568 13.6156C38.3188 13.4772 38.4 13.3578 38.5002 13.2576C38.6005 13.1573 38.7175 13.0785 38.8511 13.0212C38.9896 12.9592 39.1352 12.9281 39.288 12.9281C39.4455 12.9281 39.5935 12.9592 39.732 13.0212C39.8704 13.0785 39.9898 13.1573 40.09 13.2576C40.1951 13.3578 40.2786 13.4772 40.3407 13.6156C40.4028 13.7541 40.4338 13.9021 40.4338 14.0596ZM44.5871 23.6629C43.9521 23.6629 43.4628 23.4839 43.119 23.1258C42.7753 22.763 42.6034 22.2641 42.6034 21.6291V17.5257H41.8587C41.7632 17.5257 41.6796 17.4947 41.608 17.4326C41.5412 17.3705 41.5078 17.2774 41.5078 17.1533V16.4515L42.6894 16.2581L43.0618 14.253C43.0809 14.1575 43.1238 14.0835 43.1907 14.031C43.2623 13.9785 43.3506 13.9522 43.4556 13.9522H44.3723V16.2653H46.3058V17.5257H44.3723V21.5074C44.3723 21.7365 44.4296 21.9156 44.5441 22.0445C44.6587 22.1734 44.8115 22.2378 45.0025 22.2378C45.1123 22.2378 45.203 22.2259 45.2746 22.202C45.351 22.1734 45.4154 22.1447 45.468 22.1161C45.5252 22.0874 45.5754 22.0612 45.6183 22.0373C45.6613 22.0087 45.7043 21.9943 45.7472 21.9943C45.7998 21.9943 45.8427 22.0087 45.8761 22.0373C45.9096 22.0612 45.9454 22.0994 45.9836 22.1519L46.5135 23.0112C46.2557 23.2261 45.9597 23.3884 45.6255 23.4982C45.2913 23.608 44.9452 23.6629 44.5871 23.6629ZM53.4702 23.5483H52.6753C52.5082 23.5483 52.377 23.5245 52.2815 23.4767C52.186 23.4242 52.1144 23.3216 52.0666 23.1688L51.9091 22.646C51.7229 22.8131 51.5391 22.9611 51.3577 23.09C51.181 23.2141 50.9972 23.3192 50.8062 23.4051C50.6153 23.491 50.4124 23.5555 50.1975 23.5985C49.9827 23.6414 49.744 23.6629 49.4814 23.6629C49.1711 23.6629 48.8846 23.6223 48.6221 23.5412C48.3595 23.4552 48.1327 23.3287 47.9417 23.1616C47.7555 22.9945 47.6099 22.7869 47.5049 22.5386C47.3999 22.2903 47.3473 22.0015 47.3473 21.6721C47.3473 21.3952 47.419 21.123 47.5622 20.8557C47.7102 20.5836 47.9537 20.3401 48.2926 20.1252C48.6316 19.9056 49.0828 19.7242 49.6461 19.581C50.2095 19.4378 50.9089 19.3566 51.7444 19.3375V18.9078C51.7444 18.4161 51.6393 18.0532 51.4293 17.8193C51.224 17.5806 50.9232 17.4612 50.527 17.4612C50.2405 17.4612 50.0018 17.4947 49.8108 17.5615C49.6199 17.6283 49.4528 17.7047 49.3095 17.7907C49.1711 17.8718 49.0422 17.9458 48.9228 18.0127C48.8035 18.0795 48.6722 18.1129 48.529 18.1129C48.4096 18.1129 48.307 18.0819 48.221 18.0198C48.1351 17.9578 48.0659 17.8814 48.0133 17.7907L47.6911 17.2249C48.5361 16.4515 49.5554 16.0648 50.749 16.0648C51.1786 16.0648 51.5606 16.1364 51.8948 16.2796C52.2337 16.4181 52.5202 16.6138 52.7541 16.8669C52.9881 17.1151 53.1647 17.4135 53.2841 17.762C53.4082 18.1105 53.4702 18.4925 53.4702 18.9078V23.5483ZM50.0328 22.4455C50.2142 22.4455 50.3813 22.4288 50.5341 22.3954C50.6869 22.362 50.8301 22.3118 50.9638 22.245C51.1022 22.1781 51.2335 22.097 51.3577 22.0015C51.4866 21.9012 51.6155 21.7843 51.7444 21.6506V20.4117C51.2288 20.4356 50.7967 20.4809 50.4482 20.5478C50.1044 20.6098 49.8275 20.691 49.6175 20.7912C49.4074 20.8915 49.257 21.0085 49.1663 21.1421C49.0804 21.2758 49.0374 21.4214 49.0374 21.579C49.0374 21.8893 49.1281 22.1113 49.3095 22.245C49.4957 22.3787 49.7368 22.4455 50.0328 22.4455ZM55.2095 23.5483V16.2009H56.2479C56.4293 16.2009 56.5559 16.2343 56.6275 16.3011C56.6991 16.368 56.7468 16.4825 56.7707 16.6449L56.8781 17.5329C57.1407 17.0793 57.4486 16.7212 57.8019 16.4587C58.1552 16.1961 58.5515 16.0648 58.9907 16.0648C59.3535 16.0648 59.6543 16.1483 59.893 16.3154L59.6639 17.6403C59.6495 17.7262 59.6185 17.7883 59.5708 17.8265C59.523 17.8599 59.4586 17.8766 59.3774 17.8766C59.3058 17.8766 59.2079 17.8599 59.0838 17.8265C58.9597 17.793 58.795 17.7763 58.5897 17.7763C58.2221 17.7763 57.907 17.879 57.6444 18.0843C57.3818 18.2848 57.1598 18.5808 56.9784 18.9723V23.5483H55.2095Z" fill="white"/>
                                        </Svg>
                                    </TouchableOpacity>

                                </View>


                                </View>
                            </View>
                    ))
                }

                    
                <Text style={styles.title2}>Coment??rios Aprovados</Text>
                {comments.map((e, key) => (
                    <View key={key} style={{flexDirection:'row', marginLeft: '10%', marginRight: '10%', marginBottom: '5%'}}>
                        <View style={{marginTop: '7.5%', flex: 1, marginRight: '-12.5%', marginLeft: '5%'}}>
                            <AntDesign name="smile-circle" size={50} color="lightblue"/>
                        </View>
                        <View style={{width: '90%'}}>
                            <View>
                                <Text style={{marginLeft: '20%'}}>
                                An??nimo
                                </Text>
                            </View>
                            <View style={styles.inputComment}>
                                <Text style={{flexDirection:'column'}, styles.inputMensagem2}>
                                {e}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
         


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

    title1: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '-5%',
    },

    title2: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '5%',
        marginTop: '5%',
    },


    inputField: {
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '5%',
        marginLeft: '10%',
        marginRight: '10%',
    },

    inputMensagem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',
    },

    inputMensagem2: {
        fontSize: 18,
        color: 'black',
        borderRadius: 20,
        padding: 15,
        textAlign: 'left',
    },

    inputComment: {
        flex: 1,
        backgroundColor: '#CFE0FB',
        borderRadius: 20,
        padding: 0,
        textAlign: 'left',
        width: '80%',
        marginLeft: '20%',
    },

    inputCommentGrey: {
        flex: 1,
        backgroundColor: '#ECEDEF',
        borderRadius: 20,
        padding: 0,
        width: '80%',
        alignSelf: 'center',
    },

    icon: {
        marginLeft: '5%',
        marginRight: '5%',
    },

    icon2: {
        marginLeft: '2%',
        marginRight: '2%',
    },
  
 // modal styling

 ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: '10%',
    alignItems: 'center',
    marginTop: '10%',


},

ratingImage: {
    width: 46,

},

ratingCheckbox: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '10%',
},


entendi: {
    width: '80%',
    borderColor: '#6578B3',
    borderStyle: 'solid',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#6578B3',
    padding: '4%',
    marginTop: '10%',
},

modalView: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
},

modalContainer: {
    marginLeft: '12%',
    marginRight: '12%',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 25,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
},

modalImage: {
    marginBottom: '12%',
    marginTop: '5%',
    height: 100,
    width: '50%'
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

});

export default Ep1_Sara;