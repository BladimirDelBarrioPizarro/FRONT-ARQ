module.exports = {
  stories: ['../src/**/*.story.tsx'],
  addons: [
    {
       name: '@storybook/addon-docs',
       options: { configureJSX: true }
    },
    {
       name: '@storybook/addon-actions'
    },
    {
       name: '@storybook/addon-links'
    },
    { 
       name: '@storybook/addon-knobs'
    },
    { 
       name: '@storybook/preset-create-react-app'
    }
  ]
}




