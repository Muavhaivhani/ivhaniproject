
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Appcontext from "../AppProvider/Approvider";
import APIBASE from "../Module/APICONSTANT";
import status from './../../assets/image/status.png';
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from '@react-native-async-storage/async-storage';


function Status({ navigation }) {

    const { MyCart, CARTOBJECT, SETCARTOBJECT, decreased, increased, DeletedonCart, SETITEMINCART, ItemsIncart, USERID } = useContext(Appcontext);
    const [MycartDat, setmycartDat] = useState(null);
    const [reload, setRealod] = useState(false);
    const [GETORDER, SETTGETORDER] = useState(null);
    const getorder = (id) => {



        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ U_ID: id })

        }
        fetch( APIBASE() + "/getorder", options).then((respond) => respond.json()).then((resp) => {
            if (resp[0] != null) {




                    SETTGETORDER(resp);
                    SETTGETORDER(resp)
                











            } else {

                return null;



            }




        }).catch((err) => {
            console.log(err)


        });

    }

    useEffect(() => {



        getorder(USERID)
        console.log(GETORDER);

        if (GETORDER == null) {
           
        }


    }, []);

    const RenderStatus = ({item,i}) => {
        if (item.Status == "Pending") {
           
            return (<View style={{
                backgroundColor: "#fff",
                width: Dimensions.get('window').width * 0.98,
                height: Dimensions.get('window').height * 0.2,
                borderWidth: 0.8,
                borderColor: "#2980b9",
                borderRadius: 8,
                marginLeft: Dimensions.get('window').width * 0.0032,
                marginTop: Dimensions.get('window').height * 0.01
            }}>
                <TouchableOpacity onPress={()=>{navigation.navigate("trackorderStatus")}}>
                <View style={{ flexDirection: "row" }}>
                    <Image style={{
                        height: Dimensions.get('window').height * 0.1,
                        width: Dimensions.get('window').height * 0.1,
                        marginLeft: Dimensions.get('window').height * 0.03,
                        marginTop: Dimensions.get('window').height * 0.03,
                    }} source={status} />

                   
                    <View style={{

                        marginLeft: Dimensions.get('window').height * 0.08,
                        marginTop: Dimensions.get('window').height * 0.07,
                    }}>
                        <Text>{item.Status}</Text>
                    </View>
                    <View style={{

                        marginLeft: Dimensions.get('window').height * 0.08,
                        marginTop: Dimensions.get('window').height * 0.07,
                    }}>
                          <Text>{item.comment}</Text>
                         <Text style={{ marginTop: Dimensions.get('window').height * 0.07,}}>R {item.Total}</Text>
                      
                    </View>
                </View>
                </TouchableOpacity>
            </View>)
        }
    }
    return (<View style={styles.container}>

        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.05
        }}>


        </View>
        <View style={{
            marginTop: Dimensions.get('window').height * 0.015,
            marginLeft: Dimensions.get('window').width * 0.425
        }}>
            <Text style={{ fontSize: 20, color: "#2980b9" }}>{"Status"}</Text>
        </View>
        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.4,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.32,
            marginTop: Dimensions.get('window').height * 0.01
        }}>


        </View>
        <View style={{
            backgroundColor: "#fff",
            width: Dimensions.get('window').width * 1,
            height: Dimensions.get('window').height * 0.6,
            marginLeft: Dimensions.get('window').width * 0.0032,
            marginTop: Dimensions.get('window').height * 0.01
        }}>
            
               

              {
               
            
               

< FlatList

data={GETORDER}
keyExtraction={item => item.key}
renderItem={RenderStatus}
showsVerticalScrollIndicator={false}
/>
               }
            

        </View>
        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.05
        }}>


        </View>
        <View style={{ flex: 1, flexDirection: "row", flexwrap: "wrap", marginTop: 10 }}>



        </View>

        <View style={{ marginBottom: Dimensions.get('window').height * 0.04, marginLeft: Dimensions.get('window').width * 0.18 }}>

        </View>

    </View>);
}
export default Status;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    }, postimage: {

        height: Dimensions.get('window').height * 0.40,
        width: Dimensions.get('window').width * 0.98,
        borderRadius: 10,
        marginVertical: 10,

    },

});