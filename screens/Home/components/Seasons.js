import React from 'react';

import { Button, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
    button: {
        marginBottom: 10,
        backgroundColor: '#3483fa'
    }
});

const Seasons = ({ handlerSeason, data }) => {
    return data
        .map(({ season: year }) => (
            <Button 
                testID={ `year-${year}` }
                key={ `year-${year}` }
                style={ style.button }
                onPress={ () => handlerSeason('Season', { year })}
                title={ year }
            />
        ));
}

export default Seasons;
