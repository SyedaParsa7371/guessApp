import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function PrimaryButton({ children ,onPress}) {
        return ( 
            <View style={styles.buttonOuter}>
            <Pressable style={({pressed})=>pressed ?[styles.button,styles.pressed] :
            styles.button}
             onPress={onPress} 
             android_ripple={{color:Colors.primary600,borderRadius:50}}> 
                    <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
            </View>
        );
    
}

export default PrimaryButton;

const styles= StyleSheet.create({
    buttonOuter:{
        borderRadius:50,
        margin:5,
        overflow:'hidden'
    },
    button:{
        paddingHorizontal:16,
        padding:6,
        backgroundColor:Colors.primary500,
        elevation:10,
    },
    buttonText:{
        textAlign:'center',
        color:Colors.primary100,
    },
    pressed:{
        opacity:0.75
    }
})