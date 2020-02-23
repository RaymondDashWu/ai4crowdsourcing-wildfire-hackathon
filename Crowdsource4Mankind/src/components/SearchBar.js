import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Image } from 'react-native';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = (evt) => {
    evt.preventDefault();
    setSearchQuery(searchQuery);
  }

  return (
    <View>
      <TextInput style={styles.textInput} placeholder="find your location" />
      <Button small title="Go!" onSubmit={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    margin: 5,
    marginBottom: 15,
    height: 50,
    width: '95%',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'black',
    textAlign: 'center',
    color: '#d6f5e6',
  }
});

export default SearchBar;