import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Signup = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();

  const handleSubmit = async () => {
    if (!username.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://10.0.2.2:5000/user/signup", {
        username,
        email,
        password,
      });
      setUsername("");
      setEmail("");
      setPassword("");
      navigation.navigate("Home")
      Alert.alert("Success", "Account created successfully!");
      // console.log(response.data);
    } catch (error) {
      console.error(error, "Error");
    }
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/create-account-6333606-5230166.png?f=webp' }}
        style={styles.image}
      />
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        placeholder='Name'
        style={styles.input}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        placeholder='Email'
        style={styles.input}
        keyboardType='email-address'
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title='SignUp'
          color='blue'
          onPress={handleSubmit}
        />
      </View>
      <Text style={styles.footerText}>Already have an account? 
        <Text onPress={() => navigation.navigate("LogIn")} style={{color:"blue",fontSize:20}} > LogIn</Text> 
      </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    color: "blue",
    fontFamily: "sans-serif",
    fontWeight: 'normal',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    width: '100%',
    maxWidth: 330,
  },
  buttonContainer: {
    width: 300,
    marginTop: 10,
  },
  image: {
    width: 250,
    height: 250,
  },
  footerText: {
    marginTop: 20,
    fontSize: 20,
    color: 'gray',
  },
});

export default Signup;
