import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const FarmScreen = ({ navigation }) => {
  const [cattleList, setCattleList] = useState([
    {
      id: 1,
      name: 'Betsy',
      number: '001',
      type: 'Holstein',
      age: '5',
      status: 'Active',
      milking: true,
      barren: false,
      gender: 'Female',
      birthDate: '2019-05-12',
      healthConditions: 'Healthy',
      lastVaccinationDate: '2023-12-01'
    },
    {
      id: 2,
      name: 'Bob',
      number: '002',
      type: 'Angus',
      age: '4',
      status: 'Active',
      milking: false,
      barren: false,
      gender: 'Male',
      birthDate: '2020-03-15',
      healthConditions: 'None',
      lastVaccinationDate: '2023-11-20'
    },
    // Add more cattle data as needed
  ]);

  const handleCattlePress = (cattle) => {
    // Navigate to cattle details screen with cattle data
    navigation.navigate('CattleDetails', { cattle });
  };

  const handleAddCattle = () => {
    // Navigate to register cattle screen
    navigation.navigate('RegisterCattle');
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require('../assets/icons8-back-24.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>Cattle List</Text>
      </View>
      {cattleList.map((cattle) => (
        <TouchableOpacity key={cattle.id} onPress={() => handleCattlePress(cattle)}>
          <View style={styles.cattleItem}>
            <Text style={styles.cattleName}>{cattle.name}</Text>
            <Text style={styles.type}>Type: {cattle.type}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddCattle}>
        <Image source={require('../assets/icons8-add-50.png')} style={styles.addButtonIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: 'maroon',
    marginLeft: 60,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  cattleItem: {
    backgroundColor: '#fff',
    borderRadius: 1,
    padding: 15,
    marginBottom: 15,
   
    elevation: 1,
  },
  cattleName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'maroon',
  },
  type:{
color:'black',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'maroon',
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  addButtonIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
});

export default FarmScreen;
