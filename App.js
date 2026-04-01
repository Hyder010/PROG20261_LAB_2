import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert } from 'react-native';

//  -- Contacts Data --
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

const sections = groupByLetter(CONTACTS);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appHeader}>
        <Text style={styles.appTitle}>Contacts</Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={true}
        
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}

        // -- Contact Row --
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.contactRow}
            onPress={() => Alert.alert(item.name, `Phone: ${item.phone}`)}
          >
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarInitial}>{item.name[0]}</Text>
            </View>

            <View>
              <Text style={styles.contactName}>{item.name}</Text>
              <Text style={styles.contactCity}>{item.city}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
  },
  appHeader: {
    backgroundColor: '#203354',
    padding: 20,
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionHeader: {
    backgroundColor: '#ECECEC',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#64748b',
  },
  contactRow: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarInitial: {
    color: 'white',
    fontWeight: '800',
    fontSize: 16,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  contactCity: {
    fontSize: 14,
    color: '#64748b',
  },
});

function groupByLetter(contacts) {
  const grouped = {};

  contacts.forEach(contact => {
    const letter = contact.name[0].toUpperCase();
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(contact);
  });

  // Convert object to the SectionList format
  return Object.keys(grouped)
    .sort()
    .map(letter => ({
      title: letter,
      data: grouped[letter],
    }));
}