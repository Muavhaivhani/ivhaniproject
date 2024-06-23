import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as React from 'react';
import Appcontext from '../AppProvider/Approvider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import APIBASE from '../Module/APICONSTANT';

function DETAIL({navigation}) {
    const { Addtocart,USERID,DISCRIPTION,SETDISCRIPTION} = React.useContext(Appcontext);
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
    return (<View style={styles.container}>
        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.05
        }}>


        </View>



        <Image style={styles.postimage} source={{uri:"http://" + APIBASE() + ":3000/images/" + DISCRIPTION.Image_url + ""}} />
        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.05
        }}>


        </View>
        <View style={{
            marginTop: Dimensions.get('window').height * 0.005,
            marginLeft: Dimensions.get('window').width * 0.025
        }}>
            <Text style={{fontSize:16}}>{DISCRIPTION.Component_Name}</Text>
        </View>
        <View style={{
            backgroundColor: "#2980b9",
            width: Dimensions.get('window').width * 0.3,
            height: Dimensions.get('window').height * 0.002,
            marginLeft: Dimensions.get('window').width * 0.039,
            marginTop: Dimensions.get('window').height * 0.002
        }}>


        </View>
        <View style={{
            marginTop: Dimensions.get('window').height * 0.005,
            marginLeft: Dimensions.get('window').width * 0.025
        }}>
            <Text style={{fontSize:16}}>{DISCRIPTION.Component_Description}</Text>
        </View>
        <View style={{
            marginTop: Dimensions.get('window').height * 0.015,
            marginLeft: Dimensions.get('window').width * 0.025
        }}>
            <Text style={{fontSize:20,color:"#2980b9"}}>{DISCRIPTION.Component_Price}</Text>
        </View>
     <TouchableOpacity onPress={()=>{Addtocart(DISCRIPTION.C_ID, USERID, DISCRIPTION.Component_Price, 1);
    
    navigation.navigate("Catalog");
    
    }}>
        <View style={{
            marginTop: Dimensions.get('window').height * 0.015,
            marginLeft: Dimensions.get('window').width * 0.30,
            backgroundColor:"#2980b9",
            height: Dimensions.get('window').height * 0.100,
            width: Dimensions.get('window').width * 0.425,
            borderRadius:7
        }}>

            <Text style={{fontSize:20,color:"#fff",
            alignItems: 'center',
            padding:16,
            paddingLeft:37,
            justifyContent: 'center',}}>{"Add to Cart"}</Text>
        </View>
        </TouchableOpacity>
    </View>);
}
export default DETAIL
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