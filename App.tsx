import {useState} from 'react'
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Platform, StatusBar, TextInput, TouchableOpacity, GestureResponderEvent, Image } from 'react-native';
import {appTitle, arr, cities} from './util'

export default function App() {

  const [username, setUserName ] = useState('')
  const [password, setPassword ] = useState('')


  const fncLogin = (evt: GestureResponderEvent ) => {
    if ( username === '' || password === '' ) {
      console.log('Inputs Empty!')
    }else {
      console.log("Form Send..")
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 30 }}>
          <Image style={{ width: 90, height: 90 }} resizeMode='contain' source={  require('./assets/logo.png') } />
        </View>
        <View>
          <Text style={styles.title}>User Login</Text>
        </View>
        <TextInput onChangeText={ (txt) => setUserName(txt) } autoCapitalize='none' placeholder='Username' style={styles.txtInput} />
        <TextInput onChangeText={ (txt) => setPassword(txt) } placeholder='Password' style={styles.txtInput} secureTextEntry />
        <TouchableOpacity onPress={fncLogin} style={{ width: 100, }}>
          <View style={styles.btnView} >
            <Text style={styles.btnText}>Login</Text>
          </View>
        </TouchableOpacity>


        <Text>{appTitle}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', }}>
            { arr.map((item, index) => 
              <View style={{width: 100, height: 100, backgroundColor: 'red', margin: 10, }} key={index}>
                <Text style={{fontSize: 16, color: '#ffffff', padding: 40, }}>{item}</Text>
              </View>
            )}
          </View>
        </ScrollView>

        { cities.map((item, index) =>
          <View style={{flexDirection: 'row'}}>
            <Text>{item.title}</Text><Text> - {item.count}</Text>
          </View>
        )}



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
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Arial',
  },
  txtInput: {
    borderWidth: 1,
    borderColor: '#a3a3a3',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Arial',
    fontSize: 18,
    color: '#2363fa',
  },
  btnView: {
    backgroundColor: '#2363fa',
    width: 100,
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    color: '#ffffff',
    fontFamily: 'Arial',
    textAlign: 'center',
    fontSize: 18,
  }
});
