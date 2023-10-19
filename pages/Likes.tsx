import { Text, SafeAreaView, StyleSheet, View, ScrollView, Platform, StatusBar, FlatList } from 'react-native';
import { StateType } from '../useRedux/Store';
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from '../components/ProductItem';
import { SingleProduct } from '../models/ProductModel';
import { ILikeAction } from '../useRedux/LikesReducer';
import { LikesEnum } from '../useRedux/LikesEnum';
import { Ionicons } from '@expo/vector-icons';

export default function Likes() {

    // Redux Get Data
  const likesData = useSelector( (obj: StateType) => obj.LikesReducer )
  const dispatch = useDispatch()

  const deleteItem = (item: SingleProduct) => {
    const sendObj: ILikeAction = {
      type: LikesEnum.LIKE_REMOVE,
      payload: item
    }
    dispatch(sendObj)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          { likesData.length == 0 &&
            <View style={{alignItems: 'center', marginTop: 40,}}>
              <Ionicons name="heart-dislike-sharp" size={100} color="#aaadab" />
              <Text style={{fontSize: 18, color: '#aaadab', textAlign: 'center'}}>Likes Empty!</Text>
            </View>
          }
          {likesData.length > 0 && 
            <FlatList 
              data={likesData}
              renderItem={ ({item}) => <ProductItem item={item} fncDelete={deleteItem} /> }
              keyExtractor={(item, index) => index.toString() }
            />
          }
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