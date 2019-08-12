import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconFeather from "react-native-vector-icons/Feather";

export default class  extends Component {
    static navigationOptions = {
        tabBarLabel:'视频',

        tabBarIcon({focused}){
            return(
                <IconMaterialIcons
                    name={'ondemand-video'}
                    size={18}
                    color={focused?'#e84f35':'#9a9a9a'}
                />
            )
        }
    }

    render() {
        return (
            <View>
                <Text>这是视频页面</Text>
            </View>
        )
    }
}

let s = StyleSheet.create({

})