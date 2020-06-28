import React from 'react';

import { View, Image } from 'react-native';

import Style from '../style';

const Header = ({ logo }) => { 
    return (
        <View style={ Style.header }>
            <Image style={ Style.image } source={ logo } />
        </View>
    );
};

export default Header;