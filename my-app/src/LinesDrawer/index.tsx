import React from 'react';
import { GestureResponderEvent } from 'react-native';
import Design from './design';

const LinesDrawer = () => {
    const [drawing, setDrawing] = React.useState(false);
    const [lines, setLines] = React.useState<Array<[number, number]>>([]);

    /**
     * 
     * @param event GestureResponderEvent
     * @description this function call when we start drawing from point
     */
    const handleTouchStart = (event: GestureResponderEvent) => {
        const { locationX, locationY } = event.nativeEvent;
        setDrawing(true);
        setLines([...lines, [locationX, locationY]]);
    };

    /**
     * 
     * @param event GestureResponderEvent
     * @description this function call when we moving the lines with pressing
     */

    const handleTouchMove = (event: GestureResponderEvent) => {
        if (!drawing) return;
        const { locationX, locationY } = event.nativeEvent;
        setLines([...lines, [locationX, locationY]]);
    };

    /**
     * 
     * @param void
     * @description this function call when we stop the drawing
     */

    const handleTouchEnd = () => {
        setDrawing(false);
    };

    /**
     * 
     * @param void
     * @description this function call when we click on clear button it stop drawing
     */
    const handleClearLines = () => {
        setLines([]);
    }
    const componentProps = {
        lines,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        handleClearLines
    }
    return (
        <Design {...componentProps} />
    );
};

export default LinesDrawer;
