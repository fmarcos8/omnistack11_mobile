import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  incident: {
    marginTop: 30,
    padding: 24,
    borderRadius: 16,
    backgroundColor: "#fff",
    marginBottom: 16
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: "#737380",
    marginBottom: 24,
    fontWeight: 'bold'
  },

  contactBox: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: "#fff",
  },

  contactBoxTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#13131a',
    lineHeight: 30
  },

  contactBoxButtons: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  contactBoxSescription: {
    marginTop: 16,
    fontSize: 15,
    color: "#737380",
  },

  action: {
    backgroundColor: '#e02041',
    padding: 16,
    borderRadius: 8,
    height: 45,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})