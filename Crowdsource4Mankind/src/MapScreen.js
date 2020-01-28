import React, { Component, Fragment } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from 'react-native-maps';
import { StyleSheet, Text } from 'react-native';

class MapScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      coordinates: [
        { name: 'Burger', latitude: 37.8025259, longitude: -122.4351431 },
        { name: 'Pizza', latitude: 37.7946386, longitude: -122.421646 },
        { name: 'Soup', latitude: 37.7665248, longitude: -122.4165628 },
        { name: 'Sushi', latitude: 37.7834153, longitude: -122.4527787 },
        { name: 'Curry', latitude: 37.7948105, longitude: -122.4596065 },
      ],
      markers: [
        {latitude: 37.7543152, longitude: -122.4699153},
        {latitude: 37.7584983, longitude: -122.4629585},
        {latitude: 37.7558824, longitude: -122.4608644},
        {latitude: 37.7583545, longitude: -122.4582032},
        {latitude: 37.7557869, longitude: -122.45721},
        {latitude: 37.7523273, longitude: -122.4592691},
      ]
    }
  }
  render() {
    return (
      <Fragment>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
        <Polygon 
          coordinates={this.state.coordinates} 
          fillColor={'rgba(100,100,200,0.3)'}
          strokeWidth={3}/>
        <Marker 
          draggable 
          coordinate={{ latitude: 37.7825259, longitude: -122.4351431 }}>
          <Callout>
            <Text>Interesting City</Text>
          </Callout>
        </Marker>
        {this.state.markers.map((marker, idx) => (
          <Marker key={idx} coordinate={{latitude: marker.latitude, longitude: marker.longitude}}></Marker>
        ))}
        </MapView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: '70%',
  },
});

export default MapScreen;