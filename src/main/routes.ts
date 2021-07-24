import { CreateClassImplementation } from '@/application/usecases/createClassUsecase'
import { CreateClassController } from '@/http/controllers/createClassController'
import { MemoryClassReporitory } from '@/infra/memory/memoryClassRepository'
import { adaptExpressRoute } from './expressControllerAdapter'

const classRepository = new MemoryClassReporitory()
const createClassUsecase = new CreateClassImplementation(classRepository)
const createClassController = new CreateClassController(createClassUsecase)
export const expressCreateClassRoute = adaptExpressRoute(createClassController)
