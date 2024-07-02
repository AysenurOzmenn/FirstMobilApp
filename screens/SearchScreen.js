import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ReasultsList from '../components/ReasultsList';


export default function SearchScreen() {
    const [searchApi, results] = useResults();
    console.log(results);

    const filterResultsByPrice = (price) =>{
        return results.filter((results)=>{
            return results.price === price
        })
    }

    return (
        <View>
            <SearchBar />
            <ReasultsList title='Cheap Restaurant' results={filterResultsByPrice('₺')}/>
            <ReasultsList title='Affordable  Restaurant' results={filterResultsByPrice('₺₺')}/>
            <ReasultsList title='Expensive Restaurant' results={filterResultsByPrice('₺₺₺')}/>
        </View>
    )
}

const styles = StyleSheet.create({})