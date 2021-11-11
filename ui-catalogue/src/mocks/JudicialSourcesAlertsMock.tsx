import * as Faker from 'faker'

const dataJudicialSourcesAlertsEmpty = {
  alerts: ''
}

const dataJudicialSourcesAlertsFaker = {
  alerts: Faker.random.words()
}

export {
  dataJudicialSourcesAlertsEmpty,
  dataJudicialSourcesAlertsFaker
}
