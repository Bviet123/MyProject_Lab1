import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Calculator = () => {
  const [historyText, setHistoryText] = useState('');
  const [resultText, setResultText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleButtonPress = (value) => {
    switch (value) {
      case 'C':
        setHistoryText('');
        setResultText('');
        break;
      case '=':
        try {
          setResultText(eval(historyText).toString());
          setHistoryText('');
        } catch (error) {
          setResultText('Error');
          setHistoryText('');
        }
        break;
      case 'theme':
        setIsDarkMode(!isDarkMode);
        break;
      default:
        setHistoryText(historyText + value);
        setResultText(historyText + value);
        break;
    }
  };

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : null]}>
      <View style={[styles.containerResult, isDarkMode ? styles.darkContainerResult : null]}>
        <Text style={[styles.resultText, isDarkMode ? styles.darkResultText : null]}>{resultText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonColumn}>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('C')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('+')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('-')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('*')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('7')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('8')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('9')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('/')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('4')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('5')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('6')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('=')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>
              =
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('1')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('2')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('3')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('0')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity
            style={[styles.button, isDarkMode ? styles.darkButton : null]}
            onPress={() => handleButtonPress('theme')}
          >
            <Text style={[styles.buttonText, isDarkMode ? styles.darkButtonText : null]}>
              {isDarkMode ? '☀️' : '🌙'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  containerResult: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  darkContainerResult: {
    backgroundColor: '#333',
  },
  resultText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  darkResultText: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  buttonColumn: {
    flexDirection: 'column',
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 35,
  },
  darkButton: {
    backgroundColor: '#555',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  darkButtonText: {
    color: '#fff',
  },
});

export default Calculator;