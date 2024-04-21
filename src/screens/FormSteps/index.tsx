import { View, StyleSheet, SafeAreaView, Platform } from "react-native";

import { useForm } from "../../hooks/useForm";

import { StepProgress } from "../../components/StepProgress";
import { Button } from "../../components/Button";
import { Objective } from "../../components/FormSteps/Objective";
import { Gender } from "../../components/FormSteps/Gender";

import { theme } from "../../theme";
import { Experience } from "../../components/FormSteps/Experience";
import { Measurements } from "../../components/FormSteps/Measurements";




export function FormSteps() {

    const { handleNextStep, handlePreviusStep, position, steps } = useForm()

    function renderStep(step: number) {
        switch (step) {
            case 0:
                return <Objective />
            case 1:
                return <Gender />
            case 2:
                return <Measurements />
            case 3:
                return <Experience />
            default:
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StepProgress
                steps={steps}
                position={position}
            />


            {renderStep(position)}
            
            <View style={styles.footer}>
                <Button
                    title="Voltar"
                    colors={[theme.colors.shape, theme.colors.shape]}
                    textColor={theme.colors.gray}
                    onPress={handlePreviusStep}
                />
                <Button
                    title="Próximo"
                    onPress={handleNextStep}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: 'center',
        paddingTop: Platform.OS == 'android' ? 24 : 0

    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        padding: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 12
    }
});