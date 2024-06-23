
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ActivityIndicator, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import Appcontext from '../AppProvider/Approvider';
import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect } from 'react';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'AsyncStorage';
import IconShop from './../../assets/image/ShoppingCart.png';
import status from './../../assets/image/status.png';
import balance from './../../assets/image/balance.png';
import account from './../../assets/image/account.png';
import logout from './../../assets/image/logout.png';
function DashBoard({ navigation }) {

    const [dell, setsell] = React.useState(false);
    const [emailinput, setemailinput] = React.useState('');
    const [passwordinput, setpasswordinput] = React.useState('');
    const { LoginUser, userName,setUserName, Result, setResult, LoginDeter, isLoading, setIsLoading, setLoginDeter, increaset, no, CompanyRegistered, GetStorage, Storage } = React.useContext(Appcontext);






    return (

        <View style={styles.container}>

            <View style={{
                backgroundColor: "#2980b9",
                width: Dimensions.get('window').width * 0.9,
                height: Dimensions.get('window').height * 0.002,
                marginLeft: Dimensions.get('window').width * 0.039,
                marginTop: Dimensions.get('window').height * 0.08
            }}>


            </View>
            <View style={styles.headerLeft}>


                <Image style={styles.userImage} source={require('./../../assets/image/account.png')} />
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <View style={{
                backgroundColor: "#2980b9",
                width: Dimensions.get('window').width * 0.9,
                height: Dimensions.get('window').height * 0.002,
                marginLeft: Dimensions.get('window').width * 0.039,
                marginTop: Dimensions.get('window').height * 0.01
            }}>


            </View>
            <View style={{ backgroundColor: "#fff", elevation: 2, borderRadius: 1, width: Dimensions.get('window').width * 0.99, marginLeft: 2, marginTop: Dimensions.get('window').height * 0.02, height: Dimensions.get('window').height * 0.72 }}>
                <View style={{   borderWidth: 0.9,
                            borderColor: "#2980b9", backgroundColor: "#fff", borderRadius: 1, width: Dimensions.get('window').width * 0.97, marginLeft: Dimensions.get('window').height * 0.005, marginTop: Dimensions.get('window').height * 0.005, height: Dimensions.get('window').height * 0.71 }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: Dimensions.get('window').height * 0.01, marginLeft: Dimensions.get('window').width * 0.08, flexWrap: 'wrap' }}>

                        <TouchableOpacity onPress={() => { navigation.navigate("School") }} style={{
                            width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height * 0.15,
                            backgroundColor: "#fff",
                            elevation: 5,
                            marginLeft: 2,
                            borderWidth: 0.5,
                            borderColor: "#2980b9",
                            marginTop: 10,
                            
                            tintColor: "#2980b9",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 1
                        }}>

                            <Image style={{
                                height: Dimensions.get('window').height * 0.06,
                                width: Dimensions.get('window').height * 0.06,
                                tintColor: "#2980b9"
                            }} source={IconShop} />
                            <Text style={{color:"#2980b9"}}>  Shop With Us </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height * 0.15,
                            backgroundColor: "#fff",
                            elevation: 5,
                            marginLeft: 2,
                            borderWidth: 0.5,
                            borderColor: "#2980b9",
                            marginTop: 10,
                            tintColor: "#2980b9",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2
                        }} onPress={()=>{setTimeout(()=>{navigation.navigate("Profile")},3000);}}>
                            <Image style={{
                                height: Dimensions.get('window').height * 0.06,
                                width: Dimensions.get('window').height * 0.06,
                                tintColor: "#2980b9"
                            }} source={account} />
                            <Text style={{color:"#2980b9"}}> Account</Text>
                           
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => {
                            setTimeout(()=>{navigation.navigate("transaction")},3000);
                        }} style={{
                            width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height * 0.15,
                            backgroundColor: "#fff",
                            elevation: 5,
                            marginLeft: 2,
                            borderWidth: 0.5,
                            borderColor: "#2980b9",
                            marginTop: 10,
                            tintColor: "#2980b9",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2
                        }}>
                            <Image style={{
                                height: Dimensions.get('window').height * 0.06,
                                width: Dimensions.get('window').height * 0.06,
                                tintColor: "#2980b9"
                            }} source={balance} />
                            <Text style={{color:"#2980b9"}}> Transaction History</Text>
                            
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            setTimeout(()=>{navigation.navigate("status")},3000);
                        }} style={{
                            width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height * 0.15,
                            backgroundColor: "#fff",
                            elevation: 5,
                            marginLeft: 2,
                            borderWidth: 0.5,
                            borderColor: "#2980b9",
                            marginTop: 10,
                            tintColor: "#2980b9",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2
                        }}>
                            <Image style={{
                                height: Dimensions.get('window').height * 0.06,
                                width: Dimensions.get('window').height * 0.06,
                                tintColor: "#2980b9"
                            }} source={status} />
                            <Text style={{color:"#2980b9"}}>Order Track Status</Text>
                        
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height * 0.15,
                            backgroundColor: "#fff",
                            elevation: 5,
                            marginLeft: 2,
                            borderWidth: 0.5,
                            borderColor: "#2980b9",
                            marginTop: 10,
                            tintColor: "#2980b9",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2
                        }} onPress={()=>{setUserName(null);
                        setTimeout(()=>{navigation.navigate("login")},3000)}}>
                            <Image style={{
                                height: Dimensions.get('window').height * 0.06,
                                width: Dimensions.get('window').height * 0.06,
                                tintColor: "#2980b9"
                            }} source={logout} />
                            <Text style={{color:"#2980b9"}}>Logout</Text>
                          
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: Dimensions.get('window').width * 0.4, height: Dimensions.get('window').height * 0.15,
                            backgroundColor: "#fff",
                            elevation: 5,
                            marginLeft: 2,
                            borderWidth: 0.5,
                            borderColor: "#2980b9",
                            marginTop: 10,
                            tintColor: "#2980b9",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 2
                        }}>
                           
                            <Entypo name="network" size={74} color="#34495E" />
                            <Text style={{color:"#2980b9"}}>Stand up for Sales</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
          
       

      
        </View>
    );

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    }, headerLeft: {

        marginLeft: Dimensions.get('window').width * 0.7
    },
    but: {
        backgroundColor: '#53115b',
        flex: 1,
        height: Dimensions.get('window').height,
        width: 220,

    },
    overlayBackground: {


        backgroundColor: '#fff',
        flex: 1,
        justifyContent: "center"
    }, userName: {
        fontWeight: "bold",
        marginLeft: Dimensions.get('window').width * 0.07,
        marginTop: Dimensions.get('window').height * 0.01,
color:"#fff"
    },
    titlep: {
        color: "#be0002",
        marginTop: 40,
        fontSize: 30,
        marginLeft: 50,
        fontWeight: "bold"
    }, userImage: {
        backgroundColor:"#2980b9",
        width: Dimensions.get('window').height * 0.12,
        borderColor: "#2980b9",
        borderWidth: 0.9,
        height: Dimensions.get('window').height * 0.12,
        marginTop: Dimensions.get('window').height * 0.04,
        borderRadius: 50 / 2
        
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
export default DashBoard;