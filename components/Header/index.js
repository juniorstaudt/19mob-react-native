import React from 'react';
import { Platform } from 'react-native';

import Logo from '../../assets/f1_logo.png';

import HeaderAndroid from './Android';
import HeaderIOS from './iOS';

const Header = Platform.select({
    ios: () => <HeaderIOS logo={ Logo } />,
    android: () => <HeaderAndroid logo={ Logo } />,
    default: () => <HeaderAndroid logo={ Logo } />,
});

export default Header;