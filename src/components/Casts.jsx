import "../styles/cast.css"
const Casts=({cast})=>{

    const {name,character,image}=cast;

    return(
        <div className="cast">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p><b>Character:</b> {character}</p>
        </div>
    )
} 

export default Casts;