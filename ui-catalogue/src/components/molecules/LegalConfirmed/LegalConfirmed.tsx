import React from 'react'
import { ILegalConfirmed } from './types'
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

const LegalConfirmed: React.FC<ILegalConfirmed> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['LegalConfirmed:title']}
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
                      name: 'fecha' + index,
                      label: i18n['LegalConfirmed:fecha'],
                      value: items.fecha,
                      typeBis: 'text',
                      nameBis: 'periodo' + index,
                      labelBis: i18n['LegalConfirmed:periodo'],
                      valueBis: items.periodo
                    }
                  ].map(({
                    type, name, label, value,
                    typeBis, nameBis, labelBis, valueBis
                  }, index) => (
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
                      name: 'tipoaccion' + index,
                      label: i18n['LegalConfirmed:tipoaccion'],
                      value: items.tipoaccion
                    }
                  ].map(({ type, name, label, value }, index) => (
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
                          size='l'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      type: 'text',
                      name: 'claseaccion' + index,
                      label: i18n['LegalConfirmed:claseaccion'],
                      value: items.claseaccion,
                      typeBis: 'text',
                      nameBis: 'nprocedimientos' + index,
                      labelBis: i18n['LegalConfirmed:nprocedimientos'],
                      valueBis: items.nprocedimientos
                    }
                  ].map(({
                    type, name, label, value,
                    typeBis, nameBis, labelBis, valueBis
                  }, index) => (
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
                      name: 'importe' + index,
                      label: i18n['LegalConfirmed:importe'],
                      value: items.importe,
                      typeBis: 'text',
                      nameBis: 'procedimientoLegal' + index,
                      labelBis: i18n['LegalConfirmed:procedimientoLegal'],
                      valueBis: items.procedimientoLegal
                    }
                  ].map(({
                    type, name, label, value,
                    typeBis, nameBis, labelBis, valueBis
                  }, index) => (
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

export { LegalConfirmed }
