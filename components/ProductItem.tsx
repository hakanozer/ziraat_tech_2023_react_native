import { Text, StyleSheet, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import { SingleProduct } from '../models/ProductModel';
import { useNavigation } from '@react-navigation/native'

const deviceWidth = Dimensions.get('window').width
const imageWidth = 100

export default function ProductItem( prop: {item: SingleProduct}  ) {

  const navigation = useNavigation()

  return (
  <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', {item: prop.item}) }>
      <View style={rowStyles.mainView}>
        <Image style={rowStyles.imageThumb} source={{uri: prop.item.thumbnail}} />
        <View style={rowStyles.info}>
          <Text style={rowStyles.title}>{prop.item.title}</Text>
          <Text style={[rowStyles.title, { textAlign: 'right', fontSize: 16, color: '#7f8280' }]}>{prop.item.category}</Text>
          <Text style={[rowStyles.title, { textAlign: 'right', fontSize: 18, color: '#f2741b' }]}>{prop.item.price}₺</Text>
        </View>
      </View> 
      <View style={rowStyles.viewLine}></View>
    </TouchableOpacity>
  )
}

const rowStyles = StyleSheet.create({ 
  mainView: {
    flexDirection: 'row',
  },
  imageThumb: {
    width: imageWidth,
    height: imageWidth
  },
  info: {
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    fontSize: 18,
    textAlign: 'left',
    width: deviceWidth - (imageWidth + 25),
  },
  viewLine: {
    height: 0.5,
    backgroundColor: '#b0afae',
    marginBottom: 10,
    marginTop: 10,
  }
});