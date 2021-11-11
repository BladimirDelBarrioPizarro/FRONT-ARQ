import React, { ChangeEvent, useRef } from 'react'
import {
  IconButton,
  InputAdornment,
  TextField,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons'

interface Ii18n {
  'filechooser:uploadInput': string
  'filechooser:noFileFeedback': string
}
export interface ITextInputFile {
  name?: string
  id?: string
  handleChange: (files: File[]) => unknown
  i18n: Ii18n
  accept?: string
  [key: string]: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      marginBottom: '20px',
      marginLeft: '7px',
      marginRight: '10px'
    },
    span: {
      width: '30px',
      marginBottom: '9px',
      marginRight: '40px',
      color: '#003b64'
    }
  })
)

const TextInputFile: React.FC<ITextInputFile> = ({
  name = '',
  id = '',
  i18n,
  handleChange,
  accept = '*',
  ...rest
}) => {
  const classes = useStyles()
  const inputFileRef = useRef(null)

  type ThandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void
  const handleInputChange: ThandleInputChange = (e) => {
    handleChange(Array.from(e.target.files))
  }

  return (
    <TextField
      data-testid="textField"
      variant="outlined"
      InputProps={{
        endAdornment:
              <InputAdornment position="end">
                <input
                  accept={accept}
                  style={{ display: 'none' }}
                  id={id}
                  name={name}
                  type="file"
                  ref={inputFileRef}
                  onChange={handleInputChange}
                />
                <IconButton
                  size="small"
                  className={classes.icon}
                  color="primary"
                  onClick={() => inputFileRef.current.click()}
                >
                  <CloudUpload color="primary"></CloudUpload>

                </IconButton>

              </InputAdornment>
      }}
      {...rest}
    />

  )
}

export { TextInputFile }
