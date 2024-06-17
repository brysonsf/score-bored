import { Text, View } from "react-native";
import Tester from '../components/tester';
export default function Index() {
  return (
    // #F4FDFF cool white, #E6E6FA lavendar, #38023B burgundy
    <View style={{flex: 1, backgroundColor: '#E6E6FA', justifyContent: "center", alignItems: "center",}}>
      <Tester />
    </View>
  );
  
}
