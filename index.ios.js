/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
  var gapi = require('gapi');
 import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

const onButtonPress = () => {
  console.log('Test siraj');
  gapi.server.setApiKey('AIzaSyB3TlhbCMpeqMmM4fTsOAYvR9Dy3mPDUE4')
  gapi.server.load('plus','v1',function(){
    var request = gapi.server.plus.people.get({userId: '102147307918874735077'});
    request.execute(function(resp){
        console.log(resp);
        console.log('Test siraj');
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(resp));
    });
  });
};

export default class Space extends Component {

 constructor(props) {
  super(props);

  GoogleSignin.configure({
        iosClientId: "241655011171-5domt4jit9v0gor88rahvflkohrcoaaa.apps.googleusercontent.com", // only for iOS
      })
  .then(() => {
        // you can now call currentUserAsync()
      });
}

// buttonClicked: function() {
//     console.log('button clicked');
//   },

// onButtonPress = () => {
//         console.log('Test siraj');
//   gapi.server.setApiKey('AIzaSyB3TlhbCMpeqMmM4fTsOAYvR9Dy3mPDUE4')
//   gapi.server.load('plus','v1',function(){
//     var request = gapi.server.plus.people.get({userId: '102147307918874735077'});
//     request.execute(function(resp){
//         console.log(resp);
//         console.log('Test siraj');
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         res.end(JSON.stringify(resp));
//     });
//   });
// },

render() {
  return (
    <Button
     onPress={onButtonPress}
     title="Learn More"
     color="#841584"
     accessibilityLabel="Learn more about this purple button"/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Space', () => Space);
