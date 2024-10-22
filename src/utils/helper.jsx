
export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src="/images/No-priority.svg" alt="No priority" width={14} />
        case "Low": return <img src="/images/Img - Low Priority.svg" alt="Low priority" width={14} />
        case "Medium": return <img src="/images/Img - Medium Priority.svg" alt="Medium priority" width={14} />
        case "High": return <img src="/images/Img - High Priority.svg" alt="High priority" width={14} />
        case "Urgent": return <img src="/images/SVG - Urgent Priority colour.svg" alt="Urgent priority" width={14} />
        default: return <img src="/images/default_priority.png" alt="Default priority" width={14} />
    }
}

export const getStatusIcon = (priority) => {
    switch (priority) {
        case "Backlog": return <img src="/images/Backlog.svg" alt="Backlog" width={16} />
        case "Todo": return <img src="/images/To-do.svg" alt="Todo" width={16} />
        case "In progress": return <img src="/images/in-progress.svg" alt="In progress" width={16} />
        case "Done": return <img src="/images/Done.svg" alt="Done" width={16} />
        case "Cancelled": return <img src="/images/Cancelled.svg" alt="Cancelled" width={16} />
        default: return <img src="/images/default_status.png" alt="Default status" width={16} />
    }
}
