import { Text, View } from "react-native";
import Tester from '../components/tester';
export default function Index() {
  return (
    // #F4FDFF cool white, #E6E6FA lavendar, #38023B burgundy
    <View style={{flex: 1, backgroundColor: '#E6E6FA', justifyContent: "center", alignItems: "center",}}>
      <Text>Click to add score. use the -1 to reduce score. Automatically notifies you of a winner</Text>
      <Tester />
    </View>
  );
  
}
