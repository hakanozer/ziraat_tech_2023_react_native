import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserModel } from '../models/UserModel';

export const userSetData = async (data: UserModel) => {
  const stData = JSON.stringify(data)
  await AsyncStorage.setItem('@user', stData)
}

export const userGetData = async () => {
  try{
    const stData = await AsyncStorage.getItem('@user')
    const userModel = JSON.parse(stData) as UserModel
    return userModel
  }catch(err) {
    return null
  }
}