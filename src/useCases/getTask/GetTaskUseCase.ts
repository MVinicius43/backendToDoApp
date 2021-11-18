import { client } from '../../prisma/client'

class GetTaskUseCase {

    async execute() {
        return await client.task.findMany()
    }
}

export { GetTaskUseCase }