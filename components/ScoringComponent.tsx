import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native';
const Separator = () => <View style={styles.separator} />;

export default function ScoreBoard() {
    const [score1, setState1] = useState(0);
    const [score2, setState2] = useState(0);
    const [winner, setWinner] = useState('Nobody is the winner (yet)!');
    
    useEffect(() => {
        if(checkWin()!==0){
            setWinner('WINNER WINNER CHICKEN DINNER!? Team ' + checkWin() + ' is the winner!');
        }else{
            setWinner('Nobody is the winner (yet)!');

        }
    });
  
    const upTick = () => {
        setState1(score1 + 1);
    };
    const upTick2 = () => {
        setState2(score2 + 1);
    };

    const downTick = () => {
        if(score1!==0){
            setState1(score1 - 1);
        }
    };
    const downTick2 = () => {
        if(score2!==0){
            setState2(score2 - 1);
        }
    };
    const resetScore = () => {
        setState1(0);
    }
    const resetScore2 = () => {
        setState2(0);
    }
    const resetGame = () =>{
        setState1(0);
        setState2(0);
    }
    const checkWin = () =>{
        if(score1 >=25 && score1-score2>=2){
            return 1;
        }
        else if(score2 >=25 && score2-score1>=2){
            return 2;
        }
        return 0;
    }
    return <SafeAreaView style={styles.container}>
    <View>
        <Text selectable={false} style={{fontSize: 33, left: 75, maxWidth:350, backgroundColor:'black', color: 'gold', textAlign: 'center'}}>{winner}</Text>
        <Button color="grey" 
            onPress={() => resetGame()} title="Reset Game"
            />
    </View>

    <View>
        <Text selectable={false} onPress={() => upTick()} style={{textAlign: 'center', color: '#38023B', minWidth: 300, fontSize: 100}}>
        <Text style={{fontSize: 45}}>Team 1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>{score1}</Text>
        <Button
            onPress={() => resetScore()} title="Reset Score"
            />
    </View>

    <View>
      
        <View style={styles.fixToText}>
            <View style={styles.smallothy}>
                <Button color="red" onPress={() => downTick()} title="-1"/>
            </View>
            
            <View style={styles.smallothy}>
                <Button color="green" onPress={() => upTick()} title="+1"/>
            </View>
        </View>

    </View>

    <Separator />

    <View>
    <Text selectable={false}  onPress={() => upTick2()} style={{textAlign: 'center', color: '#38023B', minWidth: 300, fontSize: 100}}>
        <Text style={{fontSize: 45}}>Team 2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Text>{score2}</Text>
        
        <Button
            onPress={() => resetScore2()} title="Reset Score"
        />
    </View>

    <View>
        <View style={styles.fixToText}>
            <View style={styles.smallothy}>
                <Button color="red" onPress={() => downTick2()} title="-1"/>
            </View>
            
            <View style={styles.smallothy}>
                <Button color="green" onPress={() => upTick2()} title="+1"/>
            </View>
        </View>
    </View>
            
  </SafeAreaView>
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      width: 500,
    },
    smallothy: {
        width: 250,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
  