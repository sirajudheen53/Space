/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';


export default class Space extends Component {
   constructor(props) {
      super();
      GoogleSignin.configure({
        iosClientId: "241655011171-5domt4jit9v0gor88rahvflkohrcoaaa.apps.googleusercontent.com", // only for iOS
      })
      .then(() => {
        // you can now call currentUserAsync()
      });
    }

  signIn() {
    GoogleSignin.signIn()
.then((user) => {
  console.log("In login view");
  console.log(user);
  this.setState({user: user});
})
.catch((err) => {
  console.log("In error");
  console.log('WRONG SIGNIN', err);
})
.done();
  }

  render() {
    return (
      <GoogleSigninButton
    style={{width: 48, height: 48}}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
     onPress={this.signIn.bind(this)}/>
    );
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
