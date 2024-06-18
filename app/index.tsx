import { View } from "react-native";
import ScoreBoard from '../components/ScoringComponent';
export default function Index() {
  return (
    // #F4FDFF cool white, #E6E6FA lavendar, #38023B burgundy
    <View style={{flex: 1, backgroundColor: '#E6E6FA', justifyContent: "center", alignItems: "center",}}>
      <ScoreBoard />
    </View>
  );
  
}
