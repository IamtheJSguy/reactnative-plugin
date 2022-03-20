import {Alert, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import AppButton from './components/AppButton';
import AppText from './components/AppText';
import AppTextInput from './components/AppTextInput';
import Card from './components/Card';
import CustomLoader from './components/CustomLoader';
import colors from './theme/colors';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();
  const baseUrl = 'https://swapi.dev/api/';
  const onChangeQuery = data => {
    setQuery(data);
  };

  const getData = async querytext => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}${querytext}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getData(query);
    } else {
      getData('people/1/');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading && <CustomLoader visible={isLoading} />}
      <View>
        <View style={styles.inputBlock}>
          <AppText children={baseUrl} textStyle={styles.textStyle} />
          <AppTextInput
            autoCorrect={false}
            value={query}
            placeholder="people/1/"
            autoCapitalize="none"
            onChangeText={onChangeQuery}
            inputStyle={styles.inputStyle}
          />
          <AppButton
            title="Request"
            onPress={() => {
              if (query) {
                getData(query);
              } else {
                Alert.alert('Please enter query for request...');
              }
            }}
            btnStyle={styles.btnStyle}
          />
        </View>
        <AppText
          children={'Need a hint? try people/1/ or planets/3/ or starships/9/'}
          style={styles.hintText}
        />
        <Card data={data} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textStyle: {
    fontSize: 14,
    padding: 12,
    color: colors.white,
    backgroundColor: colors.inActive,
  },
  hintText: {
    fontSize: 12,
    marginHorizontal: 15,
    marginBottom: 15,
  },
  inputBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginHorizontal: 50,
    marginBottom: 5,
  },
  inputStyle: {
    width: '40%',
    paddingHorizontal: 5,
    margin: 0,
  },
  btnStyle: {
    backgroundColor: colors.darkGrey,
  },
});
