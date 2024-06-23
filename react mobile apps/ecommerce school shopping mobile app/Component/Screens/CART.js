
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import Appcontext from "../AppProvider/Approvider";
import APIBASE from "../Module/APICONSTANT";
import { FlatList } from 'react-native-gesture-handler';
import { AsyncStorage } from '@react-native-async-storage/async-storage';


function CART({ navigation }) {

    const { MyCart, GetGlobalComponent,SetGlobalComponent,CARTOBJECT, SETCARTOBJECT, decreased, increased, DeletedonCart, SETITEMINCART, ItemsIncart, USERID } = useContext(Appcontext);
    const [MycartDat, setmycartDat] = useState(null);

    const [reload, setRealod] = useState(false);
   
function Gettherealimage(objecting,pid){
if(objecting==null)
{
    return null;
}else{
  
console.log("my object 1" +JSON.stringify(objecting))
    for (let i = 0; i < objecting.length; i++) {


        if(objecting[i].C_ID==pid)

        {
            return objecting[i].Image_url
        }


    }
}

    return 
}
    const submitONwork = async () => {
        AsyncStorage
        const diary = { title: "Muavha", body: "Body" }

        try {
            await AsyncStorage.setItem('diary', 2)
        } catch (error) {
            console.log(error);
        }


    }
    function calculateTotal(ObjectCart) {
        if (ObjectCart == null) {

            return "Loading Balance";
        } else {
            let sum = 0;
            for (let i = 0; i < ObjectCart.length; i++) {


                sum += parseInt(ObjectCart[i].Total) * parseInt(ObjectCart[i].Items);


            }
            console.log(sum);
            return sum;

        }

    }

    async function MyCartOnPage(userid) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ U_ID: userid })

        }
        const regresult = await fetch(APIBASE() + "/mycart", options);

        const result = await regresult.json();

        console.log(JSON.stringify(result));
        const sum = 0
        SETCARTOBJECT(null);
        SETCARTOBJECT(result);
        setmycartDat(result);
        return result;
    }
    function PictureReturn(id) {

        if (id == 2) {
            return require("./../../assets/Product/ram.jpeg");
        } else if (id == 1) {
            return require('./../../assets/Product/motherboard.jpg');
        } else if (id == 3) {
            return require('./../../assets/Product/powersupplymwe.jpeg');
        } else if (id == 4) {
            return require('./../../assets/Product/gamingkeyboard.jpg');
        }else if (id == 7) {
            return require('./../../assets/Product/ramddr4.jpeg');
        }else if (id == 6) {
            return require('./../../assets/Product/gamingkeyboard.jpg');
        }else if (id == 8) {
            return require('./../../assets/Product/i5intel.jpg');
        }else if (id == 10) {
            return require('./../../assets/Product/i5intel.jpg');
        }else if (id == 9) {
            return require('./../../assets/Product/amd.webp');
        }else if (id == 11) {
            return require('./../../assets/Product/mousegame.webp');
        }
    
    
    }
    function deal() {

        AsyncStorage.setItem('mobileNumber', "jhjsjhs");

        AsyncStorage.getItem('mobileNumber', (error, result) => {
            console.log(result);
        });
    }
    const whenRefresh = async () => {

        const diary = await AsyncStorage.getItem('diary');
        console.log(JSON.parse(diary))

    }

    useEffect(() => {



        console.log(MyCartOnPage(USERID));


      



    }, [reload]);
    async function SpecificCoamponent(componentID) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({ C_ID: componentID })
        }
        const regresult = await fetch( APIBASE() + "/componentforspecific", options);
        const result = await regresult.json();


        return result;
    }
    const RenderCartItem = ({ item, index }) => {


        if (item.O_ID == null) {
            return (<Text style={{ color: "#2980b9", fontSize: 12, }}></Text>)
        } else {


            return (
                <View style={{
                    marginTop: Dimensions.get('window').height * 0.01,
                    width: Dimensions.get('window').width * 0.97,
                    height: Dimensions.get('window').height * 0.2,
                    marginLeft: Dimensions.get('window').width * 0.013,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: "#2980b9",
                    backgroundColor: "#ffff",
                    elevation: 3
                }}>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: Dimensions.get('window').height * 0.01, marginLeft: Dimensions.get('window').width * 0.08, flexWrap: 'wrap' }}>
                        <Image style={{ height: Dimensions.get('window').height * 0.18, width: Dimensions.get('window').width * 0.17, borderRadius: 3 }} source={{uri:APIBASE() + "/images/" + Gettherealimage(GetGlobalComponent,item.C_ID) + ""}} />

                        <View style={{ marginLeft: Dimensions.get('window').width * 0.09, marginTop: Dimensions.get('window').height * 0.03 }}>



                            <View style={{
                                flex: 1,


                            }}>
                                <TouchableOpacity onPress={() => { setRealod(!reload), increased(item.O_ID, item.User_ID) }}><View style={{ backgroundColor: "#fff", borderColor: "#2980b9", borderWidth: 1, borderRadius: 10, height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.09 }}><Text style={{ color: "#2980b9", fontSize: 23, padding: 2, paddingLeft: 12 }}>+</Text></View></TouchableOpacity>
                                <TouchableOpacity onPress={() => { setRealod(!reload), decreased(item.O_ID, item.User_ID) }}><View style={{ backgroundColor: "#fff", borderColor: "#2980b9", borderWidth: 1, borderRadius: 10, height: Dimensions.get('window').height * 0.05, width: Dimensions.get('window').width * 0.09 }}><Text style={{ color: "#2980b9", fontSize: 23, padding: 2, paddingLeft: 12 }}>-</Text></View></TouchableOpacity>
                            </View>

                        </View>

                        <View style={{ marginLeft: Dimensions.get('window').width * 0.04, marginTop: Dimensions.get('window').height * 0.07 }}>
                            <Text style={{ color: "#2980b9", fontSize: 12, }}>R {item.Total}</Text>
                            <Text style={{ color: "#2980b9", fontSize: 15, padding: 2 }}>Items : {item.Items}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { setRealod(!reload), DeletedonCart(item.O_ID) }}>
                            <View style={{
                                marginLeft: Dimensions.get('window').width * 0.04, marginTop: Dimensions.get('window').height * 0.07,
                                height: Dimensions.get('window').height * 0.05,
                                width: Dimensions.get('window').width * 0.17,
                                borderRadius: 8,
                                
                                backgroundColor: "#be0002"
                            }}>

                                <Text style={{ color: "#fff", fontSize: 15, padding: 5 }}>Remove</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            );
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
            <Text style={{ fontSize: 20, color: "#2980b9" }}>{"My Cart"}</Text>
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

            < FlatList

                data={MycartDat}
                keyExtraction={item => item.key}
                renderItem={RenderCartItem}
                showsVerticalScrollIndicator={false}
            />

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
            <View style={{ marginLeft: Dimensions.get('window').width * 0.05, }}>
                <Text style={{ fontSize: 19, }}>Total</Text>
            </View>
            <View style={{ marginLeft: Dimensions.get('window').width * 0.65, }}>
                <Text style={{ fontSize: 19, }}>R {calculateTotal(MycartDat)}</Text>
            </View>


        </View>

        <View style={{ marginBottom: Dimensions.get('window').height * 0.04, marginLeft: Dimensions.get('window').width * 0.18 }}>

            <TouchableOpacity onPress={() => {
                if (CARTOBJECT != null) {
                    navigation.navigate("PlaceOrder");
                }
            }}>
                <View style={{ height: Dimensions.get('window').height * 0.085, backgroundColor: "#2980b9", width: Dimensions.get('window').width * 0.65 }}><Text style={{ color: "#fff", marginTop: 13, marginLeft: 99, fontSize: 15 }}>Checkout</Text></View>
            </TouchableOpacity>
        </View>

    </View>);
}
export default CART;
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