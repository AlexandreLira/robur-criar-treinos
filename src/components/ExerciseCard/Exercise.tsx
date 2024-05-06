import { Image, Text, View } from "react-native";
import { response_json_exemple } from "../../service/openai";
import { styles } from "./ExerciseStyles";
response_json_exemple
interface ExerciseCardProps {
    data: typeof response_json_exemple.data[0]

}

export function ExerciseCard(props: ExerciseCardProps) {
    const { data } = props
    return (
        <View

            style={styles.card}

        >

            <View style={{ height: 50, justifyContent: 'space-between' }}>

                <Text style={styles.title}>{data.name}</Text>
                {data.repetitions &&
                    <Text style={styles.label}>{`${data.series} Séries X ${data.repetitions} repetições`}</Text>
                }
                {data.duration &&
                    <Text style={styles.label}>{`${data.series} Séries X ${data.duration}`}</Text>
                }
            </View>
        </View>
    )
}