const getBrowserLanguage: any = () => {
// puede ser null si no identifica el idioma
// el codigo devuelto puede ser de tipo ISO 639 Code (dos letras minusculas)
// el codigo devuelto puede ser de tipo ISO 639-ISO 3166 (aa-AA) (lenguaje-CULTURA)
// ejemplo http://www.lingoes.net/en/translator/langcode.htm
// en SAFARI versión <10.2 el codigo de cultura aparece en minuscula (aa-aa)
    return navigator.language || navigator['userLanguage'] // eslint-disable-line
// se usa aqui navigator['userLanguage']
// https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.navigator.html
}

export { getBrowserLanguage }
