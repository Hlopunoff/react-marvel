class MarvelService {
    constructor() {
        this._API_KEY = '2c8a14a356572e1c302e1a3d414636c4';
        this._BASE_OFFSET = 210;
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

    async getCharacters(offset = this._BASE_OFFSET) {
        try {
            const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?&limit=9offset=${offset}&apikey=${this._API_KEY}`);
            const data = await res.json();

            return this._transformCharacters(data.data.results);
        } catch (error) {
            throw new Error(`Could not fetch: ${error.message}`);
        }
    }

    async getComics(offset = this._BASE_OFFSET) {
        try {
            const res = await fetch(`https://gateway.marvel.com:443/v1/public/comics?offset=${offset}&limit=8&apikey=${this._API_KEY}`);
            const data = await res.json();

            return this._transformComics(data.data.results)
        } catch (error) {
            throw new Error(`Could not fetch comics: ${error.message}`);
        }
    }

    async getComicById(id) {
        try {
            const res = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=${this._API_KEY}`);
            const data = await res.json();

            return this._transformComic(data.data.results[0]);
        } catch (error) {
            throw new Error(`Could not fetch single comic: ${error.message}`);
        }
    }

    async getCharByName(name) {
        try {
            const res = await fetch(`http://gateway.marvel.com/v1/public/characters?name=${name}&apikey=${this._API_KEY}`);
            const data = await res.json();
            
            return this._transformCharacter(data.data.results[0]);
        } catch (error) {
            throw new Error(`Could not fetch by name: ${error.message}`);
        }
    }

    _transformCharacter(data) {
        return {
            description: data.description === '' ? 'There is no any description for this character' : data.description.length > 100 ? `${data.description.slice(0, 150)}...` : data.description,
            name: data.name,
            homepage: data.urls[0].url,
            wiki: data.urls[1].url,
            thumbnail: `${data.thumbnail.path}.${data.thumbnail.extension}`,
            comics: data.comics.items,
        };
    }

    _transformCharacters(data) {
        return data.map(char => {
            return {
                id: char.id,
                name: char.name,
                thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            };
        });
    }

    _transformComics(data) {
        return data.map(comic => {
            return {
                id: comic.id,
                title: comic.title,
                price: comic.prices[0].price > 0 ? `${comic.prices[0].price}$` : 'not available',
                thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
            };
        });
    }

    _transformComic(data) {
        return {
            id: data.id,
            title: data.title,
            description: data.description ? data.description : 'There is no any description for this specific comic',
            pages: data.pageCount,
            price: data.prices[0].price > 0 ? `${data.prices[0].price}$` : 'not available',
            thumbnail: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        };
    }
}

export default MarvelService;