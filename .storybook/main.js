module.exports = {
  stories: [
    "../docs/GettingStarted/1. Introduction.mdx",
    "../docs/GettingStarted/2. YourFirstApp.mdx",
    "../docs/GettingStarted/3. UsingGenerators.mdx",
    "../docs/GettingStarted/4. UsingLayout.mdx",
    "../docs/GettingStarted/5. UsingPattern.mdx",
    "../docs/GettingStarted/6. UsingPath.mdx",
    "../docs/GettingStarted/7. UsingEvents.mdx",
    "../docs/APIDocumentation/Hexagon.mdx",
    "../src/Hexagon/Hexagon.stories.tsx",
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
