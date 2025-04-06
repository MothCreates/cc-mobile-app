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



export const deleteJournalEntry = async (id: string, user_id: string) => {
  const { data, error } = await supabase.from('journal_entries').delete().eq('id', id).eq('user_id', user_id)
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

export const updateJournalEntry = async (journalEntry: string, id: string) => {
  const { data: userData } = await supabase.auth.getUser()
  console.log("userData", userData)
  console.log("id", id)
  if (!id) {
    console.error('No id found')
    return null
  }

  if (!userData?.user?.id) {
    console.error('No user found')
    return null
  }

  const { data, error } = await supabase
    .from('journal_entries')
    .update({ text: journalEntry })
    .eq('id', id)
    .eq('user_id', userData.user.id)
    .select()

  if (error) {
    console.error('Error updating journal entry:', error)
    return null
  }

  return data?.[0] as JournalEntry | null
}

export const localizeDate = (date: string) => {
  const dateObject = new Date(date)
  const localizedDate = dateObject.toLocaleDateString()
  
  const formattedDate = localizedDate.split("/").reverse()

  let year = formattedDate[0]
  let month = formattedDate[2]
  if (month.length === 1) {
    month = "0" + month
  }
  let day = formattedDate[1]
  if (day.length === 1) {
    day = "0" + day
  }

  return `${year}-${month}-${day}`
}