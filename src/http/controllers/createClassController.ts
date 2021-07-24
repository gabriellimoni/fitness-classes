import { CreateClassUsecase } from '@/application/usecases/createClassUsecase'
import { BaseController, HttpRequest, HttpResponse } from '../protocols'

export class CreateClassController implements BaseController {
  constructor(private readonly createClassUsecase: CreateClassUsecase) {}
  async handle(request: HttpRequest): Promise<HttpResponse> {
    // todo controller validate input

    const createdClass = await this.createClassUsecase.createClass(request.body)
    return {
      status: 201,
      data: createdClass.getClassData(),
    }
  }
}
