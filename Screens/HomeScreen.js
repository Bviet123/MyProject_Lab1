import { Text, View, Button } from "react-native-web"

const HomeScreen = ({navigation})=>{
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>Home Screen</Text>
          <Button title="Go to Profile" onPress={() => navigation.push('Profile')} />
        </View>
    );
}
export default HomeScreen;