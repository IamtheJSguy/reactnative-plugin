import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import colors from '../theme/colors';
import defaultStyles from '../theme/styles';

function AppButton({title, btnStyle, textStyle, onPress}) {
  return (
    <TouchableOpacity
      style={[styles.container, btnStyle]}
      onPress={onPress}
      activeOpacity={0.8}>
      <View>
        <Text style={[defaultStyles.text, styles.btnText, textStyle]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    alignSelf: 'stretch',
    padding: 8,
    placeholderTextColor: colors.primary,
  },
  btnText: {
    width: '100%',
    color: colors.dark,
    textAlign: 'center',
  },
});

export default AppButton;
