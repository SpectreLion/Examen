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
      ],
      asDate:true,
      asPeso:true
    }

  }
  orderRecords(){
    //Copiar estado
    let currentRecord =[...this.state.records];
    //actualizar estado
    if(this.state.asDate){
      currentRecord.sort((a, b) => a.date - b.date);
        this.setState({asDate: false});
    }else {
      currentRecord.sort((a, b) => b.date - a.date);
        this.setState({asDate: true});
    }
    this.setState({records:currentRecord});
  }

  orderRecordsWeigth(){
    //Copiar estado
    let currentRecord =[...this.state.records];
    //actualizar estado
    if(this.state.asPeso){
      currentRecord.sort((a, b) => a.weigth - b.weigth);
        this.setState({asPeso: false});
    }else {
      currentRecord.sort((a, b) => b.weigth - a.weigth);
        this.setState({asPeso: true});
    }
    this.setState({records:currentRecord});
  }

  lastRecord(){
    let currentRecord2 =[...this.state.records];
    currentRecord2.sort((a, b) => b.date - a.date);

    return currentRecord2[0].weigth;
  }

  newRecord(weigth,date){

    const id = 100+ this.state.records.length;
    const newRecord ={id,weigth,date};
    let records2 =[...this.state.records];
    records2.splice(0,0,newRecord);
    //records2.push(newRecord);
    //ACTUALZIAR EL ESTADO
    this.setState({records:records2});

  }

  renderRecords(){
    return(
      this.state.records.map((records)=>{
          return(
            <RecordsContents records={records} />
          )
      })
    )
  }

  render() {
    const {asDate}= this.state;
    const {asPeso}= this.state;
    const textFecha=asDate?"Fecha ▲":"Fecha ▼";
    const textPeso=asPeso?"Peso ▲":"Peso ▼";

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Registros de Peso</Text>
        </View>
        <View style={styles.currentWeight}>
          <CurrentWeight lastRecord= {this.lastRecord()}/>
        </View>
        <View style={styles.newRecord}>
          <AddRecord newRecord={this.newRecord.bind(this)}/>
        </View>
        <View style={styles.records}>
          <View style={styles.recordsBar}>
            <TouchableHighlight onPress={ ()=> {this.orderRecordsWeigth()}} >
              <Text style={styles.touchableBarText}>{textPeso}</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={ ()=> {this.orderRecords()}}>
              <Text style={styles.touchableBarText} >{textFecha}</Text>
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
