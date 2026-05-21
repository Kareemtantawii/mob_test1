// DetailScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function DetailScreen({ route, navigation }) {
  // Receive item data from navigation params (or use dummy data)
  const item = route.params?.item || {
    id: '1',
    title: 'Mindful Breathing',
    description: 'Focus on your breath to reduce stress and improve concentration.',
    duration: '10 min',
    tag: 'Calmness',
    image: 'https://via.placeholder.com/300x200?text=Meditation',
  };

  return (
    <ScrollView style={styles.container}>
      {/* Hero image */}
      <View style={styles.imageContainer}>
        <View style={styles.heroImage} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareIcon}>📤</Text>
        </TouchableOpacity>
      </View>

      {/* Title and tags */}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.tags}>
          <Text style={styles.tag}>{item.tag}</Text>
          <Text style={styles.duration}>⏱️ {item.duration}</Text>
        </View>

        {/* About section */}
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{item.description}</Text>

        {/* Instructions section */}
        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.instructions}>
          1. Find a quiet place.\n
          2. Sit comfortably with your back straight.\n
          3. Close your eyes and focus on your breath.\n
          4. Follow the guided audio.\n
          5. When finished, gently open your eyes.
        </Text>

        {/* Add to favorites button */}
        <TouchableOpacity style={styles.favButton}>
          <Text style={styles.favButtonText}>❤️ Add to Favorites</Text>
        </TouchableOpacity>

        {/* Start button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Meditation</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  imageContainer: { position: 'relative' },
  heroImage: { width: '100%', height: 200, backgroundColor: '#cfd8dc' },
  backButton: { position: 'absolute', top: 16, left: 16, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20, padding: 8 },
  backIcon: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  shareButton: { position: 'absolute', top: 16, right: 16, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 20, padding: 8 },
  shareIcon: { fontSize: 20 },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  tags: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  tag: { backgroundColor: '#e0e0e0', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, fontSize: 12 },
  duration: { color: '#666', fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 8 },
  description: { fontSize: 14, color: '#444', lineHeight: 20 },
  instructions: { fontSize: 14, color: '#444', lineHeight: 20, marginBottom: 8 },
  favButton: { backgroundColor: '#f5f5f5', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 20, borderWidth: 1, borderColor: '#ddd' },
  favButtonText: { fontSize: 16, color: '#e74c3c' },
  startButton: { backgroundColor: '#8B5CF6', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 12, marginBottom: 30 },
  startButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
