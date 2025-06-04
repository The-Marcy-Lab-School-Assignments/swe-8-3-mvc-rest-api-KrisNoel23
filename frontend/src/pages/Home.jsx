import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllHeroes, createHero } from '../adapters/heroAdapters';

const Home  = () => {
    const [heroes, setHeroes] = useState([]);

    const [newHeroName, setNewHeroName] = useState('');

    const [newlyAddedHero, setNewlyAddedHero] = useState({});

    useEffect(() => {
        const fetchHeroes = async () => {
            const [allHeroes, error] = await getAllHeroes()
            console.log(allHeroes)
            setHeroes(allHeroes);
        }
        fetchHeroes();
    }, [newlyAddedHero])

    const handleCreateHero = async (e) => {
        e.preventDefault();
        const [newHero, error] = await createHero(newHeroName);
        setNewlyAddedHero(newHero);
        setNewHeroName('');
    }
    return (
        <>
            <h1>Heroes</h1>
            <form onSubmit={handleCreateHero}>
                <label htmlFor="name">Add A New Hero</label>
                <input type="text" name="name" id="name" value={newHeroName} onChange={(e) => setNewHeroName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {
                    heroes?.map((hero) => {
                        return <li key={hero.id}>
                            <Link to={`/heroes/${hero.id}`}>
                            {hero.name} (User {hero.id})
                            </Link>
                        </li>
                    })
                }
            </ul>
            </>
    )
}
export default Home;