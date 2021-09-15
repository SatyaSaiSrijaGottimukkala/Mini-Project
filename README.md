# Mini-Project
long stay villa
Team Members - 
1. Srija
2. KondaReddy T
3. Vishnu Priya
4. Rahul


follow the steps to build your reactnative LongstayVilla app
step-1 : to create a react native folder 



**********COMMANDS*****************
           cd Documents
          mkdir reactNative
          cd reactNative
          npm install -g react-native-cli
          react-native init LongstayVilla
          cd LongstayVilla
          yarn install
          react-native run-ios
          yarn add @react-navigation/native
          yarn add @react-navigation/stack
          yarn add react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
          yarn add @react-navigation/bottom-tabs
          cd ios
          cd pod install
          cd ..
          react-native run-ios


***********COMMANDS*****************



run the above commands in terminal to create and setup dependencies for navgation,bottomtabs.
check your package.json to make sure your dependecies are installed perfectly


step-1
in your react-native folder, create a folder for components and add the files in our components folder 

step-2
create a new folder name it services and add the files in our service folder

step-3 
we need icons and fonts for our project for which we are using react nativ vector icons as well as Montserrat-bold font style


*****************COMMANDS************************

1.npm i react-native-vector-icons/ yarn add react-native-vector-icons

In IOS folder, go to folder with your project name ----- go to Info.plist
and then add these in <dict>< /dict>

              <key>UIAppFonts</key>
              <array>
              <string>AntDesign.ttf</string>
              <string>Entypo.ttf</string>
              <string>EvilIcons.ttf</string>
              <string>Feather.ttf</string>
              <string>FontAwesome.ttf</string>
              <string>FontAwesome5_Brands.ttf</string>
              <string>FontAwesome5_Regular.ttf</string>
              <string>FontAwesome5_Solid.ttf</string>
              <string>Foundation.ttf</string>
              <string>Ionicons.ttf</string>
              <string>MaterialCommunityIcons.ttf</string>
              <string>MaterialIcons.ttf</string>
              <string>Octicons.ttf</string>
              <string>SimpleLineIcons.ttf</string>
              <string>Zocial.ttf</string>
              </array>
  

  After saving the file Info.plist
  
  Run these commands again
  
            cd ios
            cd pod install
            cd ..
            react-native run-ios




****************COMMANDS**************************



step-4
change the code in your Appjs with our App.js file 

step-5
'react-native run-ios' command in your terminal

node modules that need to be added :

1. npm install react-native-paper or yarn add react-native-paper
2. npm install react-native-reanimated or yarn add react-native-reanimated 
3. npm install react-native-vector-icons or yarn add react-native-vector-icons
4. npm install @react-navigation/bottom-tabs or yarn add @react-navigation/bottom-tabs
5. npm install @react-navigation/stack or yarn add @react-navigation/stack
6. npm install @react-native-community/masked-view or yarn add @react-native-community/masked-view
