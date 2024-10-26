import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
    return (
        <div className="w-full">

            <OrganizationProfile
                routing="hash" // on utilise le hash pour la navigation entre les onglets sans rechargement de la page
                appearance={{
                    elements: {
                        rootBox: {
                            boxShadow: "none",
                            width: "100%",
                        },
                        card: {
                            border: "1px solid #E5E5E5",
                            boxShadow: "none",
                            width: "100%",
                        }
                    },
                }}
            />
        </div>
    );
};

export default SettingsPage;