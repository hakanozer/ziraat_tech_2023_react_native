import {useState, useEffect} from 'react'
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Platform, StatusBar, TouchableOpacity, Image, Button } from 'react-native';
import {useSelector} from 'react-redux'
import { StateType } from '../useRedux/Store';
import { Hoshi } from 'react-native-textinput-effects';
import { userGetData } from '../utils/storage';
import { UserModel } from '../models/UserModel';
import MapView, {Marker, MarkerAnimated} from 'react-native-maps';
import Toast from 'react-native-toast-message'
import { Camera, CameraType } from 'expo-camera'
import * as ImagePicker from 'expo-image-picker'

export default function Profile() {

  const [cameraPermission, setCameraPermissin] = useState<any>(null)
  const [galleryPermission, setGalleryPermission] = useState<any>(null)

  const [camera, setCamera] = useState<any>(null)
  const [imageUri, setImageUri] = useState<any>(null)
  const [type, setType] = useState(CameraType.back)

  const permissionFnc = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync()
    setCameraPermissin(cameraPermission.status === 'granted')

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync()
    setGalleryPermission(imagePermission.status === 'granted')

    if ( cameraPermission.status !== 'granted' && imagePermission.statue !== 'granted' ) {
      Toast.show({
        type: 'error',
        text1: 'Permission Camera or Gallery Error!'
      })
    }
  }

  useEffect(() => {
    permissionFnc()
  },[])

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImageUri(data.uri)
    }
  }

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
      presentationStyle: ImagePicker.UIImagePickerPresentationStyle.AUTOMATIC
    })
    if (!result.canceled) {
      setImageUri(result.assets[0].uri)
    }
  }


    // Redux Get Data
  const likesData = useSelector( (obj: StateType) => obj.LikesReducer )

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState<UserModel>()
  useEffect(() => {
    userGetData().then(res => {
      if (res) {
        setUser(res)
        setFirstName(res.firstName)
        setLastName(res.lastName)
        setEmail(res.email)
      }
    })
  }, [])

  const update = () => {
    console.log(firstName, lastName, email)
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={{fontSize: 20, textAlign: 'center'}}> Like: {likesData.length}</Text>
          { user &&
          <>
            <View style={{alignItems: 'center', }}>
              <Camera
                style={{ flex: 1, aspectRatio: 1 }}
                ref={(ref) => setCamera(ref)}
                type={type}
                ratio={'1:1'}
               />
              <Button title='Picture' onPress={takePicture} />
              <Button title='Gallery' onPress={pickImage} />
              {imageUri && <Image source={{uri: imageUri}} style={{width: 200, height: 200}} />}
            </View>
            <Hoshi
              label={'FirstName'}
              borderColor={'#21a1fc'}
              borderHeight={1}
              inputPadding={16}
              backgroundColor={'#ffffff'}
              value={firstName}
              inputStyle={styles.inputStyle}
              onChangeText={(txt) => setFirstName(txt)}
            />
            <Hoshi
              label={'LastName'}
              borderColor={'#21a1fc'}
              borderHeight={1}
              inputPadding={16}
              backgroundColor={'#ffffff'}
              value={lastName}
              inputStyle={styles.inputStyle}
              onChangeText={(txt) => setLastName(txt)}
            />
            <Hoshi
              label={'Email'}
              borderColor={'#21a1fc'}
              borderHeight={1}
              inputPadding={16}
              backgroundColor={'#ffffff'}
              value={email}
              inputStyle={styles.inputStyle}
              onChangeText={(txt) => setEmail(txt)}
            />
            <TouchableOpacity onPress={ update }>
            <View style={{ width: 150, marginTop: 20, backgroundColor: '#21a1fc', borderRadius: 10, padding: 10, }}>
              <Text style={{ color: '#ffffff', fontSize: 17, textAlign: 'center'}}>Update</Text>
            </View>
          </TouchableOpacity>
          </>
          }
          <View style={{marginTop: 10}}>

            <MapView 
              style={{width: '100%', height: 300,}}
              initialRegion={{
                latitude: 41.0253632,
                longitude: 28.9731139,
                latitudeDelta: 0.0090,
                longitudeDelta: 0.0090
              }}
            >

          <Marker 
            coordinate={{latitude: 41.026071, longitude: 28.973828}}
            title='İşletme -1'
            description='İşletme -1 Detay'
            onPress={(evt) => Toast.show({
              type: 'success',
              text1: 'İşletme -1'
            }) }
          />
          <Marker 
            coordinate={{latitude: 41.025112, longitude: 28.974761}}
            title='İşletme -2'
            description='İşletme -2 Detay'
          />
            
          </MapView>


          </View>
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
  },
  inputStyle: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'black',
    fontWeight: 'normal',
  }
});