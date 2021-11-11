import React from 'react'
import {
  makeStyles
} from '@material-ui/core'
import { IdataBouncedChecksRequestForm } from '../../molecules/BouncedChecks/types'
import { ElementInputTable } from '../ElementInputTable/ElementInputTable'

const useStyles = makeStyles({
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
    alignSelf: 'flex-end',
    padding: '5px',
    width: '10rem'
  },
  labelStyle3: {
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
    alignSelf: 'flex-end',
    padding: '5px',
    width: '10rem',
    marginLeft: '2.5rem'
  },
  labelStyle4: {
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
    alignSelf: 'flex-end',
    padding: '5px',
    width: '10rem',
    marginLeft: '3rem'
  },
  labelStyle5: {
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
    alignSelf: 'flex-end',
    padding: '5px',
    width: '10rem',
    marginLeft: '4.8rem'
  },
  labelStyle6: {
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
    alignSelf: 'flex-end',
    padding: '5px',
    width: '10rem',
    marginLeft: '7rem'
  },
  labelStyle7: {
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
    alignSelf: 'flex-end',
    padding: '5px',
    width: '10rem',
    marginLeft: '9rem'
  },
  labelStyle8: {
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
    alignSelf: 'flex-end',
    padding: '5px',
    width: '11rem',
    marginLeft: '9rem'
  },
  fieldStyle: {
    padding: '3px',
    width: '100%',
    height: '24px',
    fontSize: '13px',
    marginBottom: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none'
  },
  fieldStyleIn: {
    padding: '3px',
    width: '100%',
    height: '24px',
    fontSize: '13px',
    marginBottom: '3px',
    boxSizing: 'border-box',
    background: '#f9f9f9',
    backgroundColor: '#ffffff',
    color: '#666666',
    outline: 'none'
  },
  table: {
    tableLayout: 'fixed',
    border: 'none'
  },
  bodyTable: {
    display: 'flex',
    flexDirection: 'row'
  },
  contentTable: {
    width: '10rem'
  },
  tableHead: {
    marginLeft: '25rem'
  }
})

interface IElementTableLabel {
  label1: string
  label2: string
  label3: string
  label4: string
  label5: string
  label6: string
  label7: string
  label8: string
  label9: string
  label10: string
  label11: string
  label12: string
  label13: string
  label14: string
  label15: string
  values: IdataBouncedChecksRequestForm
}

