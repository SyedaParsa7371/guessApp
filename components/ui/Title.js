import { Platform, StyleSheet, Text } from "react-native";
import Fonts from "../../constants/fonts";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}
const styles=StyleSheet.create({
    title:{
        fontSize:25,
        // fontWeight:'bold',
        fontFamily:Fonts.roboto,
        color:"#0e363a",
        textAlign:'center',
        //borderWidth:Platform.OS==='android' ? 2:0,
        borderWidth:Platform.select({ios:0, android:2}),
        borderColor:"#052022",
        padding:14,
        maxWidth:'80%',
        width:300,
    }
})
export default Title;