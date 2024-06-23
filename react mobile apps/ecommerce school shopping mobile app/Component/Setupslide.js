import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import {Dimensions} from 'react-native';

import { Feather } from "@expo/vector-icons";


import {Login,Register} from './Screenindex';
import Sidebar from "./Sidebar";




const DrawerNavigator=createDrawerNavigator(
    {
        Login,
        Register
    },
    {
        contentComponent:props=><Sidebar {...props}/>
    }
);
export default createAppContainer(DrawerNavigator);