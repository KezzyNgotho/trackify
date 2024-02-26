// FarmScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Cattle List</Text>
        {cattleList.map((cattle) => (
          <TouchableOpacity key={cattle.id} onPress={() => handleCattlePress(cattle)}>
            <View style={styles.cattleItem}>
              <Text>Name: {cattle.name}</Text>
              <Text>Type: {cattle.type}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={handleAddCattle}>
          <Text style={styles.addButtonText}>Add Cattle</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cattleItem: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FarmScreen;
