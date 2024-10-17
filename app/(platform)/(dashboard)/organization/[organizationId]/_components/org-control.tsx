"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

// Ce composant est utilisé pour définir l'organisation active en fonction de l'ID de l'organisation dans l'URL.
export const OrgControl = () => {
    const params = useParams(); // useParams est un hook qui permet d'accéder aux paramètres de l'URL
    const { setActive } = useOrganizationList(); // useOrganizationList est un hook qui permet d'accéder à la liste des organisations

    useEffect(() => { 
        if (!setActive) return; // Si setActive n'est pas défini, on sort de la fonction

        setActive({
            organization: params.organizationId as string, // On définit l'organisation active en fonction de l'ID de l'organisation dans l'URL
        });
    }, [setActive, params.organizationId]); // On utilise le hook useEffect pour définir l'organisation active en fonction de l'ID de l'organisation dans l'URL

    return null; // On retourne null car ce composant ne rend rien
};