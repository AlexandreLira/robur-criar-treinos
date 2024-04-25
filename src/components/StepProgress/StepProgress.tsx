import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useAnimatedValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface StepProgressProps {
    position: number;
    steps: string[]
}

export function StepProgress({ position, steps = [] }: StepProgressProps) {


    const animation = useSharedValue(0)

    const barStyle = useAnimatedStyle(() => {
        return {
            width: `${animation.value}%`
        }
    })

    function onAnimtion(tab: number) {
        const a = (100 / steps.length) * tab
        animation.value = withTiming(a)
    }


    useEffect(() => {
        onAnimtion(position + 1)
    }, [position])



    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                {steps.map((step, index) =>

                    <Text
                        key={step}
                        style={{
                            color: index <= position ? theme.colors.black : theme.colors.gray,
                            fontWeight: index == position ? 'bold' : 'normal',
                            flexShrink: 1,

                            textAlign: 'center'
                        }}
                        numberOfLines={1}
                    >{step}</Text>
                )}
            </View>
            <View style={styles.bar}>
                <Animated.View style={barStyle}>
                    <LinearGradient
                        colors={[theme.colors.primary, theme.colors.secodanry]}
                        style={[styles.progress]}
                        start={[0.0, 0.0]}
                        end={[1.0, 1.0]}
                    />
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        gap: 12,
        padding: 24,

    },
    bar: {
        width: '100%',
        height: 10,
        borderRadius: 6,
        backgroundColor: theme.colors.gray_light
    },
    progress: {
        height: 10,
        borderRadius: 6,
    }
});
