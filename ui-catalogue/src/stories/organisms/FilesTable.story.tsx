/* import React, { ChangeEvent } from 'react'
import { storiesOf } from '@storybook/react'
import withThemeProvider from '../../ui/theme/ThemeDecorator'
import { FilesTable } from '../../components/templates/CopyFileProcess/FilesTable'

const FilesTableStory: React.FC = () => {
  const i18n = {
    MUIDSelectableRows: 'none',
    MUIDNext: 'Siguiente Pagina',
    MUIDPrevious: 'Pagina Anterior',
    MUIDRowsPerPage: 'Filas por pagina:',
    MUIDDisplayRows: 'de',
    MUIDSearch: 'Buscar',
    MUIDDownladCsv: 'Descargar CSV',
    MUIDPrint: 'Imprimir',
    MUIDViewColumns: 'Ver Columnas',
    MUIDFilterTable: 'Filtrar Tabla',
    MUIDTitle: 'Filtros',
    MUIDReset: 'Reiniciar',
    MUIDViewColumnsShow: 'Mostrar Columnas',
    MUIDText: 'fila(s) eliminadas',
    MUIDDelete: 'Eliminar',

    columnName1: 'Validación',
    columnLabel1: '',
    columnName2: 'error',
    columnLabel2: 'Nombre',
    columnName3: 'size',
    columnLabel3: 'Tamaño',
    columnName4: 'type',
    columnName5: 'message',
    columnName6: '',
    columnLabel6: 'Borrar',

    uploadButton: 'Subir archivos',
    buttonSend: 'Enviar',
    buttonCancel: 'Cancelar'
  }

  const disabled = false
  const sending = ''
  const accept = '.csv'
  const name = 'name'
  const id = 'id'
  const multiple = true
  const title = 'Titulo'
  const ref = React.useRef(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {}
  const handleSendFiles = (): void => {}
  const handleCancelFiles = (): void => {}
  const handleDeleteFile = (n: string): void => {}

  return (
    <FilesTable
      title={title}
      disabled={disabled}
      inputRef={ref}
      handleDeleteFile={handleDeleteFile}
      handleSendFiles={handleSendFiles}
      handleChange={handleChange}
      handleCancelFiles={handleCancelFiles}
      sending={sending}
      data={[{}, {}]}
      i18n={i18n}
      accept={accept}
      multiple={multiple}
      id={id}
      name={name}
    />
  )
}
export { FilesTableStory }

storiesOf('Components|Organisms.FilesTable', module)
  .addDecorator(withThemeProvider)
  .add('FilesTable', () => <FilesTableStory />)
 */
export {}
