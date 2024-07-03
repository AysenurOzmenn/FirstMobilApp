import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchBar({term , onTermChange , onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <Icon style={styles.iconStyle} name="search" size={20} color="#900" />
      <TextInput style={styles.inputStyle} placeholder='Ara' autoCorrect={false} value={term}
      onChangeText={onTermChange} onEndEditing={onTermSubmit}/>
    </View>
  )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: 'lightgray',
        flexDirection : 'row',
        margin:10,
        height:50,
        alignItems:'center',
        borderRadius: 20,
    },
    iconStyle:{
        marginHorizontal: 15,
    },
    inputStyle:{
        flex:1,
        fontSize: 18,
    },

});