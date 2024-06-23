
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import Appcontext from '../AppProvider/Approvider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useReducer } from 'react';



import { AuthContextProvider } from '../AppProvider/context';
import APIBASE from '../Module/APICONSTANT';

function LOGINSCREEN({ navigation }) {

    const [dell, setsell] = React.useState(false);
    const [emailinput, setemailinput] = React.useState('');
    const [passwordinput, setpasswordinput] = React.useState('');
    const [LOGINAUTH, SETLOGINAUTH] = React.useState(false);
    const { LOGINUSER, globalState, setGlobalUser,setUserName, USERID,SETUSERID,Result, setResult, LoginDeter, isLoading, setIsLoading, setLoginDeter, increaset, no, CompanyRegistered, GetStorage, Storage } = React.useContext(Appcontext);

    const { signIn } = React.useContext(AuthContextProvider);
    useEffect(() => { setIsLoading(false); 
        }, [Result]);

    function LoginAuthentication(Objet) {

        setResult(false)
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ Email: Objet.Email, Password: Objet.Password })

        }
        fetch( APIBASE() + "/Login", options).then((respond) => respond.json()).then((resp) => {
            if (resp[0] != null) {


                setResult(true);



                setUserName(resp[0].Full_Name);
                SETUSERID(resp[0].User_ID);

                setGlobalUser(resp[0]);
                console.log("Login Sucessfull " + resp[0].Email);

                console.log(resp[0].Full_Name);










            } else {

                setResult(false);



            }




        }).catch((err) => {
            console.log(err)


        });
        console.log(Result);
        return Result;

    }

    const checkvalid = () => {
        if (emailinput == '' && passwordinput == '') {
            alert("Please enter email or password");
            return false;
        } else if (emailinput == '' || passwordinput == '') {
            alert("Missing Input");
            return false;
        } else {
            return true;
        }

    };


    return (

        <View style={styles.overlayBackground}>



            <View style={styles.inputcontroll}>
                <View style={styles.controlalignment}>
                    <Icon name="mail-outline" color="#2980b9" size={27} style={styles.iconin} />
                    <TextInput style={styles.inputView} keyboardType="default" placeholder="Email" onChangeText={(text) => { setemailinput(text) }} />

                </View>
                <View style={styles.controlalignment}>
                    <Icon name="lock-outline" color="#2980b9" size={27} style={styles.iconin} />
                    <TextInput style={styles.inputView} placeholder="Password" keyboardType="default" secureTextEntry={true} onChangeText={(text) => { setpasswordinput(text) }} />

                </View>

            </View>

            <View>
                <TouchableOpacity style={styles.gobtn} onPress={() => {





                    if (checkvalid() == true) {
                        setIsLoading(!isLoading);
                       

                        if(LoginAuthentication({ Email: emailinput, Password: passwordinput })==true) {
                            navigation.navigate("DashBoard")
                           
                            

                    


                    } else {

                        setTimeout(() => { setIsLoading(false); }, 6000);
                    }



                    }


                }}>


                    {isLoading ? (<ActivityIndicator animating={isLoading} size={"large"} color={"white"} />)
                        :
                        (<Text style={styles.textGo}>Go on {no}</Text>)
                    }

                </TouchableOpacity>
            </View>
            <View style={styles.forgetpass}>
                <TouchableOpacity onPress={() => {  navigation.navigate("login"); }}><Text style={styles.fortgottext} >Forgot the Password?</Text></TouchableOpacity>
            </View>
            <View style={styles.forgetpass}>
                <TouchableOpacity onPress={() => { navigation.navigate("Register") }}><Text style={styles.fortgottext} >I dont have Account</Text></TouchableOpacity>
            </View>


        </View>


    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242443',
        alignItems: 'center',
        justifyContent: 'center',
    },
    but: {
        backgroundColor: '#53115b',
        flex: 1,
        height: Dimensions.get('window').height,
        width: 220,

    },
    overlayBackground: {


        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center"
    },
    titlep: {
        color: "#be0002",
        marginTop: 40,
        fontSize: 30,
        marginLeft: 50,
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
    iconin: {
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: Dimensions.get('window').width * 0.04,
        position: 'absolute'
    },
    inputcontroll: {
        marginTop: 70,
        marginLeft: 50,
    },
    gobtn: {
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.8,
        marginTop: 60,
        borderRadius: 42,
        marginLeft: Dimensions.get('window').width * 0.11,
        backgroundColor: "#2980b9",
    },
    textGo: {
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        marginLeft: "36%",
        fontSize: 30,
  
        color: "#fff",
        fontWeight: "bold"
    },
    fortgottext: {
        color: "#2980b9",
        fontSize: 10,
    },
    forgetpass: {
        marginLeft: 70,
        marginTop: 20,
    },
    imagebackstyle: {

        width: 180,
        height: 70,

    },
    imagebackcontrol: {
        marginLeft: 100,
        marginTop: 40,

    }, controlalignment: {
        flexDirection: 'row',
        marginTop: 30
    }
});
export default LOGINSCREEN;