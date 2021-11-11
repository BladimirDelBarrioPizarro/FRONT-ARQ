import React from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { ModalSuccess } from '../../components/organisms/ModalSuccess/ModalSuccess'
import i18nObj from '../i18n.json'

const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAABv1BMVEUAAAAA/wCAgIBVqlVAv0BmzDNVqlVgv0BNs01duUZVv0BOxE5btklVu0RZv0BVtklRuUZZvENVv0pSuEdYukVVvUJVu0RTvERTukVXvENVvkhVu0RRvkdVvkZVvUdSu0RVu0RUvEdSvUZVukVSvEdTvEdVvEZUvUVUvUZVu0dUvEZTvUZVvkVUu0dTvEZVvUVUvUVTu0dUvEZTvUVUvEZVvUdUu0dVvEZUvUVVvEZUvEVVu0ZUvEZVvUdTvEZUvUZUvEVUvUdUvEVUu0ZUvUZUu0ZTvEVUvEdUvUZTu0ZUvEdUvEdTvEZUu0ZUvEVTvEdUvUZUu0ZTvEdTu0VTvUZUu0VUvEZTvEZTu0VUvEZUvUVUvEdVvEZVvEZVvEZUvEZUvEVVu0ZUvEZUvUdUvEZUvEdUvEZUvEZVvEZUu0ZUvEZUvEZUvEZVvEZUvEdUvEZVvEZUvEZUvEZVvUZTvEdUvEZUu0ZUvEZUvEZTvEZUvEVUvEZTvEZUvEZUvEZUvEZUvEZUvEZUvEZUvUZUvEdUvEZUvEZUvEZUvEZUvEZUvEZUvEZUvEZUvEZUvEZUvEZUvEZUvEZUvEZUvEb///8uZcFSAAAAk3RSTlMAAQIDBAUGCAoLDA0ODxQVFhcYGRobHiIlJictLzM2ODw9Pj9BREVGSUtMTU5PUFFVVlhZW11eY2RmZ2lqbG50dnd6fH+AgYKDhIWJiouMjY6PkJOWl5iZoqOpqqyvsrO0tbq8wsPFxsfIycvMzc7P0NHS09na293e3+Dh4uPk5ebn6err8PHy8/T29/j5+vv8/f54NAgXAAAAAWJLR0SUf2dKFQAAAfJJREFUSMfd1/dT03AYx/HHKC2iAg6KW2xQVBxRcdRtwYEDREVEUVREtNQ9qqgUtwha7Psf5geKJHfNJc+3jjs/v32be13vGUlakX+YaE3MIDVREZFkDqP8OCKyAyaGMuq8ycMWuc+zJSbF1r6iT75z2KxVR3ktkPC7bC237WWz/K4myPrjxedHAEY6Fulx0+h0W7/u1OJDrqHkD+pw/YR7pLm4BlsPvAvxyFLg+hn35C6ArcDtv+zNiPUcaFPgGwBXNj6lv1wqPwK9CjwAsEaquhdIRQpgQIF7AR5XikjkFgDXFfgMBW1dnSr9rALXFTq9vrvQt7hmSe545/xQM2dZPe7ZsDrdbu9y7Wf+gPau2vBh2n7Zrr+f5x97ATDcXm3wMBCR2Nr4UrMnSVCK4YqedPEMJoOx7fuU/xSM5zR3Fc+lTX+45t+AL/x0VzvaoMJpb69aVDi2J+FKU/Tv1Rwat64ySitZwTwl4721RkmSFWgspWEl4DybzfA+huUdx83wRQalk/ETjkFO5UhKVcZ0Uulykequ9yb0bds8n3pOMhaZOZV9U+1/H7fdx346w9vZnzntfV3fC49Xwlb3eRtjZaHxfvD84FwIK0Ljy2S8H7xkdyg4t9Fxhkh5NyLFNcexg3GP/2iDv/2c/z+SdfJ/ZBLhxC2qU5G+iwAAAABJRU5ErkJggg=='
let open = true
const handleClose = (): void => {
  open = false
}
const ModalSuccessStory: React.FC = () => {
  return (
    <ModalSuccess
      logo={logo}
      i18n={i18nObj}
      open={open}
      message={'Mensaje proveniente de back-end'}
      handleClose={handleClose}
    />)
}

export { ModalSuccessStory }

storiesOf('Components|Organisms.ModalSuccess', module)
  .addDecorator(withThemeProvider)
  .add('ModalSuccess', () => <ModalSuccessStory />)
