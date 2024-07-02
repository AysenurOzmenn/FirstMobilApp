// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import {name as appName} from './app.json';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SearchScreen from './screens/SearchScreen';


//  const Stack = createNativeStackNavigator();


 

// const App =() =>{
// return(
//     <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerTitle:'Restourant Application'}}>
//             <Stack.Screen name="Search" component={SearchScreen}/>
//         </Stack.Navigator>
//     </NavigationContainer>
// );
// };

// AppRegistry.registerComponent("restourant", () => App);


import { AppRegistry } from 'react-native';
import App from './App'; // Varsayılan olarak oluşturduğumuz App.js dosyasının yolu

// Uygulama başlangıç noktasını belirleme
AppRegistry.registerComponent('restourant', () => App);