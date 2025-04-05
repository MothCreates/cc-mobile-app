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
    text: string
    buttonText: string
    color: string
}



export type { JournalEntry, CalendarDay, Theme }