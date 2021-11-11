import React from 'react'
import { IHistoryPeru } from './types'
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

const HistoryPeru: React.FC<IHistoryPeru> = ({
  i18n,
  data
}) => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.divHeaderContainer}>
        <div className={classes.divHeaderFlex}>
          <span className={classes.labelHeaderBold}>
            {i18n['HistoryPeru:title']}
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
                    {i18n['HistoryPeru:nroEntidades']}
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

              {/* Regulated nor */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:nor']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedNor1',
                    value: data.regulatedNor1
                  },
                  {
                    name: 'regulatedNor2',
                    value: data.regulatedNor2
                  },
                  {
                    name: 'regulatedNor3',
                    value: data.regulatedNor3
                  },
                  {
                    name: 'regulatedNor4',
                    value: data.regulatedNor4
                  },
                  {
                    name: 'regulatedNor5',
                    value: data.regulatedNor5
                  },
                  {
                    name: 'regulatedNor6',
                    value: data.regulatedNor6
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
              {/* Regulated cpp */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:cpp']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedCpp1',
                    value: data.regulatedCpp1
                  },
                  {
                    name: 'regulatedCpp2',
                    value: data.regulatedCpp2
                  },
                  {
                    name: 'regulatedCpp3',
                    value: data.regulatedCpp3
                  },
                  {
                    name: 'regulatedCpp4',
                    value: data.regulatedCpp4
                  },
                  {
                    name: 'regulatedCpp5',
                    value: data.regulatedCpp5
                  },
                  {
                    name: 'regulatedCpp6',
                    value: data.regulatedCpp6
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

              {/* Regulated def */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:def']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedDef1',
                    value: data.regulatedDef1
                  },
                  {
                    name: 'regulatedDef2',
                    value: data.regulatedDef2
                  },
                  {
                    name: 'regulatedDef3',
                    value: data.regulatedDef3
                  },
                  {
                    name: 'regulatedDef4',
                    value: data.regulatedDef4
                  },
                  {
                    name: 'regulatedDef5',
                    value: data.regulatedDef5
                  },
                  {
                    name: 'regulatedDef6',
                    value: data.regulatedDef6
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

              {/* Regulated dud */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:dud']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedDud1',
                    value: data.regulatedDud1
                  },
                  {
                    name: 'regulatedDud2',
                    value: data.regulatedDud2
                  },
                  {
                    name: 'regulatedDud3',
                    value: data.regulatedDud3
                  },
                  {
                    name: 'regulatedDud4',
                    value: data.regulatedDud4
                  },
                  {
                    name: 'regulatedDud5',
                    value: data.regulatedDud5
                  },
                  {
                    name: 'regulatedDud6',
                    value: data.regulatedDud6
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

              {/* Regulated per */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:per']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedPer1',
                    value: data.regulatedPer1
                  },
                  {
                    name: 'regulatedPer2',
                    value: data.regulatedPer2
                  },
                  {
                    name: 'regulatedPer3',
                    value: data.regulatedPer3
                  },
                  {
                    name: 'regulatedPer4',
                    value: data.regulatedPer4
                  },
                  {
                    name: 'regulatedPer5',
                    value: data.regulatedPer5
                  },
                  {
                    name: 'regulatedPer6',
                    value: data.regulatedPer6
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
                    {i18n['HistoryPeru:totalDeuda']}
                  </span>
                </td>
                {[
                  {
                    name: 'regulatedTotalDeuda1',
                    value: data.regulatedTotalDeuda1
                  },
                  {
                    name: 'regulatedTotalDeuda2',
                    value: data.regulatedTotalDeuda2
                  },
                  {
                    name: 'regulatedTotalDeuda3',
                    value: data.regulatedTotalDeuda3
                  },
                  {
                    name: 'regulatedTotalDeuda4',
                    value: data.regulatedTotalDeuda4
                  },
                  {
                    name: 'regulatedTotalDeuda5',
                    value: data.regulatedTotalDeuda5
                  },
                  {
                    name: 'regulatedTotalDeuda6',
                    value: data.regulatedTotalDeuda6
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
                    {i18n['HistoryPeru:nroEntidades']}
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

              {/* nonRegulated nor */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:nor']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedNor1',
                    value: data.nonRegulatedNor1
                  },
                  {
                    name: 'nonRegulatedNor2',
                    value: data.nonRegulatedNor2
                  },
                  {
                    name: 'nonRegulatedNor3',
                    value: data.nonRegulatedNor3
                  },
                  {
                    name: 'nonRegulatedNor4',
                    value: data.nonRegulatedNor4
                  },
                  {
                    name: 'nonRegulatedNor5',
                    value: data.nonRegulatedNor5
                  },
                  {
                    name: 'nonRegulatedNor6',
                    value: data.nonRegulatedNor6
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
              {/* nonRegulated cpp */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:cpp']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedCpp1',
                    value: data.nonRegulatedCpp1
                  },
                  {
                    name: 'nonRegulatedCpp2',
                    value: data.nonRegulatedCpp2
                  },
                  {
                    name: 'nonRegulatedCpp3',
                    value: data.nonRegulatedCpp3
                  },
                  {
                    name: 'nonRegulatedCpp4',
                    value: data.nonRegulatedCpp4
                  },
                  {
                    name: 'nonRegulatedCpp5',
                    value: data.nonRegulatedCpp5
                  },
                  {
                    name: 'nonRegulatedCpp6',
                    value: data.nonRegulatedCpp6
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

              {/* nonRegulated def */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:def']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedDef1',
                    value: data.nonRegulatedDef1
                  },
                  {
                    name: 'nonRegulatedDef2',
                    value: data.nonRegulatedDef2
                  },
                  {
                    name: 'nonRegulatedDef3',
                    value: data.nonRegulatedDef3
                  },
                  {
                    name: 'nonRegulatedDef4',
                    value: data.nonRegulatedDef4
                  },
                  {
                    name: 'nonRegulatedDef5',
                    value: data.nonRegulatedDef5
                  },
                  {
                    name: 'nonRegulatedDef6',
                    value: data.nonRegulatedDef6
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

              {/* nonRegulated dud */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:dud']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedDud1',
                    value: data.nonRegulatedDud1
                  },
                  {
                    name: 'nonRegulatedDud2',
                    value: data.nonRegulatedDud2
                  },
                  {
                    name: 'nonRegulatedDud3',
                    value: data.nonRegulatedDud3
                  },
                  {
                    name: 'nonRegulatedDud4',
                    value: data.nonRegulatedDud4
                  },
                  {
                    name: 'nonRegulatedDud5',
                    value: data.nonRegulatedDud5
                  },
                  {
                    name: 'nonRegulatedDud6',
                    value: data.nonRegulatedDud6
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

              {/* nonRegulated per */}
              <tr>
                <td className={classes.contentTable}>
                  <span className={classes.labelStyle}>
                    {i18n['HistoryPeru:per']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedPer1',
                    value: data.nonRegulatedPer1
                  },
                  {
                    name: 'nonRegulatedPer2',
                    value: data.nonRegulatedPer2
                  },
                  {
                    name: 'nonRegulatedPer3',
                    value: data.nonRegulatedPer3
                  },
                  {
                    name: 'nonRegulatedPer4',
                    value: data.nonRegulatedPer4
                  },
                  {
                    name: 'nonRegulatedPer5',
                    value: data.nonRegulatedPer5
                  },
                  {
                    name: 'nonRegulatedPer6',
                    value: data.nonRegulatedPer6
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
                    {i18n['HistoryPeru:totalDeuda']}
                  </span>
                </td>
                {[
                  {
                    name: 'nonRegulatedTotalDeuda1',
                    value: data.nonRegulatedTotalDeuda1
                  },
                  {
                    name: 'nonRegulatedTotalDeuda2',
                    value: data.nonRegulatedTotalDeuda2
                  },
                  {
                    name: 'nonRegulatedTotalDeuda3',
                    value: data.nonRegulatedTotalDeuda3
                  },
                  {
                    name: 'nonRegulatedTotalDeuda4',
                    value: data.nonRegulatedTotalDeuda4
                  },
                  {
                    name: 'nonRegulatedTotalDeuda5',
                    value: data.nonRegulatedTotalDeuda5
                  },
                  {
                    name: 'nonRegulatedTotalDeuda6',
                    value: data.nonRegulatedTotalDeuda6
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

export { HistoryPeru }
