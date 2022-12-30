import { ToggleSizeButton } from "./ToggleSizeButton";

export const TimeSlots = () => {
    return (
        <div className="w-[51px] border-l-2 border-r-2 border-greys-border">
            <ToggleSizeButton isExpanded={false} />
            <div className="h-[2880px] flex flex-col">
                <TimeSlot time="00:00" />
                <TimeSlot time="01:00" />
                <TimeSlot time="02:00" />
                <TimeSlot time="03:00" />
                <TimeSlot time="04:00" />
                <TimeSlot time="05:00" />
                <TimeSlot time="06:00" />
                <TimeSlot time="07:00" />
                <TimeSlot time="08:00" />
                <TimeSlot time="09:00" />
                <TimeSlot time="10:00" />
                <TimeSlot time="11:00" />
                <TimeSlot time="12:00" />
                <TimeSlot time="13:00" />
                <TimeSlot time="14:00" />
                <TimeSlot time="15:00" />
                <TimeSlot time="16:00" />
                <TimeSlot time="17:00" />
                <TimeSlot time="18:00" />
                <TimeSlot time="19:00" />
                <TimeSlot time="20:00" />
                <TimeSlot time="21:00" />
                <TimeSlot time="22:00" />
                <TimeSlot time="23:00" />
            </div>
        </div>
    );
};

const TimeSlot = ({ time }: { time: string }) => {
    return <div className="bg-greys-variant1 flex items-center justify-center text-greys-muted text-xs font-bold flex-grow box-border border-b-2 border-greys-border">{time}</div>;
};
