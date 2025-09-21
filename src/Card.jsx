import victoire from './assets/victoire.jpg';

const Card = () => {
    return ( 
        <div className="card">
            <img className='card-img' src={victoire} alt="Profile Picture" />
            <h2 className='card-title'>Victoire Bihame</h2>
            <p className='card-text'>I am Software Engineer, passioned in Coding</p>
        </div>
     );
}
 
export default Card;