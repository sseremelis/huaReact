import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  StatusBar,
  Platform
} from 'react-native'
import { DrawerNavigator } from 'react-navigation'

const isAndroid = Platform.OS === 'android'

class Screen1 extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
        <StatusBar barStyle="light-content" backgroundColor="blue" />
        <Text style={[styles.paragraph, { color: '#fff' }]}>Light Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen2')}
          color={isAndroid ? 'blue' : '#fff'}
        />
        <Button
          title="Toggle Drawer"
          onPress={() => this.props.navigation.navigate('DrawerToggle')}
          color={isAndroid ? 'blue' : '#fff'}
        />
      </SafeAreaView>
    )
  }
}

class Screen2 extends React.Component {
  render() {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
        <StatusBar translucent={false} barStyle="dark-content" />
        <Text style={styles.paragraph}>Dark Screen</Text>
        <Button
          title="Next screen"
          onPress={() => this.props.navigation.navigate('Screen1')}
        />
        <Button
          title="Toggle Drawer"
          onPress={() => this.props.navigation.navigate('DrawerToggle')}
        />
      </SafeAreaView>
    )
  }
}

export default DrawerNavigator(
  {
    Screen1: {
      screen: Screen1
    },
    Screen2: {
      screen: Screen2
    }
  },
  {
    initialRouteName: 'Screen1'
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  }
})
