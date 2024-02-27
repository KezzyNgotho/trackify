import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput, Button  } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
// Custom Checkbox component using image icons
const CustomCheckbox = ({ label, checked, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
    <Text style={styles.checkboxLabel}>{label}</Text>
    <Image
      source={checked ? require('../assets/icons8-checked-24.png') : require('../assets/icons8-circle-48.png')}
      style={styles.checkboxIcon}
    />
  </TouchableOpacity>
);

const RegisterCattleScreen = () => {
    const navigation = useNavigation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [milking, setMilking] = useState(false);
  const [barren, setBarren] = useState(false);
  const [pregnant, setPregnant] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());
  const [healthConditions, setHealthConditions] = useState('');
  const [lastVaccinationDate, setLastVaccinationDate] = useState(new Date());
  const [showBirthDatePicker, setShowBirthDatePicker] = useState(false);
  const [showVaccinationDatePicker, setShowVaccinationDatePicker] = useState(false);

  const handleAddCattle = () => {
    // Calculate cattle age
    const today = new Date();
    const diffTime = Math.abs(today - birthDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365);
    
    // Add your logic to save cattle data
    console.log('Cattle Registered:', {
      name,
      number,
      age: diffYears,
      status,
      gender,
      milking,
      barren,
      pregnant,
      birthDate,
      healthConditions,
      lastVaccinationDate,
    });
    
    // Reset form fields after registration
    setName('');
    setNumber('');
    setStatus('');
    setGender('');
    setMilking(false);
    setBarren(false);
    setPregnant(false);
    setBirthDate(new Date());
    setHealthConditions('');
    setLastVaccinationDate(new Date());
  };

  const onChangeBirthDate = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowBirthDatePicker(false);
    setBirthDate(currentDate);
  };

  const onChangeVaccinationDate = (event, selectedDate) => {
    const currentDate = selectedDate || lastVaccinationDate;
    setShowVaccinationDatePicker(false);
    setLastVaccinationDate(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
   
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('../assets/icons8-back-24.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.heading}>Register New Cattle</Text>
      </View>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
        theme={{ colors: { primary: 'black' } }}
      />
      <TextInput
        label="Number"
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        style={styles.input}
        theme={{ colors: { primary: 'black' } }}
      />
      <TextInput
        label="Status"
        value={status}
        onChangeText={setStatus}
        style={styles.input}
        theme={{ colors: { primary: 'black' } }}
      />

      <View style={styles.checkboxRow}>
        <CustomCheckbox
          label="Gender: Male"
          checked={gender.toLowerCase() === 'male'}
          onPress={() => setGender('male')}
        />
        <CustomCheckbox
          label="Gender: Female"
          checked={gender.toLowerCase() === 'female'}
          onPress={() => setGender('female')}
        />
      </View>

      <View style={styles.datePickerContainer}>
        <Text style={styles.selectDateText}>Select Birth Date</Text>
        <Button
          onPress={() => setShowBirthDatePicker(true)}
          style={styles.datePickerButton}
          compact
        >
          <Image source={require('../assets/icons8-calendar-50.png')} style={styles.calendarIcon} />
        </Button>
        <Text style={styles.selectDateLabel}>{birthDate.toDateString()}</Text>
        {showBirthDatePicker && (
          <DateTimePicker
            value={birthDate}
            mode="date"
            display="default"
            onChange={onChangeBirthDate}
          />
        )}
      </View>

      <View style={styles.checkboxRow}>
        <CustomCheckbox
          label="Milking"
          checked={milking}
          onPress={() => setMilking(!milking)}
        />
        <CustomCheckbox
          label="Barren"
          checked={barren}
          onPress={() => setBarren(!barren)}
          disabled={gender.toLowerCase() === 'male'}
        />
        <CustomCheckbox
          label="Pregnant"
          checked={pregnant}
          onPress={() => setPregnant(!pregnant)}
          disabled={gender.toLowerCase() === 'male' || barren}
        />
      </View>

      <TextInput
        label="Health Conditions"
        value={healthConditions}
        onChangeText={setHealthConditions}
        style={styles.input}
        theme={{ colors: { primary: 'black' } }}
      />

      <View style={styles.datePickerContainer}>
        <Text style={styles.selectDateText}>Select Last Vaccination Date</Text>
        <Button
          onPress={() => setShowVaccinationDatePicker(true)}
          style={styles.datePickerButton}
          compact
        >
          <Image source={require('../assets/icons8-calendar-50.png')} style={styles.calendarIcon} />
        </Button>
        <Text style={styles.selectDateLabel}>{lastVaccinationDate.toDateString()}</Text>
        {showVaccinationDatePicker && (
          <DateTimePicker
            value={lastVaccinationDate}
            mode="date"
            display="default"
            onChange={onChangeVaccinationDate}
          />
        )}
      </View>

      <Button
  onPress={handleAddCattle}
  style={styles.button}
  compact
  labelStyle={styles.buttonLabel}
>
  Register Cattle
</Button>



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'white'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    //borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignContent:'center'
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'maroon', // Adjust color as needed
    fontFamily: 'cursive', // Change font to caligraphed font
    marginBottom: 10,
    //alignSelf:'center',
    marginLeft:60,
  },
  
  input: {
    borderBottomWidth: 0.7,
    borderBottomColor: 'maroon',
    fontSize: 14,
    marginBottom: 10,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
    color:'black'
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  datePickerButton: {
    marginRight: 10,
    backgroundColor: 'transparent',
  },
  selectDateText: {
    fontSize: 14,
    marginRight: 5,
    color: 'black',
  },
  selectDateLabel: {
    fontSize: 14,
    marginLeft: 10,
    color:'black',
  },
  button: {
    marginTop: 20,
    borderRadius: 1, // Adjust border radius as needed
    backgroundColor: 'maroon',
    // Add other styling properties like width, height, padding, etc. as needed
  },
  
  buttonLabel: {
    fontSize: 16, // Adjust font size as needed
    fontWeight: 'bold', // Adjust font weight as needed
    color: 'white', // Adjust font color as needed
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  checkboxLabel: {
    fontSize: 12,
    color: 'black',
    marginLeft: 5,
    fontWeight:'bold'
  },
  checkboxIcon: {
    width: 24,
    height: 24,
  },
  calendarIcon: {
    width: 24,
    height: 24,
  },
  checkboxRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  
});

export default RegisterCattleScreen;
