import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>

    )
}
export default Card;
const styles=StyleSheet.create({

    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary400,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 16,
        shadowColor: Colors.primaryblack,
        shadowOffset: { width: 8, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
})