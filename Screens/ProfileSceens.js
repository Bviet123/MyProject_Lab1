import { Text, View, Button } from "react-native-web"


const ProfileScreen = ({ navigation })=>{
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>ProFile Screen</Text>
          <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}
export default ProfileScreen;