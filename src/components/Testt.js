import Bouton from "./Bouton";

function Testt({nom, prenom, prix, stocks, values}){
    return(
        <div style={{
            border : "2px solid"
        }}>
            <h3 style={{
                color: "blue",
                textAlign:"center",
                border: "1px solid"
            }}>Bonsoir M/Mme {nom}, {prenom} !!!</h3>
            <p>Prix : {prix}</p>
            <p>Stock : {stocks}</p>
            <Bouton value={values}/>
        </div>
    )
}

export default Testt;
