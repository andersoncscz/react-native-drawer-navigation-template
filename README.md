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
Go to the project folder and type npm install to install node_modules.

#### 2. Finally run <br/>
react-native run-android <br/>

# Redux
#### DrawerNavigatorApp.js
In this file you can find the Redux's configuration, where the entire application is being wrapped by the Provider component. This file already has a rootReducer and two midlewares set up. <br/>
New reducers must be imported and included in .../src/reducers/index.js.

# Configuration

#### These are the main files you will need to change during the development.
#### RouterSettings.js
The Router's configuration is resposible for the screens you will create and the navigation between them.

#### DrawerNavigationSettings.js
The DrawerNavigationSettings' configuration is resposible for the drawer navigation layout.

#### FireBaseSettings.js
The FireBase's configuration is resposible for the firebase config.

#### More information
If you want more information about the project, please take a look at package.json wich has all the dependencies used.

# A Template Preview
![alt text](https://github.com/andersoncscz/React-Native-Drawer-Navigation-Template/blob/master/GifAPP.gif)
