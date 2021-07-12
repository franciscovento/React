export const getResidentsInfo = async (idTerm) => {
    const url = `https://rickandmortyapi.com/api/character/${idTerm}`;
    return await fetch(url).then((resp) => resp.json())
}