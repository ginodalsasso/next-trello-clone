"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        title? : string[];
    },
    message?: string | null;
}

const CreateBoard = z.object({
    title: z.string().min(3, { 
        message: "Minimum length of 3 letters is required" 
    })
});

export async function create (prevState: State, formData: FormData) {
    const validatedFileds = CreateBoard.safeParse({ // Vérifie que les champs du formulaire sont valides
        title: formData.get("title"), // Récupère le titre du formulaire
    });

    if (!validatedFileds.success) {
        return {
            errors: validatedFileds.error.flatten().fieldErrors, // Retourne les erreurs de validation
            message: "Missing required fields",
        }
    }

    const { title } = validatedFileds.data; // Destructure le titre du formulaire pour l'utiliser dans la requête

    try {       
        await db.board.create({
            data: {
                title,
            }
        })
    } catch (error) {
        return {
            message: "Database error",
        }
    }

    revalidatePath('/organization/org_2nYkRx0peP4dHbLDMwKXPzTjq3d');
    redirect('/organization/org_2nYkRx0peP4dHbLDMwKXPzTjq3d');
}