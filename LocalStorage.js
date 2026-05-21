// storage.js - Local storage utility using AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Save user data locally
export const saveUserData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
};

// Load user data from local storage
export const loadUserData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
};

// Remove user data from local storage
export const removeUserData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing data:', error);
    return false;
  }
};

// Save favorite items (e.g., plant IDs)
export const saveFavorites = async (favorites) => {
  return await saveUserData('favorites', favorites);
};

// Load favorite items
export const loadFavorites = async () => {
  return await loadUserData('favorites');
};

// Save theme preference (dark/light mode)
export const saveThemePreference = async (theme) => {
  return await saveUserData('theme', theme);
};

// Load theme preference
export const loadThemePreference = async () => {
  return await loadUserData('theme');
};

// Clear all local storage (e.g., on logout)
export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
};
