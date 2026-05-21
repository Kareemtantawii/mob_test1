// NotificationsScreen.js
import React, { useState } from 'react';
import { View, Text, Switch, Button, StyleSheet, Alert } from 'react-native';

export default function NotificationsScreen() {
  const [enabled, setEnabled] = useState(true);
  const [reminderTime, setReminderTime] = useState('09:00');

  const scheduleTestNotification = () => {
    Alert.alert('Test Notification', 'This is a test reminder!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.row}>
        <Text>Enable Push Notifications</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </View>
      <Text style={styles.label}>Daily Reminder Time</Text>
      <Button title="Schedule Test" onPress={scheduleTestNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  label: { marginTop: 10, marginBottom: 5 },
});
