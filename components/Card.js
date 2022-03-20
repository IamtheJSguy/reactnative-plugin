import {ScrollView, StyleSheet, View} from 'react-native';

import AppText from './AppText';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../theme/colors';

const propTypes = {
  data: PropTypes.object,
};

class Card extends React.PureComponent {
  render() {
    const {data} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView>
          <AppText style={styles.cardTxt}>
            {JSON.stringify(data, null, 2)}
          </AppText>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  cardTxt: {
    fontSize: 14,
    color: colors.black,
  },
});

Card.propTypes = propTypes;

export default Card;
