import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const initialBoard = new Array(9).fill('');

const numColumns = 3;

const App = () => {
  const [isXsTurn, setIsXsTurn] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState('');
  const [isMatchDrawn, setIsMatchDrawn] = useState(false);

  const checkWinner = () => {
    if (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') {
      console.log('1');
      setWinner('O');
    }
    if (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') {
      console.log('2');
      setWinner('O');
    }
    if (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') {
      console.log('3');
      setWinner('O');
    }
    if (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') {
      console.log('4');
      setWinner('O');
    }
    if (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') {
      console.log('5');
      setWinner('O');
    }
    if (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') {
      console.log('6');
      setWinner('O');
    }
    if (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') {
      console.log('7');
      setWinner('O');
    }
    if (board[2] === 'O' && board[4] === 'O' && board[6] === 'O') {
      console.log('8');
      setWinner('O');
    }

    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') {
      console.log('9');
      setWinner('X');
    }
    if (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') {
      console.log('10');
      setWinner('X');
    }
    if (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') {
      console.log('11');
      setWinner('X');
    }
    if (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') {
      console.log('12');
      setWinner('X');
    }
    if (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') {
      console.log('13');
      setWinner('X');
    }
    if (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') {
      console.log('14');
      setWinner('X');
    }
    if (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') {
      console.log('15');
      setWinner('X');
    }
    if (board[2] === 'X' && board[4] === 'X' && board[6] === 'X') {
      setWinner('X');
    }

    setIsMatchDrawn(
      board.every(value => {
        return value !== '';
      }),
    );
    console.log('Winner is: ', winner);
  };

  const onItemPressed = index => {
    if (board[index] === '') {
      board[index] = isXsTurn ? 'X' : 'O';
      console.log('Board... ', board);
      setIsXsTurn(!isXsTurn);
      checkWinner();
    }
    console.log('Print Board: ', board);
  };

  const getColorForText = item => ({
    color: item === 'X' ? '#F6AD55' : '#4FD1C5',
  });

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => onItemPressed(index)}>
        <View style={styles.box}>
          <Text style={[styles.itemText, getColorForText(item)]}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setIsXsTurn(false);
    setWinner('');
    setIsMatchDrawn(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* First View with 50% height */}
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#6B46C1', '#3182CE']}
        style={styles.linearGradient}>
        <View style={styles.halfView}>
          <Text style={styles.header}>Welcome to Tic Tac Toe</Text>
          <FlatList
            data={board}
            renderItem={renderItem}
            numColumns={3}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        {/* Second View with 50% height */}
        <View style={styles.buttonViewContainer}>
          {isMatchDrawn ? (
            <Text style={styles.matchStatusText}>
              Oh No!! Match is Drawn, Play again
            </Text>
          ) : null}
          {winner !== '' ? (
            <Text style={styles.matchStatusText}>
              Yeah!! the Winner is Player {winner}
            </Text>
          ) : null}
          <TouchableOpacity style={styles.button} onPress={() => resetGame()}>
            <Text style={styles.buttonText}>Reset Game</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'white',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 28,
  },
  itemText: {
    fontWeight: '700',
    fontSize: 32,
  },
  linearGradient: {
    flex: 1,
  },
  halfView: {
    flex: 0.7,
  },
  buttonViewContainer: {
    flex: 0.3,
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#2D3748',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orangeColorText: {
    color: '#F6AD55',
  },
  tealColorText: {
    color: '#4FD1C5',
    fontWeight: '700',
    fontSize: 32,
  },
  button: {
    backgroundColor: '#ED64A6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4A5568',
    shadowOpacity: 0.9,
    shadowOffset: {width: 0, height: 6},
    elevation: 8,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  matchStatusText: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
