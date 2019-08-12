import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import IconFeather from "react-native-vector-icons/Feather";
import IconAntDesign from "react-native-vector-icons/AntDesign";

export default class  extends Component {
    static navigationOptions = {
        tabBarLabel:'我的',
        tabBarIcon({focused}){
            return(
                <IconFeather
                    name={'music'}
                    size={18}
                    color={focused?'#e84f35':'#9a9a9a'}
                />
            )
        }
    }
    render() {
        return (
            <View>
                <Text>这是我的页面</Text>
            </View>
        )
    }
}

let s = StyleSheet.create({

})