/**
 * AddRecord Component
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

import Helper from './../shared/Helper';

export default class AddRecord extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      recordWeigth: '',
      recordDate: ''
    }
  }

  validateWeight(text){
      const regexValidation = /^(\d)+\.*\d{0,2}$/;
      //Add Validation here, you can investigate hot to test a Regular Expression on JavaScript.
      if(regexValidation.test(text)){
        this.setState({recordWeigth: text });
      }
    }
  render() {
    const helper = new Helper();
    const fecha = helper.formatDate( new Date(),false);
    const fechaFinal = Date.now();
    //
    return (
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <TextInput
              onChangeText={(text)=> {this.validateWeight(text)}}
              style={styles.inputText}
              autoCorrect={false}
              underlineColorAndroid='transparent'
              placeholder={'Peso'}
              value={this.state.recordWeigth}
              clearButtonMode="while-editing"
              />
          <TextInput
              style={styles.inputText}
              editable={false}
              value={fecha}
              />
        </View>
        <View style={styles.actionContainer}>
          <TouchableHighlight style={styles.addButton} onPress={()=>{this.props.newRecord(this.state.recordWeigth,fechaFinal)}}>
            <Text style={styles.addButtonText}>AGREGAR</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  inputsContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  inputText: {
    fontSize: 19,
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  addButton:{
    width: 298,
    height: 43,
    borderWidth: 2,
    borderColor: '#f76d1d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  addButtonText: {
    fontSize: 17,
    color: '#f76d1d',
  }

});
