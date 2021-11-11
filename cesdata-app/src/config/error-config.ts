import { log } from '@cesce/arq'

const friendlyHttpStatus = {
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '306': 'Unused',
    '307': 'Temporary Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Required',
    '413': 'Request Entry Too Large',
    '414': 'Request-URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Requested Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': 'I\'m a teapot',
    '429': 'Too Many Requests',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
};

const errorController = (error): string => {
    let result = ''
    log.error(error);

    switch (typeof error){
        case 'string': 
            return error
        case 'object':

            if (error.status !== undefined){
                result += `${error.status}: `
            }

            let message = ''
            if (error.data != undefined){
                if (error.data.codigo !== undefined && result === ''){
                    message += `${error.data.codigo}: `
                }
                if (error.data.mensaje !== undefined){
                    message += error.data.mensaje
                }
            }else if (error.message != undefined){
                message += error.message
            }

            if (message === ''){
                result += `Error de Servidor (${friendlyHttpStatus[error.status]})`
            }else{
                result += message
            }
    }

    return result;
}


export { errorController }

const ExcepcionFormato = (msg, value?): any => {
    const error = new Error()
  
    if (value !== undefined) {
      error.message = `${value}: `
    }
    if (msg !== undefined) {
      error.message += msg
    }
    if (error.message === undefined || error.message === null) {
      error.message = 'Undefined error'
    }
  
    throw error
  }

  export { ExcepcionFormato }
