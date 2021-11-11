import React from 'react'
import { IRegulatedNonFinancialSystem } from './types'
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

const RegulatedNonFinancialSystem: React.FC<IRegulatedNonFinancialSystem> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeaderBold}>
            {i18n['RegulatedNonFinancialSystem:title']}
          </span>
        </div>
      </div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeader}>
            {i18n['RegulatedNonFinancialSystem:subtitle']}
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

              {/* Regulated flagImpagos */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:flagImpagos']}
                  </span>
                </td>
                {[
                  {
                    name: 'RegulatedFlagImpagos1',
                    value: data.regulatedFlagImpagos1
                  },
                  {
                    name: 'RegulatedFlagImpagos2',
                    value: data.regulatedFlagImpagos2
                  },
                  {
                    name: 'RegulatedFlagImpagos3',
                    value: data.regulatedFlagImpagos3
                  },
                  {
                    name: 'RegulatedFlagImpagos4',
                    value: data.regulatedFlagImpagos4
                  },
                  {
                    name: 'RegulatedFlagImpagos5',
                    value: data.regulatedFlagImpagos5
                  },
                  {
                    name: 'RegulatedFlagImpagos6',
                    value: data.regulatedFlagImpagos6
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

              {/* Regulated flagDeudaAtrasada */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:flagDeudaAtrasada']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedFlagDeudaAtrasada1',
                    value: data.regulatedFlagDeudaAtrasada1
                  },
                  {
                    name: 'regulatedFlagDeudaAtrasada2',
                    value: data.regulatedFlagDeudaAtrasada2
                  },
                  {
                    name: 'regulatedFlagDeudaAtrasada3',
                    value: data.regulatedFlagDeudaAtrasada3
                  },
                  {
                    name: 'regulatedFlagDeudaAtrasada4',
                    value: data.regulatedFlagDeudaAtrasada4
                  },
                  {
                    name: 'regulatedFlagDeudaAtrasada5',
                    value: data.regulatedFlagDeudaAtrasada5
                  },
                  {
                    name: 'regulatedFlagDeudaAtrasada6',
                    value: data.regulatedFlagDeudaAtrasada6
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
              {/* Regulated flagDeudasImpagadasInfocorp */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:flagDeudasImpagadasInfocorp']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedFlagDeudasImpagadasInfocorp1',
                    value: data.regulatedFlagDeudasImpagadasInfocorp1
                  },
                  {
                    name: 'regulatedFlagDeudasImpagadasInfocorp2',
                    value: data.regulatedFlagDeudasImpagadasInfocorp2
                  },
                  {
                    name: 'regulatedFlagDeudasImpagadasInfocorp3',
                    value: data.regulatedFlagDeudasImpagadasInfocorp3
                  },
                  {
                    name: 'regulatedFlagDeudasImpagadasInfocorp4',
                    value: data.regulatedFlagDeudasImpagadasInfocorp4
                  },
                  {
                    name: 'regulatedFlagDeudasImpagadasInfocorp5',
                    value: data.regulatedFlagDeudasImpagadasInfocorp5
                  },
                  {
                    name: 'regulatedFlagDeudasImpagadasInfocorp6',
                    value: data.regulatedFlagDeudasImpagadasInfocorp6
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

              {/* Regulated FlagInformacionNoDisponible */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:flagInformacionNoDisponible']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedFlagInformacionNoDisponible1',
                    value: data.regulatedFlagInformacionNoDisponible1
                  },
                  {
                    name: 'regulatedFlagDeudasImpagadasInfocorp2',
                    value: data.regulatedFlagInformacionNoDisponible2
                  },
                  {
                    name: 'regulatedFlagInformacionNoDisponible3',
                    value: data.regulatedFlagInformacionNoDisponible3
                  },
                  {
                    name: 'regulatedFlagInformacionNoDisponible4',
                    value: data.regulatedFlagInformacionNoDisponible4
                  },
                  {
                    name: 'regulatedFlagInformacionNoDisponible5',
                    value: data.regulatedFlagInformacionNoDisponible5
                  },
                  {
                    name: 'regulatedFlagInformacionNoDisponible6',
                    value: data.regulatedFlagInformacionNoDisponible6
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

              {/* Regulated DiasAtraso */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:diasAtraso']}
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

            {/* Tabla NonRegulated  */}
            <table className={classes.table}>
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

              {/* nonRegulated flagImpagos */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:flagImpagos']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedFlagImpagos1',
                    value: data.nonRegulatedFlagImpagos1
                  },
                  {
                    name: 'nonRegulatedFlagImpagos2',
                    value: data.nonRegulatedFlagImpagos2
                  },
                  {
                    name: 'nonRegulatedFlagImpagos3',
                    value: data.nonRegulatedFlagImpagos3
                  },
                  {
                    name: 'nonRegulatedFlagImpagos4',
                    value: data.nonRegulatedFlagImpagos4
                  },
                  {
                    name: 'nonRegulatedFlagImpagos5',
                    value: data.nonRegulatedFlagImpagos5
                  },
                  {
                    name: 'nonRegulatedFlagImpagos6',
                    value: data.nonRegulatedFlagImpagos6
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

              {/* nonRegulated flagDeudaAtrasada */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:flagDeudaAtrasada']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedFlagDeudaAtrasada1',
                    value: data.nonRegulatedFlagDeudaAtrasada1
                  },
                  {
                    name: 'nonRegulatedFlagDeudaAtrasada2',
                    value: data.nonRegulatedFlagDeudaAtrasada2
                  },
                  {
                    name: 'nonRegulatedFlagDeudaAtrasada3',
                    value: data.nonRegulatedFlagDeudaAtrasada3
                  },
                  {
                    name: 'nonRegulatedFlagDeudaAtrasada4',
                    value: data.nonRegulatedFlagDeudaAtrasada4
                  },
                  {
                    name: 'nonRegulatedFlagDeudaAtrasada5',
                    value: data.nonRegulatedFlagDeudaAtrasada5
                  },
                  {
                    name: 'nonRegulatedFlagDeudaAtrasada6',
                    value: data.nonRegulatedFlagDeudaAtrasada6
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
              {/* nonRegulated flagDeudasImpagadasInfocorp */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:flagDeudasImpagadasInfocorp']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedFlagDeudasImpagadasInfocorp1',
                    value: data.nonRegulatedFlagDeudasImpagadasInfocorp1
                  },
                  {
                    name: 'nonRegulatedFlagDeudasImpagadasInfocorp2',
                    value: data.nonRegulatedFlagDeudasImpagadasInfocorp2
                  },
                  {
                    name: 'nonRegulatedFlagDeudasImpagadasInfocorp3',
                    value: data.nonRegulatedFlagDeudasImpagadasInfocorp3
                  },
                  {
                    name: 'nonRegulatedFlagDeudasImpagadasInfocorp4',
                    value: data.nonRegulatedFlagDeudasImpagadasInfocorp4
                  },
                  {
                    name: 'nonRegulatedFlagDeudasImpagadasInfocorp5',
                    value: data.nonRegulatedFlagDeudasImpagadasInfocorp5
                  },
                  {
                    name: 'nonRegulatedFlagDeudasImpagadasInfocorp6',
                    value: data.nonRegulatedFlagDeudasImpagadasInfocorp6
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

              {/* nonRegulated FlagInformacionNoDisponible */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:flagInformacionNoDisponible']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedFlagInformacionNoDisponible1',
                    value: data.nonRegulatedFlagInformacionNoDisponible1
                  },
                  {
                    name: 'nonRegulatedFlagDeudasImpagadasInfocorp2',
                    value: data.nonRegulatedFlagInformacionNoDisponible2
                  },
                  {
                    name: 'nonRegulatedFlagInformacionNoDisponible3',
                    value: data.nonRegulatedFlagInformacionNoDisponible3
                  },
                  {
                    name: 'nonRegulatedFlagInformacionNoDisponible4',
                    value: data.nonRegulatedFlagInformacionNoDisponible4
                  },
                  {
                    name: 'nonRegulatedFlagInformacionNoDisponible5',
                    value: data.nonRegulatedFlagInformacionNoDisponible5
                  },
                  {
                    name: 'nonRegulatedFlagInformacionNoDisponible6',
                    value: data.nonRegulatedFlagInformacionNoDisponible6
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

              {/* nonRegulated DiasAtraso */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['RegulatedNonFinancialSystem:diasAtraso']}
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

export { RegulatedNonFinancialSystem }
