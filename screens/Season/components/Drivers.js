import React from 'react';

import { Button, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    button: {
        marginBottom: 10,
        backgroundColor: '#4CAF50'
    }
});

const Drivers = ({ handlerDriver, data }) => {
    return data
        .map(({ permanentNumber, givenName, familyName }) => (
            <Button
                key={ `id-${permanentNumber}` } 
                style={ style.button }
                onPress={ () => handlerDriver('Driver', { permanentNumber })}
                title={ permanentNumber + " - " + givenName + " " + familyName }
            />
        ));
}

export default Drivers;
