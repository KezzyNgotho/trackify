import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CattleDetailsScreen = ({ route }) => {
  const { cattle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cattle Details</Text>
      <View style={styles.detailsContainer}>
        <Text>Name: {cattle.name}</Text>
        <Text>Number: {cattle.number}</Text>
        <Text>Type: {cattle.type}</Text>
        <Text>Age: {cattle.age}</Text>
        <Text>Status: {cattle.status}</Text>
        <Text>Milking: {cattle.milking ? 'Yes' : 'No'}</Text>
        <Text>Barren: {cattle.barren ? 'Yes' : 'No'}</Text>
        <Text>Gender: {cattle.gender}</Text>
        <Text>Birth Date: {cattle.birthDate}</Text>
        <Text>Health Conditions: {cattle.healthConditions}</Text>
        <Text>Last Vaccination Date: {cattle.lastVaccinationDate}</Text>
      </View>
    </View>
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
  detailsContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
});

export default CattleDetailsScreen;
