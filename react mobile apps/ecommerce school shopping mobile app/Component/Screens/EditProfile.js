
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




export default function EditProfile({ navigation }) {
    const [Email, setEmailinput] = React.useState('');
    const [FullName, setFullNameinput] = React.useState('');
    const [Phone, setPhoneinput] = React.useState(0);
    const [Password, setPasswordinput] = React.useState('');
    const [Confirm, setConfirminput] = React.useState('');
    const { globalUser,setGlobalUser} = React.useContext(Appcontext);

    useEffect(()=>{ console.log(globalUser.Full_Name)},[])
    function EdituserApi(RegObject) {

        console.log(RegObject.Phone);
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({  password: RegObject.Password, PHONE: RegObject.Phone, FULLNAME: RegObject.Full_Name,User_ID:globalUser.User_ID })

        }
       fetch(APIBASE() + "/edituser", options).then((respond)=>respond.json()).then(
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
    const Validate = () => {

        if (FullName == '') {
            alert("Input Name not change");
            return false;
        }  else if(Phone== ''){
            alert("Input Phone");
            return false;
        }else if(Password!=Confirm){
            alert("Miss Match Password");
            return false;
        }else{
            return true;
        }
    }
  
    return (

        <View style={styles.overlayBackground}>

            <View><Text style={styles.titlep}>Edit Profile</Text></View>
          
            <View style={styles.inputcontroll}>

         
                <View>

                    <TextInput style={styles.inputView} placeholder={globalUser.Full_Name} onChangeText={(text) => { setFullNameinput(text)  }} />
                </View>

                
                <TextInput style={styles.inputView} placeholder={(globalUser.Phone).toString()}  step='1' type='number' min='0' max='10' onChangeText={(text) => { setPhoneinput(text) }} />
                <TextInput secureTextEntry={true} style={styles.inputView} placeholder="Password ******" onChangeText={(text) => { setPasswordinput(text) }} />
                <TextInput secureTextEntry={true} style={styles.inputView} placeholder="Confirm ******" onChangeText={(text) => { setConfirminput(text) }} />
            </View>
           


   
            <View>
                <TouchableOpacity style={styles.gobtn} onPress={() => { if (Validate() == true) { 
               
               EdituserApi({Password:Password,Phone:Phone,Full_Name:FullName})
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
