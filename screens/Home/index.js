import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Seasons from './components/Seasons';

class Home extends Component {
    state = {
        seasons: [],
        loading: false,
    }
    
    componentDidMount() { 
        fetch(`https://ergast.com/api/f1/seasons.json?limit=100`)
            .then((response) => response.json())
            .then((body) => {
                const seasons = body.MRData.SeasonTable.Seasons.reverse().slice(0,10)
                this.setState({ seasons, loading: true })
            });
    }

    render() {
        const { seasons, loading } = this.state;

        return (
            <SafeAreaView>
                { !loading && <ActivityIndicator size="large" color="#3483fa" />}
                <Seasons 
                    data={ seasons }
                    handlerSeason={ this.props.navigation.navigate }
                />
            </SafeAreaView>
        );
    }
}

export default Home;