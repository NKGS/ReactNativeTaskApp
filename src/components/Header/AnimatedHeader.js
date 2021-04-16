import React from 'react';
import { Animated } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const HEADER_HEIGHT = 200;

const AnimatedHeader = ({ animatedValue }) => {
    const insets = useSafeAreaInsets();
    const headerHeight = animatedValue.interpolate({
        inputRange: [0, HEADER_HEIGHT + insets.top],
        outputRange: [HEADER_HEIGHT + insets.top, insets.top + 44],
        extrapolate: 'clamp'
    })
    return (
        <Animated.View style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            height: headerHeight,
            backgroundColor: 'lightblue'
        }}>
            <Animated.Text
                // onLayout={e => {
                //     if (this.offset === 0 && this.state.titleWidth === 0) {
                //         const titleWidth = e.nativeEvent.layout.width;
                //         this.setState({ titleWidth });
                //     }
                // }}
                style={{
                    fontWeight: 'bold',
                    fontSize: animatedValue.interpolate({
                        inputRange: [0, 300],
                        outputRange: [60, 20],
                        extrapolate: 'clamp',
                    }),
                    textAlign:'center',
                    marginTop: animatedValue.interpolate({
                        inputRange: [0, 300],
                        outputRange: [60, 5],
                        extrapolate: 'clamp',
                    }),
                }}>
                Header Title Here
</Animated.Text>
        </Animated.View>
    );
};

export default AnimatedHeader;