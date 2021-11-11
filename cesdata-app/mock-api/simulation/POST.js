const _ = require('lodash')
const path = require('path')
module.exports = async (request, response) => {
  try {
    console.log(request.files)
    if (!request.files) {
      response.send({
        error: true,
        message: 'No hay archivos'
      })
    } else {
      const sent = request.files.file_chooser.length
        ? request.files.file_chooser
        : [request.files.file_chooser]
      console.log(sent.length)
      const processed = []
      _.forEach(_.keysIn(sent), (key) => {
        const file = sent[key]
        if (path.extname(file.name) === '.csv') {
          if (file.name === 'error.csv') {
            processed.push({
              error: true,
              name: file.name,
              size: file.size,
              type: file.mimetype,
              message: 'error en el formato de archivo'
            })
          } else {
            processed.push({
              error: false,
              name: file.name,
              size: file.size,
              type: file.mimetype,
              message: ''
            })
          }
        } else {
          processed.push({
            error: true,
            name: file.name,
            size: file.size,
            type: file.mimetype,
            message: 'Solo se permiten CSV'
          })
        }
      })

      response.send({
        error: false,
        processed: processed
      })
    }
  } catch (error) {
    response.status(500).send(error)
  }
}
