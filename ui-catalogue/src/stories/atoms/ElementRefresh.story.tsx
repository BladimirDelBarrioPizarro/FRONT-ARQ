import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ElementRefresh } from '../../components/atoms/ElementRefresh/ElementRefresh'

import i18nObj from '../i18n.json'

const ElementRefreshStory: React.FC = () => {
  return (
    <ElementRefresh
      label={i18nObj['form:spain:balance:upgrade']}
      size={'xl'}
    />
  )
}

export { ElementRefreshStory }

storiesOf('Components|Atoms.ElementRefresh', module)
  .addDecorator(withThemeProvider)
  .add('Refresh component', () => <ElementRefreshStory />)
