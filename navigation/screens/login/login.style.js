import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(255,255,255)',
  },
  view: {
    width: '80%',
  },
  cardTitle: {
    color: 'rgb(101,37,131)',
  },
  cardButton: {
    margin: 2,
    marginLeft: 0,
    marginRight: 0,
  },
});
