module.exports = {
  stories: [
    "../docs/GettingStarted/Introduction.mdx",
    "../docs/GettingStarted/YourFirstApp.mdx",
    "../docs/APIDocumentation/Hexagon.mdx",
    "../docs/APIDocumentation/components/hexagon.stories.tsx",
    "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../docs/**/*.stories.@(ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  babel: async (options) => ({
    ...options,
    presets: [
      ["@babel/preset-env", { shippedProposals: true, loose: true }],
      ["@babel/preset-react", { runtime: "automatic", importSource: "" }],
      ["@babel/preset-typescript"],
    ],
  }),

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
