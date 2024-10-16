"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";




interface SidebarProps {
    storageKey?: string; // la clé de stockage pour le state du sidebar
};

export const Sidebar = ({
    storageKey = "t-sidebar-state",
}: SidebarProps) => {
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>( // on récupère le state du sidebar
        storageKey, 
        {}
    );

    const { 
        organization : activeOrganization,
        isLoaded: isLoadedOrg
    }= useOrganization(); // on récupère l'organisation active

    const {
        userMemberships,
        isLoaded: isLoadedOrgList // on récupère le state de chargement de la liste des organisations
    } = useOrganizationList({ // on récupère la liste des organisations
        userMemberships: {
            infinite: true, // on veut récupérer toutes les organisations
        }
    });

    const defaultAccordionValue: string[] = Object.keys(expanded) // on récupère les clés de l'objet expanded
        .reduce((acc: string[], key: string) => { // on boucle sur les clés, reduce permet de transformer un objet en un autre objet
            if(expanded[key]) { // si la valeur de la clé est true
                acc.push(key); // on ajoute la clé à l'array acc
            }
            return acc;
        }, []) // on initialise l'array acc à vide

    
    const onExpand = (id: string) => {
        setExpanded((curr) => ({ 
            ...curr, 
            [id]: !expanded[id] 
        }))
    };

    if(!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) { // si l'organisation active ou la liste des organisations n'est pas chargée
        return (
            <>
                <Skeleton />
            </>
        )
    }

    
    return (
        <>
            <div className="font-medium text-xs flex items-center mb-1">
                <span className="pl-4">
                    Workspaces
                </span>
                <Button
                    asChild
                    type="button"
                    size="icon"
                    variant="ghost"
                    className="ml-auto"
                >
                    <Link href="/select-org">
                        <Plus 
                            className="h-4 w-4"
                        />
                    </Link>
                </Button>
            </div>
        </>
    )

}