export const UserSlots = () => {
    return (
        <div className="flex-grow border-r-2 border-greys-border">
            <div className="h-[2880px] flex flex-col flex-grow">
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
            </div>
        </div>
    );
};

const TimeSlot = () => {
    return <div className="bg-greys-td flex items-center justify-center text-greys-muted text-xs font-bold flex-grow box-border border-b-2 border-greys-border"></div>;
};
