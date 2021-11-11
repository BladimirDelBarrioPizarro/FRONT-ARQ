import React from 'react'
import { IDebtHistory } from './types'
import {
  makeStyles
} from '@material-ui/core'
import { Form, Formik, FormikProps } from 'formik'
import { ElementInputTable } from '../../atoms/ElementInputTable/ElementInputTable'

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

const DebtHistory: React.FC<IDebtHistory> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeaderBold}>
            {i18n['DebtHistory:title']}
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
            {/* Tabla Regulated  */}
            <table className={classes.table} style={{ marginBottom: '16px' }} >
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                  </span>
                </td>
                {[
                  {
                    value: data.regulatedPeriodo1
                  },
                  {
                    value: data.regulatedPeriodo2
                  },
                  {
                    value: data.regulatedPeriodo3
                  },
                  {
                    value: data.regulatedPeriodo4
                  },
                  {
                    value: data.regulatedPeriodo5
                  },
                  {
                    value: data.regulatedPeriodo6
                  }
                ].map(({ value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <span className={classes.labelStyle}>
                      {value}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Regulated calificacion */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:calificacion']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedCalificacion1',
                    value: data.regulatedCalificacion1
                  },
                  {
                    name: 'regulatedCalificacion2',
                    value: data.regulatedCalificacion2
                  },
                  {
                    name: 'regulatedCalificacion3',
                    value: data.regulatedCalificacion3
                  },
                  {
                    name: 'regulatedCalificacion4',
                    value: data.regulatedCalificacion4
                  },
                  {
                    name: 'regulatedCalificacion5',
                    value: data.regulatedCalificacion5
                  },
                  {
                    name: 'regulatedCalificacion6',
                    value: data.regulatedCalificacion6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* Regulated nroEntidades */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:nroEntidades']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedNroEntidades1',
                    value: data.regulatedNroEntidades1
                  },
                  {
                    name: 'regulatedNroEntidades2',
                    value: data.regulatedNroEntidades2
                  },
                  {
                    name: 'regulatedNroEntidades3',
                    value: data.regulatedNroEntidades3
                  },
                  {
                    name: 'regulatedNroEntidades4',
                    value: data.regulatedNroEntidades4
                  },
                  {
                    name: 'regulatedNroEntidades5',
                    value: data.regulatedNroEntidades5
                  },
                  {
                    name: 'regulatedNroEntidades6',
                    value: data.regulatedNroEntidades6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>
              {/* Regulated duedaVigente */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:duedaVigente']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedDuedaVigente1',
                    value: data.regulatedDuedaVigente1
                  },
                  {
                    name: 'regulatedDuedaVigente2',
                    value: data.regulatedDuedaVigente2
                  },
                  {
                    name: 'regulatedDuedaVigente3',
                    value: data.regulatedDuedaVigente3
                  },
                  {
                    name: 'regulatedDuedaVigente4',
                    value: data.regulatedDuedaVigente4
                  },
                  {
                    name: 'regulatedDuedaVigente5',
                    value: data.regulatedDuedaVigente5
                  },
                  {
                    name: 'regulatedDuedaVigente6',
                    value: data.regulatedDuedaVigente6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* Regulated deudaAtrasada */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:deudaAtrasada']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedDeudaAtrasada1',
                    value: data.regulatedDeudaAtrasada1
                  },
                  {
                    name: 'regulatedDeudaAtrasada2',
                    value: data.regulatedDeudaAtrasada2
                  },
                  {
                    name: 'regulatedDeudaAtrasada3',
                    value: data.regulatedDeudaAtrasada3
                  },
                  {
                    name: 'regulatedDeudaAtrasada4',
                    value: data.regulatedDeudaAtrasada4
                  },
                  {
                    name: 'regulatedDeudaAtrasada5',
                    value: data.regulatedDeudaAtrasada5
                  },
                  {
                    name: 'regulatedDeudaAtrasada6',
                    value: data.regulatedDeudaAtrasada6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* Regulated duedaJudicial */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:duedaJudicial']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedDuedaJudicial1',
                    value: data.regulatedDuedaJudicial1
                  },
                  {
                    name: 'regulatedDuedaJudicial2',
                    value: data.regulatedDuedaJudicial2
                  },
                  {
                    name: 'regulatedDuedaJudicial3',
                    value: data.regulatedDuedaJudicial3
                  },
                  {
                    name: 'regulatedDuedaJudicial4',
                    value: data.regulatedDuedaJudicial4
                  },
                  {
                    name: 'regulatedDuedaJudicial5',
                    value: data.regulatedDuedaJudicial5
                  },
                  {
                    name: 'regulatedDuedaJudicial6',
                    value: data.regulatedDuedaJudicial6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* Regulated duedaCastigada */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:duedaCastigada']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedDuedaCastigada1',
                    value: data.regulatedDuedaCastigada1
                  },
                  {
                    name: 'regulatedDuedaCastigada2',
                    value: data.regulatedDuedaCastigada2
                  },
                  {
                    name: 'regulatedDuedaCastigada3',
                    value: data.regulatedDuedaCastigada3
                  },
                  {
                    name: 'regulatedDuedaCastigada4',
                    value: data.regulatedDuedaCastigada4
                  },
                  {
                    name: 'regulatedDuedaCastigada5',
                    value: data.regulatedDuedaCastigada5
                  },
                  {
                    name: 'regulatedDuedaCastigada6',
                    value: data.regulatedDuedaCastigada6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* Regulated duedaTotal */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:duedaTotal']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedDuedaTotal1',
                    value: data.regulatedDuedaTotal1
                  },
                  {
                    name: 'regulatedDuedaTotal2',
                    value: data.regulatedDuedaTotal2
                  },
                  {
                    name: 'regulatedDuedaTotal3',
                    value: data.regulatedDuedaTotal3
                  },
                  {
                    name: 'regulatedDuedaTotal4',
                    value: data.regulatedDuedaTotal4
                  },
                  {
                    name: 'regulatedDuedaTotal5',
                    value: data.regulatedDuedaTotal5
                  },
                  {
                    name: 'regulatedDuedaTotal6',
                    value: data.regulatedDuedaTotal6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>
              {/* Regulated diasAtraso */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:diasAtraso']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedDiasAtraso1',
                    value: data.regulatedDiasAtraso1
                  },
                  {
                    name: 'regulatedDiasAtraso2',
                    value: data.regulatedDiasAtraso2
                  },
                  {
                    name: 'regulatedDiasAtraso3',
                    value: data.regulatedDiasAtraso3
                  },
                  {
                    name: 'regulatedDiasAtraso4',
                    value: data.regulatedDiasAtraso4
                  },
                  {
                    name: 'regulatedDiasAtraso5',
                    value: data.regulatedDiasAtraso5
                  },
                  {
                    name: 'regulatedDiasAtraso6',
                    value: data.regulatedDiasAtraso6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>
            </table>

            {/* Tabla nonRegulated  */}
            <table className={classes.table} style={{ marginBottom: '16px' }} >
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                  </span>
                </td>
                {[
                  {
                    value: data.nonRegulatedPeriodo1
                  },
                  {
                    value: data.nonRegulatedPeriodo2
                  },
                  {
                    value: data.nonRegulatedPeriodo3
                  },
                  {
                    value: data.nonRegulatedPeriodo4
                  },
                  {
                    value: data.nonRegulatedPeriodo5
                  },
                  {
                    value: data.nonRegulatedPeriodo6
                  }
                ].map(({ value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <span className={classes.labelStyle}>
                      {value}
                    </span>
                  </td>
                ))}
              </tr>

              {/* nonRegulated calificacion */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:calificacion']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedCalificacion1',
                    value: data.nonRegulatedCalificacion1
                  },
                  {
                    name: 'nonRegulatedCalificacion2',
                    value: data.nonRegulatedCalificacion2
                  },
                  {
                    name: 'nonRegulatedCalificacion3',
                    value: data.nonRegulatedCalificacion3
                  },
                  {
                    name: 'nonRegulatedCalificacion4',
                    value: data.nonRegulatedCalificacion4
                  },
                  {
                    name: 'nonRegulatedCalificacion5',
                    value: data.nonRegulatedCalificacion5
                  },
                  {
                    name: 'nonRegulatedCalificacion6',
                    value: data.nonRegulatedCalificacion6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* nonRegulated nroEntidades */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:nroEntidades']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedNroEntidades1',
                    value: data.nonRegulatedNroEntidades1
                  },
                  {
                    name: 'nonRegulatedNroEntidades2',
                    value: data.nonRegulatedNroEntidades2
                  },
                  {
                    name: 'nonRegulatedNroEntidades3',
                    value: data.nonRegulatedNroEntidades3
                  },
                  {
                    name: 'nonRegulatedNroEntidades4',
                    value: data.nonRegulatedNroEntidades4
                  },
                  {
                    name: 'nonRegulatedNroEntidades5',
                    value: data.nonRegulatedNroEntidades5
                  },
                  {
                    name: 'nonRegulatedNroEntidades6',
                    value: data.nonRegulatedNroEntidades6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>
              {/* nonRegulated duedaVigente */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:duedaVigente']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedDuedaVigente1',
                    value: data.nonRegulatedDuedaVigente1
                  },
                  {
                    name: 'nonRegulatedDuedaVigente2',
                    value: data.nonRegulatedDuedaVigente2
                  },
                  {
                    name: 'nonRegulatedDuedaVigente3',
                    value: data.nonRegulatedDuedaVigente3
                  },
                  {
                    name: 'nonRegulatedDuedaVigente4',
                    value: data.nonRegulatedDuedaVigente4
                  },
                  {
                    name: 'nonRegulatedDuedaVigente5',
                    value: data.nonRegulatedDuedaVigente5
                  },
                  {
                    name: 'nonRegulatedDuedaVigente6',
                    value: data.nonRegulatedDuedaVigente6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* nonRegulated deudaAtrasada */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:deudaAtrasada']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedDeudaAtrasada1',
                    value: data.nonRegulatedDeudaAtrasada1
                  },
                  {
                    name: 'nonRegulatedDeudaAtrasada2',
                    value: data.nonRegulatedDeudaAtrasada2
                  },
                  {
                    name: 'nonRegulatedDeudaAtrasada3',
                    value: data.nonRegulatedDeudaAtrasada3
                  },
                  {
                    name: 'nonRegulatedDeudaAtrasada4',
                    value: data.nonRegulatedDeudaAtrasada4
                  },
                  {
                    name: 'nonRegulatedDeudaAtrasada5',
                    value: data.nonRegulatedDeudaAtrasada5
                  },
                  {
                    name: 'nonRegulatedDeudaAtrasada6',
                    value: data.nonRegulatedDeudaAtrasada6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* nonRegulated duedaJudicial */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:duedaJudicial']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedDuedaJudicial1',
                    value: data.nonRegulatedDuedaJudicial1
                  },
                  {
                    name: 'nonRegulatedDuedaJudicial2',
                    value: data.nonRegulatedDuedaJudicial2
                  },
                  {
                    name: 'nonRegulatedDuedaJudicial3',
                    value: data.nonRegulatedDuedaJudicial3
                  },
                  {
                    name: 'nonRegulatedDuedaJudicial4',
                    value: data.nonRegulatedDuedaJudicial4
                  },
                  {
                    name: 'nonRegulatedDuedaJudicial5',
                    value: data.nonRegulatedDuedaJudicial5
                  },
                  {
                    name: 'nonRegulatedDuedaJudicial6',
                    value: data.nonRegulatedDuedaJudicial6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* nonRegulated duedaCastigada */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:duedaCastigada']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedDuedaCastigada1',
                    value: data.nonRegulatedDuedaCastigada1
                  },
                  {
                    name: 'nonRegulatedDuedaCastigada2',
                    value: data.nonRegulatedDuedaCastigada2
                  },
                  {
                    name: 'nonRegulatedDuedaCastigada3',
                    value: data.nonRegulatedDuedaCastigada3
                  },
                  {
                    name: 'nonRegulatedDuedaCastigada4',
                    value: data.nonRegulatedDuedaCastigada4
                  },
                  {
                    name: 'nonRegulatedDuedaCastigada5',
                    value: data.nonRegulatedDuedaCastigada5
                  },
                  {
                    name: 'nonRegulatedDuedaCastigada6',
                    value: data.nonRegulatedDuedaCastigada6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>

              {/* nonRegulated duedaTotal */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:duedaTotal']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedDuedaTotal1',
                    value: data.nonRegulatedDuedaTotal1
                  },
                  {
                    name: 'nonRegulatedDuedaTotal2',
                    value: data.nonRegulatedDuedaTotal2
                  },
                  {
                    name: 'nonRegulatedDuedaTotal3',
                    value: data.nonRegulatedDuedaTotal3
                  },
                  {
                    name: 'nonRegulatedDuedaTotal4',
                    value: data.nonRegulatedDuedaTotal4
                  },
                  {
                    name: 'nonRegulatedDuedaTotal5',
                    value: data.nonRegulatedDuedaTotal5
                  },
                  {
                    name: 'nonRegulatedDuedaTotal6',
                    value: data.nonRegulatedDuedaTotal6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
                  </td>
                ))}
              </tr>
              {/* nonRegulated diasAtraso */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['DebtHistory:diasAtraso']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedDiasAtraso1',
                    value: data.nonRegulatedDiasAtraso1
                  },
                  {
                    name: 'nonRegulatedDiasAtraso2',
                    value: data.nonRegulatedDiasAtraso2
                  },
                  {
                    name: 'nonRegulatedDiasAtraso3',
                    value: data.nonRegulatedDiasAtraso3
                  },
                  {
                    name: 'nonRegulatedDiasAtraso4',
                    value: data.nonRegulatedDiasAtraso4
                  },
                  {
                    name: 'nonRegulatedDiasAtraso5',
                    value: data.nonRegulatedDiasAtraso5
                  },
                  {
                    name: 'nonRegulatedDiasAtraso6',
                    value: data.nonRegulatedDiasAtraso6
                  }
                ].map(({ name, value }, index) => (
                  <td className={classes.contentTable} key={index}>
                    <ElementInputTable
                      type={'text'}
                      name={name}
                      label={''}
                      value={value}
                      size={'s'}
                    />
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

export { DebtHistory }
