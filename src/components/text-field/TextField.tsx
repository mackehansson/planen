import { useTextField } from "@react-aria/textfield";
import React, { useRef } from "react";
import type { AriaTextFieldOptions } from "react-aria";

export const TextField = (
    props: AriaTextFieldOptions<"input"> & React.HTMLAttributes<HTMLDivElement>
) => {
    const { label, className } = props;
    const ref = useRef<HTMLInputElement>(null);
    const { labelProps, inputProps, descriptionProps, errorMessageProps } =
        useTextField(props, ref);

    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            <div className="relative">
                <input
                    {...inputProps}
                    ref={ref}
                    className="peer h-12 w-full rounded-lg px-4 pt-3 text-black placeholder-transparent"
                    placeholder="Email address"
                />
                <label
                    {...labelProps}
                    className="
                            absolute 
                            left-4 
                            top-0.5 
                            text-sm
                            text-black 
                            transition-all 
                            peer-placeholder-shown:top-2.5 
                            peer-placeholder-shown:left-4 
                            peer-placeholder-shown:text-base
                            peer-placeholder-shown:text-gray-400 
                            peer-focus:top-0.5 
                            peer-focus:left-4 
                            peer-focus:text-sm
                            peer-focus:text-black
                            "
                >
                    {label}
                </label>
            </div>

            {props.description && (
                <div {...descriptionProps} className="text-sm">
                    {props.description}
                </div>
            )}
            {props.errorMessage && (
                <div {...errorMessageProps} className="text-sm text-red-600">
                    {props.errorMessage}
                </div>
            )}
        </div>
    );
};
