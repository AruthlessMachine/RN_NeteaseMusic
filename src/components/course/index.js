import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import IconFeather from "react-native-vector-icons/Feather";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class  extends Component {
    static navigationOptions = {
            tabBarLabel:'课程',
            tabBarIcon({focused}){
                return(
                    <IconFeather
                        name={'book-open'}
                        size={18}
                        color={focused?'#e84f35':'#9a9a9a'}
                    />
                )
            }
    }

    render() {
        return (
            <View>
                <Text>这是课程页面</Text>
            </View>
        )
    }
}

let s = StyleSheet.create({

})