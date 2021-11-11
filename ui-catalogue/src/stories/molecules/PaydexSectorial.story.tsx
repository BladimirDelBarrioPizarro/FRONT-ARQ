import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { PaydexSectorial } from '../../components/molecules/PaydexSectorial/PaydexSectorial'
import i18nObj from '../i18n.json'
import { dataPaydexSectorialFaker } from '../../mocks/'

const PaydexSectorialStory: React.FC = () => {
  return (
    <PaydexSectorial
      i18n={i18nObj}
      data={dataPaydexSectorialFaker}
    />)
}

export { PaydexSectorialStory }

storiesOf('Components|Molecules.PaydexSectorial', module)
  .addDecorator(withThemeProvider)
  .add('PaydexSectorial ', () => <PaydexSectorialStory />)
