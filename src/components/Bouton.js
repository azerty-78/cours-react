
function Bouton({value}){
    return(
        <div>
            <button style={{
                background : 'blue',
                color: "white",
                padding : "10px 30px",
                borderRadius: "10px",
            }}>{value}</button>
        </div>
    );
}
export default Bouton;