import React, { useRef, useState, ChangeEvent } from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import {
  Typography,
  Grid,
  IconButton,
  Container,
  Card,
  CardContent
} from '@material-ui/core'
import { CloudUpload } from '@material-ui/icons'
import { Form, Formik } from 'formik'
// import { FileChooser } from '../../atoms/FileChooser/FileChooser'
import { IReportLatin } from './types'
import {
  // InputTextForm,
  // SelectForm,
  ElementInput,
  ElementSelect
} from '../../atoms'

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 15,
    border: 'solid 1px #eeeeee'
  },
  title: {
    marginBottom: '2rem',
    color: '#003b64',
    width: '100%',
    height: '30px',
    margin: '0 66px 0 0',
    fontSize: '18px',
    fontStyle: 'normal',
    fontFamily: 'NeverMindBold',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal'
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
    padding: '5px'
  },
  button: {
    width: '8em',
    height: '3em',
    borderRadius: '6px',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.3)',
    backgroundColor: '#003b64',
    color: '#fff',
    border: '1px',
    '&:hover': {
      backgroundColor: '#ff9900'
    }
  },
  iconCloud: {
    borderRadius: '18px',
    marginTop: '1rem'
  },
  span: {
    fontSize: '14px',
    marginLeft: '8px',
    marginTop: '1rem'
  }
}))

