import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileSceens";
import { Button, Image } from "react-native";
import { Text } from "react-native-paper";


const Stack = createStackNavigator()
const LogoTitle = ()=>{
    return(
        <Image
            style={{width: 50, height: 50}}
            source={require('../assets/icon.png')} 
            />
    )
}
const MyStack = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerLeft: ()=>(
                    <Text>Home</Text>,
                    <LogoTitle/>
                ),
                headerRight: ()=>(
                    <Button
                        onPress= {() =>alert('This is a Button')}
                        title= "Click me"
                        color= "#fff"
                    />
                ),
            }}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
        </Stack.Navigator>
    )
}
export default MyStack;