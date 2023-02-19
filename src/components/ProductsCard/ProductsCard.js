import React from "react";
import {View, Text, Image} from 'react-native';
import styles from './ProductsCard.style'

const ProductsCard = ({products}) => {
    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
            <Image style={styles.image} source={{uri: products.imgURL}}></Image>
            <Text style={styles.title}>{products.title}</Text>
            <Text style={styles.price}>{products.price}</Text>
            {!products.inStock && <Text style={styles.notInStock}>STOKTA YOK</Text>}
            </View>
        </View>
    )
}

export default ProductsCard;