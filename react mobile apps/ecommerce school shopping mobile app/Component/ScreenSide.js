import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FontAwesome } from '@expo/vector-icons';


export default class ScreenSide extends React.Component {

    render(){
    return (<View style={styles.container}>

        <SafeAreaView style={{flex:1}}>
            <TouchableOpacity style={{ alignItems: "flex-end", margin: 16 }}  onPress={this.props.navigation}>

                <FontAwesome name="bars" size={24} color="#be0002" />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

                <Text style={styles.text}> {this.props.name} is Screen</Text>
            </View>
        </SafeAreaView>
    </View>);

    }
}
const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: "#fff",
    },
    text: {

        color: "#161924",
        fontSize: 20,
        fontWeight:"500"

    }
});