import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

function GuessLogItem({roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.textItem}>#{roundNumber}</Text>
            <Text>Opponent's Guess:{guess}</Text>
        </View>
    )
}
export default GuessLogItem;

const styles=StyleSheet.create({
    listItem:{
        borderColor:Colors.primary700,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:Colors.primary300,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
    },
    textItem: {
        color: Colors.primary500,
        fontSize:20,
        fontWeight:'bold',
        fontFamily:Fonts.robotoBlackItalic,


    },
})