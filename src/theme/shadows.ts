import { colors } from './colors';
export const shadow = {
  light: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.2,
    elevation: 2,
  },
  card: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  }
};

export type IShadow = keyof typeof shadow;
