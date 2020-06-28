import React from 'react';
import { View, Image } from 'react-native';

import Style from '../style';

const Header = ({ logo }) => { 
    return (
        <View 
            testID="container" // usado para buscar o elemento para realizar os testes unitários
            style={ Style.header }
        >
            <Image 
                testID="image" // usado para buscar o elemento para realizar os testes unitários
                style={ Style.image } source={ logo }
            />
        </View>
    );
};

export default Header;