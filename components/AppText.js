import React from 'react';
import {Text} from 'react-native';
import defaultStyles from '../theme/styles';

function AppText({children, textStyle, ...otherProps}) {
  return (
    <Text style={[defaultStyles.text, textStyle]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;
