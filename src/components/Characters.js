export default function Characters(props) {
    const { characters } = props;

    return (
        <div className="characters">
            <h2>Personajes</h2>
            <span className="back-home">Volver</span>
            <div className="container-characters">
                {characters.map((character, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={character.image} alt={character.name} />
                        </div>
                        <div>
                            <h3>{character.name}</h3>
                            <h6>
                                {character.status === "Alive" ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios:</span>
                                <span>{character.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie:</span>
                                <span>{character.episodhhh}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home">Volver</span>
        </div>
    )
}