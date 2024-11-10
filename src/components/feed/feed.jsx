import { Topic } from "../../components/feed/topic"
import { View } from "react-native"

export const Feed = ({ items }) => {
    return (
        <View>
            {items.map((item, i) => (
               <Topic key={i} item={item} /> 
            ))}
        </View>
    )
}