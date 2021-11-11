// TODO este archivo que hace exactamente?
import { configure, addParameters, addDecorator } from '@storybook/react'
import { create } from '@storybook/theming'
import centered from '@storybook/addon-centered/react'


const theme = create({
  url: 'https://mysite.pe'
})

addParameters({
  options: {
    theme,
    showPanel: true,
    panelPosition: 'bottom',
    storySort: (a, b) => {
      if (a[0].includes('docs-')) {
        if (a[0].includes('intro-')) {
          return -1
        }

        return 0
      }

      return 1
    }
  }
})

// Custom center decorator that supports docs extensions
addDecorator((...args) => {
  const params = new URL(document.location).searchParams
  const isInDockView = params.get('viewMode') === 'docs'
  if (isInDockView) {
    return args[0]()
  }
  return centered(...args)
})

const loadStories = () => {
  return [
    // Ensure we load Welcome First
    require.context('../docs', true, /story\.mdx$/),
    require.context('../src', true, /story\.mdx$/),
    require.context('../docs', true, /story\.tsx$/),
    require.context('../src', true, /story\.tsx$/)
  ]
}

configure(loadStories(), module)
