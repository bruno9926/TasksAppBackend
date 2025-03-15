import type Task from "../types/Task";

// by now, update task dto is the same as the task type, but latter they could deffer if there are field that are read only
export default interface UpdateTaskDto extends Task {}