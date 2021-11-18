import { Router } from "express"
import { CreateTaskController } from "./useCases/createTask/createTaskController"
import { GetTaskController } from "./useCases/getTask/GetTaskController"

const router = Router()

const createTaskController = new CreateTaskController()
const getTaskController = new GetTaskController()

router.get("/tasks", getTaskController.handle)
router.post("/tasks", createTaskController.handle)

export { router }