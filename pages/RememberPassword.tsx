import { Text, SafeAreaView, StyleSheet, View, ScrollView, Platform, StatusBar } from 'react-native';
import BackBtn from '../components/BackBtn';

export default function RememberPassword() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <BackBtn />
        <View>
          <Text style={{textAlign: 'center'}}>RememberPassword</Text>
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