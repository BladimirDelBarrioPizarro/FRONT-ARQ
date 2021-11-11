import React, { useState, ChangeEvent } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import {
  makeStyles,
  RadioGroup,
  Radio,
  Grid
} from '@material-ui/core'
import { IExperianR } from './types'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import { ElementFormInput } from '../../atoms'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  divFlex: {
    display: 'table',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    height: 'auto',
    minHeight: '60px',
    width: '100%'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  divButtons: {
    display: 'table-cell',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '5px',
    width: '30%'
  },
  fieldCIF: {
    width: '243px',
    height: '20px',
    marginTop: '0px',
    marginBottom: '15px',
    marginLeft: '14px',
    boxSizing: 'border-box',
    border: 'none',
    borderBottom: '2px solid #ff9900',
    backgroundColor: '#fff'
  },
  labelRadio: {
    fontFamily: 'NeverMind',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    minWidth: '10em'
  },
  button: {
    width: '135px',
    height: '36px',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    background: '#003b64 url(https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-5.jpg) no-repeat;',
    backgroundSize: '30px 25px;',
    backgroundPosition: '0px 6px',
    color: '#fff',
    border: '1px',
    '&:hover': {
      background: '#ff9900 url(https://icon-library.com/images/white-search-icon-transparent-background/white-search-icon-transparent-background-5.jpg) no-repeat;',
      backgroundSize: '30px 25px;',
      backgroundPosition: '0px 6px',
      color: '#fff'
    }
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  margen: {
    marginTop: 15
  },
  tabla: {
    marginTop: '3rem'
  },
  boton: {
    marginLeft: 10,
    margin: theme.spacing(1)
  },
  drawerContainer: {
    overflow: 'auto'
  },
  input: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 4
  },
  formContainer: {
    backgroundColor: '#ffffff',
    minWidth: '1700px'
  },
  checkboxStyle: {
    color: '#003b64',
    width: '14px'
  },
  checkboxStyleChecked: {
    color: '#ff9900',
    width: '14px'
  },
  divItems: {
    display: 'flex',
    flexDirection: 'row'
  }
}))

const ExperianR: React.FC<IExperianR> = ({
  i18n,
  handleSearchExperian
}) => {
  const classes = useStyles()
  const radioValues = {
    1: 'EXPERIAN',
    2: 'BADEXCUG'
  }
  const [selectedValue, setSelectedValue] = useState(1)
  const [code, setcode] = useState({ radio: radioValues[selectedValue], cif: '' })
  const [error, setError] = useState('')

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSelectedValue(Number(event.target.value))
    setcode({
      ...code,
      radio: radioValues[event.target.value]
    })
  }

  const updateCif: (e: ChangeEvent<HTMLInputElement>) => void = e => {
    setcode({
      ...code,
      cif: e.target.value
    })
  }

  const handleSearchSubmit = (e): void => {
    e.preventDefault()
    if (code.cif !== '' && code.radio !== '') {
      handleSearchExperian(code.cif, code.radio)
    } else {
      setError('Campo obligatorio')
    }
  }

  return (
    <>
      <div className={classes.formContainer}>
        <form autoComplete="off">
          <div className={classes.divFlex}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={4} sm={4} md={4} lg={2} xl={2}>
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                >
                  <FormControlLabel
                    value={1}
                    control={
                      <Radio
                        icon={
                          <RadioButtonUncheckedRoundedIcon fontSize="small"
                            className={classes.checkboxStyle}/>}
                        checkedIcon={
                          <RadioButtonCheckedRoundedIcon fontSize="small"
                            className={classes.checkboxStyleChecked}/>}
                        checked={selectedValue === 1}
                        onChange={handleChangeRadio} />}
                    label={<span className={classes.labelRadio}>{i18n['ExperianR:label1']}</span>}
                  />
                  <FormControlLabel
                    value={2}
                    control={
                      <Radio
                        icon={
                          <RadioButtonUncheckedRoundedIcon fontSize="small"
                            className={classes.checkboxStyle}/>}
                        checkedIcon={
                          <RadioButtonCheckedRoundedIcon fontSize="small"
                            className={classes.checkboxStyleChecked}/>}
                        checked={selectedValue === 2}
                        onChange={handleChangeRadio} />}
                    label={<span className={classes.labelRadio}>{i18n['ExperianR:label2']}</span>}
                    labelPlacement="start"

                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={1} xl={1}>
                <div className={classes.labelStyle}>
                  {i18n['ExperianR:label3']}
                </div>
              </Grid>
              <ElementFormInput
                name={'cif'}
                type={'text'}
                label={i18n['ReceivingReports:empresa']}
                handleSet={updateCif}
                value={code.cif}
                errorMessage={error}
                placeholder={'company'}
                disabled={false}
                maxLength={9}
              />
              <Grid item xs={3} sm={1} md={1} lg={3} xl={3}>

              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                <div className={classes.divButtons}>
                  <button
                    className={classes.button}
                    id="searchAll"
                    type="submit"
                    onClick={handleSearchSubmit}
                  >
                    {i18n['ExperianR:button2']}
                  </button>
                </div>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    </>
  )
}

export { ExperianR }
