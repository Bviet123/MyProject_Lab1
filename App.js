import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import MyStack from './Router/MyStack';
import ProfileScreen from './Screens/ProfileSceens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyDrawer from './Router/MyDrawer';

const App= ()=> {
  return(
    //B1 :
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>

  )
}
export default App

