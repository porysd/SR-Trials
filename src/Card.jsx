
import images from './assets/pikachu.png'

function Card () {


    return (
        <div className="card">
            <img className="pikachu" alt="pikachu" src={images} width="250" height="225"></img>
            <h2 className="card-title">PokeMo(n)</h2>
            <p className="card-text">I don't like PokeMo(n)</p>
        </div>
    );
}

export default Card