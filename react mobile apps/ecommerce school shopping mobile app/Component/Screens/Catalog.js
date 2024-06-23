import { StyleSheet, Text, View, TextInput, Image, Dimensions, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import Appcontext from '../AppProvider/Approvider';
import IconShop from './../../assets/image/ShoppingCart.png';
import motherboard from '../../assets/Product/motherboard.jpg'
import { FlatList } from 'react-native-gesture-handler';
import APIBASE from '../Module/APICONSTANT';


const DataFiles = [{ Key: 1, Image: require('./../../assets/Product/ram.jpeg') }, { Key: 2, Image: require('./../../assets/Product/motherboard.jpg') }, { key: 4, Image: require('./../../assets/Product/gamingkeyboard.jpg') }, { key: 3, Image: require('./../../assets/Product/powersupplymwe.jpeg') }]

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

function Catalog({ navigation }) {
    const { Addtocart, USERID,SetGlobalComponent, DISCRIPTION, SETDISCRIPTION,setchoolid,schoolid } = React.useContext(Appcontext);
    const [componentData, setcomponentData] = React.useState(null);

    const RenderCatalog = ({ item, index }) => {
          console.log(schoolid);
        if(item.school_id==schoolid){

        
        return (<View style={{
            backgroundColor: "#fff",
            marginTop: Dimensions.get('window').height * 0.009,
            width: Dimensions.get('window').width * 0.98,
            marginLeft: Dimensions.get('window').width * 0.008,
            height: Dimensions.get('window').height * 0.6,
            borderWidth: Dimensions.get('window').height * 0.0011,
            borderColor: "#2980b9",
            borderRadius: 10

        }}>

            <TouchableOpacity onPress={() => {
                SETDISCRIPTION(item)
                navigation.navigate("detail");
            }}>
                <Image style={styles.postimage} source={{uri:APIBASE() + "/images/" + item.Image_url + ""}} />
            </TouchableOpacity>

            <View style={{ marginLeft: Dimensions.get('window').width * 0.09 }}>
                <Text style={{ fontSize: Dimensions.get('window').width * 0.05 }}> R {item.Component_Price}</Text>
                <Text>{item.Component_Name}</Text>
            </View>
            <View style={{
                backgroundColor: "#2980b9",
                width: Dimensions.get('window').width * 0.9,
                height: Dimensions.get('window').height * 0.002,
                marginLeft: Dimensions.get('window').width * 0.039,
                marginTop: Dimensions.get('window').height * 0.02
            }}>


            </View>
            <View style={{ marginLeft: Dimensions.get('window').width * 0.03 }}>


                <TouchableOpacity onPress={() => { Addtocart(item.C_ID, USERID, item.Component_Price, 1) }} >

                    <View style={{
                        width: Dimensions.get('window').width * 0.2,
                        height: Dimensions.get('window').height * 0.06,
                        marginTop: Dimensions.get('window').height * 0.03,
                        borderRadius: 3,
                        backgroundColor: "#2980b9"
                    }}>

                        <Text style={{
                            color: "#fff",
                            marginLeft: 27,
                            marginTop: 10,
                        }}>Add</Text>

                    </View>

                </TouchableOpacity>
            </View>


        </View>

        );
                    }
    }
    async function GETALLCOMPONENT() {

        let options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },



        }
        const respond = await fetch( APIBASE() + "/componentall", options);

        const data = await respond.json();
        console.log("this data "+data);
        setcomponentData(data);
        SetGlobalComponent(data);
        SetGlobalComponent(data);
        return data;
    }
    React.useEffect(() => {
        setcomponentData(null);
        GETALLCOMPONENT();
        console.log( "this also "+componentData);
    }
        , []);


    return (<View style={styles.container}>
        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.05
        }}>


        </View>

        <View style={{ marginLeft: Dimensions.get('window').width * 0.83, }}>
            <TouchableOpacity onPress={() => {
                if (USERID != null) {
                    navigation.navigate("Cart");
                }
            }}>
                <View style={{
                    backgroundColor: "#fff",
                }}>
                    <Text style={{
                        color: "#2980b9"

                        , fontSize: 23
                    }}>...</Text>
                    <Image style={{
                        tintColor: "#2980b9",
                        width: Dimensions.get('window').height * 0.042,
                        height: Dimensions.get('window').height * 0.042,
                    }} source={IconShop} />
                </View>
            </TouchableOpacity>
        </View>
        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.2,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.73,
            marginTop: Dimensions.get('window').height * 0.02
        }}>


        </View>
        < FlatList

            data={componentData}
            keyExtraction={item => item.key}
            renderItem={RenderCatalog}
            showsVerticalScrollIndicator={false}
        />
    </View>);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    but: {
        backgroundColor: '#53115b',
        flex: 1,
        height: 10,
        width: 220,

    }, postimage: {

        height: Dimensions.get('window').height * 0.38,
        width: Dimensions.get('window').width * 0.88,
        borderRadius: 10,
        marginVertical: 10,

    },
    userImage: {
        width: 50,
        borderColor: "#be0002",
        borderWidth: 2,
        height: 50,
        borderRadius: 50 / 2
    },
});
export default Catalog