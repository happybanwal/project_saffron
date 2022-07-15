import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import route from "../../assets/routes"
import info from "../onboarding/info"
import mobile from "../onboarding/mobile"
const stack=createNativeStackNavigator()
const Root=()=>{
    return(
        <NavigationContainer>
            <stack.Navigator initialRouteName={route.onBoarding.mobile.name} screenOptions={{headerShown: false}}>
                <stack.Screen name={route.onBoarding.mobile.name} component={mobile}/>
                <stack.Screen name={route.onBoarding.info.name} component={info}/>
            </stack.Navigator>
        </NavigationContainer>

    )
}
export default Root;