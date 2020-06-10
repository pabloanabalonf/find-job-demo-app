import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5
  },
  companyContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 110
  },
  companyLogo: {
    height: 110,
    width: 110,
    resizeMode: 'contain'
  },
  companyName: {
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  jobContainer: {
    paddingHorizontal: 5
  },
  jobTitle: {
    fontSize: 15,
    width: 250,
    fontWeight: 'bold'
  },
  jobLocation: {
    marginTop: 15,
    width: 200
  },
  jobType: {
    textAlign: 'center',
    fontSize: 11,
    color: '#fff',
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 7,
    backgroundColor: '#70b124',
    borderRadius: 5,
    overflow: 'hidden',
    width: 130
  }
});

export default (props) => {
  const imageUri = props.company_logo != null ? props.company_logo : "";

  return (
    <View style={styles.container}>
      <View style={styles.companyContainer}>
        <Image source={imageUri.length !=0 ? { uri: imageUri } : null} style={styles.companyLogo} />
        <Text style={styles.companyName}>{props.company}</Text>
      </View>
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>{props.title}</Text>
        <Text style={styles.jobLocation}>Location: {props.location}</Text>
        <Text style={styles.jobType}>{props.type}</Text>
      </View>
    </View>
  );
}