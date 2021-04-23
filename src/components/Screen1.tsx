import React, { useRef } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import AnimatedHeader from './Header/AnimatedHeader';
import DATA from '../data';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const Screen1 = () => {
    const offset = useRef(new Animated.Value(0)).current;
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
                <View style={{ flex: 1 }}>
                    <AnimatedHeader animatedValue={offset}
                    />

                    <ScrollView
                        style={{ flex: 1, backgroundColor: 'white' }}
                        contentContainerStyle={{
                            alignItems: 'center',
                            paddingTop: 220,
                            paddingHorizontal: 20
                        }}
                        showsVerticalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: offset } } }],
                            { useNativeDriver: false }
                        )}
                    >
                        {DATA.map(item => (
                            <View
                                key={item.id}
                                style={{
                                    marginBottom: 20
                                }}
                            >
                                <Text style={{ color: '#101010', fontSize: 32 }}>
                                    {item.title}
                                </Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Screen1