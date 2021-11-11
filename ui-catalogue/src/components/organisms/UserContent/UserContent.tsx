import React, { useState } from 'react'
import {
  makeStyles,
  List,
  Typography
} from '@material-ui/core'
import { IUserContent } from './types'
import { ApplicationElement } from '../../molecules/ApplicationElement/ApplicationElement'

const useStyles = makeStyles((theme) => ({
  divGlobal: {
    cursor: 'default',
    '&:hover': {
      cursor: 'pointer'
    },
    width: '100%'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },
  divTitle: {
    textAlign: 'center',
    width: '100%'
  },
  labelStyle: {
    fontFamily: 'NeverMindBold',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    minWidth: '10em'
  },
  divElement: {
    width: '45%',
    cursor: 'default',
    '&:hover': {
      cursor: 'pointer'
    },
    marginTop: '5px',
    marginLeft: '5px',
    marginRight: '5px',
    marginBottom: '5px'
  }
}))

const UserContent: React.FC<IUserContent> = ({
  i18n,
  applications,
  handleApplication
}) => {
  const [selectedKey, setSelectedKey] = useState(0)
  const classes = useStyles()

  const handleSelectedElement = (index): void => {
    setSelectedKey(index)
    handleApplication(index)
  }

  return (
    <>
      <div className={classes.divTitle}>
        <Typography className={classes.labelStyle}>
          {i18n['MenuUser:title']}
        </Typography>
      </div>

      <List>
        <div className={classes.divContainer}>
          {
            applications.map((application, key) =>
              <>
                <div className={classes.divElement} onClick={(e) => handleSelectedElement(key)}>
                  <ApplicationElement
                    application={application}
                    selected={key === selectedKey}
                  />
                </div>
              </>
            )
          }
        </div>
      </List>
    </>
  )
}

export { UserContent }
