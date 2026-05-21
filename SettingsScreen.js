// SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <View style={styles.setting}>
        <Text>Enable Notifications</Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>
      <TouchableOpacity style={styles.button}><Text>Save Changes</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  setting: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  button: { backgroundColor: '#2c5f2d', padding: 12, borderRadius: 8, alignItems: 'center' },
});
