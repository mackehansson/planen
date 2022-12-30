import { useLayoutEffect, useRef, useState } from "react";
import { Event } from "../event/Event";
import { CurrentTimeLine } from "./CurrentTimeLine";
import { TimeSlots } from "./TimeSlots";
import { UserHeader } from "./UserHeader";
import { UserSlots } from "./UserSlots";

// https://codesandbox.io/s/react-resizable-panels-zf7hwd

export const Calendar = () => {
    const calendarRef = useRef<HTMLDivElement>(null);
    const calendarWrapperRef = useRef<HTMLDivElement>(null);
    const [calendarWidth, setCalendarWidth] = useState(0);
    const [calendarWrapperHeight, setCalendarWrapperHeight] = useState(0);

    useLayoutEffect(() => {
        if (calendarRef.current) {
            setCalendarWidth(calendarRef.current?.offsetWidth);
        }

        if (calendarWrapperRef.current) {
            setCalendarWrapperHeight(calendarWrapperRef.current.offsetHeight);
        }
    }, []);

    return (
        <div className="relative flex" ref={calendarWrapperRef}>
            <CurrentTimeLine calendarHeight={calendarWrapperHeight} />
            <TimeSlots />
            <div className="flex-grow">
                <div className="sticky top-0 z-20 flex">
                    <UserHeader firstName="Macke" lastName="Hansson" />
                    <UserHeader firstName="Josefine" lastName="Lindgren" />
                    <UserHeader firstName="Meja" lastName="Lindgren" />
                </div>

                <div className="relative flex" ref={calendarRef}>
                    <Event
                        from={"2022-12-28T03:00:00.000Z"}
                        to={"2022-12-28T03:45:00.000Z"}
                        title="Till BVC med Meja"
                        calendarWidth={calendarWidth}
                        users={[
                            {
                                id: 1,
                                firstName: "Macke",
                                lastName: "Hansson",
                                attending: true,
                            },
                            {
                                id: 2,
                                firstName: "Josefine",
                                lastName: "Lindgren",
                                attending: true,
                            },
                            {
                                id: 3,
                                firstName: "Meja",
                                lastName: "Lindgren",
                                attending: false,
                            },
                        ]}
                    />
                    <Event
                        from={"2022-12-28T07:30:00.000Z"}
                        to={"2022-12-28T08:45:00.000Z"}
                        title="Morgonmöte"
                        calendarWidth={calendarWidth}
                        users={[
                            {
                                id: 1,
                                firstName: "Macke",
                                lastName: "Hansson",
                                attending: true,
                            },
                            {
                                id: 2,
                                firstName: "Josefine",
                                lastName: "Lindgren",
                                attending: false,
                            },
                            {
                                id: 3,
                                firstName: "Meja",
                                lastName: "Lindgren",
                                attending: false,
                            },
                        ]}
                    />

                    <UserSlots />
                    <UserSlots />
                    <UserSlots />
                </div>
            </div>
        </div>
    );
};
