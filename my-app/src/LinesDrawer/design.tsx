import React from "react";
import { View, ImageBackground, Dimensions, TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import Svg, { Line } from 'react-native-svg';
import styles from './styles';

const image = require('../../assets/backgroundImage.jpg')

const { width, height } = Dimensions.get('window');

type LinesDrawerProps = {
    lines: Array<[number, number]>,
    handleTouchStart: (event: GestureResponderEvent) => void,
    handleTouchMove: (event: GestureResponderEvent) => void,
    handleTouchEnd: () => void,
    handleClearLines: () => void,
}

export default function Design(props: LinesDrawerProps) {
    const { lines, handleClearLines, handleTouchStart, handleTouchMove, handleTouchEnd } = props;
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage} />
            <Svg width={width} height={height}>
                {lines.map((line, index) => {
                    if (index === 0) {
                        return null; // Skip drawing the first point, as there's no previous point to connect to.
                    }
                    const [x1, y1] = lines[index - 1];
                    const [x2, y2] = line;
                    return <Line key={index} x1={x1} y1={y1} x2={x2} y2={y2} stroke="red" strokeWidth="3" />;
                })}
            </Svg>
            <TouchableOpacity style={styles.clearButton} onPress={handleClearLines}>
                <Text style={styles.clearButtonText}>Clear</Text>
            </TouchableOpacity>
            <View
                style={styles.overlay}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
        </View>
    );
}