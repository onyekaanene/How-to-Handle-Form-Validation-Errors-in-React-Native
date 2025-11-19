//How to Handle Form Validation Errors in React Native & Expo
import React, {useState} from 'react';
import {StyleSheet, Button, Text, View, TextInput} from 'react-native';


const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const validateForm = () => {
    // Clear previous errors
    setEmailError('');
    setPasswordError('');

    // Perform validation
    if (name === '') {
      setNameError('Name is required');
    }

    if (email.length === 0){
      setEmailError('Kindly enter your Email address')
    }

    if (!email.includes('@')){
      setEmailError('Kindly add @ to your email address')
    }

    if (!email.includes('.')){
      setEmailError('You missed adding "." to your email address')
    }

    if (email.indexOf(' ') >= 0){
      setEmailError('Please, write your email without spaces')
    }

    if (password.length <8){
      setPasswordError('Your password must have at least 8 characters')
    }

    if (password.indexOf(' ') >= 0){
      setEmailError('Password cannot contain spaces')
    }

   // Proceed with form submission if there are no errors
   if (nameError === '' && emailError === '' && passwordError === ''){
      // Submit form or perform desired action
      console.log('Form submitted!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>
      <TextInput
        style={styles.input}
        placeholder='Full Name'
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput 
        style={styles.input}
        placeholder ='Enter Email'
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput 
        style={styles.input}
        placeholder ='Enter Password'
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button
        title='Submit'
        onPress={validateForm}
      />
      <Text style={styles.error}>{nameError}</Text>
      <Text style={styles.error}>{emailError}</Text>
      <Text style={styles.error}>{passwordError}</Text> 
    </View>
  );
}

export default MyForm;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: 50,
  },
  title:{
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
  },
  input:{
    width:'70%',
    height:35,
    margin:11,
    borderWidth:1,
    padding:10,
  }, 
  error:{
    color:'orange',
  },
});


