import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BLANK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Contacts Data
const CONTACTS = [
  { id: '1',  name: 'Alice Martin',     phone: '(416) 555-0101', city: 'Toronto'     },
  { id: '2',  name: 'Aisha Mohammed',   phone: '(905) 555-0167', city: 'Oakville'    },
  { id: '3',  name: 'Bob Chen',         phone: '(647) 555-0134', city: 'Markham'     },
  { id: '4',  name: 'Carlos Rivera',    phone: '(905) 555-0312', city: 'Burlington'  },
  { id: '5',  name: 'Clara Kim',        phone: '(416) 555-0198', city: 'Toronto'     },
  { id: '6',  name: 'David Patel',      phone: '(289) 555-0245', city: 'Hamilton'    },
  { id: '7',  name: 'Emma Thompson',    phone: '(416) 555-0276', city: 'Toronto'     },
  { id: '8',  name: 'Frank Wilson',     phone: '(905) 555-0189', city: 'Mississauga' },
  { id: '9',  name: 'Grace Lee',        phone: '(647) 555-0321', city: 'Scarborough' },
  { id: '10', name: 'James O\'Brien',   phone: '(416) 555-0234', city: 'Toronto'     },
  { id: '11', name: 'Julia Santos',     phone: '(905) 555-0142', city: 'Brampton'    },
  { id: '12', name: 'Marcus Williams',  phone: '(647) 555-0398', city: 'Etobicoke'   },
];