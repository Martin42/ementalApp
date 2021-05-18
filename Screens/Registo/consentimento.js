import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from "react-native";


function Consentimento(){
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Hello</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      width: '100%',
  
    },

});

export default Consentimento;