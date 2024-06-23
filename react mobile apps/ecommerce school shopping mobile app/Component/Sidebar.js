import { ScrollView,Text } from "react-native-gesture-handler";
import { ImageBackground } from "react-native-web";

export default Sidebar=props=>(

    <ScrollView>
       <ImageBackground source={require("../assets/icon.png")}>

       <Text>The View</Text>

       </ImageBackground>
       
    </ScrollView>
);