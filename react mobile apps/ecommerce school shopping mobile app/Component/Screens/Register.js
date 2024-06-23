
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image ,Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Appcontext from '../AppProvider/Approvider';
import { SafeAreaView } from 'react-navigation';
import APIBASE from '../Module/APICONSTANT';




export default function Register({ navigation }) {
    const [Email, setEmailinput] = React.useState('');
    const [FullName, setFullNameinput] = React.useState('');
    const [Phone, setPhoneinput] = React.useState(0);
    const [Password, setPasswordinput] = React.useState('');
    const [Confirm, setConfirminput] = React.useState('');
    const { LOGINUSER} = React.useContext(Appcontext);
    function RegisterApi(RegObject) {

        console.log(RegObject.Phone);
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ Email: RegObject.Email.toString(), Password: RegObject.Password, Phone: RegObject.Phone, Full_Name: RegObject.Full_Name, Active: 1, Type: 'Customer', Dp: "nothing" })

        }
       fetch(APIBASE() + "/Register", options).then((respond)=>respond.text()).then(
        (respond)=>{
          if(respond=="Registered Succesfully")
          {
            

                navigation.navigate('login');
        

           
          }
       
        }
       );


        return true;
    }
    const Validate = () => {

        if (Password == '') {
            alert("Input Password");
            return false;
        } else if (Email == '' && FullName == '' && Phone == '' && Confirm == '') {
            alert("Missing Input");
            return false;
        } else if(Password!==Confirm){
            alert("Password Not matching");
        }else {
            return true;
        }
    }
  
    return (

        <View style={styles.overlayBackground}>

            <View><Text style={styles.titlep}>Register on Samson</Text></View>
          
            <View style={styles.inputcontroll}>
                <View>

                    <TextInput style={styles.inputView} placeholder="Full Name" onChangeText={(text) => { setFullNameinput(text) }} />
                </View>

                <TextInput style={styles.inputView} placeholder="Email" onChangeText={(text) => { setEmailinput(text) }} />
                <TextInput style={styles.inputView} placeholder="Phone" step='1' type='number' min='0' max='10' onChangeText={(text) => { setPhoneinput(text) }} />
                <TextInput style={styles.inputView} placeholder="Password"  secureTextEntry={true} onChangeText={(text) => { setPasswordinput(text) }} />
                <TextInput style={styles.inputView} placeholder="Confirm"  secureTextEntry={true} onChangeText={(text) => { setConfirminput(text) }} />
            </View>
            <View style={styles.forgetpass}>
                <TouchableOpacity onPress={() => { navigation.navigate("login") }}><Text style={styles.fortgottext}>Opps already have account</Text></TouchableOpacity>
            </View>


   
            <View>
                <TouchableOpacity style={styles.gobtn} onPress={() => { if (Validate() == true) { RegisterApi({ Full_Name: FullName, Email: Email, Password: Password, Phone: parseInt(Phone)
                 })
               

             } }} >
                    <Text style={styles.textReg}>Register</Text>
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
        color: "#686a6c",
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
