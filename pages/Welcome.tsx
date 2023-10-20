import {useState, useEffect} from 'react'
import { Text, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

  const navigation = useNavigation()
  const [index, setIndex] = useState(0)
  const [status, setStatus] = useState(false)


  useEffect(() => {

      var timer:any = null
      timer = setTimeout(() => {
        if (status === true) {
          clearTimeout(timer)
        }else {
          //navigation.replace('LoginStack')
        }
      }, 5000 )

    /*
    setInterval(() => {
        console.log('1 sec.');
    }, 1000);
    */

  }, [status])
  
  return (
    <>
      <StatusBar hidden={true} />
      <View style={{ position: 'absolute', bottom: 40, alignSelf: 'center'  }}>
        <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: '#21a1fc' }}>{index + 1}</Text>
      </View>
      <Swiper 
        style={styles.swipeContainer}
        showsButtons={true}
        onIndexChanged={(index) => {setIndex(index), setStatus(true)}}
        //onIndexChanged={(index) =>  console.log(index)  }
        loadMinimal={true}
        loadMinimalSize={3}
      >
        <View style={styles.box}>
          <AntDesign name="home" size={140} color="#21a1fc" />
          <Text style={{fontSize: 22, color: '#21a1fc', textAlign: 'center', marginTop: 10,}}>Home</Text>
        </View>
        <View style={styles.box}>
          <Fontisto name="shopping-basket" size={140} color="#21a1fc" />
          <Text style={{fontSize: 22, color: '#21a1fc', textAlign: 'center', marginTop: 10,}}>Basket</Text>
        </View>
        <View style={styles.box}>
          <AntDesign name="hearto" size={140} color="#21a1fc" />
          <Text style={{fontSize: 22, color: '#21a1fc', textAlign: 'center', marginTop: 10,}}>Likes</Text>
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => navigation.replace('LoginStack')}>
            <View style={{ backgroundColor: '#21a1fc', borderRadius: 10, padding: 10, }}>
              <Text style={{ color: '#ffffff', fontSize: 17,}}>Goto App</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Swiper>
    </>
  );

}

const styles = StyleSheet.create({
  swipeContainer : {

  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});