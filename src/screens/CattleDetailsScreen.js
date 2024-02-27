import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, ScrollView } from 'react-native';

const CattleDetailsScreen = ({ route, navigation }) => {
  const { cattle } = route.params;

  const [reason, setReason] = useState('');
  const [vaccine, setVaccine] = useState('');
  const [vaccineDate, setVaccineDate] = useState('');
  const [treatment, setTreatment] = useState('');
  const [treatmentDate, setTreatmentDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [cattleName, setCattleName] = useState(cattle.name);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDeleteCattle = () => {
    if (reason.trim() === '') {
      Alert.alert('Reason Required', 'Please provide a reason for deleting the cattle.');
      return;
    }

    // Logic to delete the cattle
    // For now, we just log the reason
    console.log('Cattle Deleted Reason:', reason);

    // Navigate back after deletion
    navigation.goBack();
  };

  const handleEditCattle = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    // Logic to save edited cattle details
    // For now, we just log the edited details
    console.log('Edited Cattle Details:', { ...cattle, name: cattleName });

    setIsEditing(false);
  };

  const handleSaveChanges = () => {
    // Logic to save all changes
    console.log('All Changes Saved');
    // You can add further logic here to save changes to the backend or database
  };

  const handleAddVaccine = () => {
    if (vaccine.trim() === '' || vaccineDate.trim() === '') {
      Alert.alert('Vaccine Info Required', 'Please provide both vaccine name and date.');
      return;
    }

    // Logic to add vaccine record
    // For now, we just log the vaccine details
    console.log('Vaccine Added:', { vaccine, date: vaccineDate });

    // Clear input fields after adding vaccine record
    setVaccine('');
    setVaccineDate('');
  };

  const handleAddTreatment = () => {
    if (treatment.trim() === '' || treatmentDate.trim() === '') {
      Alert.alert('Treatment Info Required', 'Please provide both treatment details and date.');
      return;
    }

    // Logic to add treatment record
    // For now, we just log the treatment details
    console.log('Treatment Added:', { treatment, date: treatmentDate });

    // Clear input fields after adding treatment record
    setTreatment('');
    setTreatmentDate('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image source={require('../assets/icons8-back-24.png')} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.heading}>Cattle Details</Text>
          {!isEditing && (
            <TouchableOpacity onPress={handleEditCattle}>
              <Image source={require('../assets/icons8-edit-50.png')} style={styles.editIcon} />
            </TouchableOpacity>
          )}
          {isEditing && (
            <TouchableOpacity onPress={handleSaveEdit}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.detailsContainer}>
          {isEditing ? (
            // Render editable inputs if in edit mode
            <>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={cattleName}
                onChangeText={(text) => setCattleName(text)}
              />
              {/* Add other editable fields as needed */}
            </>
          ) : (
            // Render non-editable details if not in edit mode
            <>
              <Text style={styles.detailText}>Name: {cattle.name}</Text>
              <Text style={styles.detailText}>Number: {cattle.number}</Text>
              <Text style={styles.detailText}>Type: {cattle.type}</Text>
              <Text style={styles.detailText}>Age: {cattle.age}</Text>
              <Text style={styles.detailText}>Status: {cattle.status}</Text>
              <Text style={styles.detailText}>Milking: {cattle.milking ? 'Yes' : 'No'}</Text>
              <Text style={styles.detailText}>Barren: {cattle.barren ? 'Yes' : 'No'}</Text>
              <Text style={styles.detailText}>Gender: {cattle.gender}</Text>
              <Text style={styles.detailText}>Birth Date: {cattle.birthDate}</Text>
              <Text style={styles.detailText}>Health Conditions: {cattle.healthConditions}</Text>
              <Text style={styles.detailText}>Last Vaccination Date: {cattle.lastVaccinationDate}</Text>
            </>
          )}

          {/* Add vaccine record */}
          <Text style={styles.sectionHeading}>Add Vaccine Record</Text>
          <TextInput
            style={styles.input}
            placeholder="Vaccine Name"
            value={vaccine}
            onChangeText={setVaccine}
          />
          <TextInput
            style={styles.input}
            placeholder="Date (YYYY-MM-DD)"
            value={vaccineDate}
            onChangeText={setVaccineDate}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddVaccine}>
            <Text style={styles.buttonText}>Add Vaccine</Text>
          </TouchableOpacity>

          {/* Add treatment record */}
          <Text style={styles.sectionHeading}>Add Treatment Record</Text>
          <TextInput
            style={styles.input}
            placeholder="Treatment Details"
            value={treatment}
            onChangeText={setTreatment}
          />
          <TextInput
            style={styles.input}
            placeholder="Date (YYYY-MM-DD)"
            value={treatmentDate}
            onChangeText={setTreatmentDate}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTreatment}>
            <Text style={styles.buttonText}>Add Treatment</Text>
          </TouchableOpacity>

          {/* Save Changes Button */}
          <TouchableOpacity style={styles.saveChangesButton} onPress={handleSaveChanges}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    color: 'maroon',
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  editIcon: {
    width: 30,
    height: 30,
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: 'black',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'white',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 0.9,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'maroon',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 80,
  },
  saveButton: {
    backgroundColor: 'maroon',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 80,
  },
  saveChangesButton: {
    backgroundColor: 'maroon',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CattleDetailsScreen;
