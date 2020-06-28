import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Details from './components/Details';

class Driver extends Component {
    state = {
        details: [],
        loading: false,
    }

    componentDidMount() { 
        let uri = 'https://ergast.com/api/f1/'
        let year = '2019'
        let option = 'drivers'
        let driverId = 'albon'
        let URL = `${uri}${year}/${option}/${driverId}.json`

        fetch(URL)
            .then((response) => response.json())
            .then((body) => {
                const details = body.MRData.DriverTable.Drivers
                console.log(body)
                this.setState({ details, loading: true })
            });
    }

render() {
    const { details, loading } = this.state;

    return (
        <SafeAreaView>
            { !loading && <ActivityIndicator size="large" color="#3483fa" />}
            <Details 
                data={ details }
                handlerDriver={ this.props.navigation.navigate }
            />
        </SafeAreaView>
    );
    }
}

export default Driver;