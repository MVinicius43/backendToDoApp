import { Request, Response } from "express";
import { GetTaskUseCase } from "./GetTaskUseCase";


class GetTaskController {

    async handle(request: Request, response: Response) {
        const getTaskUseCase = new GetTaskUseCase()

        const tasks = await getTaskUseCase.execute()

        return response.json(tasks)
    }
}

export { GetTaskController }