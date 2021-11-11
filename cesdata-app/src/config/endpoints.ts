const endpointsConfig = (endpoints) => ({
  paths: {
    configuration: {
        path:  `${endpoints.cesce_config_path}`,
        verbs: {
          get: {
            host: `${endpoints.cesce_config_host}`,
          }
        },
    },
    trace: {
      path: `${endpoints.cesce_trace_path}`,
      verbs: {
        post: {
          host: `${endpoints.cesce_trace_host}`
        }
      }
    },
    paises: {
      path:  `${endpoints.cesce_paises_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    cancelType: {
      path:  `${endpoints.cesce_motivos_anulacion_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    formJuridic: {
      path:  `${endpoints.cesce_formas_juridicas_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    refBank: {
      path:  `${endpoints.cesce_referencia_bancaria_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    commentTester: {
      path:  `${endpoints.cesce_opinion_encuestador_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    balance: {
      path:  `${endpoints.cesce_origen_balance_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    tipogasto: {
      path:  `${endpoints.cesce_tipo_gasto_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    tipodocumento: {
      path:  `${endpoints.cesce_tipo_documento_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    tipoproducto: {
      path:  `${endpoints.cesce_tipo_producto_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    tipogastos: {
      path:  `${endpoints.cesce_tipo_gasto_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    tiporespuesta: {
      path:  `${endpoints.cesce_tipo_respuesta_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    mediorecepcion: {
      path:  `${endpoints.cesce_medio_recepcion_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    corresponsales: {
      path:  `${endpoints.cesce_corresponsales_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_static_host}`,
        },
      }
    },
    business: {
      path:  `${endpoints.cesce_empresa_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}`,
        }
      }
    },    
    reports: {
      path:  `${endpoints.cesce_reports_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}`,
        },
        put: {
          host: `${endpoints.cesce_gateway_host}`,
        },
        post: {
          host: `${endpoints.cesce_gateway_host}`,
        },
        delete: {
          host: `${endpoints.cesce_gateway_host}`,
        },
      }
    },
    reportsDelete: {
      path:  '',
      verbs: {
        delete: {
          host: `${endpoints.cesce_gateway_host}${endpoints.cesce_reports_path}`,
        },
      }
    },
    correspondents: {
      path:  `${endpoints.cesce_correspondents_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}`,
        }
      }
    },
    references: {
      path:  `${endpoints.cesce_references_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}`,
        },
        post: {
          host: `${endpoints.cesce_gateway_host}`
        }
      }
    },
    referencesDel: {
      path:  '',
      verbs: {
        delete: {
          host: `${endpoints.cesce_gateway_host}${endpoints.cesce_reports_path}`,
        }
      }
    },
    reportGetInfo: {
      path:  '',
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}${endpoints.cesce_reports_path}`,
        }
      }
    },
    experianR: {
      path:  `${endpoints.cesce_experian_r_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}`,
        }
      }
    },
    masiveGestion: {
      path:  `${endpoints.cesce_gestion_masive_path}`,
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}`,
        }
      }
    },
    petitions: {
      path:  '',
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}${endpoints.cesce_petitions_path}`,
        },
        delete:{
          host: `${endpoints.cesce_gateway_host}${endpoints.cesce_petitions_path}`,
        },
        post:{
          host: `${endpoints.cesce_gateway_host}${endpoints.cesce_petitions_path}`,
        }
      }
    },
    informemanual: {
      path: '',
      verbs: {
        post: {
          host: `${endpoints.cesce_gateway_host}${endpoints.cesce_referenciacion_informe_manual}`  
        }
      }
    },
    requestlist: {
      path: 'api/requestlist',
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}`,
        }
      }
    },
    referenciacionsolicitudes : {
      path:  '',
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}${endpoints.cesce_referenciacion_solicitudes}`,
        },
      }
    },
    simulation: {
      path: 'simulacion',
      verbs: {
        post:{
          host: `${endpoints.cesce_gateway_host}`,
        },
        get:{
          host: `${endpoints.cesce_gateway_host}`,
        }
      }
    },
    dessert: {
      path: 'api/dessert',
      verbs: {
        get: {
          host: `${endpoints.cesce_gateway_host}`,
        },
        post:{}
      }
    },
    error400: {
      path: '/api/v1/errors/400error',
      verbs: {
        get: {
          host: `${endpoints.local_host}`,
        },
        post:{}
      }
    },
    error500: {
      path: '/api/v1/errors/500error"',
      verbs: {
        get: {
          host: `${endpoints.local_host}`,
        },
        post:{}
      }
    },
  },
  host: endpoints.default_host,
  basepath: endpoints.default_basepath,
  protocol: endpoints.default_protocol,
  timeout: endpoints.default_timeout
}) 
  





export { endpointsConfig }
