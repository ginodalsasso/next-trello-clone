"use client";

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
    const { pending } = useFormStatus(); // useFormStatus est une fonction qui permet de gérer le statut de la requête en cours

    return (
        <Button disabled={pending} type="submit" variant="destructive" size="sm">
            Delete
        </Button>
    )
}