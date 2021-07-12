
export const getResidentsLocation = async (locationTerm) => {
    const url = `https://rickandmortyapi.com/api/location/?name=${locationTerm}`;
    return await fetch(url).then((resp) => resp.json())
}

    

