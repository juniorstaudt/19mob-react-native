import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Drivers from './components/Drivers';

class Season extends Component {
    state = {
        drivers: [],
        loading: false,
    }

    componentDidMount() { 
        fetch(`https://ergast.com/api/f1/${this.props.route.params.year}/drivers.json`)
            .then((response) => response.json())
            .then((body) => {
                const drivers = body.MRData.DriverTable.Drivers
                console.log(drivers)
                this.setState({ drivers, loading: true })
            });
    }

render() {
    const { drivers, loading } = this.state;

    return (
        <SafeAreaView>
            { !loading && <ActivityIndicator size="large" color="#3483fa" />}
            <Drivers 
                data={ drivers }
                handlerDriver={ this.props.navigation.navigate }
            />
        </SafeAreaView>
    );
    }
}

export default Season;