import React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

const Details = ({ data }) => {
    return data
        .map(({ permanentNumber, givenName, familyName, nationality, driverId }) => (
            <View style={styles.container}>
                <View>
                    <View>
                        <Text style={styles.metadata}>Piloto</Text>
                        <Text style={styles.detailData}>{givenName + " " + familyName}</Text>
                        <Text> </Text>
                        <Text style={styles.metadata}>Número do carro</Text>
                        <Text style={styles.detailData}>{permanentNumber}</Text>
                        <Text> </Text>
                        <Text style={styles.metadata}>Nacionalidade</Text>
                        <Text style={styles.detailData}>{nationality}</Text>
                    </View>
                </View>    
            </View>
        ));
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        textAlign: 'center',
        marginRight: 2
    },
    detailData: {
        fontSize: 15,
        textAlign: 'center'
    }
});

export default Details;
