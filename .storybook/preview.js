export const parameters = {
  //actions: { argTypesRegex: "^on[A-Z].*" },
  actions: {
    handles: ["onEvent", "onSubmit", "onClick", "onKeyUp"],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  parameters: {
    docs: {
      toc: true,
    },
  },
};
export const tags = ["autodocs"];
