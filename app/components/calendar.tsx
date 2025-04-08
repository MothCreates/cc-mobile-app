import { View, Text, StyleSheet, Pressable } from "react-native"
import { Agenda } from "react-native-calendars"
import { JournalEntry, CalendarDay, CalendarItem } from "@/lib/types"
import { router } from "expo-router"
import ThemeContext from "../theme/themeContext"
import { useContext, useEffect, useState } from "react"
import { localizeDateYearMonthDay } from "@/lib/functions"
import { ScrollView } from "react-native"
import CalendarEntry from "./CalendarEntry"
/*  BROKEN
          renderDay={(day : Date, item : any) => {
                {console.log("render day", day)
                if (day === undefined) {
                    console.log("day is null")
        
                }
                }
                 (day === undefined? 
                    
                    <View style={styles.emptyDate}>
                        <Text style={styles.emptyDateText}>No date</Text>
                    </View>
                 :  
                    <View style={styles.dayContainer}>
                        <Text style={styles.dayText}>{day.toLocaleDateString()}</Text>
                    </View>
                 )  
           
            }} */

interface CalendarProps {
    entries: JournalEntry[] | null;
}

//TODO change highlighted day to be current day
const Calendar = ({ entries }: CalendarProps) => {
    const { theme } = useContext(ThemeContext)

    const [selectedDate, setSelectedDate] = useState<string | null>(null)

    useEffect(() => {
        setSelectedDate(localizeDateYearMonthDay(new Date().toISOString()))
    }, [])
    /*console.log(entries) */
    // Transform entries array into an object with dates as keys
    // use created at instead of date because date starts at 00:00:00
    const items = entries?.reduce((acc, entry: JournalEntry) => {
        const date = localizeDateYearMonthDay(entry.created_at);
        return {
            ...acc,
            [date]: [
                ...(acc[date] || []),
                { 
                    text: entry.text, 
                    id: entry.id.toString(),
                    created_at: entry.created_at
                }
            ]
        };
    }, {} as Record<string, CalendarItem[]>) || {};


    return (
        <Agenda
            onDayPress={(day: CalendarDay) => {
                console.log(day)
            }}

            // Use the transformed entries
            items={items}
            setSelected={setSelectedDate}
            selected={selectedDate}
            //render the item ????? doesn't work
            renderItem={(item: any, firstItemInDay: boolean) => {
                console.log("item", item)
             
                return (
                    <View style={[styles.itemContainer, { backgroundColor: theme.   background }]}>
                        <Text style={[styles.itemText, { color: theme.text }]}>{item.name}</Text>
                    </View>
                )
            }}
           hideExtraDays={true}

            // custom header is where month is rendered in calendar view
       

            renderList={(listProps: any) => {
             
                const selectedDate = listProps.selectedDay
            
                const localizedSelectedDate = localizeDateYearMonthDay(selectedDate)
                // Convert selected date to format that matches your data (YYYY-MM-DD)
                const formattedSelectedDate = new Date(selectedDate).toISOString().split('T')[0]
                console.log("localizedSelectedDate", localizedSelectedDate, "selectedDate", selectedDate, "formattedSelectedDate", formattedSelectedDate)
                
                // Get items for the selected date
                const dayItems = listProps.items[localizedSelectedDate] || []
                
         

                return (
                    <ScrollView style={[styles.listContainer, { backgroundColor: theme.background }]}>
                        {dayItems.sort((a: CalendarItem, b: CalendarItem) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()).map((item: CalendarItem, index: number) => (
                            <CalendarEntry key={index} item={item} />   
                        ))}
                    </ScrollView>
                )
            }}

   

            theme={{
                backgroundColor: theme.background,
                selectedDayBackgroundColor: theme.secondaryColor,
                todayTextColor: theme.secondaryColor,
                dotColor: theme.secondaryColor,
                agendaDayTextColor: theme.secondaryColor,
                agendaTodayColor: theme.secondaryColor,
                agendaKnobColor: theme.secondaryColor,
                foregroundColor: theme.background,
                calendarBackground: theme.background,
                dayTextColor: theme.text,
                monthTextColor: theme.text,
                textSectionTitleColor: theme.text,
                todayDotColor: theme.secondaryColor,
            
                
    
            }}
        />
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        padding: 15,
        marginRight: 15,
        marginTop: 17,
        borderRadius: 8,
        borderWidth: 1,
  
    },
    itemText: {
        fontSize: 15,
        color: '#333',
    },

    emptyDate: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    emptyDateText: {
        color: '#999',
        fontSize: 14,
    },
    dayContainer: {
        padding: 10,
        width: 100,
        height: 100,
        backgroundColor: 'red',
        alignItems: 'center',
    },
    dayText: {
        fontSize: 16,
        color: '#333',
    },
    dayTextPressable: {
        padding: 10,
   
        alignItems: 'center',
        backgroundColor: '#4a90e2',
        borderRadius: 5,
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    monthContainer: {
        padding: 10,
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    monthText: {
        fontSize: 16,
        color: '#333',
    },
})

export default Calendar

        {/*  //if there are no journal entries for a day, this is rendered
            renderEmptyDate={() => (
                <View style={[styles.emptyDate, { backgroundColor: theme.background }]}>
                    <Text style={[styles.emptyDateText, { color: theme.text }]}>No entries for this day</Text>
                </View>
            )}
      
          
            //if there are no journal entries for a day, this is rendered
            renderEmptyData={() => (
                <View style={[styles.emptyDate, { backgroundColor: theme.background }]}>
                    <Text style={[styles.emptyDateText, { color: theme.text }]}>No entries for this day</Text>
                </View>
            )}
                **/}