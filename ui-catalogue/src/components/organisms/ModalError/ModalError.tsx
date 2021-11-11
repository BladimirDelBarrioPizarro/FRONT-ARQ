import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { Button, Typography } from '@material-ui/core'
import { IModalError } from './types'

const useStyles = makeStyles({
  root: {
    width: '429px',
    height: '257px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    outline: 'none'
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '429px',
    height: '257px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    outline: 'none',
    justifyContent: 'center',
    textAlign: 'center'
  },
  icon: {
    width: '48px',
    height: '42px',
    objectFit: 'contain',
    margin: '2.5em 0 1em 0'
  },
  button: {
    width: '80%',
    height: '2em',
    fontFamily: 'NeverMind',
    fontSize: '14px',
    fontWeight: 600,
    marginTop: '2em',
    backgroundColor: '#FC0000',
    color: 'white',
    '&:hover': {
      backgroundColor: '#D00000'
    }
  }
})

const ModalError: React.FC<IModalError> = ({
  logo,
  i18n,
  message,
  open,
  handleClose
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Modal
        disablePortal={true}
        disableEnforceFocus={true}
        disableAutoFocus={true}
        open={open}
        className={classes.modal}
      >
        <div className={classes.paper}>

          <img className={classes.icon} src={logo} alt="Logo" />

          <Typography variant="h4" color="error" >
            {i18n['ModalError:error']}
          </Typography>

          <Typography variant="body1">
            {message}
          </Typography>

          <Button className={classes.button} variant="contained" onClick={handleClose}>
            {i18n['ModalError:button']}
          </Button>

        </div>
      </Modal>
    </div>
  )
}

export { ModalError }
