import { colors } from './colors';
export const shadow = {
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
