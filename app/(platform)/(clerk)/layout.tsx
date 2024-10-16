const ClerkLayout = ({
    children 
}: {
 children: React.ReactNode; // ReactNode est un type de données qui accepte n'importe quel type de données
}) => {
    return (
        <div className="h-full flex items-center justify-center">
            { children }
        </div>
    )
}

export default ClerkLayout;