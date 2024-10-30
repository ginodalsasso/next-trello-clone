import { z } from 'zod';

// Définition du type `FieldErrors` qui représente un objet contenant les erreurs de validation pour chaque champ
export type FieldErrors<T> = {
    [K in keyof T]?: string; // Pour chaque clé K de T, une erreur possible de type string
};

// `TInput` et `TOutput` sont des paramètres génériques pour représenter respectivement les types de l'entrée et de la sortie de l'action
export type ActionState<TInput, TOutput> = {
    fieldErrors: FieldErrors<TInput>; // Les erreurs de validation associées aux champs de TInput
    errors?: string | null; // Optionnel, peut contenir une erreur globale sous forme de chaîne ou null si aucune erreur
    data: TOutput; // Données de sortie de type TOutput
};

// Fonction générique `createSafeAction` qui prend un schéma `zod` pour valider les données et un gestionnaire `handler`
// La fonction accepte les types `TInput` (données d'entrée) et `TOutput` (données de sortie)
export const createSafeAction = <TInput, TOutput>(
    schema: z.Schema<TInput>, // `schema` est un schéma `zod` pour valider les données d'entrée
    handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>> // `handler` est une fonction asynchrone qui traite les données validées
) => {
    // Retourne une nouvelle fonction asynchrone qui prend `data` de type `TInput` et retourne une `ActionState<TInput, TOutput>`
    return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
        // `validationResult` contient le résultat de la validation de `data` selon le schéma
        const validationResult = schema.safeParse(data);

        // Si la validation échoue, on retourne un objet contenant les erreurs de validation des champs
        if (!validationResult.success) {
            return {
                fieldErrors: validationResult.error.flatten().fieldErrors as FieldErrors<TInput>, // Les erreurs de champ
            };
        }

        // Si la validation réussit, on exécute le `handler` avec les données validées
        return handler(validationResult.data);
    };
};
