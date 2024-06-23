
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image ,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Appcontext from '../AppProvider/Approvider';
import { SafeAreaView } from 'react-navigation';
import APIBASE from '../Module/APICONSTANT';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';




export default function EditAddress({ navigation }) {
    const [Address1, setAdrres1] = React.useState('');
    const [Address2, setAdrres2] = React.useState('');
    const [province, setProvince] = React.useState('');
    const [Phone, setPhoneinput] = React.useState(0);
    const [city, setcity] = React.useState('');
    const [location, setlocation] = React.useState('');
const APIKEY='AIzaSyAzQJWDRS19HCy140q1mDtyCepHOGmh2Fc';


    const { globalUser,setGlobalUser} = React.useContext(Appcontext);
    const {globalAddress,setAddress}=React.useState(null);

    useEffect(()=>{ console.log(globalUser.Full_Name)},[])
    function EdituserApi(RegObject) {

        console.log(RegObject.Phone);
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({  address1:RegObject.Add1, address2:RegObject.add2,province:RegObject.Province, city:RegObject.City,phone:RegObject.Phone,location:RegObject.Location,User_ID:RegObject.User_ID })

        }
       fetch("http://" + APIBASE() + ":3000/edituser", options).then((respond)=>respond.json()).then(
        (respond)=>{
          if(respond!=null)
          {
            
            setGlobalUser(respond[0]);
            setTimeout(()=>{navigation.navigate("DashBoard")},1000)
        

           
          }
       
        }
       );


        return true;
    }
   

    const GooglePlacesInput = () => {
      return (
        <GooglePlacesAutocomplete
        placeholder="Type a place"
        onPress={(data, details = null) => 
            
          
            console.log(data, details)}
        query={{key: APIKEY,components: 'country:us', language: 'it'}}
        fetchDetails={true}
        onFail={error => console.log(error)}
        onNotFound={() => console.log('no results')}
        styles={{
          container: {
            flex: 0,
          },
          description: {
            color: '#2980b9',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#3caf50',
          },
        }}
      />
      );
    };
    const Validate = () => {

        if (Address1 == '' && city=='' && province=='') {
            alert("Input Name not change");
            return false;
        }  else if(Phone== ''){
            alert("Input Phone");
            return false;
        }else if(Address2==''){
            alert("input");
            return false;
        }else{
            return true;
        }
    }
  
    return (

        <View style={styles.overlayBackground}>

            <View><Text style={styles.titlep}>Edit Address</Text></View>
          
            <View style={styles.inputcontroll}>
    
                <View>

                    <TextInput style={styles.inputView} placeholder={"Address 1 "+globalUser.Full_Name} onChangeText={(text) => { setAdrres1(text)  }} />
                    <TextInput style={styles.inputView} placeholder={"Address 2 "+globalUser.Full_Name} onChangeText={(text) => { setAdrres2(text)  }} />
                </View>

                <TextInput style={styles.inputView} placeholder={"Province "+globalUser.Full_Name} onChangeText={(text) => { setProvince(text)  }} />
                <TextInput style={styles.inputView} placeholder={"city "+globalUser.Full_Name} onChangeText={(text) => { setcity(text)  }} />
                <TextInput style={styles.inputView} placeholder={"Tell No "+(globalUser.Phone).toString()}  step='1' type='number' min='0' max='10' onChangeText={(text) => { setPhoneinput(text) }} />
                <TextInput style={styles.inputView} placeholder={"Zip code "} onChangeText={(text) => {  }} />

            </View>
     

   
            <View>
                <TouchableOpacity style={styles.gobtn} onPress={() => { if (Validate() == true) { 
               
              /*  EdituserApi({Add1:Address1, address2:Address2,province:province, city:city,phone:Phone,location:location,User_ID:globalUser.User_ID,}) */
             } }} >
                    <Text style={styles.textReg}>Save</Text>
                </TouchableOpacity>
            </View>



        </View>


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    but: {
        backgroundColor: '#53115b',
        flex: 1,
        height: 10,
        width: 220,

    },
    overlayBackground: {


        backgroundColor: "#ffff",
        flex: 1,
        justifyContent: "center"
    },
    titlep: {
        color: "#2980b9",
        marginTop: Dimensions.get('window').width * 0.18,
        fontSize: 30,
        marginLeft: Dimensions.get('window').width * 0.18,
        fontWeight: "bold"
    },

    inputView: {

        width: Dimensions.get('window').width * 0.68,

        borderRadius: 1,
        height: 55,
        borderColor: "#2980b9",
        color: "#2980b9",
        borderWidth: 1,

        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        marginLeft: 15,
        justifyContent: "center",
        paddingLeft: 40,

    },
    inputcontroll: {
        marginTop: 40,
        marginLeft: 60,
    },
    gobtn: {
        height: Dimensions.get('window').height * 0.09,
        width: Dimensions.get('window').width * 0.4,

        marginTop:  Dimensions.get('window').height * 0.018,
        borderRadius: 1,
        marginLeft: Dimensions.get('window').width * 0.3,
        backgroundColor: "#2980b9",
    },
    textReg: {
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        marginTop:Dimensions.get('window').height * 0.018,
        marginLeft: Dimensions.get('window').width * 0.11,
        fontSize: 30,
       
        color: "#fff",
        fontWeight: "bold"
    },
    fortgottext: {
        color: "#2980b9",
        fontSize: 10,
    },
    forgetpass: {
        marginLeft: Dimensions.get('window').width * 0.2,
        marginTop: Dimensions.get('window').height * 0.018,
    },
    imagebackstyle: {

        width: Dimensions.get('window').width * 0.018,
        height: Dimensions.get('window').height * 0.018,

    },
    imagebackcontrol: {
        marginLeft: Dimensions.get('window').width * 0.018,
        marginTop: Dimensions.get('window').height * 0.018,

    }
});
