import { useEffect, useState } from "react";

function Produit({nom, qte, image, couleur}){

    // État pour le compteur
    const [compteur, setCompteur] = useState(0);

    // État pour le nombre de produits (initialiser avec la prop reçue)
    const [prod, setProduits] = useState(qte);
  

    // État pour alterner la couleur (true = couleur de la catégorie, false = noir)
    const [couleurActive, setCouleurActive] = useState(true);

    // useEffect : S'exécute à chaque changement du compteur
    useEffect(() => {
        console.log(`=== Catégorie: ${nom} ===`);
        console.log(`Compteur actuel: ${compteur}`);
        console.log(`Nombre de produits: ${prod}`);
        console.log(`Couleur active: ${couleurActive ? couleur : 'noir'}`);
        console.log('------------------------');
    }, [compteur]); // Se déclenche quand 'compteur' change

    // Fonction pour gérer le clic sur le bouton
    const handleClick = () => {
        // Incrémenter le compteur
        setCompteur(compteur + 1);

        // Incrémenter le nombre de produits
        setProduits(prod + 1);

        // Alterner la couleur
        setCouleurActive(!couleurActive);
    };

    return(
        <div style={{
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: `3px solid ${couleurActive ? couleur : '#000000'}`, 
            cursor: 'pointer',
        }}>
            <div style={{
                fontSize: "50px",
                marginBottom: '15px' 
            }}>{image}</div>

            <h3 style={{
                color: couleurActive ? couleur : '#000000', 
                margin: '10px 0',
                fontSize: '22px'
            }}>{nom}</h3>

            <p style={{ 
                color: '#666', 
                fontSize: '14px',
                margin: '5px 0'
            }}>{prod} produits</p>

            {/* Bouton avec compteur et couleur alternée */}
            <button
                onClick={handleClick}
                style={{
                marginTop: '15px',
                padding: '10px 20px',
                backgroundColor: couleurActive ? couleur : '#000000',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
                }}
            >
                Clics: {compteur}
            </button>
        </div>
    )
}

export default Produit;