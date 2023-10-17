import { Text, SafeAreaView, StyleSheet, View, ScrollView, Platform, StatusBar } from 'react-native';

export default function Likes() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text>Likes</Text>
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