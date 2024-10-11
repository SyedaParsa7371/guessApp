import { Dimensions, StyleSheet, Text, View } from "react-native";
import  Colors from '../../constants/colors';

function NumberContainer({children}) {
    return(
        <View style={styles.container}>
           <Text style={styles.numberText}>{children}</Text>
       </View>
    )
   }
    
export default NumberContainer;

const deviceWidth= Dimensions.get('window').width

const styles=StyleSheet.create({
    container:{
        borderWidth:5,
        borderColor:Colors.primary500,
        padding:deviceWidth<380 ? 12:24,
        margin:deviceWidth<380 ? 12:24,
        alignItems:'center',
        justifyContent:'center',
    },
    numberText:{
        color:Colors.primary500,
        fontSize:deviceWidth<380 ? 28:30,
        fontWeight:"bold"
    },
    
})