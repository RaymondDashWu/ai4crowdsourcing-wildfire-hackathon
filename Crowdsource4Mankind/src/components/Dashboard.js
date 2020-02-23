import React, { Component } from "react";
import { StyleSheet, Button, View, Text, Image, Icon } from 'react-native';
import SearchBar from "./SearchBar";

class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.dashTitle}>
          #Crowdsourcing4Mankind
        </Text>
        <SearchBar />
        {/* replace image with react-native-camera */}
          <Image style={styles.camera} source={require("./../images/camera_icon.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dashTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  camera: {
    marginLeft: 10,
  }
});

export default Dashboard;