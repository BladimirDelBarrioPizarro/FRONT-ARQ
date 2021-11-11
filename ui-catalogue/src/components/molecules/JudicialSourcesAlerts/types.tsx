interface Ii18nJudicialSourcesAlerts {
  'JudicialSourcesAlerts:title': string
  'JudicialSourcesAlerts:label': string
}

export interface IJudicialSourcesAlertsRequestForm {
  alerts: string
}

export interface IJudicialSourcesAlerts {
  i18n: Ii18nJudicialSourcesAlerts
  data: IJudicialSourcesAlertsRequestForm
}
