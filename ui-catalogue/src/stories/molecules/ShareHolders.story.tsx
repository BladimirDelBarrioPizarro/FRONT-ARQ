import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ShareHolders } from '../../components/molecules/ShareHolders/ShareHolders'
import i18nObj from '../i18n.json'
import { dataRelationShipFaker } from '../../mocks/'

const ShareHoldersStory: React.FC = () => {
  return (
    <ShareHolders
      i18n={i18nObj}
      data={dataRelationShipFaker}
    />)
}

export { ShareHoldersStory }

storiesOf('Components|Molecules.ShareHolders', module)
  .addDecorator(withThemeProvider)
  .add('ShareHolders', () => <ShareHoldersStory />)
