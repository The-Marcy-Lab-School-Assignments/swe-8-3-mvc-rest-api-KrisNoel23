import {useState, useEffect} from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getHeroById, updateHeroName, deleteHero } from '../adapters/heroAdapters';

const HeroDetails = () => {
    const [hero, setHero] = useState({})
    const [newHeroName, setNewHeroName] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHero = async () => {
            const [foundHero, error] = await getHeroById(id);
            setHero(foundHero);
        };
        fetchHero();
    }, [])

    const handleDeleteHero = async () => {
        await deleteHero(id);
        navigate('/');
    }

    const handleUpdateHero = async (e) => {
        e.preventDefault();
        
        const [updatedHero, error] = await updateHeroName(id, newHeroName);
        setHero (updatedHero);

        setNewHeroName('');
    }

    return (
        <>
        <Link to='/'>Go Home</Link>
        <h1>Hero Details</h1>
        <p>Name: {hero.name}</p>
        <p>Id: {hero.name}</p>
        <form onSubmit={handleUpdateHero}>
        <label htmlFor="name">Update Hero Name</label>
        <input type="text" name="name" id="name" value={newHeroName} onChange={(e) => setNewHeroName(e.target.value)} placeholder='New Hero' />
        <button type="submit">Submit</button>
        </form>
      <button onClick={handleDeleteHero} className='danger'>Delete Hero</button>
        </>
    )
};

export default HeroDetails;
