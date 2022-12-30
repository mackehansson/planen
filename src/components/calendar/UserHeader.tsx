interface UserHeaderProps {
    firstName: string;
    lastName: string;
}

export const UserHeader = ({ firstName, lastName }: UserHeaderProps) => {
    const fullName = `${firstName} ${lastName}`;
    return (
        <div className="flex-1 border-r-2 border-greys-border">
            <div className="w-full h-[53px] bg-greys-th sticky top-0 box-border flex items-center justify-center font-bold">{fullName}</div>
        </div>
    );
};
