import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Iphone14ProMax1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="a1a552ad-399b-4ca7-9c14-98488f90a5d1" style={styles.iphone14ProMax1}>
        <View data-layer="c31fc2da-05c4-4331-90a2-ae2f55a5a788" style={styles.iphone14ProMax1_rectangle1}></View>
        <Svg data-layer="be1b774e-0a0f-4a90-878e-d44d3aba023e" style={styles.iphone14ProMax1_ellipse2} preserveAspectRatio="none" viewBox="-0.75 -0.75 83.5 76.5" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 41 0 C 63.6436767578125 0 82 16.7893238067627 82 37.5 C 82 58.21067810058594 63.6436767578125 75 41 75 C 18.35632514953613 75 0 58.21067810058594 0 37.5 C 0 16.7893238067627 18.35632514953613 0 41 0 Z"  /></Svg>
        <Text data-layer="88d81aeb-4d0a-400a-af22-95dde28c4234" style={styles.iphone14ProMax1_lightMode}>Light Mode</Text>
        <View data-layer="eaff47a8-7ff5-4689-a06a-2a2e939864cd" style={styles.iphone14ProMax1_rectangle3}></View>
    </ScrollView>
    );
  }
}

Iphone14ProMax1.propTypes = {

}

Iphone14ProMax1.defaultProps = {

}


const styles = StyleSheet.create({
  "iphone14ProMax1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 430,
    "height": 656,
    "left": 0,
    "top": 0
  },
  "iphone14ProMax1_rectangle1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(55, 39, 39, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 62,
    "borderTopRightRadius": 62,
    "borderBottomLeftRadius": 62,
    "borderBottomRightRadius": 62,
    "width": 339,
    "height": 124,
    "left": 56,
    "top": 57
  },
  "iphone14ProMax1_ellipse2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 82,
    "height": 75,
    "left": 93,
    "top": 86
  },
  "iphone14ProMax1_lightMode": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(55, 39, 39, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Segoe UI",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 102,
    "height": 27,
    "left": 119,
    "top": 261
  },
  "iphone14ProMax1_rectangle3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(55, 39, 39, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 60,
    "borderTopRightRadius": 60,
    "borderBottomLeftRadius": 60,
    "borderBottomRightRadius": 60,
    "width": 291,
    "height": 120,
    "left": 70,
    "top": 440
  }
});