import { Dimensions, Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../../components/ui/Title";
import Colors from "../../constants/colors";
import PrimaryButton from "../../components/ui/PrimaryButton";

function GameOver({roundsNumber, userNumber, onStartNewGame}) {
    const {width,height} = useWindowDimensions();
    let imageSize =300

    if (width<380) {
        imageSize=150
    }

    if (height<400) {
        imageSize=80
    }

    const imgeStyle={
        width:imageSize,
        height:imageSize,
        borderRadius:imageSize /2,
        
    }

    return(
        <ScrollView style={styles.screen}>

        <View style={styles.screenContainer}>
            <Title>GAME OVER</Title>
            <View style={[styles.imageContainer , imgeStyle]}>
            <Image style={styles.image} source={require('../../assets/images/success.png')}/>
            </View>
            <View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to guess the number
                     <Text style={styles.highlightText}>{userNumber}
                </Text>.</Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </View>
        </ScrollView>
    )
}

export default GameOver;

// const deviceWidth = Dimensions.get('window').width

const styles=StyleSheet.create({
    screen:{
        flex:1,
    },
    screenContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        // width:deviceWidth <380 ? 150:300,
        // height:deviceWidth <380 ? 150:300,
        // borderRadius:deviceWidth < 380 ? 75:150,
        borderWidth:5,
        borderColor:Colors.primary700,
        overflow:'hidden',
        margin:36,
    },
    image:{
        width:'100%',
        height:'100%',
    },
    summaryText:{
        color:Colors.primary600,
        fontSize:24,
        textAlign:'center',
        marginBottom:24
    },
    highlightText:{
        fontWeight:'bold',
    }
})