import React, { useRef } from "react";
import { useButton } from "react-aria";
import type { AriaButtonProps } from "react-aria";
import classNames from "clsx";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
    size?: ButtonSize;
}

export const IconButton = (
    props: AriaButtonProps<"button"> &
        React.HTMLAttributes<HTMLButtonElement> &
        ButtonProps
) => {
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);
    const { children, className, size = "medium" } = props;

    return (
        <button
            {...buttonProps}
            className={classNames(
                `bg-clip-content-border flex items-center justify-center rounded-lg border-2 border-transparent bg-gradient bg-origin-border font-bold uppercase shadow-gradient hover:bg-gradientHover ${className}`,
                {
                    "h-[67px] w-[67px]": size === "large",
                    "h-[50px] w-[50px]": size === "medium",
                    "h-[40px] w-[40px]": size === "small",
                }
            )}
        >
            {children}
        </button>
    );
};
