import { IShareholdersRequestForm } from '../../molecules/ShareHolders/types'
import { IdataAdministratorsRequestForm } from '../../molecules/Administrators/types'
import { IBranchOfficesRequestForm } from '../../molecules/BranchOffices/types'
import { ISubsidiaryAffiliatesRequestForm } from '../../molecules/SubsidiaryAffiliates/types'
import { IBanksForm } from '../../molecules/Banks/types'
import { ReportTypes } from '../../templates/BaseReport/types'

interface Ii18nRelationShip {
  'RelationShip:title1': string
}

export interface IRelationsShipRequestForm {
  shareHolders: IShareholdersRequestForm[]
  administrators: IdataAdministratorsRequestForm
  subsidiaryAffiliates: ISubsidiaryAffiliatesRequestForm
  branchOffices: IBranchOfficesRequestForm
  banks: IBanksForm
}
export interface IRelationsShip {
  i18n: any
  data: IRelationsShipRequestForm
  report: ReportTypes
}
