// SettingsMenu.js - Navigation drawer / side menu
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function SettingsMenu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
      </View>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.menuText}>👤 Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.menuText}>⭐ My Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('SettingsScreen')}>
        <Text style={styles.menuText}>⚙️ Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
        <Text style={styles.menuText}>🔔 Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Theme')}>
        <Text style={styles.menuText}>🌙 Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuItem, styles.logout]} onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.menuText, styles.logoutText]}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50 },
  header: { padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerText: { fontSize: 24, fontWeight: 'bold' },
  menuItem: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  menuText: { fontSize: 16 },
  logout: { marginTop: 20 },
  logoutText: { color: 'red' },
});
