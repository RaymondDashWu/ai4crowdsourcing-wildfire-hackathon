import React, { Component, Fragment } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';
import { StyleSheet, Text } from 'react-native';

class MapScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coordinates: [
        { name: 'A', latitude: 37.8437342, longitude: -122.555406 },
        { name: 'B', latitude: 37.8867052, longitude: -122.549241 },
        { name: 'C', latitude: 37.866293, longitude: -122.511343 },
        { name: 'D', latitude: 37.845523, longitude: -122.487614 },
        { name: 'E', latitude: 37.8264832, longitude: -122.5136641 },
        { name: 'F', latitude: 37.834994, longitude: -122.548525 },
      ],
      markers: []
    }
  }
  render() {
    return (
      <Fragment>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.8461571,
            longitude: -122.5283655,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Polygon
            coordinates={this.state.coordinates}
            fillColor={'rgba(100,100,200,0.3)'}
            strokeWidth={3} />
          <Marker
            draggable
            coordinate={{ latitude: 37.8461571, longitude: -122.5283655 }}>
            <Callout>
              <Text>You are here! (15% Chance of Fire) </Text>
            </Callout>
          </Marker>
          {this.state.markers.map((marker, idx) => (
            <Marker key={idx} coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}>
              <Callout>
                <Text>{marker.name}</Text>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: '80%',
  },
});

export default MapScreen;