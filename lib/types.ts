//type for the journal entry should match the database schema
type JournalEntry = {
    id: number
    text: string
    created_at: string
    date: string
    user_id: string
}


type CalendarDay = {
    dateString: string
    day: number
    month: number
    year: number
    timestamp: number
    
}

type Theme = {
    background: string
    secondaryColor: string
    secondaryBackground: string
    text: string
    buttonText: string
    color: string
    name: string
}
type CalendarItem = {
    text: string
    id: string
    created_at: string
}



export type { JournalEntry, CalendarDay, Theme, CalendarItem }