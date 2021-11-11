import React, { Fragment } from 'react'
import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core'
import {
  ElementSelect,
  ElementInput,
  ElementsInput,
  ElementRefresh
} from '../../atoms'
import { IBalancesNPGC } from './types'

const useStyles = makeStyles((theme) => ({
  divFlex: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%'
  },
  divContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  divContent: {
    display: 'contents',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  labelTittleStyle: {
    fontFamily: 'NeverMind',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#003b64',
    float: 'left',
    display: 'inline-block',
    alignSelf: 'flex-end',
    padding: '5px',
    marginTop: '20px'
  },
  labelStyle: {
    fontFamily: 'NeverMind',
    fontSize: '11px',
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
    textAlign: 'center',
    width: '100%'
  }
}))

const BalancesNPGC: React.FC<IBalancesNPGC> = (
  {
    i18n,
    data,
    origenBalances,
    handleRefresh
  }
) => {
  const classes = useStyles()

  const handleChangeFormValues: (e) => void = e => {
    e.preventDefault()

    data[e.target.name] = e.target.value
  }

  return (
    <Fragment>
      <div className={classes.divContainer}>

        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">

            <ElementSelect
              label={i18n['BalancesNPGC:detailTbOrigenBalances']}
              name='origenBalance'
              value={data.origenBalances}
              options={origenBalances}
              size='l'
              onChange={handleChangeFormValues}
            />
            <Grid item xs={2}>
            </Grid>
            <div className={classes.divContent} onClick={handleRefresh}>
              <ElementRefresh
                label={i18n['BalancesNPGC:detailTbRefresh']}
                size={2}
              />
            </div>
          </Grid>
        </div>

        {[
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
                size='s'
                onChange={handleChangeFormValues}
              />
              <ElementInput
                type={type}
                name={name}
                label={label}
                value={value}
                size='s'
                onChange={handleChangeFormValues}
              />
              <ElementInput
                type={type}
                name={name}
                label={label}
                value={value}
                size='s'
                onChange={handleChangeFormValues}
              />
            </Grid>
          </div>
        ))
        }

        {[
          {
            type: 'text',
            name: 'fechasCierre',
            label: i18n['BalancesNPGC:detailTbFechasCierre'],
            values: [
              { value: data.fechasCierre1 },
              { value: data.fechasCierre2 },
              { value: data.fechasCierre3 }]
          },
          {
            type: 'text',
            name: 'fechasCierre',
            label: i18n['BalancesNPGC:detailTbMesesBalance'],
            values: [
              { value: data.mesesBalances1 },
              { value: data.mesesBalances2 },
              { value: data.mesesBalances3 }]
          }
        ].map(({ type, name, label, values }, index) => (
          <div className={classes.divFlex} key={index}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
              <ElementsInput
                type={type}
                name={name}
                label={label}
                values={values}
                index={true}
                bold={false}
                onChange={handleChangeFormValues}
              />
            </Grid>
          </div>
        ))
        }

        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center">
            <Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
              <Typography className={classes.labelTittleStyle}>
                {i18n['BalancesNPGC:detailTbTittleBalances']}
              </Typography>
            </Grid>

            <Grid item xs={2}>
            </Grid>
            <div className={classes.divContent} onClick={handleRefresh}>
              <ElementRefresh
                label={i18n['BalancesNPGC:detailTbRefresh']}
                size={2}
              />
            </div>
          </Grid>
        </div>

        <div className={classes.divFlex}>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center">
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Typography className={classes.labelStyle}>
                {i18n['BalancesNPGC:detailTbBlank']}
              </Typography>
            </Grid>
            {[
              {
                value: '1.'
              },
              {
                value: '2.'
              },
              {
                value: '3.'
              }
            ].map(({ value }, index) => (
              <Grid item xs={4} sm={4} md={2} lg={2} xl={2}
                key={index}>
                <Typography className={classes.labelStyle}>
                  {value}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </div>

        {[
          {
            type: 'text',
            name: 'accionistas',
            label: i18n['BalancesNPGC:detailTbAccionistas'],
            values: [
              { value: data.accionistas1 },
              { value: data.accionistas2 },
              { value: data.accionistas3 }],
            bold: true
          },
          {
            type: 'text',
            name: 'Inmovilizado',
            label: i18n['BalancesNPGC:detailTbInmovilizado'],
            values: [
              { value: data.Inmovilizado1 },
              { value: data.Inmovilizado2 },
              { value: data.Inmovilizado3 }],
            bold: true
          },
          {
            type: 'text',
            name: 'establecimiento',
            label: i18n['BalancesNPGC:detailTbEstablecimiento'],
            values: [
              { value: data.establecimiento1 },
              { value: data.establecimiento2 },
              { value: data.establecimiento3 }],
            bold: false
          },
          {
            type: 'text',
            name: 'materiales',
            label: i18n['BalancesNPGC:detailTbMateriales'],
            values: [
              { value: data.materiales1 },
              { value: data.materiales2 },
              { value: data.materiales3 }],
            bold: false
          },
          {
            type: 'text',
            name: 'inmateriales',
            label: i18n['BalancesNPGC:detailTbInmateriales'],
            values: [
              { value: data.inmateriales1 },
              { value: data.inmateriales2 },
              { value: data.inmateriales3 }],
            bold: false
          },
          {
            type: 'text',
            name: 'financieras',
            label: i18n['BalancesNPGC:detailTbFinancieras'],
            values: [
              { value: data.financieras1 },
              { value: data.financieras2 },
              { value: data.financieras3 }],
            bold: false
          },
          {
            type: 'text',
            name: 'accionesPropias',
            label: i18n['BalancesNPGC:detailTbAccionesPropias'],
            values: [
              { value: data.accionesPropias1 },
              { value: data.accionesPropias2 },
              { value: data.accionesPropias3 }],
            bold: false
          },
          {
            type: 'text',
            name: 'deducciones',
            label: i18n['BalancesNPGC:detailTbDeducciones'],
            values: [
              { value: data.deducciones1 },
              { value: data.deducciones2 },
              { value: data.deducciones3 }
            ],
            bold: false
          }
        ].map(({ type, name, label, values, bold }, index) => (
          <div className={classes.divFlex} key={index}>
            <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center"
              spacing={2}>
              <ElementsInput
                type={type}
                name={name}
                label={label}
                values={values}
                index={false}
                bold={bold}
                onChange={handleChangeFormValues}
              />
            </Grid>
          </div>
        ))
        }

      </div>

    </Fragment>
  )
}

export { BalancesNPGC }
