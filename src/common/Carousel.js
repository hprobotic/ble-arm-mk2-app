/*
* @Author: Tuan PM
* @Date:   2016-05-23 20:05:40
* @Last Modified by:   TuanPM
* @Last Modified time: 2016-05-23 20:05:58
*/

'use strict';


const React = require('react-native');
const ViewPager = require('./ViewPager');
const StyleSheet = require('./AppStyleSheet');

type Props = {
  count: number;
  selectedIndex: number;
  onSelectedIndexChange?: (index: number) => void;
  renderCard: (index: number) => ReactElement;
  style?: any;
};

class Carousel extends React.Component {
  props: Props;

  render() {
    let cards = [];
    const {count, selectedIndex, renderCard} = this.props;

    for (let i = 0; i < count; i++) {
      let content = null;
      if (Math.abs(i - selectedIndex) < 2) {
        content = renderCard(i);
      }
      cards.push(content);
    }
    return (
      <ViewPager style={styles.carousel} {...this.props} bounces={true}>
        {cards}
      </ViewPager>
    );
  }
}

var styles = StyleSheet.create({
  carousel: {
    ios: {
      margin: 10,
      overflow: 'visible',
      backgroundColor: 'black',
    },
  }
});

module.exports = Carousel;
