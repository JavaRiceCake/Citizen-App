import { View, TouchableOpacity, Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function SidebarMenu({ closeMenu }) {
  const handlePress = () => {
    closeMenu();
  };

  return (
    <View style={styles.sidebarMenu}>
      <TouchableOpacity style={styles.closeButton} onPress={handlePress}>
        <Icon name="close" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarButton}>
        <Text style={styles.sidebarButtonText}>News</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarButton}>
        <Text style={styles.sidebarButtonText}>Weather</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarButton}>
        <Text style={styles.sidebarButtonText}>Live Videos</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarButton}>
        <Text style={styles.sidebarButtonText}>My Account</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebarButton}>
        <Text style={styles.sidebarButtonText}>Sign Out</Text>
        <Icon name="keyboard-arrow-right" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
}


export default SidebarMenu;

const styles = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  sidebarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sidebarButtonText: {
    fontSize: 18,
    marginLeft: 10,
  },
});