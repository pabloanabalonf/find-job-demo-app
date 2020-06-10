/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Button,
  TextInput,
  View
} from 'react-native';
import Header from './src/components/header';
import JobList from './src/components/job-list';
import API from './src/utils/api';

// SafeAreaView es un componente para la compatibilidad de iphone X por ejemplo

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  textInputContainer: {
    padding: 5,
    borderBottomColor: '#000000',
    borderBottomWidth: 1
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  textButton: {
    color: "#f194ff"
  }
});

const App: () => React$Node = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, onChangeText] = useState('');
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (search) => {
    const jobsFound = await API.getJobs(search);
    setLoading(false);
    setJobs(jobsFound);
  };

  const findJobs = () => {
    setLoading(true);
    fetchData(searchTerm);
  }

  const onChangeTextEvent = (text) => {
    onChangeText(text);
    setJobs([]);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header title="Find Job App" />
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Ej: Node"
              style={styles.textInput}
              onChangeText={onChangeTextEvent}
              value={searchTerm}
            />
            <Button
              onPress={findJobs}
              title="Find"
              style={styles.textButton}
            />
          </View>
          <JobList isLoading={isLoading} jobSearched={searchTerm} jobs={jobs} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
