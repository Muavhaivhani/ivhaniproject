

import { createContext, useState, useReducer } from "react";
import { AsyncStorage } from "AsyncStorage";
import { useEffect } from "react/cjs/react.production.min";
import APIBASE from "../Module/APICONSTANT";
import axios from "axios";
import * as React from 'react';


const initialState = {

    user: null,
    loadingPage: true
}

export const Appcontext = createContext(initialState);



export function AppapiProvider(props) {



    const [no, setno] = useState(1);
    const [LoginDeter, setLoginDeter] = useState(false);
    const [dall, setdall] = useState("Muavha");
    const [globalUser,setGlobalUser]=useState({});
    const [CARTOBJECT, SETCARTOBJECT] = useState({});
    const [Result, setResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [LOGINPASS, setLOGINPASS] = useState(false);
    const [ItemsIncart,SETITEMINCART] = useState(0);
    const [DISCRIPTION,SETDISCRIPTION]=useState(null);
    const[GetGlobalComponent,SetGlobalComponent]=useState(null);
  const [USERID, SETUSERID] = React.useState(0);
  const [schoolid, setchoolid] = React.useState(0);
    const [isloadings, setisloadings] = React.useState(true);
    const [userName, setUserName] = useState("Muavha");



    async function Alluser() {
        const respond = await fetch("http://172.17.240.1:3000/user/all");
        const results = await respond.json();
        console.log(results);
        return results;
    }
    async function DeletedonCart(OrderID) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({ O_ID: OrderID })
        }
        const regresult = await fetch( APIBASE() + "/deletecart", options);
        const result = await regresult.text();

        console.log(result);
        return result;
    }
    async function increased(OrderID, UserID) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({ O_ID: OrderID, U_ID: UserID })
        }
        const regresult = await fetch( APIBASE() + "/increaseonCart", options);
        const result = await regresult.text();

        console.log(result);
        return result;
    }
  
    async function decreased(OrderID, UserID) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },
            body: JSON.stringify({ O_ID: OrderID, U_ID: UserID })
        }
        const regresult = await fetch( APIBASE() + "/decreasedcart", options);
        const result = await regresult.text();

        console.log(result);
        return result;
    }
    async function MyCart(userid) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ U_ID: userid })

        }
        const regresult = await fetch( APIBASE() + "/mycart", options);
        const result = regresult.json();
       
        console.log(result);
        return result;
    }

    function Addtocart(CID, UID, Totals, Itemss) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ C_ID: CID, U_ID: UID, Total: Totals, Items: Itemss })

        }
     

         fetch( APIBASE() + "/addingoncart", options);
        
        
        MyCart(UID);
        return "";
    }

    async function GETALL() {
        const respond = await fetch("http://172.17.240.1:3000/user/all");
        const results = await respond.json();
        console.log(results);
        return results;
    }
 
    function ChangeStat() {
        //intial state

        setLoginDeter(true);
    }
    async function LOGINUSER(Objet) {


        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ Email: Objet.Email, Password: Objet.Password })

        }
        const LOGINRESPOND = await fetch( APIBASE() + "/Login", options)
        const LOGINRESULT = await LOGINRESPOND.json();

        if (LOGINRESULT != null) {
            setLOGINPASS(!LOGINPASS);
        }
        console.log(LOGINRESULT);
        return LOGINPASS;

    }


    function Storage(key, value) {
        AsyncStorage.setItem(key, value);
    }
    async function GetStorage(key) {
        try {
            let user = await AsyncStorage.getItem(key);
            alert(user);

        } catch (error) {

            alert(error);
        }

        return user;

    }
    function CompanyRegistered(Objet) {

        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ Company_ID: Objet.Company_ID, User_ID: Objet.User_ID, Name: Objet.Name, Address: Objet.Address, Slogan: Objet.Slogan, Ratings: Objet.Ratings, Category: Objet.Category, Operation: Objet.Operation })

        }
        fetch("http://172.29.96.1:3000/company/registry", options).then((respond) => respond.text()).then((resp) => {
            if (resp != null) {
                console.log(resp);




            }




        }).catch((err) => {
            console.log(err)


        });

    }
    function Register(RegObject) {
        console.log(RegObject.Phone);
        let options = {
            method: 'POST',
            headers: {
                'Content-Type':
                    'application/json;charset=utf-8'
            },


            body: JSON.stringify({ Email: RegObject.Email.toString(), Password: RegObject.Password, Phone: RegObject.Phone, FullName: RegObject.FullName, Active: 1, Type: 'Customer', Category: 'Regular' })

        }
        fetch(APIBASE()+"/Register", options).then((respond) => (respond.text())).then((respond) => {
            console.log(respond);
            if (respond != null) {


                console.log(respond);
                if (respond == 'Registered Succesfully') {
                    props.navigation.navigate("Login");
                }
            }

        }).catch();

    }
    function increaset() {
        setno(no + 1);
        return no;
    }
    return (
        <Appcontext.Provider value={{GetGlobalComponent,setchoolid,schoolid,SetGlobalComponent,globalUser,setGlobalUser,DISCRIPTION,SETDISCRIPTION,CARTOBJECT, SETCARTOBJECT, decreased, DeletedonCart,increased,SETUSERID,USERID, Addtocart,  MyCart, LOGINUSER, Register, userName, Result, setResult, isLoading, setIsLoading, increaset, Alluser, Storage, GetStorage, CompanyRegistered, LoginDeter, setLoginDeter, setUserName }}>

            {props.children}

        </Appcontext.Provider>


    );



}
export default Appcontext;