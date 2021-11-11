import { Button } from '@material-ui/core'
import React, { ChangeEvent } from 'react'

interface i18nFileChooser {
  'filechooser:uploadInput': string
}
export interface IFileChooser {
  accept?: string
  handleChange: (files: File[]) => unknown
  id?: string
  name?: string
  multiple?: boolean
  buttonColor?: 'default' | 'inherit' | 'primary' | 'secondary'
  buttonVariant?: 'contained' | 'outlined' | 'text'
  i18n: i18nFileChooser
}

const FileChooser: React.FunctionComponent<Partial<IFileChooser>> = ({
  accept = '',
  handleChange,
  id = 'inputFileUpload',
  name = '',
  multiple = false,
  i18n,
  buttonColor = 'primary',
  buttonVariant = 'contained'
}) => {
  type ThandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void
  const handleInputChange: ThandleInputChange = (e) => {
    handleChange(Array.from(e.target.files))
  }

  return (
    <>
      <input
        style={{ display: 'none' }}
        id={id}
        name={name}
        multiple={multiple}
        type="file"
        onChange={handleInputChange}
        accept={accept}
      />
      <label htmlFor={id}>
        <Button color={buttonColor} variant={buttonVariant} component="span">
          {i18n['filechooser:uploadInput']}
        </Button>
      </label>
    </>
  )
}

export { FileChooser }
