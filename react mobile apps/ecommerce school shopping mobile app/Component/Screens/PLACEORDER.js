import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ActivityIndicator } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Appcontext from '../AppProvider/Approvider';
import APIBASE from '../Module/APICONSTANT';
import IconShop from './../../assets/image/ShoppingCart.png';
import { useToast } from "react-native-toast-notifications";
function PLACEORDER({ navigation }) {
    const [EACHCOMP, SETEACHCOMP] = useState(null);
    const [ISLOADING, SETISLOAD] = useState(false);
    const { toast } = useToast();
    const { MyCart, globalUser, CARTOBJECT, GetGlobalComponent, SETCARTOBJECT, decreased, increased, DeletedonCart, SETITEMINCART, ItemsIncart, USERID } = useContext(Appcontext);

    function Gettherealimage(objecting, pid) {
        if (objecting == null) {
            return null;
        } else {

            console.log("my object 1" + JSON.stringify(objecting))
            for (let i = 0; i < objecting.length; i++) {


                if (objecting[i].C_ID == pid) {
                    return objecting[i].Component_Name
                }


            }
        }

        return
    }
    function PlaceOrder() {
        const STATUS = 'Pending';
        const san = null;
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({ O_ID: CARTOBJECT[0].O_ID, Total: TOTALCOMPONENT(CARTOBJECT), Item_No: CARTOBJECT.length, User_ID: USERID, Status: STATUS, comment: 'nothing' })
        }
        fetch(  APIBASE() + "/placeorder", options).then((respond) => respond.text()).then(


            (respond) => {
                if (respond != null) {
                    if (respond == "Order Accepted") {

                        setTimeout(() => { navigation.navigate("Catalog") }, 4000);
                    }


                }


            }
        );



    }

    const RenderPlaceorder = ({ item, index }) => {
        if (item != null) {

            return (

                <View style={{ marginTop: Dimensions.get('window').width * 0.02, flexDirection: 'row' }}>
                    <View style={{ marginLeft: Dimensions.get('window').width * 0.02, marginTop: Dimensions.get('window').height * 0.02 }}>
                        <Text style={{ color: "#2980b9", fontSize: 13 }}>{


                            Gettherealimage(GetGlobalComponent, item.C_ID)} ({item.Items})  </Text>
                    </View>
                    <View style={{ marginLeft: Dimensions.get('window').width * 0.18, marginTop: Dimensions.get('window').height * 0.02 }}>
                        <Text style={{ color: "#2980b9", fontSize: 13 }}>{item.Items * item.Total}</Text>
                    </View>



                </View>

            );

        } else {
            return (<View><Text>Nothing</Text></View>);
        }

    }





    function checkItems() {
        if (CARTOBJECT != null) {

            for (let i = 0; i < CARTOBJECT.length; i++) {

                console.log(CARTOBJECT[i].C_ID)
                reducequantity(CARTOBJECT[i].C_ID, CARTOBJECT[i].Items)
            }
        }

    }
    async function reducequantity(cid, diff) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({ C_ID: cid, difference: diff })
        }
        const regresult = await fetch( APIBASE() + "/reducequantity", options);
        const result = await regresult.text();

        console.log(result);
        return result;
    }
    async function clearcart(OrderID) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({ User_ID: OrderID })
        }
        const regresult = await fetch( + APIBASE() + "/clearcart", options);
        const result = await regresult.text();

        console.log(result);
        return result;
    }
    const TOTALCOMPONENT = (ObjectCart) => {

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

    return (<View style={styles.container}>
        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.05
        }}>


        </View>


        <View style={{ marginLeft: Dimensions.get('window').width * 0.37 }}>
            <Text style={{ color: "#2980b9", fontSize: 22 }}>Place Order</Text>

        </View>


        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.02
        }}>


        </View>

        <View style={{ marginTop: Dimensions.get('window').width * 0.02, flexDirection: 'row' }}>

            <View style={{ marginLeft: Dimensions.get('window').width * 0.05 }}>
                <Text style={{ color: "#2980b9", fontSize: 16 }}>Item</Text>
            </View>
            <View style={{ marginLeft: Dimensions.get('window').width * 0.67, }}>
                <Text style={{ color: "#2980b9", fontSize: 16 }}>Price</Text>

            </View>

        </View>
        <View style={{
            backgroundColor: "#fff",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.5,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.02
        }}>



            < FlatList

                data={CARTOBJECT}
                keyExtraction={item => item.key}
                renderItem={RenderPlaceorder}
                showsVerticalScrollIndicator={false}
            />
            <View style={{ marginTop: Dimensions.get('window').width * 0.02, flexDirection: 'row' }}>
                <View style={{ marginLeft: Dimensions.get('window').width * 0.02, marginTop: Dimensions.get('window').height * 0.02 }}>
                    <Text style={{ color: "#2980b9", fontSize: 18 }}>Total </Text>
                </View>
                <View style={{ marginLeft: Dimensions.get('window').width * 0.64, marginTop: Dimensions.get('window').height * 0.02 }}>
                    <Text style={{ color: "#2980b9", fontSize: 18 }}>{TOTALCOMPONENT(CARTOBJECT)}</Text>
                </View>



            </View>
        </View>
        <View style={{ marginLeft: Dimensions.get('window').width * 0.18, marginTop: Dimensions.get('window').height * 0.03 }}>

            <TouchableOpacity onPress={() => {

                PlaceOrder();
                checkItems();
                clearcart(globalUser.User_ID)
                setTimeout(() => { SETISLOAD(!ISLOADING); }, 4000)

            }}>
                <View style={{ height: Dimensions.get('window').height * 0.085, backgroundColor: "#2980b9", width: Dimensions.get('window').width * 0.65 }}>{ISLOADING ?

                    (<ActivityIndicator animating={ISLOADING} size={"large"} color={"white"} />) : (<View>
                        <Text style={{ color: "#fff", marginTop: 13, marginLeft: 99, fontSize: 15 }}> Place Order</Text><Image style={{
                            height: Dimensions.get('window').height * 0.06,
                            width: Dimensions.get('window').height * 0.06, marginLeft: Dimensions.get('window').height * 0.17,
                            tintColor: "#fff"
                        }} source={IconShop} /></View>)}

                </View>
            </TouchableOpacity>
        </View>

    </View>);





}


export default PLACEORDER
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