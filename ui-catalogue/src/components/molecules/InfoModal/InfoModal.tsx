import Dialog from '@material-ui/core/Dialog/Dialog'
import DialogContent from '@material-ui/core/DialogContent/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle/DialogTitle'
import React from 'react'

export interface IInfoModal {
  open: boolean
  handleClose: () => void
  title: string
}

const InfoModal: React.FC<IInfoModal> = ({ open, handleClose, title, children }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <span>{ children }</span>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  )
}

export { InfoModal }
