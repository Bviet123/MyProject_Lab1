import { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native"

const B4 = ()=>{
    const [pressCount, setPressCount] = useState(0);
    return(
        <View style={styles.MyText}>
            <Text>You have press the button: {pressCount} time(s)</Text>
            <Button
                title={'Click'}
                onPress={() => setPressCount(pressCount + 1) }
            />
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
export default B4