import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";


/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.mdx",
    
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],



  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mdx-gfm"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],

  // framework: {
  //   name: getAbsolutePath("@storybook/react-vite"),
  //   options: {},
  // },


  framework: getAbsolutePath("@storybook/react-vite"),
  
  async viteFinal(config, { configType }) {
    
   const { mergeConfig } = await import('vite');

   
   if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/'
      
    }
   
   return mergeConfig(config, {
     // Your environment configuration here
   });
 },
 


  docs: {
    autodocs: true,
  },


  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

  
  
  
};

export default config;
