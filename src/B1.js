import { View, Text, StyleSheet} from "react-native"

const B1 = ()=>{
    return(
        <View style={styles.MyText}>
            <Text style={styles.MyColor}>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    MyText: {
        width: 200,
        height: 200,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
            
    },
    MyColor: {
        color: "aqua",
        fontSize: 40
    }
  });
export default B1