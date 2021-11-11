import React from 'react'
import { ISummaryPayments } from './types'
import {
  makeStyles,
  Grid
} from '@material-ui/core'

import {
  ElementInput,
  ElementInputCol
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
    justifyContent: 'flex-start'
    // width: '100%'
  },
  divFlex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '95%'
    //  marginRight: '6rem'
  }
})

const SummaryPayments: React.FC<ISummaryPayments> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['SummaryPayments:title']}
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
                  name: 'fechacalculo',
                  label: i18n['SummaryPayments:fechacalculo'],
                  value: data[0].fechacalculo
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

              {data.map((items, index) => (
                <>
                  {[
                    {
                      type: 'text',
                      name: 'periodoconsiderado' + index,
                      label: i18n['SummaryPayments:periodoconsiderado'],
                      value: items.periodoconsiderado,
                      typeBis: 'text',
                      nameBis: 'numproveedores' + index,
                      labelBis: i18n['SummaryPayments:numproveedores'],
                      valueBis: items.numproveedores,
                      typeBis2: 'text',
                      nameBis2: 'transacciones' + index,
                      labelBis2: i18n['SummaryPayments:transacciones'],
                      valueBis2: items.transacciones,
                      typeBis3: 'text',
                      nameBis3: 'importetransacciones' + index,
                      labelBis3: i18n['SummaryPayments:importetransacciones'],
                      valueBis3: items.importetransacciones,
                      typeBis4: 'text',
                      nameBis4: 'importeretrasado' + index,
                      labelBis4: i18n['SummaryPayments:importeretrasado'],
                      valueBis4: items.importeretrasado,
                      typeBis5: 'text',
                      nameBis5: 'moneda' + index,
                      labelBis5: i18n['SummaryPayments:moneda'],
                      valueBis5: items.moneda
                    }
                  ].map(({
                    type, name, label, value,
                    typeBis, nameBis, labelBis, valueBis,
                    typeBis2, nameBis2, labelBis2, valueBis2,
                    typeBis3, nameBis3, labelBis3, valueBis3,
                    typeBis4, nameBis4, labelBis4, valueBis4,
                    typeBis5, nameBis5, labelBis5, valueBis5
                  }, index) => (
                    <div className={classes.divFlex} key={index}>
                      <ElementInputCol
                        type={type}
                        name={name}
                        label={label}
                        value={value}
                        size='l'
                      />
                      <ElementInputCol
                        type={typeBis}
                        name={nameBis}
                        label={labelBis}
                        value={valueBis}
                        size='l'
                      />
                      <ElementInputCol
                        type={typeBis2}
                        name={nameBis2}
                        label={labelBis2}
                        value={valueBis2}
                        size='l'
                      />
                      <ElementInputCol
                        type={typeBis3}
                        name={nameBis3}
                        label={labelBis3}
                        value={valueBis3}
                        size='l'
                      />
                      <ElementInputCol
                        type={typeBis4}
                        name={nameBis4}
                        label={labelBis4}
                        value={valueBis4}
                        size='l'
                      />
                      <ElementInputCol
                        type={typeBis5}
                        name={nameBis5}
                        label={labelBis5}
                        value={valueBis5}
                        size='l'
                      />
                    </div>
                  ))}
                  {[
                    {
                      typeBis: 'text',
                      nameBis: 'comportamiento1' + index,
                      labelBis: i18n['SummaryPayments:comportamiento'],
                      valueBis: items.comportamiento1,
                      typeBis2: 'text',
                      nameBis2: 'transaccionescomerciales1' + index,
                      labelBis2: i18n['SummaryPayments:transacciones'],
                      valueBis2: items.transaccionescomerciales1,
                      typeBis3: 'text',
                      nameBis3: 'promediominimo1' + index,
                      labelBis3: i18n['SummaryPayments:promediominimo'],
                      valueBis3: items.promediominimo1,
                      typeBis4: 'text',
                      nameBis4: 'promediomaximo1' + index,
                      labelBis4: i18n['SummaryPayments:promediomaximo'],
                      valueBis4: items.promediomaximo1,
                      typeBis5: 'text',
                      nameBis5: 'importe1' + index,
                      labelBis5: i18n['SummaryPayments:importe'],
                      valueBis5: items.importe1,
                      typeBis6: 'text',
                      nameBis6: 'monedacol1' + index,
                      labelBis6: i18n['SummaryPayments:moneda'],
                      valueBis6: items.monedacol1
                    }
                  ].map(({
                    typeBis, nameBis, labelBis, valueBis,
                    typeBis2, nameBis2, labelBis2, valueBis2,
                    typeBis3, nameBis3, labelBis3, valueBis3,
                    typeBis4, nameBis4, labelBis4, valueBis4,
                    typeBis5, nameBis5, labelBis5, valueBis5,
                    typeBis6, nameBis6, labelBis6, valueBis6
                  }, index) => (
                    <div className={classes.divFlex} key={index}>
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <ElementInputCol
                          type={typeBis}
                          name={nameBis}
                          label={labelBis}
                          value={valueBis}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis2}
                          name={nameBis2}
                          label={labelBis2}
                          value={valueBis2}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis3}
                          name={nameBis3}
                          label={labelBis3}
                          value={valueBis3}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis4}
                          name={nameBis4}
                          label={labelBis4}
                          value={valueBis4}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis5}
                          name={nameBis5}
                          label={labelBis5}
                          value={valueBis5}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis6}
                          name={nameBis6}
                          label={labelBis6}
                          value={valueBis6}
                          size='l'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      typeBis: 'text',
                      nameBis: 'comportamiento2' + index,
                      valueBis: items.comportamiento2,
                      typeBis2: 'text',
                      nameBis2: 'transaccionescomerciales2' + index,
                      valueBis2: items.transaccionescomerciales2,
                      typeBis3: 'text',
                      nameBis3: 'promediominimo2' + index,
                      valueBis3: items.promediominimo2,
                      typeBis4: 'text',
                      nameBis4: 'promediomaximo2' + index,
                      valueBis4: items.promediomaximo2,
                      typeBis5: 'text',
                      nameBis5: 'importe2' + index,
                      valueBis5: items.importe2,
                      typeBis6: 'text',
                      nameBis6: 'importe2' + index,
                      valueBis6: items.monedacol2
                    }
                  ].map(({
                    typeBis, nameBis, valueBis,
                    typeBis2, nameBis2, valueBis2,
                    typeBis3, nameBis3, valueBis3,
                    typeBis4, nameBis4, valueBis4,
                    typeBis5, nameBis5, valueBis5,
                    typeBis6, nameBis6, valueBis6
                  }, index) => (
                    <div className={classes.divFlex} key={index}>
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <ElementInputCol
                          type={typeBis}
                          name={nameBis}
                          label={''}
                          value={valueBis}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis2}
                          name={nameBis2}
                          label={''}
                          value={valueBis2}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis3}
                          name={nameBis3}
                          label={''}
                          value={valueBis3}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis4}
                          name={nameBis4}
                          label={''}
                          value={valueBis4}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis5}
                          name={nameBis5}
                          label={''}
                          value={valueBis5}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis6}
                          name={nameBis6}
                          label={''}
                          value={valueBis6}
                          size='l'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      typeBis: 'text',
                      nameBis: 'comportamiento3' + index,
                      valueBis: items.comportamiento3,
                      typeBis2: 'text',
                      nameBis2: 'transaccionescomerciales3' + index,
                      valueBis2: items.transaccionescomerciales3,
                      typeBis3: 'text',
                      nameBis3: 'promediominimo3' + index,
                      valueBis3: items.promediominimo3,
                      typeBis4: 'text',
                      nameBis4: 'promediomaximo3' + index,
                      valueBis4: items.promediomaximo3,
                      typeBis5: 'text',
                      nameBis5: 'importe3' + index,
                      valueBis5: items.importe3,
                      typeBis6: 'text',
                      nameBis6: 'importe3' + index,
                      valueBis6: items.monedacol3
                    }
                  ].map(({
                    typeBis, nameBis, valueBis,
                    typeBis2, nameBis2, valueBis2,
                    typeBis3, nameBis3, valueBis3,
                    typeBis4, nameBis4, valueBis4,
                    typeBis5, nameBis5, valueBis5,
                    typeBis6, nameBis6, valueBis6
                  }, index) => (
                    <div className={classes.divFlex} key={index}>
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <ElementInputCol
                          type={typeBis}
                          name={nameBis}
                          label={''}
                          value={valueBis}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis2}
                          name={nameBis2}
                          label={''}
                          value={valueBis2}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis3}
                          name={nameBis3}
                          label={''}
                          value={valueBis3}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis4}
                          name={nameBis4}
                          label={''}
                          value={valueBis4}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis5}
                          name={nameBis5}
                          label={''}
                          value={valueBis5}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis6}
                          name={nameBis6}
                          label={''}
                          value={valueBis6}
                          size='l'
                        />
                      </Grid>
                    </div>
                  ))}
                  {[
                    {
                      typeBis: 'text',
                      nameBis: 'comportamiento4' + index,
                      valueBis: items.comportamiento4,
                      typeBis2: 'text',
                      nameBis2: 'transaccionescomerciales4' + index,
                      valueBis2: items.transaccionescomerciales4,
                      typeBis3: 'text',
                      nameBis3: 'promediominimo4' + index,
                      valueBis3: items.promediominimo4,
                      typeBis4: 'text',
                      nameBis4: 'promediomaximo4' + index,
                      valueBis4: items.promediomaximo4,
                      typeBis5: 'text',
                      nameBis5: 'importe4' + index,
                      valueBis5: items.importe4,
                      typeBis6: 'text',
                      nameBis6: 'importe4' + index,
                      valueBis6: items.monedacol4
                    }
                  ].map(({
                    typeBis, nameBis, valueBis,
                    typeBis2, nameBis2, valueBis2,
                    typeBis3, nameBis3, valueBis3,
                    typeBis4, nameBis4, valueBis4,
                    typeBis5, nameBis5, valueBis5,
                    typeBis6, nameBis6, valueBis6
                  }, index) => (
                    <div className={classes.divFlex} key={index}>
                      <Grid container
                        direction="row"
                        justify="flex-start"
                        alignItems="center">
                        <ElementInputCol
                          type={typeBis}
                          name={nameBis}
                          label={''}
                          value={valueBis}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis2}
                          name={nameBis2}
                          label={''}
                          value={valueBis2}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis3}
                          name={nameBis3}
                          label={''}
                          value={valueBis3}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis4}
                          name={nameBis4}
                          label={''}
                          value={valueBis4}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis5}
                          name={nameBis5}
                          label={''}
                          value={valueBis5}
                          size='l'
                        />
                        <ElementInputCol
                          type={typeBis6}
                          name={nameBis6}
                          label={''}
                          value={valueBis6}
                          size='l'
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

export { SummaryPayments }