const ReportLatin: React.FC<IReportLatin> = ({
  i18n,
  formValues,
  selectOpts,
  formLoading,
  formRecoverDataError,
  handleCancel,
  handleSave,
  saveSuccess,
  saveLoading,
  handleAccept,
  acceptSuccess,
  acceptLoading,
  handleChangeInputFile
}) => {
  const objectKeysToString = (obj): any => {
    const objToString = {}
    Object
      .keys(obj)
      .forEach(ele => {
        objToString[ele] = ele
      })

    return objToString
  }

  const formValuesNames = objectKeysToString(formValues)
  const inputFileRef = useRef(null)
  const [file, setFile] = useState(null)
  const classes = useStyles()

  type ThandleInputChange = (e: ChangeEvent<HTMLInputElement>) => void
  const handleInputChange: ThandleInputChange = (e) => {
    setFile(Array.from(e.target.files))
    handleChangeInputFile(file)
  }

  return (
    <Container>
      <Card className={classes.card}>
        <CardContent>
          <Formik
            initialValues={formValues}
            onSubmit={(values, actions) => {
              handleAccept(values)
            }}
          >
            <Form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Typography variant="h5" className={classes.title}>
                    {i18n['form:latin:titulo']}
                  </Typography>
                </Grid>
                {/* ##################### GENERAL ############################# */}
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {i18n['form:latin:general:titulo']}
                  </Typography>
                </Grid>
                {[
                  {
                    label: i18n['form:latin:general:nombre'],
                    name: formValuesNames.generalNombre
                  },
                  {
                    label: i18n['form:latin:general:nit'],
                    name: formValuesNames.generalNit
                  },
                  {
                    label: i18n['form:latin:general:calle'],
                    name: formValuesNames.generalCalle
                  },
                  {
                    label: i18n['form:latin:general:provincia'],
                    name: formValuesNames.generalProvincia
                  },
                  {
                    label: i18n['form:latin:general:cp'],
                    name: formValuesNames.generalCp
                  },
                  {
                    label: i18n['form:latin:general:telefono'],
                    name: formValuesNames.generalTelefono
                  },
                  {
                    label: i18n['form:latin:general:email'],
                    name: formValuesNames.generalEmail
                  },
                  {
                    label: i18n['form:latin:general:web'],
                    name: formValuesNames.generalWeb
                  }
                ].map(({ label, name }, index) => (
                  <ElementInput
                    key={`general-${index}`}
                    type={'text'}
                    name={name}
                    label={label}
                    value={name}
                    size={'l'}
                  />
                ))}
                {/* ####################### FIN GENERAL ######################## */}

                {/* ####################### PERFIL ############################# */}
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {i18n['form:latin:perfil:titulo']}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:latin:perfil:forma']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementSelect
                    label={''}
                    name={formValuesNames.perfilForma}
                    value={formValuesNames.perfilForma}
                    options={selectOpts.perfilForma}
                    size={'l'}
                  />
                </Grid>

                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:latin:perfil:divisa']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementSelect
                    label={''}
                    name={formValuesNames.perfilDivisa}
                    value={formValuesNames.perfilDivisa}
                    options={selectOpts.perfilDivisa}
                    size={'l'}
                  />
                </Grid>
                {[
                  {
                    label: i18n['form:latin:perfil:fecha'],
                    name: formValuesNames.perfilFecha
                  },
                  {
                    label: i18n['form:latin:perfil:actividad'],
                    name: formValuesNames.perfilActividad
                  },
                  {
                    label: i18n['form:latin:perfil:empleados'],
                    name: formValuesNames.perfilEmpleados
                  },
                  {
                    label: i18n['form:latin:perfil:capital'],
                    name: formValuesNames.perfilCapital
                  }
                ].map(({ label, name }, index) => (
                  <ElementInput
                    key={`company-${index}`}
                    type={'text'}
                    name={name}
                    label={label}
                    value={name}
                    size={'l'}
                  />
                ))}
                {/* ####################### FIN PERFIL ######################### */}

                {/* ####################### COMERCIAL ########################## */}
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {i18n['form:latin:comercial:titulo']}
                  </Typography>
                </Grid>
                {[
                  {
                    label: i18n['form:latin:comercial:actual'],
                    name: formValuesNames.comercialActual
                  },
                  {
                    label: i18n['form:latin:comercial:anterior'],
                    name: formValuesNames.comercialAnterior
                  }
                ].map(({ label, name }, index) => (
                  <ElementInput
                    key={`comercial-${index}`}
                    type={'text'}
                    name={name}
                    label={label}
                    value={name}
                    size={'l'}
                  />
                ))}
                {/* ####################### FIN COMERCIAL ###################### */}

                {/* ####################### INFORMACION ######################## */}
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {i18n['form:latin:info:titulo']}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:latin:info:divisa']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementSelect
                    label={''}
                    name={formValuesNames.infoDivisa}
                    value={formValuesNames.infoDivisa}
                    options={selectOpts.infoDivisa}
                    size={'l'}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:latin:info:unidad']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementSelect
                    label={''}
                    name={formValuesNames.infoUnidad}
                    value={formValuesNames.infoUnidad}
                    options={selectOpts.infoUnidad}
                    size={'l'}
                  />
                </Grid>
                {[
                  {
                    label: i18n['form:latin:info:fechaultimo'],
                    name: formValuesNames.infoFechaultimo
                  },
                  {
                    label: i18n['form:latin:info:importeultimo'],
                    name: formValuesNames.infoImporteultimo
                  },
                  {
                    label: i18n['form:latin:info:patrimonioultimo'],
                    name: formValuesNames.infoPatrimonioultimo
                  },
                  {
                    label: i18n['form:latin:info:reservasultimo'],
                    name: formValuesNames.infoReservasultimo
                  },
                  {
                    label: i18n['form:latin:info:fechaanterior'],
                    name: formValuesNames.infoFechaanterior
                  },
                  {
                    label: i18n['form:latin:info:importeanterior'],
                    name: formValuesNames.infoImporteanterior
                  },
                  {
                    label: i18n['form:latin:info:patrimonioanterior'],
                    name: formValuesNames.infoPatrimonioanterior
                  },
                  {
                    label: i18n['form:latin:info:reservasanterior'],
                    name: formValuesNames.infoReservasanterior
                  },
                  {
                    label: i18n['form:latin:info:activoanterior'],
                    name: formValuesNames.infoActivoanterior
                  },
                  {
                    label: i18n['form:latin:info:resultadoanterior'],
                    name: formValuesNames.infoResultadoanterior
                  }
                ].map(({ label, name }, index) => (
                  <ElementInput
                    key={`financiera-${index}`}
                    type={'text'}
                    name={name}
                    label={label}
                    value={name}
                    size={'l'}
                  />
                ))}
                <Grid item xs={3}>
                  <Typography className={classes.labelStyle}>
                    {i18n['form:latin:info:opinion']}
                  </Typography>
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={8}>
                  <ElementSelect
                    label={''}
                    name={formValuesNames.infoOpinion}
                    value={formValuesNames.infoOpinion}
                    options={selectOpts.infoOpinion}
                    size={'l'}
                  />
                </Grid>
                {/* ####################### FIN INFORMACION #################### */}

                <Grid item xs={4}>
                  <button className={classes.button}
                    onClick={handleSave}
                  >
                    {i18n['form:latin:guardar']}
                  </button>
                </Grid>
                <Grid item xs={4}>
                  <button className={classes.button}
                    type="submit"
                  >
                    {i18n['form:latin:aceptar']}
                  </button>
                </Grid>
                <Grid item xs={4}>
                  <button className={classes.button}
                    onClick={handleCancel}
                  >
                    {i18n['form:latin:cancelar']}
                  </button>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6">
                    {i18n['form:latin:info:disclaimer1']}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {i18n['form:latin:info:disclaimer2']}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {i18n['form:latin:info:disclaimer3']}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6">
                    {i18n['form:latin:info:disclaimer4']}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <input
                    name={formValuesNames.archivo}
                    id={formValuesNames.archivo}
                    accept={'*'}
                    style={{ display: 'none' }}
                    type="file"
                    ref={inputFileRef}
                    onChange={handleInputChange}
                    className={classes.button}
                  />
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => inputFileRef.current.click()}
                  >
                    <CloudUpload color="primary" className={classes.iconCloud}></CloudUpload>
                    <span className={classes.span}>{!Array.isArray(file) ? i18n['BoeForm:iconCloud'] : file[0].name }</span>
                  </IconButton>
                </Grid>

              </Grid>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </Container>
  )
}

export { ReportLatin }
export type { IReportLatin }
