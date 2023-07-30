import React, { InputHTMLAttributes, ReactNode } from "react";
import { format } from "./format";


interface FormattedInputProps{
    autocomplete?: string;
    defaultValue: string | undefined;
    errors?: boolean | undefined;
    errorTitle?: string;
    hiddenLabel?: boolean;
    hintExpander?: boolean;
    hintExpanderContent?: string | ReactNode;
    hintExpanderLabel?: string;
    hintId?: string;
    hintText?: string;
    id: string;
    inputSize?: string;
    labelSize?: 'default' | 'large';
    name: string;
    numberFormatDefaultValue?: string | undefined;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
    text?: string;
    type?: string;
    register?: (instance: HTMLInputElement | null) => void;
    required?: boolean;
    maxLength?: number;
    pattern?: string;
    placeholderText:string;
    formatTemplate: string;
    CustomInput?: React.ComponentType<React.InputHTMLAttributes<HTMLInputElement>>;
}

const FormattedInput = function({
    autocomplete,
    defaultValue,
    errors,
    errorTitle,
    hiddenLabel,
    hintExpander = false,
    hintExpanderContent,
    hintExpanderLabel,
    hintId,
    hintText,
    id,
    inputSize,
    labelSize = 'default',
    name,
    numberFormatDefaultValue,
    onBlur,
    onChange,
    text,
    type = 'text',
    register,
    required,
    maxLength,
    pattern,
    placeholderText,
    formatTemplate,
    CustomInput,
}: FormattedInputProps){
    return CustomInput?<CustomInput
    // aria-describedby={[hintId || undefined, errors && `${id}-error`].join(' ')}
    aria-invalid={!!errors}
    type={type}
    id={id}
    name={name}
    defaultValue={defaultValue || numberFormatDefaultValue}
    onChange={(event:React.ChangeEvent<HTMLInputElement>)=>
        {
            
            // if (formatTemplate) {
                const pos = event.target.selectionStart || 0;
                const formatReturnVal = format(event.target.value, formatTemplate, pos);
                event.target.value = formatReturnVal.res;

                event.target.setSelectionRange(formatReturnVal.newCaretPos,formatReturnVal.newCaretPos);
            //     // formats the input and sets the Caret's position
            //     if (formatTemplateTemp) {
            //         event.target.value = format(
            //             event.target.value,
            //             formatTemplateTemp
            //         ).formatted;
            //     } else {
            //         event.target.value = format(
            //             event.target.value,
            //             formatTemplate
            //         ).formatted;
            //     }
                let iter = 0;
                let delim = '-';
                // formatTemplate?.map(
                //     (item: { char: RegExp; repeat: number } | { exactly: string }) => {
                //         if ('exactly' in item) delim = item.exactly;
                //     }
                // );
                // if (event.target.value[pos - 1] === delim) iter = 1;
                // event.target.setSelectionRange(pos + iter, pos + iter);
                // if (
                //     isValid(formatTemplate, event.target.value) &&
                //     event.target.value.length === calculateMaxLength(formatTemplate)
                // )
                //     methods.clearErrors(name);
            // }
            onChange?.(event);
        }}
    onBlur={onBlur}
    ref={register}
    data-errortitle={errorTitle}
    width={inputSize}
    autoComplete={autocomplete || 'off'}
    maxLength={maxLength}
    pattern={pattern}
    placeholder={placeholderText}
    />:<input
    // aria-describedby={[hintId || undefined, errors && `${id}-error`].join(' ')}
    aria-invalid={!!errors}
    type={type}
    id={id}
    name={name}
    defaultValue={defaultValue || numberFormatDefaultValue}
    onChange={(event:React.ChangeEvent<HTMLInputElement>)=>
        {
            
            // if (formatTemplate) {
                const pos = event.target.selectionStart || 0;
                const formatReturnVal = format(event.target.value, formatTemplate, pos);
                event.target.value = formatReturnVal.res;

                event.target.setSelectionRange(formatReturnVal.newCaretPos,formatReturnVal.newCaretPos);
            //     // formats the input and sets the Caret's position
            //     if (formatTemplateTemp) {
            //         event.target.value = format(
            //             event.target.value,
            //             formatTemplateTemp
            //         ).formatted;
            //     } else {
            //         event.target.value = format(
            //             event.target.value,
            //             formatTemplate
            //         ).formatted;
            //     }
                let iter = 0;
                let delim = '-';
                // formatTemplate?.map(
                //     (item: { char: RegExp; repeat: number } | { exactly: string }) => {
                //         if ('exactly' in item) delim = item.exactly;
                //     }
                // );
                // if (event.target.value[pos - 1] === delim) iter = 1;
                // event.target.setSelectionRange(pos + iter, pos + iter);
                // if (
                //     isValid(formatTemplate, event.target.value) &&
                //     event.target.value.length === calculateMaxLength(formatTemplate)
                // )
                //     methods.clearErrors(name);
            // }
            onChange?.(event);
        }}
    onBlur={onBlur}
    ref={register}
    data-errortitle={errorTitle}
    width={inputSize}
    autoComplete={autocomplete || 'off'}
    maxLength={maxLength}
    pattern={pattern}
    placeholder={placeholderText}
    />;

}

export default FormattedInput;