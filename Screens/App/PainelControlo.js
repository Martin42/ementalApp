import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Box, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Checkbox from 'react-native-check-box';
import { Entypo } from '@expo/vector-icons';
import Svg, {Circle, Rect, Path} from 'react-native-svg';

import { auth, db } from '../../Firebase';
import { color } from 'react-native-reanimated';

function PainelControlo({ route, navigation }) {

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
                            style={styles.icone}>
                            <Entypo name="download" size={20} color="#6578B3" />
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.caixa}>
                        <Text style={styles.valor}>
                            32
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
                            32
                        </Text>
                        <Text style={styles.nome}>
                            profissionais
                        </Text>
                        <Text style={styles.nome}>
                            de saúde
                        </Text>
                    </View>

                    <View style={styles.caixa}>
                        <Text style={styles.valor}>
                            32
                        </Text>
                        <Text style={styles.nome}>
                            questionários
                        </Text>
                        <Text style={styles.nome}>
                            respondidos
                        </Text>
                    </View>



                </View>
                    <Text style={styles.title3}>
                        Comentários para aprovação <Text style={{color: '#6578B3'}}>(x)</Text>
                    </Text>

                    <Text style={styles.text2}>
                        serie - ep:
                    </Text>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', position:'relative'}}>
                        <Text style={styles.textobotao}>
                            Recusar
                        </Text>

                        <Svg marginRight="10%" width="73" height="37" viewBox="0 0 73 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Rect width="72.8064" height="37" rx="17.3065" fill="#6578B3"/>
                            <Path d="M22.8427 23.5483H21.3532C21.1861 23.5483 21.0477 23.5078 20.9378 23.4266C20.8328 23.3407 20.7564 23.2356 20.7087 23.1115L19.9353 20.9989H15.6457L14.8722 23.1115C14.834 23.2213 14.7577 23.3216 14.6431 23.4123C14.5333 23.503 14.3972 23.5483 14.2349 23.5483H12.7382L16.8058 13.1931H18.7751L22.8427 23.5483ZM16.1398 19.6383H19.4411L18.1807 16.1937C18.1235 16.0409 18.059 15.8619 17.9874 15.6566C17.9206 15.4465 17.8537 15.2198 17.7869 14.9763C17.72 15.2198 17.6532 15.4465 17.5864 15.6566C17.5243 15.8667 17.4622 16.0505 17.4002 16.208L16.1398 19.6383ZM28.9723 17.7549C28.9197 17.8217 28.8672 17.8742 28.8147 17.9124C28.767 17.9506 28.6954 17.9697 28.5999 17.9697C28.5092 17.9697 28.4208 17.9434 28.3349 17.8909C28.249 17.8336 28.1463 17.7716 28.027 17.7047C27.9076 17.6331 27.7644 17.571 27.5973 17.5185C27.435 17.4612 27.2321 17.4326 26.9886 17.4326C26.6783 17.4326 26.4061 17.4899 26.1722 17.6045C25.9383 17.7143 25.7425 17.8742 25.585 18.0843C25.4322 18.2943 25.3176 18.5498 25.2412 18.8505C25.1648 19.1465 25.1266 19.4831 25.1266 19.8603C25.1266 20.2518 25.1672 20.6003 25.2484 20.9058C25.3343 21.2114 25.4561 21.4692 25.6136 21.6792C25.7712 21.8845 25.9621 22.0421 26.1865 22.1519C26.4109 22.2569 26.6639 22.3094 26.9456 22.3094C27.2273 22.3094 27.4541 22.276 27.6259 22.2092C27.8026 22.1376 27.9506 22.0612 28.0699 21.98C28.1893 21.8941 28.2919 21.8177 28.3779 21.7509C28.4686 21.6792 28.5688 21.6434 28.6786 21.6434C28.8219 21.6434 28.9293 21.6983 29.0009 21.8081L29.5094 22.4527C29.3136 22.6818 29.1012 22.8752 28.872 23.0327C28.6428 23.1855 28.4041 23.3096 28.1559 23.4051C27.9124 23.4958 27.6594 23.5603 27.3968 23.5985C27.1342 23.6367 26.874 23.6558 26.6162 23.6558C26.1626 23.6558 25.7354 23.5722 25.3343 23.4051C24.9333 23.2332 24.5824 22.985 24.2816 22.6603C23.9856 22.3357 23.7493 21.9394 23.5726 21.4716C23.4008 20.9989 23.3148 20.4618 23.3148 19.8603C23.3148 19.3208 23.3912 18.8219 23.544 18.3636C23.7015 17.9005 23.9307 17.5018 24.2315 17.1676C24.5323 16.8287 24.9046 16.5637 25.3486 16.3727C25.7926 16.1818 26.3035 16.0863 26.8812 16.0863C27.4302 16.0863 27.91 16.1746 28.3206 16.3512C28.7359 16.5279 29.1083 16.7809 29.4377 17.1103L28.9723 17.7549ZM33.671 16.0863C34.1341 16.0863 34.559 16.1603 34.9457 16.3083C35.3371 16.4563 35.6737 16.6735 35.9554 16.96C36.2371 17.2416 36.4567 17.5901 36.6142 18.0055C36.7718 18.4161 36.8506 18.8863 36.8506 19.4163C36.8506 19.55 36.8434 19.6621 36.8291 19.7529C36.8195 19.8388 36.7981 19.908 36.7646 19.9605C36.736 20.0083 36.6954 20.0441 36.6429 20.068C36.5904 20.087 36.5235 20.0966 36.4424 20.0966H31.9021C31.9546 20.8509 32.1575 21.4047 32.5108 21.758C32.8641 22.1113 33.332 22.288 33.9144 22.288C34.2009 22.288 34.4468 22.2545 34.6521 22.1877C34.8621 22.1209 35.0435 22.0469 35.1963 21.9657C35.3539 21.8845 35.4899 21.8105 35.6045 21.7437C35.7239 21.6769 35.8384 21.6434 35.9482 21.6434C36.0199 21.6434 36.0819 21.6578 36.1344 21.6864C36.187 21.715 36.2323 21.7556 36.2705 21.8081L36.7861 22.4527C36.5904 22.6818 36.3708 22.8752 36.1273 23.0327C35.8838 23.1855 35.6284 23.3096 35.361 23.4051C35.0984 23.4958 34.8287 23.5603 34.5518 23.5985C34.2797 23.6367 34.0147 23.6558 33.7569 23.6558C33.2461 23.6558 32.771 23.5722 32.3318 23.4051C31.8926 23.2332 31.5106 22.9826 31.186 22.6532C30.8613 22.319 30.6059 21.9084 30.4197 21.4214C30.2335 20.9297 30.1404 20.3616 30.1404 19.717C30.1404 19.2158 30.2216 18.7455 30.3839 18.3063C30.5462 17.8623 30.7778 17.478 31.0786 17.1533C31.3841 16.8239 31.7541 16.5637 32.1886 16.3727C32.6278 16.1818 33.1219 16.0863 33.671 16.0863ZM33.7068 17.3538C33.1911 17.3538 32.7877 17.4994 32.4965 17.7907C32.2053 18.0819 32.0191 18.4949 31.9379 19.0296H35.2608C35.2608 18.8004 35.2297 18.5856 35.1677 18.385C35.1056 18.1798 35.0101 18.0007 34.8812 17.848C34.7523 17.6952 34.59 17.5758 34.3942 17.4899C34.1985 17.3992 33.9693 17.3538 33.7068 17.3538ZM40.1688 16.2009V23.5483H38.4V16.2009H40.1688ZM40.4338 14.0596C40.4338 14.2124 40.4028 14.3556 40.3407 14.4893C40.2786 14.623 40.1951 14.74 40.09 14.8402C39.9898 14.9405 39.8704 15.0216 39.732 15.0837C39.5935 15.141 39.4455 15.1696 39.288 15.1696C39.1352 15.1696 38.9896 15.141 38.8511 15.0837C38.7175 15.0216 38.6005 14.9405 38.5002 14.8402C38.4 14.74 38.3188 14.623 38.2568 14.4893C38.1995 14.3556 38.1708 14.2124 38.1708 14.0596C38.1708 13.9021 38.1995 13.7541 38.2568 13.6156C38.3188 13.4772 38.4 13.3578 38.5002 13.2576C38.6005 13.1573 38.7175 13.0785 38.8511 13.0212C38.9896 12.9592 39.1352 12.9281 39.288 12.9281C39.4455 12.9281 39.5935 12.9592 39.732 13.0212C39.8704 13.0785 39.9898 13.1573 40.09 13.2576C40.1951 13.3578 40.2786 13.4772 40.3407 13.6156C40.4028 13.7541 40.4338 13.9021 40.4338 14.0596ZM44.5871 23.6629C43.9521 23.6629 43.4628 23.4839 43.119 23.1258C42.7753 22.763 42.6034 22.2641 42.6034 21.6291V17.5257H41.8587C41.7632 17.5257 41.6796 17.4947 41.608 17.4326C41.5412 17.3705 41.5078 17.2774 41.5078 17.1533V16.4515L42.6894 16.2581L43.0618 14.253C43.0809 14.1575 43.1238 14.0835 43.1907 14.031C43.2623 13.9785 43.3506 13.9522 43.4556 13.9522H44.3723V16.2653H46.3058V17.5257H44.3723V21.5074C44.3723 21.7365 44.4296 21.9156 44.5441 22.0445C44.6587 22.1734 44.8115 22.2378 45.0025 22.2378C45.1123 22.2378 45.203 22.2259 45.2746 22.202C45.351 22.1734 45.4154 22.1447 45.468 22.1161C45.5252 22.0874 45.5754 22.0612 45.6183 22.0373C45.6613 22.0087 45.7043 21.9943 45.7472 21.9943C45.7998 21.9943 45.8427 22.0087 45.8761 22.0373C45.9096 22.0612 45.9454 22.0994 45.9836 22.1519L46.5135 23.0112C46.2557 23.2261 45.9597 23.3884 45.6255 23.4982C45.2913 23.608 44.9452 23.6629 44.5871 23.6629ZM53.4702 23.5483H52.6753C52.5082 23.5483 52.377 23.5245 52.2815 23.4767C52.186 23.4242 52.1144 23.3216 52.0666 23.1688L51.9091 22.646C51.7229 22.8131 51.5391 22.9611 51.3577 23.09C51.181 23.2141 50.9972 23.3192 50.8062 23.4051C50.6153 23.491 50.4124 23.5555 50.1975 23.5985C49.9827 23.6414 49.744 23.6629 49.4814 23.6629C49.1711 23.6629 48.8846 23.6223 48.6221 23.5412C48.3595 23.4552 48.1327 23.3287 47.9417 23.1616C47.7555 22.9945 47.6099 22.7869 47.5049 22.5386C47.3999 22.2903 47.3473 22.0015 47.3473 21.6721C47.3473 21.3952 47.419 21.123 47.5622 20.8557C47.7102 20.5836 47.9537 20.3401 48.2926 20.1252C48.6316 19.9056 49.0828 19.7242 49.6461 19.581C50.2095 19.4378 50.9089 19.3566 51.7444 19.3375V18.9078C51.7444 18.4161 51.6393 18.0532 51.4293 17.8193C51.224 17.5806 50.9232 17.4612 50.527 17.4612C50.2405 17.4612 50.0018 17.4947 49.8108 17.5615C49.6199 17.6283 49.4528 17.7047 49.3095 17.7907C49.1711 17.8718 49.0422 17.9458 48.9228 18.0127C48.8035 18.0795 48.6722 18.1129 48.529 18.1129C48.4096 18.1129 48.307 18.0819 48.221 18.0198C48.1351 17.9578 48.0659 17.8814 48.0133 17.7907L47.6911 17.2249C48.5361 16.4515 49.5554 16.0648 50.749 16.0648C51.1786 16.0648 51.5606 16.1364 51.8948 16.2796C52.2337 16.4181 52.5202 16.6138 52.7541 16.8669C52.9881 17.1151 53.1647 17.4135 53.2841 17.762C53.4082 18.1105 53.4702 18.4925 53.4702 18.9078V23.5483ZM50.0328 22.4455C50.2142 22.4455 50.3813 22.4288 50.5341 22.3954C50.6869 22.362 50.8301 22.3118 50.9638 22.245C51.1022 22.1781 51.2335 22.097 51.3577 22.0015C51.4866 21.9012 51.6155 21.7843 51.7444 21.6506V20.4117C51.2288 20.4356 50.7967 20.4809 50.4482 20.5478C50.1044 20.6098 49.8275 20.691 49.6175 20.7912C49.4074 20.8915 49.257 21.0085 49.1663 21.1421C49.0804 21.2758 49.0374 21.4214 49.0374 21.579C49.0374 21.8893 49.1281 22.1113 49.3095 22.245C49.4957 22.3787 49.7368 22.4455 50.0328 22.4455ZM55.2095 23.5483V16.2009H56.2479C56.4293 16.2009 56.5559 16.2343 56.6275 16.3011C56.6991 16.368 56.7468 16.4825 56.7707 16.6449L56.8781 17.5329C57.1407 17.0793 57.4486 16.7212 57.8019 16.4587C58.1552 16.1961 58.5515 16.0648 58.9907 16.0648C59.3535 16.0648 59.6543 16.1483 59.893 16.3154L59.6639 17.6403C59.6495 17.7262 59.6185 17.7883 59.5708 17.8265C59.523 17.8599 59.4586 17.8766 59.3774 17.8766C59.3058 17.8766 59.2079 17.8599 59.0838 17.8265C58.9597 17.793 58.795 17.7763 58.5897 17.7763C58.2221 17.7763 57.907 17.879 57.6444 18.0843C57.3818 18.2848 57.1598 18.5808 56.9784 18.9723V23.5483H55.2095Z" fill="white"/>
                        </Svg>
                    </View>

                <View>

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
                        isChecked={false}
                        unCheckedImage={<Icon2 name='questioncircle' size={28} color='#D2D2D2' />}
                        checkedImage={<Icon2 name='questioncircle' size={28} color='#6578B3'/>}
                    />  
                </View>

                <View style={{flex: 1}}>
                    <Checkbox 
                        style={styles.icon}
                        onClick={() => navigation.navigate('PainelControlo')} 
                        isChecked={true}
                        unCheckedImage={<Icon1 name='equalizer' size={30} color='#D2D2D2' />}
                        checkedImage={<Icon1 name='equalizer' size={30} color='#6578B3'/>}
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
        marginBottom: '5%',
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