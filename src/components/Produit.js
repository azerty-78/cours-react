
function Produit({nom, qte, image, couleur}){
    return(
        <div style={{
            border: `2px solid ${couleur}`,
            backgroundColor : "white",
            padding : "25px",
            textAlign: "center",
            borderRadius: "10px"
        }}>
            <div style={{
                fontSize: "50px"
            }}>{image}</div>

            <h3 style={{
                color: couleur
            }}>{nom}</h3>

            <p>{qte} produits</p>
        </div>
    )
}

export default Produit;