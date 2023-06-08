import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Strings } from '../../../strings';
import images from '../../../assets/images';


const Splash = () => {
    return (
        <View>
            <Text>{Strings.splash.intro} </Text>
            <View>
                <Image source={images.splash} />
            </View>

            <View style={{borderBottomColor: 'white', borderWidth:1}} />

            <Text>{Strings.splash.txt1}</Text>
            <View style={{borderBottomColor: 'white', borderWidth:1}} />

            <View>
                <TouchableOpacity >
                    <Text>{Strings.common.signUp}</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text>{Strings.common.login}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Splash;