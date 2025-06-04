import handleFetch from './handleFetch';

export const getAllHeroes = async () => {
    const [allHeroes, error] = await handleFetch('/api/heroes');
    return [allHeroes, error];
}

export const getHeroById = async (id) => {
    const [fellow, error] = await handleFetch(`/api/heroes/${id}`);
    return [fellow, error];
}

export const createHero = async (heroName) => {
    const options = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ heroName })
    }

    const [newHero, error] = await handleFetch(`/api/heroes/`, options);
    return [newHero, error];
}

export const deleteHero = async (id) => {
    const options = {
        method: "DELETE",
    };

    const [success, error] = await handleFetch(`/api/heroes/${id}`, options);
    return [success, error];
}

export const updateHeroName = async (id, heroName) => {
    const options = {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ heroName })
    };
    const [updatedHero, error] = await handleFetch(`/api/heroes/${id}`, options);
    return [updatedHero, error];

}
