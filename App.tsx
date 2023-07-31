// import React, {useEffect, useState} from 'react';
// import {
//   Alert,
//   Button,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import useWSService from './src/utils/socketServies';

// const App = () => {
//   const [message, setMessage] = useState('');
//   const [data, setData] = useState<any>([]);
//   const socketService = useWSService();
// console.log(data);

//   useEffect(() => {
//     socketService.initializeSocket();
//   }, [socketService]);
//   useEffect(() => {
//     socketService.on('received', (msg) => {
//       let newData:any =[...data,msg]
//       setData(newData);
//     });
//   }, [data]);

//   const sendMessage = () => {
//     if (!!message) {
//       socketService.emit('send_msg', message);
//       setMessage('');
//     } else {
//       Alert.alert('Plz wirte ur msg');
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <View style={{flex: 0.7}}>
//             <TextInput
//               placeholder="Message"
//               style={styles.textInput}
//               value={message}
//               onChangeText={setMessage}
//             />
//           </View>
//           <View style={{flex: 0.2}}>
//             <Button
//               title="Send"
//               onPress={() => {
//                 sendMessage();
//               }}
//             />
//           </View>
//         </View>
//         {data?.map((item: any) => {
//           return <Text style={{paddingHorizontal:16}}>{item}</Text>;
//         })}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//   },
//   textInput: {
//     height: 48,
//     borderRadius: 8,
//     borderWidth: 1,
//     paddingHorizontal: 12,
//   },
// });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppNavigation from './src/Navigation/AppNavigation'

const App = () => {
  return (
   <SafeAreaView style={{flex:1}}>
    <AppNavigation/>

   </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})
