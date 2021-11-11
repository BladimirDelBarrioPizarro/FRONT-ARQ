import React from 'react'
import {
  makeStyles,
  Box,
  Typography,
  Theme
} from '@material-ui/core'

interface ITabPanelProps {
  children?: React.ReactNode
  index: number
  value: any
}
const useStyles = makeStyles((theme: Theme) => ({
  tabPanelStyle: {
    minWidth: '100%'
  },
  box: {
    padding: '0'
  }
}))

const TabPanel: React.FC<ITabPanelProps> = (props: ITabPanelProps): any => {
  const { children, value, index, ...other } = props

  const classes = useStyles()

  return (
    <div
      className={classes.tabPanelStyle}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={classes.box}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export { TabPanel }
