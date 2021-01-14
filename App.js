import 'react-native-gesture-handler';
import React, { Fragment } from 'react';
import { View } from 'react-native'
import Amplify from 'aws-amplify';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigator/Drawer'

import awsconfig from './src/aws-exports';
Amplify.configure(awsconfig);

const App = () => {
    return (
        <React.Fragment>  
            <Navigator />   
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
  
});

export default App;
