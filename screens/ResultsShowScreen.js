import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios';

const apiKey = '_Ie7vbSfaqa6xauaze2sY875LMCTpI1nymc3dMjOSBeuNaH9xQhHtIIYp1Ly2HlRIb9hhbe1MVY8ao4RhI1B1dhvzz8umrLhiD9ubp0tzsk-glzQj5km3rZgqfB7ZnYx';
const apiUrl = 'https://api.yelp.com/v3/businesses';

const ResultsShowScreen = ({ route, navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`${apiUrl}/${id}`, {
          headers: {
            Authorization: `Bearer ${apiKey}`
          }
        });
        setRestaurant(response.data);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    };

    fetchRestaurantDetails();
  }, [id]); // id bağımlılığı ekleyin

  if (!restaurant) {
    return <Text>Yükleniyor...</Text>; // Veri yüklenene kadar yükleme göstergesi gösterin
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subtitle}>{restaurant.phone}</Text>
      <Text style={styles.subtitle}>{restaurant.location.address1}</Text>
      {restaurant.photos.length > 0 ? (
                <FlatList
                    data={restaurant.photos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: item }} />
                        </View>
                    )}
                />
            ) : (
                <Text style={styles.noImageText}>Resim yok</Text>
            )}
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
    marginBottom: 10
  },
  noImageText: {
    fontSize: 16,
    color: '#666'
  }
});

export default ResultsShowScreen;
