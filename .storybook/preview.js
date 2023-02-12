import LIGHT_GRAY from '../src/utils/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [{ name: 'twitter', value: LIGHT_GRAY }]
    }
  }
};
