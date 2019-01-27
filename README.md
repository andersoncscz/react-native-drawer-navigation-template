# React-Native-Drawer-Navigation-Template
A React Native Drawer Navigation Template for using with some of the most useful dependencies. <br/><br/>
- FireBase
- React Navigation
- Redux
- React Redux
- Redux Thunk
- Remote Redux DevTools

# How to use it?
- You need to install node_modules. </b>
- Go to the project folder and type npm_install to install node_modules. </b>
- After node_modules installed, you need to install some of the dependencies bellow. </b>

<b>Theses bold dependencies are necessary to run the app, the other ones are optional.</b>

firebase: ^5.8.1 <br/><br/>
react: 16.6.3 <br/>
react-native: 0.58.1 <br/>
react-native-action-button: ^2.8.5 <br/>
<b>react-native-gesture-handler: ^1.0.15 <b><br/>
react-native-vector-icons: ^6.2.0 <br/>
<b>react-navigation: ^3.0.9 <b/><br/><br/>
<b>react-redux: ^6.0.0 <b/><br/>
<b>redux: ^4.0.1 <b/><br/>
<b>redux-thunk: ^2.3.0 <b/><br/>
<b>remote-redux-devtools: ^0.5.16 <b/> (This is a powerful Chrome's extension to see what's happening in Redux)

# Where's the Redux?
You can find the Redux's configuration at <br/>
<b>Router.js <b/> <br/> <br/>

This file is wrapping all the application with <b>Provider<b/> component.

# Configuration Files
These are the main files you will need to change during the development.
Router Configuration <br/>
The Router's configuration takes care of the screens and navigation. <br/>
RouterSettings.js

Drawer Navigation Configuration <br/>
The DrawerNavigationSettings' configuration takes care of the layout. <br/>
DrawerNavigationSettings.js

FireBase Configuration <br/>
The FireBase's configuration is an object with you firebase config.<br/>
FireBaseSettings.js

More information <br/>
If you want more information about the project, please take a look at package.json wich has all the dependencies used.
