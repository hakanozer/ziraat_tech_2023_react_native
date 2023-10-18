import {useState, useEffect} from 'react'
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Platform, StatusBar, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import {allProduct} from '../api'
import Toast from 'react-native-toast-message';
import { SingleProduct } from '../models/ProductModel';
import ProductItem from '../components/ProductItem';

export default function Products() {

  const [arr, setArr] = useState<SingleProduct[]>([])

  useEffect(() => {
    allProduct().then(res => {
      const dt = res.data
      if (dt) {
        setArr(dt.products)
      }
    }).catch(err => {
      Toast.show({
        type: 'error',
        text1: err.message
      })
    })
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <FlatList 
            data={arr}
            renderItem={ ({item}) => <ProductItem item={item} /> }
            keyExtractor={(item, index) => index.toString() }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
  },
  scrollView: {
    padding: 8,
  }
});





