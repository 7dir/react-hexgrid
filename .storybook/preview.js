export const parameters = {
  //actions: { argTypesRegex: "^on[A-Z].*" },
  actions: {
    handles: ['onEvent', 'onSubmit', 'onClick', 'onKeyUp']
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const tags = ['autodocs'];
