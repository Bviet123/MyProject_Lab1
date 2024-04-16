import { View, Text, StyleSheet} from "react-native"
import React from "react";

const B5 = ()=>{
    return(
        <View style={styles.container}>
            <Square text="square1"/>
            <Square text="square2" bgcolor="#4dc2c2"/>
            <Square text="square3" bgcolor="#ff637c"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'    
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });
const Square = ({text, bgcolor = "#7ce0f9"}) =>(
    <View style={[styles.box, {backgroundColor: bgcolor}]}>
        <Text>My Square</Text>
    </View>
);
export default B5