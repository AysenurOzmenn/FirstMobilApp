import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';


 const Stack = createNativeStackNavigator();




const App =() =>{
return(
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitle:'Restourant Application'}}>
            <Stack.Screen name="Search" component={SearchScreen}/>
            <Stack.Screen name="ResultsShow" component={ResultsShowScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);
};
export default App;

