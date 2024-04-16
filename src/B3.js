import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native"

const B3 = ()=>{
    return(
        <View style={styles.MyText}>
            <TouchableOpacity 
                onPress={() => alert("Success1")} 
                style={styles.MyButton}>
                <Text style={styles.MyText}>Click Me 1</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => alert("Success2")} 
                style={{...styles.MyButton, backgroundColor: "aqua"}}>
                <Text style={styles.MyText}>Click Me 2</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    MyText: {
        width: 200,
        height: 200,
        textAlign: 'center',
        fontSize: 20
    },
    MyButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
        backgroundColor: 'red',
        borderRadius: 40,
        margin: 30
    }
  });
export default B3