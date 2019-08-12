import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import IconAntDesign from "react-native-vector-icons/AntDesign";
import IconFeather from 'react-native-vector-icons/Feather'

export default class  extends Component {
    static navigationOptions = {
        tabBarLabel:'交友',
        tabBarIcon({focused}){
            return(
                <IconFeather
                    name={'users'}
                    size={18}
                    color={focused?'#e84f35':'#9a9a9a'}
                />
            )
        }
    }

    render() {
        return (
            <View>
                <Text>这是好友页面</Text>
            </View>
        )
    }
}

let s = StyleSheet.create({

})