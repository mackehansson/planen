import React, { useRef } from "react";
import { useButton } from "react-aria";
import type { AriaButtonProps } from "react-aria";
import classNames from "clsx";

type ButtonSize = "small" | "medium" | "large";

interface ButtonProps {
    size?: ButtonSize;
    startIcon?: JSX.Element;
}

export const Button = (
    props: AriaButtonProps<"button"> &
        React.HTMLAttributes<HTMLButtonElement> &
        ButtonProps
) => {
    const ref = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(props, ref);
    const { children, className, size = "medium", startIcon } = props;

    return (
        <button
            {...buttonProps}
            className={classNames(
                `bg-clip-content-border flex items-center justify-center rounded-lg border-2 border-transparent bg-gradient bg-origin-border font-bold uppercase shadow-gradient hover:bg-gradientHover ${className}`,
                {
                    "h-[67px] gap-3": size === "large",
                    "h-[50px] gap-2": size === "medium",
                    "h-[40px] gap-2 text-sm": size === "small",
                }
            )}
        >
            {startIcon && startIcon}
            {children}
        </button>
    );
};
