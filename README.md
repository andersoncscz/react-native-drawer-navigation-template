# React-Native-Drawer-Navigation-Template
A React Native Drawer Navigation Template for using with some of the most useful dependencies. <br/><br/>
- FireBase
- React Navigation
- Redux
- React Redux
- Redux Thunk
- Remote Redux DevTools

# Usage

#### 1. Install node_modules.
Go to the project folder and type npm_install to install node_modules.

#### 2. After node_modules installed, you need to install all dependencies bellow via npm or yarn.

npm install react-native-action-button --save <br/>
npm install react-native-gesture-handler --save <br/>
npm install react-native-vector-icons --save <br/>
react-native link react-native-vector-icons <br/>
npm install react-navigation --save <br/>
npm install react-redux --save <br/>
npm install redux --save <br/>
npm install redux-thunk --save <br/>
npm install remote-redux-devtools --save (Powerful extension for Chrome that helps a lot <br/>

#### 4. Finally run <br/>
react-native run-android <br/>

# Redux
You can find the Redux's configuration at DrawerNavigatorApp.js. <br/>
This file already has a rootReducer and two midlewares set up. All the application is being wrapped by the Provider component. <br/>
The DrawerNavigatorApp.js is imported by App.js wich is responsible to render the app. <br/>

# Configuration

#### These are the main files you will need to change during the development.<br/><br/>
RouterSettings.js <br/>
The Router's configuration takes care of the screens and navigation. <br/><br/>


DrawerNavigationSettings.js <br/>
The DrawerNavigationSettings' configuration takes care of the layout. <br/><br/>

FireBaseSettings.js <br/>
The FireBase's configuration is an object with you firebase config.<br/><br/>

#### More information <br/>
If you want more information about the project, please take a look at package.json wich has all the dependencies used.

# A Template Preview
![alt text](https://github.com/andersoncscz/React-Native-Drawer-Navigation-Template/blob/master/GifAPP.gif)
