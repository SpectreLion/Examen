/**
 * Examen App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import CurrentWeight from './components/CurrentWeight';
import AddRecord from './components/AddRecord';
import RecordsContents from './components/RecordsContents';

export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      records: [
        { id: 0, weigth: 95, date: 1518449400000 },
        { id: 1, weigth: 96.1, date: 1518362400000 },
        { id: 2, weigth: 98, date: 1514995200000 },
        { id: 3, weigth: 94.5, date: 1512925200000 },
        { id: 4, weigth: 94, date: 1512147600000 },
        { id: 5, weigth: 93.5, date: 1512147600000 },
        { id: 6, weigth: 87.5, date: 1508770800000 }
      ]
    }
    asDate=false;
    asPeso=false;
  }
  orderRecords(as){
    //Copiar estado
    let currentRecord =[...this.state.tasks];
    //actualizar estado
    if(as){
      currentRecord.sort((a, b) => a.date - b.date);
    }else {
      currentRecord.sort((a, b) => b.date - a.date);
    }
    this.setState({records:currentRecord});
    asDate=!asDate;
    renderRecords();
  }

  renderRecords(){
    return(
      this.state.records.map((records)=>{
          return(
            <RecordsContents key= {records.id} records={records} />
          )
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Registros de Peso</Text>
        </View>
        <View style={styles.currentWeight}>
          <CurrentWeight/>
        </View>
        <View style={styles.newRecord}>
          <AddRecord/>
        </View>
        <View style={styles.records}>
          <View style={styles.recordsBar}>
            <TouchableHighlight >
              <Text style={styles.touchableBarText}>PESO</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={ ()=> {this.orderRecords.bind(this,asDate)}}>
              <Text style={styles.touchableBarText} >FECHA</Text>
          </TouchableHighlight>
          </View>
          <ScrollView style={styles.recordsContent}>
              {this.renderRecords()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#000000',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 21
  },
  currentWeight: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    padding: 20
  },
  newRecord: {
    height: 142,
    padding: 20
  },
  records: {
    flex: 1
  },
  recordsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    height: 30,
    backgroundColor: '#f76d1d'
  },
  touchableBarText: {
    fontSize: 15,
    color: 'white'
  }


});
