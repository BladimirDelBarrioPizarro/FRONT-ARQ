import {
  createStyles,
  makeStyles,
  Card,
  CardContent,
  CardHeader,
  Drawer,
  Theme
} from '@material-ui/core'
import React from 'react'
export interface IFormDrawer {
  open: boolean
  toggleDrawer: (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      overflow: 'visible'
    }
  }))

const FormDrawer: React.FC<IFormDrawer> = ({ open, toggleDrawer, children }) => {
  const classes = useStyles()

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Card className={classes.drawer}>
        <CardHeader title={'Busqueda de empresas'}></CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </Drawer>
  )
}

export { FormDrawer }
