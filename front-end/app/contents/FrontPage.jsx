import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FrontPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topButtons}>
          <TouchableOpacity
            style={styles.topButton}
            onPress={() => navigation.navigate('FrontPage')}
          >
            <Text style={styles.buttonText}>Welcome</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topButton}
            onPress={() => navigation.navigate('Journey')}
          >
            <Text style={styles.buttonText}>Journey</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.topButton}
            onPress={() => navigation.navigate('Whatnext')}
          >
            <Text style={styles.buttonText}>Whatnext</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.leftSide}>
          <Text style={styles.header}>Thoughts on Education</Text>
          <Text style={styles.paragraph}>
            Education is the most powerful weapon which you can use to change the world.
            It is the foundation upon which we build our future. Every great achiever is
            inspired by a great mentor.
          </Text>
          {/* <Image
            style={styles.image}
            source={require('')} // Replace with your local image or remote URL
          /> */}
        </View>
        <View style={styles.rightSide}>
          <Image
            source={{ uri: 'https://www.shutterstock.com/image-photo/portrait-cheerful-male-international-indian-600nw-2071252046.jpg' }}
            style={styles.profileImage}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e2f',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  topButtons: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    padding: 15,
  },
  topButton: {
    color: 'rgb(51, 45, 45)',
    borderWidth: 0,
    width: 130,
    marginRight: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: 'rgb(51, 45, 45)',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonTextHover: {
    color: '#0056b3',
    fontWeight: 'bolder',
  },
  content: {
    flexDirection: 'row',
    flex: 1,
    padding: 20,
  },
  leftSide: {
    flex: 1,
    paddingRight: 20,
  },
  rightSide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 550,
    height: 250,
    resizeMode: 'cover',
  },
  profileImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
  header: {
    fontSize: 30,
    color: '#333',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 18,
    color: '#555',
    lineHeight: 28,
  },
});

export default FrontPage;
