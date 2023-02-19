import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        margin: 8.5,
        borderRadius: 10,
    },
    inner_container: {
        padding: 10,
        width: Dimensions.get('window').width / 2.2,
    },
    image: {
        height: Dimensions.get('window').height / 4, 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10},
        margin: 10,
    title: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    price: {
        color:'gray',
        fontSize: 15,
        marginTop: 5,
    },
    notInStock: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },
})