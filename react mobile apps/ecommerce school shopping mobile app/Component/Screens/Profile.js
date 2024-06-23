
import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import Appcontext from '../AppProvider/Approvider';
function Profile({navigation}) {
    const {globalUser} = React.useContext(Appcontext);
    return (

        <View style={styles.container}>

            <View style={styles.NavDash}>

            </View>

            <View style={styles.profileControl}>
                <Image style={styles.userImage} source={require('./../../assets/image/User.png')} />
                <View style={{ marginTop: Dimensions.get('window').height * 0.023 }}>
                    <Text style={{

                        fontSize: Dimensions.get('window').height * 0.035,
                        alignItems:"center",
                        alignContent:"center",
                       justifyContent:"center",
                        fontWeight: "bold"
                    }}>    {globalUser.Full_Name}</Text>
                </View>

            </View>
            <View style={{
                backgroundColor: "#2980b9",
                width: Dimensions.get('window').width * 0.9,
                height: Dimensions.get('window').height * 0.002,
                marginLeft: Dimensions.get('window').width * 0.039,
                marginBottom: Dimensions.get('window').height * 0.02
            }}>


            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginTop: Dimensions.get('window').height * 0.001, marginLeft: Dimensions.get('window').width * 0.15, flexWrap: 'wrap' }}>
                <TouchableOpacity onPress={()=>{setTimeout(()=>{navigation.navigate("editprofile")},2000);}}><View style={{

                    height: Dimensions.get('window').height * 0.081,
                    backgroundColor: "#2980b9",
                    width: Dimensions.get('window').width * 0.32,
                    elevation: Dimensions.get('window').width * 0.0003,
                    borderRadius: 30
                }}><Text style={{
                    fontSize: Dimensions.get('window').height * 0.032,
                    
                    alignItems:"center",
                    alignContent:"center",
                    flex:1,
                    marginTop: Dimensions.get('window').height * 0.02,
                 
                    color:"#fff",
                    fontWeight: "bold"
                }}>   Edit </Text></View></TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate("editaddress")}}><View style={{

                    height: Dimensions.get('window').height * 0.081,
                    backgroundColor: "#fff",
                    width: Dimensions.get('window').width * 0.32,
                    marginLeft: Dimensions.get('window').height * 0.04,
                    elevation: Dimensions.get('window').width * 0.0003,
                    borderRadius: 30
                }}><Text style={{
                    fontSize: Dimensions.get('window').height * 0.032,
                    justifyContent:"center",
                    alignItems:"flex-start",
                    alignContent:"flex-start",
                    marginTop: Dimensions.get('window').height * 0.02,
                
                    fontWeight: "bold"
                }}>Address</Text></View></TouchableOpacity>
            </View>

            <View style={styles.NavDash}>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    NavDash: {
        height: Dimensions.get('window').height * 0.1,
        backgroundColor: "#2980b9",
        with: Dimensions.get('window').width * 0.0006,

        marginTop: Dimensions.get('window').height * 0.17,

    },
    profileControl: {
        height: Dimensions.get('window').height * 0.37,
        marginTop: Dimensions.get('window').width * 0.1,


        width: Dimensions.get('window').width,
        marginLeft: Dimensions.get('window').width * 0.3,

    }, userImage: {
        width: Dimensions.get('window').width * 0.4,
        borderColor: "#2980b9",
        borderWidth: 1,
        backgroundColor: "#fff",
        tintColor: "#2980b9",

        height: Dimensions.get('window').width * 0.4,
        borderRadius: Dimensions.get('window').height * 0.4 / 2
    },
});

export default Profile