import { differenceInMinutes, getHours, getMinutes } from "date-fns";
import type { CSSProperties } from "react";

// Get position
export const getCalendarPosition = (
    fullHeight: number,
    fromDate: string,
    toDate: string
): CSSProperties => {
    const minDiff = differenceInMinutes(new Date(toDate), new Date(fromDate));
    const minuteHeight = fullHeight / 24 / 60;

    const topHour = getHours(new Date(fromDate));
    const hourSize = fullHeight / 24;

    const topMinute = getMinutes(new Date(fromDate));
    const minuteSize = minuteHeight * topMinute;

    return {
        height: minuteHeight * minDiff,
        top: hourSize * topHour + minuteSize,
    };
};
