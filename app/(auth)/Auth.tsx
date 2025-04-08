import React, { useState, useContext } from 'react'
import { Alert, StyleSheet, View, Pressable, Text } from 'react-native'
import { supabase } from '../../lib/supabase'
import { Button, Input } from '@rneui/themed'
import { router } from 'expo-router'
import ThemeContext from '../theme/themeContext'  // Import from local theme context

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { theme } = useContext(ThemeContext)

  //MAKE SURE AUTH IS NOT BROKEN / EVERYPAGE IS SECURE
  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
    router.replace('/')
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.verticallySpaced, styles.mt20, { backgroundColor: theme.background }]}>
        <Input style={[styles.input, { color: theme.text }]}
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input style={[styles.input, { color: theme.text }]}
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Pressable onPress={() => signInWithEmail()} style={[styles.button, { backgroundColor: theme.secondaryColor }]}>
          <Text style={[styles.buttonText, { color: theme.background }]}>Sign in</Text>
        </Pressable>
      </View>
      <View style={styles.verticallySpaced}>
        <Pressable onPress={() => signUpWithEmail()} style={[styles.button, { backgroundColor: theme.secondaryColor }]}>
          <Text style={[  styles.buttonText, { color: theme.background }]}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  input: {
    color: '#000000',
  },
  button: {
    backgroundColor: '#000000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }
})