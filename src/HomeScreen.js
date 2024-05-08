import React, { useState } from 'react';
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
    const [entityText, setEntityText] = useState('');
    const [entities, setEntities] = useState([]);

    const OnclickButton = () => {
        navigation.navigate('Login');
    };
    const onAddButtonPress = () => {
        if (entityText && entityText.length > 0) {
            const newEntity = {
                id: Math.random().toString(), 
                text: entityText,
            };
            setEntities(prevEntities => [...prevEntities, newEntity]);
            setEntityText('');
            Keyboard.dismiss();
        }
    };

    const renderEntity = ({ item, index }) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {index + 1}. {item.text}
                </Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {entities.length > 0 && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Thêm hoạt động'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Thêm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={OnclickButton}>
                    <Text style={styles.buttonText}>Quay lại</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formContainer: {
        flexDirection: 'row',
        height: 80,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,

    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        flex: 1,
        marginRight: 5
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        paddingLeft: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    button2: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        paddingLeft: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    }
});
