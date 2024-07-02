import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';


export default function ReasultsList({title,results}) {

    const navigation = useNavigation()

    // Prop'ların kontrol edilmesi
    if (!results || !title) {
      return null;
    }
  

    console.log(results);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      renderItem={({item})=>{
        return(
          <TouchableOpacity onPress={()=>navigation.navigate("ResultsShow",{id:item.id})}>
            <ResultDetail result={item}/>
          </TouchableOpacity>
        )
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 20,
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    marginLeft:15,
    marginBottom: 5,
  },
});
