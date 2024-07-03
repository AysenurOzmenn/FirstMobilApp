import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ReasultsList from '../components/ReasultsList';


export default function SearchScreen() {
    const [searchApi, results, errorMessage] = useResults();
    const [term, setTerm] = useState('');
    //console.log(results);

    const filterResultsByPrice = (price) => {
        return results.filter((results) => {
            return results.price === price
        })
    }

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
            {errorMessage ? <Text> {errorMessage} </Text> : null}
            {results.length == 0 ? null : (
            <>
                <ReasultsList title='Cheap Restaurant' results={filterResultsByPrice('₺')} />
                <ReasultsList title='Affordable  Restaurant' results={filterResultsByPrice('₺₺')} />
                <ReasultsList title='Expensive Restaurant' results={filterResultsByPrice('₺₺₺')} />
            </>)}

        </View>
    )
}

const styles = StyleSheet.create({})