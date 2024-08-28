import './App.css';
import { View, Text, Image, Button, } from 'react-native';

function App() {
  return (
    <div className="App">
      return (
   <View style={styles.container}>
    {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
    <Text style={styles.text}>{text}</Text>
    <Button title="Select Image" onPress={handleImagePick} />
  </View>
);
    </div>
  );
}

export default App;
