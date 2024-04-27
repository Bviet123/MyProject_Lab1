import { Drawer } from "react-native-paper";


const CustomDrawerNavigator = ({navigation}) =>{
    return(
        <Drawer.Section style={{paddingTop: 40}}>
            <Drawer.Item
                label="Home"
                icon={"Home"}
                onPress={()=> navigation.navigate("Home") }
            />
            <Drawer.Item
                label="Detail"
                icon={"Detail"}
                onPress={()=> navigation.navigate("Detail")}
            />
        </Drawer.Section>
    );
}
export default CustomDrawerNavigator;