"use client";

import { create } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {
    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(create, initialState); // useFormState est une fonction qui permet de gérer l'état du formulaire
    return (
        <form action={dispatch}>
                <div className="flex flex-col space-y-2">
                    <FormInput errors={state?.errors} />
                </div>
                <FormButton />
            </form>
    );
}