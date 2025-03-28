import { supabase } from "./supabase"

export const createJournalEntry = async (journalEntry: string) => {
  const { data, error } = await supabase.from('journal_entries').insert({ text: journalEntry , date: new Date().toISOString()})
  if (error) {
    console.error(error)
  }
  return journalEntry
}

export const fetchJournalEntries = async () => {
  const { data, error } = await supabase.from('journal_entries').select('*')
  if (error) {
    console.error(error)
  }
  return data
}

export const deleteJournalEntries = async () => {
  const { data, error } = await supabase.from('journal_entries').delete().neq('id', 0)
  if (error) {
    console.error(error)
  }
  return data
}

interface JournalEntry {
  id: number
  text: string
  user_id: string
  created_at: string
}

export const updateJournalEntry = async (journalEntry: string) => {
  const { data: userData } = await supabase.auth.getUser()
  const JSONJournalEntry = JSON.parse(journalEntry)
  if (!userData?.user?.id) {
    console.error('No user found')
    return null
  }

  const { data, error } = await supabase
    .from('journal_entries')
    .update({ text: JSONJournalEntry.text })
    .eq('id', JSONJournalEntry.id)
    .eq('user_id', userData.user.id)
    .select()

  if (error) {
    console.error('Error updating journal entry:', error)
    return null
  }

  return data?.[0] as JournalEntry | null
}
