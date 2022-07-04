class MarvelService {
    constructor() {
        this._API_KEY = '2c8a14a356572e1c302e1a3d414636c4';
    }

    async getCharacter(id) {
        
        try {
            const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${this._API_KEY}`);
            const data = await res.json();

            return this._transformCharacter(data.data.results[0]);
        } catch (error) {
            throw new Error(`Could not fetch: ${error.message}`);
        }
    }

    _transformCharacter(data) {
        return {
            description: data.description === '' ? 'There is no any description for this character' : data.description.length > 100 ? `${data.description.slice(0, 150)}...` : data.description,
            name: data.name,
            homepage: data.urls[0].url,
            wiki: data.urls[1].url,
            thumbnail: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        };
    }
}

export default MarvelService;