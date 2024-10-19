import { create } from 'zustand'

type MobileSidebarState = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

// on crée un hook useMobileSidebar qui prend en paramètre un objet de type MobileSidebarState
export const useMobileSidebar = create<MobileSidebarState>((set) => ({
    isOpen: false, 
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))