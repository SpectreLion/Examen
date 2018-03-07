import React, {Component}from 'react';
import{
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight
}from 'react-native';

import Helper from './../shared/Helper';
export default class RecordsContents extends Component{
  constructor(props){
    super(props);

  }


  render(){
    const {weigth,date,id}=this.props.records;
    const helper = new Helper();
    return(
      <View style={styles.recordContainer} >
        <Text style={styles.recordWeightText}>{weigth}</Text>
        <Text style={styles.recordDateText}>{helper.formatDate(date)}</Text>
      </View>
  )}
}

const styles = StyleSheet.create({
  recordContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    borderBottomWidth: 1,
    borderBottomColor: '#e4e4e4',
    paddingLeft: 20,
    paddingRight: 20
  },
  recordWeightText: {
    fontSize: 21,
    color: '#f76d1d'
  },
  recordDateText: {
    fontSize: 21,
    color: 'gray'
  }
})
