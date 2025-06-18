import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, Platform, Alert, Keyboard, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { disableErrorHandling } from 'expo';

export default function App({ navigation }) {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    let errors = {};
    let valid = true;

    if (username && !validateEmail(username)) {
      errors.username = 'Invalid email format!';
      valid = false;
    }

    if (password && password.length < 6) {
      errors.password = 'Password must be at least 6 characters long!';
      valid = false;
    }
    setErrors(errors);
    setIsFormValid(
      validateEmail(username) &&
      password.length >= 6
    );
  }

  useEffect(() => {
    validateForm();
  }, [username, password]);

  const handleForm = () => {
    if (isFormValid) {
      Alert.alert('Log In Successful!');
      setusername('');
      setpassword('');
      setErrors({});
      Keyboard.dismiss();
      navigation.navigate('Home');
    }
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.container}>
      <ImageBackground style={styles.img} source={{ uri: 'https://img.freepik.com/free-vector/blue-curve-patterned-background-vector_53876-173750.jpg' }}>

        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Welcome!</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder='Enter your email' value={username} onChangeText={setusername}></TextInput>
            {
              errors.username ? <Text style={styles.error_msg}>{errors.username}</Text> : null
            }

            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder='Enter your password' secureTextEntry value={password} onChangeText={setpassword}></TextInput>
            {
              errors.password ? <Text style={styles.error_msg}>{errors.password}</Text> : null
            }

            <TouchableOpacity
              style={styles.create}
              onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.create_acc}>Create Account</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, !isFormValid && styles.btnDisabled]}
              onPress={() => { handleForm() }}
              disabled={!isFormValid}>
              <Text style={styles.btn_txt}>Login</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    top: 145,
    left: 110,
  },
  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 60,
    padding: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 10
  },
  error_msg: {
    color: 'red',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#007bff',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  btnDisabled: {
    backgroundColor: '#A9A9A9',
  },
  btn_txt: {
    color: 'white',
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  create: {
    marginBottom: 10,
    marginTop: 5,
    marginLeft: 200,
  },
  create_acc: {
    fontSize: 14,
    color: '#007bff',
  },
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
}); 
