import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform
} from 'react-native';

// Dirección por defecto de Flex es por columnas, no por filas
// flexDirection: column
// background no existe (solo backgroundColor)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    ...Platform.select({
      ios: {
        backgroundColor: '#FFFEF2'
      },
      android: {
        backgroundColor: '#FFFDD1'
      }
    })
  },
  logo: {
    width: 80,
    height: 26,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/header-icon.png')} />
      <Text style={styles.text}>
        {props.title}
      </Text>
    </View>
  );
}

export default Header;