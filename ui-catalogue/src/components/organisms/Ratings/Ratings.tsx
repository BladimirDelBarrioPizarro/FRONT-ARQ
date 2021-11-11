import React, { Fragment } from 'react'
import {
  makeStyles
} from '@material-ui/core'
import { IRatings } from './types'
import { RatingForm } from '../../molecules/RatingForm/RatingForm'

const useStyles = makeStyles({
  margen: {
    marginTop: 15,
    border: 'solid 1px #eeeeee',
    maxWidth: '60vw'
  },
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginTop: '20px'
  },
  labelHeader: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    marginLeft: '1rem'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%'
  }
})
const Ratings: React.FC<IRatings> = ({
  i18n,
  data
}) => {
  const classes = useStyles()
  return (
    <Fragment>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['Ratings:title']}
          </span>
        </div>
      </div>
      <RatingForm
        i18n={i18n}
        data={data}
      />
    </Fragment>
  )
}

export { Ratings }
