import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#31CF67',
    borderRadius: 5,
    justifyContent: 'center',
    height: 56,
    width: 56,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 24,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  form: {
    flexDirection: 'row',
    marginBottom: 42,
    marginTop: 36,
    width: '100%',
  },
  input: {
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    flex: 1,
    fontSize: 16,
    height: 56,
    marginRight: 12,
    padding: 16,
  },
  listEmptyText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
});
