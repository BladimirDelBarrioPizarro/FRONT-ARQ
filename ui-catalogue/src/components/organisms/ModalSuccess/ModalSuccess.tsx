import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import { IModalSuccess } from './types'
import { Button, Typography } from '@material-ui/core'

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
  message: {
    color: '#1C890D',
    margin: '0.5em'
  },
  button: {
    width: '80%',
    height: '2em',
    marginTop: '2em',
    backgroundColor: '#1c890d',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1c890d85'
    }
  }
})

const ModalSuccess: React.FC<IModalSuccess> = ({
  i18n,
  message,
  open,
  logo,
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

          <Typography className={classes.message} variant="body2">
            {i18n['ModalSuccess:message']}
          </Typography>

          <Typography variant="body1">
            {message}
          </Typography>

          <Button variant="contained" className={classes.button} onClick={handleClose}>
            {i18n['ModalError:button']}
          </Button>

        </div>
      </Modal>
    </div>
  )
}

export { ModalSuccess }
