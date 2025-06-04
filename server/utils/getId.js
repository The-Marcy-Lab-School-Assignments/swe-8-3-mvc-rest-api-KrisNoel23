const getHeroId = ((id = 0) => {
    return () => ++id;
})();

module.exports = getHeroId