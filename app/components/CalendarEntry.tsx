import { View, Text, Pressable, StyleSheet } from "react-native"
import { router } from "expo-router"
import ThemeContext from "../theme/themeContext"
import { useContext } from "react"
import { CalendarItem } from "@/lib/types"


// CalendarEntry is a component that displays a journal entry on the calendar 
// it is a button that when pressed, opens the UpdateJournalEntry component
// it displays the date and the text of the journal entry
const CalendarEntry = ({item}: {item: CalendarItem}) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Pressable onPress={() => {
            router.push({pathname: `/components/UpdateJournalEntry`, params: {previousJournalEntry: item.text, id: item.id}})
        }} style={[styles.itemContainer, { backgroundColor: theme.background, borderColor: theme.color, borderWidth: 1 }]}>
            <View style={styles.contentContainer}>
                <View style={styles.dateContainer}>
                    <Text style={[styles.dateText, { color: theme.text }]}>
                        {new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                </View>
                <View style={styles.textContainer}>
                    <Text 
                        numberOfLines={2} 
                        ellipsizeMode="tail" 
                        style={[styles.itemText, { color: theme.text }]}
                    >
                        {item.text}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}

export default CalendarEntry

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: 'white',
        padding: 15,
        marginRight: 15,
        marginTop: 17,
        borderRadius: 8,
        borderWidth: 1,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        width: 70,
        marginRight: 15,
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    dateText: {
        fontSize: 12,
        textAlign: 'center',
    },
    itemText: {
        fontSize: 15,
        lineHeight: 20,
    },  
})