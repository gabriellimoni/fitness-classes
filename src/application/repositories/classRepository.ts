import { IBaseId, IClass } from '@/domain'

export interface ClassRepository {
  create: (classData: IClass) => Promise<IBaseId['id']>
  getById: (id: IBaseId['id']) => Promise<IBaseId & IClass>
}
