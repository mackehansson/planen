import { format, getHours, getMinutes } from "date-fns";
import { useLayoutEffect, useState, useCallback, useEffect } from "react";

interface CurrentTimeLineProps {
    calendarHeight: number;
}

export const CurrentTimeLine = (props: CurrentTimeLineProps) => {
    const [topValue, setTopValue] = useState(0);
    const [currentTime, setCurrentTime] = useState("");

    const getTopeValue = useCallback(() => {
        const currentTime = new Date();
        setCurrentTime(format(currentTime, "HH:mm"));
        const hours = getHours(currentTime);
        const minute = getMinutes(currentTime);

        const hourSize = Math.floor(props.calendarHeight / 24);
        const minuteSize = Math.floor(props.calendarHeight / 24 / 60);

        // Check time and update top value
        const topValue = hours * hourSize + minute * minuteSize;
        return topValue + 8;
    }, [props.calendarHeight]);

    useEffect(() => {
        const topVal = getTopeValue();
        setTopValue(topVal);
    }, [props.calendarHeight]);

    useLayoutEffect(() => {
        const interval = setInterval(() => {
            const topValue = getTopeValue();
            setTopValue(topValue);
        }, 60000);
        return () => clearInterval(interval);
    }, [props.calendarHeight]);
    return (
        <div
            className="absolute w-full z-10"
            style={{
                top: topValue,
            }}
        >
            <div className="bg-accent-green h-[2px] w-full opacity-50"></div>
            <div
                className="bg-accent-green w-[51px] absolute text-black font-bold text-[12px] p-1 flex items-center justify-center"
                style={{
                    top: 0,
                    left: 0,
                }}
            >
                {currentTime}
            </div>
        </div>
    );
};
