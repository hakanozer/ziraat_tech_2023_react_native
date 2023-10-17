import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function BackBtn () {

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{top: 0, right: 30, bottom: 30, left: 0}} >
      <View style={{position: 'absolute', width: 30, left: 0, top: 0, }}>
      <AntDesign name="left" size={28} color="black" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})