import { ClerkProvider } from '@clerk/nextjs'


const PlatformLayout = ({ 
    children 
}: {
    children: React.ReactNode // ReactNode est un type de données qui accepte n'importe quel type de données
}) => {
    return (
        <ClerkProvider>
            { children }
        </ClerkProvider>
    )
}

export default PlatformLayout;