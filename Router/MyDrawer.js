import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerNavigator from "../Screens/CustomDrawerNavigator";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileSceens";


const Drawer = createDrawerNavigator()

const MyDrawer = ()=>{
    return(
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props)=> <CustomDrawerNavigator {...props}/>}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Detail" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}
export default MyDrawer;