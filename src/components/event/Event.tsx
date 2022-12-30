import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { getCalendarPosition } from "../../utils/getCalendarPosition";

/*
Top
Beräknas på när Eventet är. Antal timmar och minuter.

Width
Beräknas på hur många personer eventet är för samt om det är ett event som är samtidigt som ett annat event.

Height
Längden på eventet
*/

export interface EventUser {
    id: number;
    firstName: string;
    lastName: string;
    attending: boolean;
}

interface EventProps {
    title: string;
    from: string;
    to: string;
    calendarWidth: number;
    users: EventUser[];
}

export const Event = ({
    from,
    to,
    calendarWidth,
    title,
    users,
}: EventProps) => {
    const isAllAttending = users.every((i) => i.attending);

    const getWidth = (size: number, length: number, isHalf = false) => {
        if (!calendarWidth) return 0;
        const fullWidth = Math.floor(calendarWidth);
        const section = Math.floor(fullWidth / length) - 2;
        return isHalf
            ? Math.floor(section * size) / 2
            : Math.floor(section * size);
    };

    return (
        <div
            className="absolute z-10 flex w-full gap-1 opacity-70"
            style={{
                ...getCalendarPosition(2880, from, to),
                left: 0,
            }}
        >
            {isAllAttending ? (
                <div
                    className="bg-clip-content-border flex h-full border-2 border-transparent bg-gradient bg-origin-border p-0.5 text-[10px] font-bold shadow-event"
                    style={{
                        width: getWidth(3, 3),
                    }}
                >
                    <div className="flex w-full p-0.5">
                        <div className="mr-2 text-greys-muted">
                            {format(new Date(from), "HH:mm")} -{" "}
                            {format(new Date(to), "HH:mm")}
                        </div>
                        <div>{title}</div>
                        <div className="ml-auto">
                            <FontAwesomeIcon icon={faLocation} />
                        </div>
                    </div>
                </div>
            ) : (
                users.map((user) => {
                    if (user.attending) {
                        return (
                            <div
                                key={user.id}
                                className="bg-clip-content-border flex h-full border-2 border-transparent bg-gradient bg-origin-border p-0.5 text-[10px] font-bold shadow-event"
                                style={{
                                    width: getWidth(1, 3),
                                }}
                            >
                                <div className="flex w-full p-0.5">
                                    <div className="mr-2 text-greys-muted">
                                        {format(new Date(from), "HH:mm")} -{" "}
                                        {format(new Date(to), "HH:mm")}
                                    </div>
                                    <div>{title}</div>
                                    <div className="ml-auto">
                                        <FontAwesomeIcon icon={faLocation} />
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div
                                key={user.id}
                                className="h-full"
                                style={{
                                    width: getWidth(1, 3),
                                }}
                            ></div>
                        );
                    }
                })
            )}
        </div>
    );
};
