import React from 'react'
import { IDebtsAFP } from './types'
import {
  makeStyles
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'

const useStyles = makeStyles({
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
    marginTop: '20px',
    marginBottom: '10px'
  },
  labelHeaderBold: {
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
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '13px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end'
  },
  table: {
    width: '100%'
  },
  contentTable: {
    width: '10rem'
  }
})

const DebtsAFP: React.FC<IDebtsAFP> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeaderBold}>
            {i18n['DebtsAFP:title']}
          </span>
        </div>
      </div>

      <Formik
        initialValues={data}
        onSubmit={(values, actions) => {
          console.log(values) // eslint-disable-line
        }}
      >
        {(props: FormikProps<any>) => (
          <Form>
            <table className={classes.table} style={{ marginBottom: '16px' }} >
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                  </span>
                </td>
                {[
                  {
                    value: data.presuntaNoDeclaradaMonto6
                  }
                ].map(({ value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <span className={classes.labelStyle}>
                      {value}
                    </span>
                  </td>
                ))}
              </tr>
            </table>
          </Form>
        )}
      </Formik>

    </div>
  )
}

export { DebtsAFP }
