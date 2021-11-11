import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { InfoGeneralMoveUrl } from '../../components/molecules/InfoGeneralMoveUrl/InfoGeneralMoveUrl'
import i18nObj from '../i18n.json'
import { ReportTypes } from '../../components/templates/BaseReport/types'

const InfoGeneralMoveUrlStandardStory: React.FC = () => {
  return (
    <InfoGeneralMoveUrl
      i18n={i18nObj}
      report={ReportTypes.Standard}
    />)
}

const InfoGeneralMoveUrlEUDBPStory: React.FC = () => {
  return (
    <InfoGeneralMoveUrl
      i18n={i18nObj}
      report={ReportTypes.EUDBP_PT}
    />)
}

export { InfoGeneralMoveUrlEUDBPStory }

storiesOf('Components|Molecules.InfoGeneralMoveUrl', module)
  .addDecorator(withThemeProvider)
  .add('InfoGeneralMoveUrl Standard', () => <InfoGeneralMoveUrlStandardStory />)
  .add('InfoGeneralMoveUrl EUDBP', () => <InfoGeneralMoveUrlEUDBPStory />)
