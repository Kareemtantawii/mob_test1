// HomeScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

// Sample data for popular items
const popularItems = [
  { id: '1', title: 'Mindful Breathing', duration: '10 min', tag: 'Calmness' },
  { id: '2', title: 'Body Scan', duration: '15 min', tag: 'Relaxation' },
  { id: '3', title: 'Gratitude Walk', duration: '12 min', tag: 'Outdoors' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header with logo */}
      <View style={styles.header}>
        <Image style={styles.logo} source={{ uri: 'https://via.placeholder.com/40x40?text=Logo' }} />
        <Text style={styles.headerTitle}>Paradise Nursery</Text>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Welcome message */}
      <Text style={styles.welcome}>Hello, User!</Text>
      <Text style={styles.subtitle}>Find your perfect meditation</Text>

      {/* Scrollable list of popular items */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {popularItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate('Detail', { item })}
          >
            <View style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSub}>{item.tag} · {item.duration}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Daily featured meditation */}
      <View style={styles.featured}>
        <Text style={styles.featuredTitle}>Daily Featured Meditation</Text>
        <View style={styles.featuredCard}>
          <Text style={styles.featuredName}>Morning Renewal</Text>
          <Text style={styles.featuredDuration}>20 min · Energy</Text>
          <TouchableOpacity style={styles.startBtn}>
            <Text style={styles.startBtnText}>Start Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  logo: { width: 40, height: 40, backgroundColor: '#2c5f2d', borderRadius: 20 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  menuIcon: { fontSize: 24 },
  welcome: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  scrollView: { marginBottom: 20 },
  card: { width: 150, backgroundColor: '#f8f9fa', borderRadius: 12, padding: 10, marginRight: 15, alignItems: 'center' },
  cardImage: { width: 80, height: 80, backgroundColor: '#ddd', borderRadius: 40, marginBottom: 8 },
  cardTitle: { fontWeight: 'bold', fontSize: 14 },
  cardSub: { fontSize: 12, color: '#777' },
  featured: { marginTop: 10 },
  featuredTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  featuredCard: { backgroundColor: '#e8f0fe', borderRadius: 16, padding: 16 },
  featuredName: { fontSize: 16, fontWeight: 'bold' },
  featuredDuration: { fontSize: 12, color: '#555', marginVertical: 5 },
  startBtn: { backgroundColor: '#8B5CF6', borderRadius: 8, padding: 10, alignItems: 'center', marginTop: 10 },
  startBtnText: { color: 'white', fontWeight: 'bold' },
});
