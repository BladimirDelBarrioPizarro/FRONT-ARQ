import React from 'react'
import { IShareHolders } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput
} from '../../atoms'
import { Form, Formik, FormikProps } from 'formik'

const useStyles = makeStyles({
  divHeaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  divHeaderContainerChild: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    marginTop: '0rem'
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
    fontWeight: 'normal',
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
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%',
    marginRight: '6rem'
  }
})

const ShareHolders: React.FC<IShareHolders> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['Shareholders:title']}
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
            <div className={classes.divContainer}>

              {data.map((items, index) => (
                <>
                  {[
                    {
                      type: 'text',
                      name: 'input1' + index,
                      value: items.input1,
                      typeBis: 'text',
                      nameBis: 'input2' + index,
                      valueBis: items.input2
                    }
                  ].map(({ type, name, value, typeBis, nameBis, valueBis }, index) => (
                    <div className={classes.divFlex} key={index}>
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <ElementInput
                          type={type}
                          name={name}
                          label={''}
                          value={value}
                          size='m'
                        />
                        <ElementInput
                          type={typeBis}
                          name={nameBis}
                          label={''}
                          value={valueBis}
                          size='m'
                        />
                      </Grid>
                    </div>
                  ))}

                  {[
                    {
                      type: 'text',
                      name: 'numdum' + index,
                      label: i18n['Shareholders:numdum'],
                      value: items.numDum,
                      typeBis: 'text',
                      nameBis: 'accionista' + index,
                      labelBis: i18n['Shareholders:accionista'],
                      valueBis: items.accionista
                    },
                    {
                      type: 'text',
                      name: 'tipo' + index,
                      label: i18n['Shareholders:tipo'],
                      value: items.tipo,
                      typeBis: 'text',
                      nameBis: 'porcentaje' + index,
                      labelBis: i18n['Shareholders:porcentajeparticipacion'],
                      valueBis: items.porcentaje
                    },
                    {
                      type: 'text',
                      name: 'importe1' + index,
                      label: i18n['Shareholders:importe'],
                      value: items.importe1,
                      typeBis: 'text',
                      nameBis: 'importe2' + index,
                      valueBis: items.importe2
                    }
                  ].map(({ type, name, label, value, typeBis, nameBis, labelBis, valueBis }, index) => (
                    <div className={classes.divFlex} key={index}>
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <ElementInput
                          type={type}
                          name={name}
                          label={label}
                          value={value}
                          size='m'
                        />
                        <ElementInput
                          type={typeBis}
                          name={nameBis}
                          label={labelBis}
                          value={valueBis}
                          size='m'
                        />
                      </Grid>
                    </div>
                  ))}
                  <br></br>
                </>
              ))}

            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { ShareHolders }
