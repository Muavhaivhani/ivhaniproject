
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native';
import * as React from 'react';
import Appcontext from '../AppProvider/Approvider';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useEffect, useReducer } from 'react';



import { AuthContextProvider } from '../AppProvider/context';
import APIBASE from '../Module/APICONSTANT';

import StepIndicator from 'react-native-step-indicator';


function TrackOrderStatus() {
    const gjgshg = "http://localhost:3000/images/1666461387278.png";
    const [position, setposition] = React.useState(0);
    const data = [{
        label: "Order and Approved",
        status: "Order has been Place",
        dateTime: new Date(),

    },
    {
        label: "Order and Approved",
        status: "Order has been Place",
        dateTime: new Date(),

    }, {
        label: "Order and Approved",
        status: "Order has been Place",
        dateTime: new Date(),

    }, {
        label: "Order and Approved",
        status: "Order has been Place",
        dateTime: new Date(),

    }, {
        label: "Order and Approved",
        status: "Order has been Place",
        dateTime: new Date(),

    }];
    const labels = ["Items were placed in Cart", "Customer information was captured", "Order Summary View", "Order Placed", "Status waiting"];
    const customStyles = {
        stepIndicatorSize: 25,
        currentStepIndicatorSize: 30,
        separatorStrokeWidth: 2,
        currentStepStrokeWidth: 3,
        stepStrokeCurrentColor: '#fe7013',
        stepStrokeWidth: 3,
        stepStrokeFinishedColor: '#fe7013',
        stepStrokeUnFinishedColor: '#aaaaaa',
        separatorFinishedColor: '#fe7013',
        separatorUnFinishedColor: '#aaaaaa',
        stepIndicatorFinishedColor: '#fe7013',
        stepIndicatorUnFinishedColor: '#ffffff',
        stepIndicatorCurrentColor: '#ffffff',
        stepIndicatorLabelFontSize: 13,
        currentStepIndicatorLabelFontSize: 13,
        stepIndicatorLabelCurrentColor: '#fe7013',
        stepIndicatorLabelFinishedColor: '#ffffff',
        stepIndicatorLabelUnFinishedColor: '#aaaaaa',
        labelColor: '#999999',
        labelSize: 13,
        currentStepLabelColor: '#fe7013'
    }

    return (

        <View style={styles.container}>

            <View style={{ color: "#242443", width: Dimensions.get('window').width * 0.88, height: Dimensions.get('window').height * 0.08, backgroundColor: "#2980b9", marginLeft: Dimensions.get('window').height * 0.04, marginTop: -Dimensions.get('window').height * 0.78, }}>
                <Text style={{ color: "#fff", marginLeft: Dimensions.get('window').width * 0.28, fontSize: 22 }}>Order Summary</Text>

            </View>

            <View style={styles.indicatorActuvity}>

                <StepIndicator

                    labels={labels}
                    customStyles={customStyles}
                    direction="vertical"
                    currentPosition={4}
                 />

            </View>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',


    },
    indicatorActuvity: {

        position: 'absolute',
        height: Dimensions.get('window').height * 0.68,
        width: Dimensions.get('window').width * 0.85,
        marginLeft: Dimensions.get('window').width * 0.08,
        padding: 20,
        paddingTop: 0,
        margin: 15,
        evaluation: 10,
        borderRadius: 10,
        shadowColor: "#fff",
        backgroundColor: "#34495E"
    }

});
export default TrackOrderStatus;