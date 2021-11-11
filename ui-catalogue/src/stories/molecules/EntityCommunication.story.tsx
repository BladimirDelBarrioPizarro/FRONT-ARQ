import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { EntityCommunication } from '../../components/molecules/EntityCommunication/EntityCommunication'
import {
  entityCommunicationDataEmpty,
  entityCommunicationDataFaker
} from '../../mocks'
import i18nObj from '../i18n.json'

const EntityCommunicationStory: React.FC = () => {
  return <EntityCommunication
    i18n={i18nObj}
    data={entityCommunicationDataEmpty}
  />
}

export { EntityCommunicationStory }

const EntityCommunicationEmptyStory: React.FC = () => {
  return <EntityCommunication
    i18n={i18nObj}
    data={entityCommunicationDataFaker}
  />
}

export { EntityCommunicationEmptyStory }

storiesOf('Components|Molecules.EntityCommunication', module)
  .addDecorator(withThemeProvider)
  .add('EntityCommunication Faker', () => <EntityCommunicationStory />)
  .add('EntityCommunication Empty', () => <EntityCommunicationEmptyStory />)
