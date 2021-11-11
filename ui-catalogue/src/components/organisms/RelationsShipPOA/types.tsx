import { IShareHolders } from '../../molecules/ShareHolders/types'
import { ISubsidiaryAffiliates } from '../../molecules/SubsidiaryAffiliates/types'
import { IBanks } from '../../molecules/Banks/types'
import { IAdministrators } from '../../molecules/Administrators/types'

interface Ii18nRelationShip {
  'RelationShipPOA:title1': string
}

export interface IRelationsShipPOA {
  i18n: Ii18nRelationShip
  shareHoldersProps: IShareHolders
  subsidiaryAffiliatesProps: ISubsidiaryAffiliates
  banksProps: IBanks
  administratorsProps: IAdministrators
}
