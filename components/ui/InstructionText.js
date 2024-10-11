import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
function InstructionText({children, style}) {
   return(
    <Text style={[style,styles.headText]}>{children}</Text>

   ) 
}
export default InstructionText;


const styles= StyleSheet.create({
    headText:{
        fontSize:20,
        color:Colors.primary600,
        fontWeight:'bold'
    }, 
})