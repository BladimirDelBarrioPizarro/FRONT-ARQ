import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ModalError } from '../../components/organisms/ModalError/ModalError'
import i18nObj from '../i18n.json'

const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAqCAYAAAD1T9h6AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAKgAAAADxZ+MvAAAHYElEQVRYCc0Za2xTVficc2+7bgw6QSA8RttBIvwhUZDEkYgYaMdbDf3Fui1IJg8XJBACilgEJBgMEYTheHVl0YSJ0TlYtyVKVEQNUSMKRlzbsTFFEBjsvfZ+frfbub3tur42Mm7SfY/zne9xnt93RslD+P60zZumJaIJVY8DRtqI5G8StRmXM4+X3xlsc3QwFXpsC+YA8b9LAGb10UtpJ6FwVBim3W4oPnu3T3uSjEELwJtnWQUSHAECQjRfKCVXQatZkHX8XH00uXjbBiUAj81cCAAfqo2iox0E6BVCyUhsM6rbCKGNw3S6mWOPVdwM5SdOscS7hPZoyLPMAiAHOZcS6kfn3xYfzxhpKquZYTpVY9KImuk4Ut9zGUJgYltHx2mw28UgLzlsQDPgKSjQgb/pMq75KbJ5VAZEEFaYSl0fh7vTsMGa6rvdXImz8Txvo5S+jgHu4XQycGAzIDVt4c7LxoHSdyI5L7dl7i9vF7XUSihtkOneb5v75YUGTiQDkw6gIdcyBZfOFsUopb+ZJmfbFToCknm8+g6j5BXehLORRrp8yvLj/ERg0gH4qPQBjn6KbExeOqJA11K73RfLuNFZU4WzcEaRA1jizs9ZqtAJIkkF4LbNt+LoWxRblJVOclR/o9AxEG2K8BqKtHAx6vcfaCpcksbpRGDCAdxauXQ4jvh+bgRPnbs6kW3mdDxw4rGqRkaZncsCIYbO9s43OZ0ITDiAlu6OHTj6ExQjDLaOO1l1S6HjRAyTn3kfRS9zcbwAN3pti6ZxOl6YUAANeTnTceMVKcop/dGYNfuoQieAyPtFYMLawNEr9wOiAeg6nICKgGjcAaDj1AdSMfYKXD7yhcWosBodkSIZ/XetNd2bb1lUn2+eEald5hmcrm8JIw7ejkvpObfNYuN0PDDuAOrzLCsxiGyuFG/bw0Zn1c+cVkP5iG150HxF8kuVfj9ccufO73eWUnS6zXihqbJU2OcpeCFDrS8aHlcAjXkvjsI1upcrQoP/jEjV97vpuinY8YjN5PIIV10vyHlaRSvo+JIvbgOhwfsEYAz42nYrAjGQuALogta9uHFHcV0YwMaRJeXNnA6HFMjocJ7fB0r/8DaT03UMdV7kfJzd1ddtC2dyOhqMGYA315xNAVZyJWjoS6Oz+iNOR4QMboTzBQqN4TxOo07MoQA3NPXLPFyqzEe6izHZi+lfVAE5W5QoKcbNhYeF/NEuIpB1PXiUv0DU+U5A0C+k9RuALGBy1P6CVg4qWoHMrK+7sEah+0GiBuCt+64Ih2N6sC/sMzlq/gjSkTEgLNzZFpPjs3uRpYPcdI1uO45UE+dIQHbfXLV0LKcjwX4DaMhbPAFHfgfvhNPs1YzO2MXpaBAXRMgMYN/wgCJ2H32i4gEIbIOqUd/a2fGeiu6D9htAN3Tux9EfzntgFlkkp8ScjgbD1zsOREhA0fpmlVafxmSvVpEBWIHl6lyFDkMiBuCx5VjwZrRyWRzBzw3OmkpOx4LpqfoQh3GPxjUDXK9G0K7DIDo5DSAdgsJCDafVsE8AULQgBQimyr0fOt8GWnE9p+OBPUcsvR+UpdeDeGws01F5jaruHTzCp3nbvZsi9ewTgLfZvxWXzhRFmJKdyb0gwGmuQyTsU47HDYUJe3Dw6lTyEau3kADCqyy8UK4adcaom0hlIATVPyZuxJR5ExPY4kyn69eQxjgIk8Mhv2q8ykXxbohYvfWe7z1iHtt8l7pQoaIw1+RwnedKhgK6c83leLUtV2wLwrKsUlcFp5UZ6FNlEVo21M7LTmqYNmr1FgigT5VFyT18eIq4aXjk0aB8g+Nj1x78edw28w/ufPOz0eSjtWU6K28wRt7iMngkh1RvgQDCqyzcPG8M5NWsvu7ielyzW/BnxANhFvFDhZzRcicShYas2QfwWFX2kbp6Yz0bV11lkUuGrOwjiRpRy6OBeWoacb1fan0qjBc32VO9ycke3k7yh9WbRLoD6T2TGOQiS5T5OPKSSDRr+quyZJl4Pizerqjl5CxTEtk1NS9R3FBaewEdPMn7YbqysK7QqmeYMC3mTAzNNenUuUtBOjlMGC7uwtE6H+iNNyrexOvxQPAmpy3Yi2k0SqGDsyyw9tapDOckWDkB+zoonjwmv/+bymrnpmrEMaYMQW88VXsoeW3BnoYTZ904m38HOVKGvHR0nIFRBQoKTg8UJvPcEtMmBal3J8hLnmGSSYJrk5I5MRUMoYDXZjah8+O5C0yktximC19xBpaOi7y2nJc4/ShBsFu1mCUcwiUfyB7kg2FESkYd9RTkGIlP+kveFAGHKemmhG3WinBGk6oftP9lJTsYoo8IrR33n/BJsBN9NAf10E+yymqsgWjwttyGF87OYOOjjeGq+Q//zzZDzpIDN7HJWY3HE034WW9IwqS47hlZxlP8QAC4mwGnYx0jbDmurZ+GxLEYRnHUO/DQcWio9snApdYrH1hC4X1/x3fNtLbWdD/1RSzjwuUfJq3rEuCB0NU+VTf5Pi0p6Q639T+UyJrF2EcgkwAAAABJRU5ErkJggg=='
let open = true
const handleClose = (): void => {
  open = false
}
const ModalErrorStory: React.FC = () => {
  return <ModalError
    logo={logo}
    i18n={i18nObj}
    open={open}
    message={'Mensaje de error proveniente de back-end'}
    handleClose={handleClose}
  />
}

export { ModalErrorStory }

storiesOf('Components|Organisms.ModalError', module)
  .addDecorator(withThemeProvider)
  .add('Modal Error', () => <ModalErrorStory />)