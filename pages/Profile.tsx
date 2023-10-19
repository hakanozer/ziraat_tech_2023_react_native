import { Text, SafeAreaView, StyleSheet, View, ScrollView, Platform, StatusBar } from 'react-native';
import {useSelector} from 'react-redux'
import { StateType } from '../useRedux/Store';

export default function Profile() {

    // Redux Get Data
  const likesData = useSelector( (obj: StateType) => obj.LikesReducer )
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={{fontSize: 20, textAlign: 'center'}}> Like: {likesData.length}</Text>
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