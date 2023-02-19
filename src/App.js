import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import ProductsCard from './components/ProductsCard';

import products_data from './data/products.json';

function App() {
    const [text, onChangeText] = React.useState('Ara...');
    const renderProducts = ({item}) => <ProductsCard products = {item}></ProductsCard>
    //const keyProducts = item => item.id.toString

    return (
        <SafeAreaView>
            <Text style={styles.headerText}>PATİKASTORE</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <FlatList 
                //keyExtractor={keyProducts}
                data={products_data} 
                renderItem={ renderProducts }
                numColumns= '2'
                ></FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eceff1',
    },
    headerText:{
        fontWeigth: 'bold',
        fontSize: 50,
        color: 'purple',
        //fontStyle: 'italic',
    },
    input: {
        height: 40,
        margin: 8.5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#eceff1',
        backgroundColor: '#eceff1',
        color: 'gray',
      },
})

export default App;