const ElementTableLabel: React.FC<IElementTableLabel> = ({
  label1,
  label2,
  label3,
  label4,
  label5,
  label6,
  label7,
  label8,
  label9,
  label10,
  label11,
  label12,
  label13,
  label14,
  label15,
  values
}) => {
  const classes = useStyles()

  return (
    <>
      <table className={classes.table}>
        <tr className={classes.bodyTable}>
          <th className={classes.tableHead}>
            <span className={classes.labelStyle}>{label1}</span>
          </th>
          <th className={classes.tableHead}>
            <span className={classes.labelStyle}>{label2}</span>
          </th>
        </tr>
        <tr className={classes.bodyTable}>
          <td className={classes.contentTable}></td>
          <td className={classes.contentTable}>
            <span className={classes.labelStyle}>{label3}</span>
          </td>
          <td className={classes.contentTable}>
            <span className={classes.labelStyle}>{label4}</span>
          </td>
          <td className={classes.contentTable}>
            <span className={classes.labelStyle3}>{label5}</span>
          </td>
          <td className={classes.contentTable}>
            <span className={classes.labelStyle4}>{label6}</span>
          </td>
          <td className={classes.contentTable}>
            <span className={classes.labelStyle5}>{label7}</span>
          </td>
          <td className={classes.contentTable}>
            <span className={classes.labelStyle6}>{label8}</span>
          </td>
          <td className={classes.contentTable}>
            <span className={classes.labelStyle7}>{label9}</span>
          </td>
          <td className={classes.contentTable}>
            <span className={classes.labelStyle8}>{label10}</span>
          </td>
        </tr>

        <tr className={classes.bodyTable}>
          <td className={classes.labelStyle}>{label11}</td>
          <td className={classes.contentTable}>
            <ElementInputTable
              type={'text'}
              name={'sinfondo1'}
              label={''}
              value={values.sinfondo1}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'sinfondo2'}
              label={''}
              value={values.sinfondo2}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'sinfondo3'}
              label={''}
              value={values.sinfondo3}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'sinfondo4'}
              label={''}
              value={values.sinfondo4}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'sinfondo5'}
              label={''}
              value={values.sinfondo5}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'sinfondo6'}
              label={''}
              value={values.sinfondo6}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'sinfondo7'}
              label={''}
              value={values.sinfondo7}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'sinfondo8'}
              label={''}
              value={values.sinfondo8}
              size={'s'}
            />
          </td>
        </tr>
        <tr className={classes.bodyTable}>
          <td className={classes.labelStyle}>{label12}</td>
          <td className={classes.contentTable}>
            <ElementInputTable
              type={'text'}
              name={'defectosformales1'}
              label={''}
              value={values.defectosformales1}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'defectosformales2'}
              label={''}
              value={values.defectosformales2}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'defectosformales3'}
              label={''}
              value={values.defectosformales3}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'defectosformales4'}
              label={''}
              value={values.defectosformales4}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'defectosformales5'}
              label={''}
              value={values.defectosformales5}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'defectosformales6'}
              label={''}
              value={values.defectosformales6}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'defectosformales7'}
              label={''}
              value={values.defectosformales7}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'defectosformales8'}
              label={''}
              value={values.defectosformales8}
              size={'s'}
            />
          </td>
        </tr>
        <tr className={classes.bodyTable}>
          <td className={classes.labelStyle}>{label13}</td>
          <td className={classes.contentTable}>
            <ElementInputTable
              type={'text'}
              name={'totalrechazados1'}
              label={''}
              value={values.totalrechazados1}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalrechazados2'}
              label={''}
              value={values.totalrechazados2}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalrechazados3'}
              label={''}
              value={values.totalrechazados3}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalrechazados4'}
              label={''}
              value={values.totalrechazados4}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalrechazados5'}
              label={''}
              value={values.totalrechazados5}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalrechazados6'}
              label={''}
              value={values.totalrechazados6}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalrechazados7'}
              label={''}
              value={values.totalrechazados7}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalrechazados8'}
              label={''}
              value={values.totalrechazados8}
              size={'s'}
            />
          </td>
        </tr>
        <tr className={classes.bodyTable}>
          <td className={classes.labelStyle}>{label14}</td>
          <td className={classes.contentTable}>
            <ElementInputTable
              type={'text'}
              name={'totalAbonados1'}
              label={''}
              value={values.totalAbonados1}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalAbonados2'}
              label={''}
              value={values.totalAbonados2}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalAbonados3'}
              label={''}
              value={values.totalAbonados3}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalAbonados4'}
              label={''}
              value={values.totalAbonados4}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalAbonados5'}
              label={''}
              value={values.totalAbonados5}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalAbonados6'}
              label={''}
              value={values.totalAbonados6}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalAbonados7'}
              label={''}
              value={values.totalAbonados7}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'totalAbonados8'}
              label={''}
              value={values.totalAbonados8}
              size={'s'}
            />
          </td>
        </tr>
        <tr className={classes.bodyTable}>
          <td className={classes.labelStyle}>{label15}</td>
          <td className={classes.contentTable}>
            <ElementInputTable
              type={'text'}
              name={'porcentajeabonados1'}
              label={''}
              value={values.porcentajeabonados1}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'porcentajeabonados2'}
              label={''}
              value={values.porcentajeabonados2}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'porcentajeabonados3'}
              label={''}
              value={values.porcentajeabonados3}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'porcentajeabonados4'}
              label={''}
              value={values.porcentajeabonados4}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'porcentajeabonados5'}
              label={''}
              value={values.porcentajeabonados5}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'porcentajeabonados6'}
              label={''}
              value={values.porcentajeabonados6}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'porcentajeabonados7'}
              label={''}
              value={values.porcentajeabonados7}
              size={'s'}
            />
          </td>
          <td>
            <ElementInputTable
              type={'text'}
              name={'porcentajeabonados8'}
              label={''}
              value={values.porcentajeabonados8}
              size={'s'}
            />
          </td>
        </tr>
      </table>

    </>
  )
}

export { ElementTableLabel }
