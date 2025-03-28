import { View, Text, StyleSheet, Pressable } from "react-native"
import { Agenda } from "react-native-calendars"
import { JournalEntry, CalendarDay } from "@/lib/types"
import { router } from "expo-router"
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
    console.log(entries)
    // Transform entries array into an object with dates as keys
    const items = entries?.reduce((acc, entry) => ({
        ...acc,
        [entry.date]: [...(acc[entry.date] || []), { name: entry.text }]
    }), {} as Record<string, {name: string}[]>) || {}

    return (
        <Agenda
            onDayPress={(day: CalendarDay) => {
                console.log(day)
            }}

            // Use the transformed entries
            items={items}

            //render the item ????? doesn't work
            renderItem={(item: any, firstItemInDay: boolean) => {
                console.log("item", item)
                return (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )
            }}

            renderList={(listProps: any) => {
             
                const selectedDate = listProps.selectedDay
            
                // Convert selected date to format that matches your data (YYYY-MM-DD)
                const formattedSelectedDate = new Date(selectedDate).toISOString().split('T')[0]
                
                // Get items for the selected date
                const dayItems = listProps.items[formattedSelectedDate] || []
                
         

                return (
                    <View style={styles.listContainer}>
                        {dayItems.map((item: any, index: number) => (
                            <View key={index} style={styles.itemContainer}>
                             {/* TODO add make the component a button and add the update prompt functionality */}
                                <Pressable  onPress={() => {
                                    router.push(`/components/update?previousJournalEntry=${JSON.stringify(item)}`)
                                }}>
                                    <Text style={styles.itemText}>{item.name}</Text>
                                </Pressable>
                            </View>
                        ))}
                    </View>
                )
            }}

            //if there are no journal entries for a day, this is rendered
            renderEmptyDate={() => (
                <View style={styles.emptyDate}>
                    <Text style={styles.emptyDateText}>No entries for this day</Text>
                </View>
            )}
      
          
            //if there are no journal entries for a day, this is rendered
            renderEmptyData={() => (
                <View style={styles.emptyDate}>
                    <Text style={styles.emptyDateText}>No entries for this day</Text>
                </View>
            )}

            theme={{
           
                selectedDayBackgroundColor: '#4a90e2',
                todayTextColor: '#4a90e2',
                dotColor: '#4a90e2',
                agendaDayTextColor: '#2d4150',
                agendaTodayColor: '#4a90e2',
                agendaKnobColor: '#4a90e2'
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
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
   
})

export default Calendar