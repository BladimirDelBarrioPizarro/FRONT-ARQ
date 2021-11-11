import React from 'react'
import { IAdministrators } from './types'
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

const Administrators: React.FC<IAdministrators> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['Administrators:title']}
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

              {[
                {
                  type: 'text',
                  name: 'input1',
                  value: data.input1,
                  typeBis: 'text',
                  nameBis: 'input2',
                  valueBis: data.input2
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
                  name: 'input3',
                  value: data.input3
                }
              ].map(({ type, name, value }, index) => (
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
                      size='xl'
                    />
                  </Grid>
                </div>
              ))}
              {data.form.map((items, index) => (
                <>
                  {[
                    {
                      type: 'text',
                      name: 'relaciones1' + index,
                      label: i18n['Administrators:relaciones'],
                      value: items.relaciones1,
                      typeBis: 'text',
                      nameBis: 'relaciones2' + index,
                      valueBis: items.relaciones2
                    }
                  ].map(({ type, name, label, value, typeBis, nameBis, valueBis }, index) => (
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
                      name: 'asociacion' + index,
                      label: i18n['Administrators:asociacion'],
                      value: items.asociacion,
                      typeBis: 'text',
                      labelBis: i18n['Administrators:numeroDum'],
                      nameBis: 'numeroDum' + index,
                      valueBis: items.numeroDun
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
                  {[
                    {
                      type: 'text',
                      name: 'estatus1' + index,
                      label: i18n['Administrators:estatus'],
                      value: items.estatus1,
                      typeBis: 'text',
                      nameBis: 'estatus2' + index,
                      valueBis: items.estatus2
                    }
                  ].map(({ type, name, label, value, typeBis, nameBis, valueBis }, index) => (
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
                      name: 'administrador' + index,
                      label: i18n['Administrators:desde'],
                      value: items.administrador,
                      typeBis: 'text',
                      nameBis: 'fecha' + index,
                      labelBis: i18n['Administrators:fecha'],
                      valueBis: items.fecha
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
                </>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export { Administrators }
