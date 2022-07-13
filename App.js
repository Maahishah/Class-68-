import { StyleSheet, Text, View, Image,  } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import BottomTabNavigator from './components/bottomTabNavigator';

export default class App extends Component {
  render (){
  return (
   <BottomTabNavigator/>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
