import AsyncStorage from '@react-native-async-storage/async-storage';
import { SingleProduct } from '../models/ProductModel';
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

export const productSetData = async (arr: SingleProduct[]) => {
  const stArr = JSON.stringify(arr)
  await AsyncStorage.setItem('@product', stArr)
}


export const productGetData = async () => {
  try {
    const stArr = await AsyncStorage.getItem('@product')
    const productArr = JSON.parse(stArr) as SingleProduct[]
    return productArr
  }catch(err) {
    return null
  }
}


