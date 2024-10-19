"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // fermes le menu mobile lorsqu'on change de page
    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    if(!isMounted) return null; // Prévient le rendu du composant coté serveur pour éviter les erreurs

        return (
            <>
                <Button
                    onClick={onOpen}
                    className="block md:hidden mr-2"
                    variant= "ghost"
                    size="sm"
                >
                    <Menu className="h-4 w-4" />
                </Button>
                <Sheet open={isOpen} onOpenChange={onClose}>
                    <SheetContent
                        side= "left"
                        className="p-2 pt-10"
                    >
                        <Sidebar 
                            storageKey="t-sidebar-mobile-state"
                        />
                    </SheetContent>
                </Sheet>
            </>
        )
}