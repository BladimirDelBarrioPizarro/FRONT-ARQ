import React from 'react'
import {
  Checkbox,
  makeStyles
} from '@material-ui/core'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import { ITableElementCheckbox } from '../types'

const useStyles = makeStyles({
  checkboxStyle: {
    color: '#ff9900'
  }
})

const TableElementCheckbox: React.FC<ITableElementCheckbox> = ({
  value,
  tableMeta,
  singelValue,
  itemChecked,
  handleCheckReport
}) => {
  const classes = useStyles()

  return (
    <>{singelValue
      ? <Checkbox
        icon={<RadioButtonUncheckedRoundedIcon />}
        checkedIcon={<RadioButtonCheckedRoundedIcon
          className={classes.checkboxStyle}
        />}
        name="checkedB"
        id={ value }
        checked={value === itemChecked}
        onClick={(e) => { handleCheckReport(e, tableMeta) }}
      />
      : <Checkbox
        icon={<RadioButtonUncheckedRoundedIcon />}
        checkedIcon={<RadioButtonCheckedRoundedIcon
          className={classes.checkboxStyle}
        />}
        name="checkedB"
        id={ value }
        onClick={(e) => { handleCheckReport(e, tableMeta) }}
      />
    }
    </>
  )
}

export { TableElementCheckbox }
