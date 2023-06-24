import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { AppContent } from '../store/AppContent';

export default function FlightCard({ item, active}) {
  const navigation = useNavigation();
  const { storedInfo, setFcn } = useContext(AppContent);
  const [isLogin, setIsLogin] = useState(false);
  const [btnTxt, setBtnTxt] = useState('Book');

  if (item.id==active && btnTxt=='Book'){
    console.log('I am in item id '+item.id);
    setBtnTxt('Cancel');
  }

  let flight = [];

  function pressHandler() {
    if (btnTxt === 'Book') {
      setBtnTxt('Cancel');
      if (!storedInfo.flightID.includes(item.id)){
        setFcn.addFlightId([item.id]);}
    }
    if (btnTxt === 'Cancel') {
      setBtnTxt('Book');
      setFcn.rmvFlightId(item.id);
    }
  }

  return (
    <TouchableOpacity style={btnTxt==='Book'? styles.cardUnSelected:styles.cardSelected}>
      <View style={styles.textContainer}>
        <Text style={styles.textBold}>
           {'Flight Number: '+item.flightNumber}
        </Text>
        <Text style={styles.textBold}>
          {'from '+item.departureCity + ' to ' + item.arrivalCity }
        </Text>
        <Text style={styles.textBold}>
          {'Departure Time: '+item.departureTime}
        </Text>
        <Text style={styles.textBold}>
          {'Price: '+item.flightPrice}
        </Text>
        <TouchableOpacity style={styles.button} onPress={pressHandler}>
          <Text style={styles.buttonText}>{btnTxt}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
const styles = {
  cardSelected: {
    flex: 1,
    backgroundColor: 'lightgreen',
    flexDirection: 'row',
    borderRadius: 16,
    margin: 8,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
    cardUnSelected: {
      flex: 1,
      backgroundColor: 'white',
      flexDirection: 'row',
      borderRadius: 16,
      margin: 8,
      width: '100%',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '40%',
    height: 120,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 6,
    alignItems: 'center',
    width: '60%',
  },
  textBold: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  textNotBold: {
    fontSize: 10,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 8,
  },
};
