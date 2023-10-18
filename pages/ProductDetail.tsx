import {useState, useEffect} from 'react'
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Platform, StatusBar, TouchableOpacity } from 'react-native';
import BackBtn from '../components/BackBtn';
import {useRoute, useNavigation} from '@react-navigation/native'
import { SingleProduct } from '../models/ProductModel';
import { singleProduct } from '../api';
import { SliderBox } from "react-native-image-slider-box";
import { AntDesign } from '@expo/vector-icons';

export default function ProductDetail() {

  const [isLike, setIsLike] = useState(false)
  const [proItem, setProItem] = useState<SingleProduct>()
  const navigation = useNavigation()
  const route = useRoute()

  useEffect(() => {
    const itemObj = route.params.item
    if (itemObj) {
        const item = itemObj as SingleProduct
        singleProduct(item.id).then(res => {
          setProItem(res.data)
        })
    } else {
      navigation.goBack()
    }
  },[])

  const fncLike = () => {
    const status = !isLike
    setIsLike(status)
    console.log(status)
  }
  
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BackBtn iconColor='#fc5a03' />
        { proItem && 
          <View style={{marginTop: 30}}>
            <Text style={styles.title}>{proItem.title}</Text>
            <SliderBox 
              images={proItem.images} 
              sliderBoxHeight={300}
              autoplay
            />
            <Text>{proItem.price}</Text>
            <Text>{proItem.category}</Text>
            <Text>{proItem.description}</Text>
            <View style={{alignItems: 'center', marginTop: 10,}}>
              <TouchableOpacity onPress={fncLike}>
                <AntDesign name={isLike === true ? "heart" : "hearto"} size={35} color={isLike === true ? "red" : "black"} />
              </TouchableOpacity>
            </View>
          </View>
        }
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
  },
  title: {
    fontSize: 20,
    fontFamily: 'Arial',
    textAlign: 'center',
  }
});