const { nanoid } = require('nanoid');

class SongsService {
    constructor() {
        this._songs = [];
    }

    addSong({ title, year, genre, performer, duration }) {
        const id = nanoid(16);
    
        const newSong = {
            id, title, year, genre, performer, duration,
        };
    
        this._songs.push(newSong);

        const isSuccess = this._songs.filter((song) => song.id === id).length > 0;

        if (!isSuccess) {
            throw new Error('Song gagal ditambahkan')
        }

        return id;
    }

    getSongs() {
        return this._songs;
    }

    getSongById(id) {
        const song = this._songs.filter((a) => a.id === id)[0];
        if (!song) {
            throw new Error('Song tidak ditemukan');
        }
        return song;
    }

    editSongById(id, { title, year, genre, performer, duration }) {
        const index = this._songs.findIndex((song) => song.id === id);
 
        if (index === -1) {
            throw new Error('Gagal memperbarui song. Id tidak ditemukan');
        }
    
        this._songs[index] = {
            ...this._songs[index],
            title, 
            year, 
            genre, 
            performer, 
            duration
        };
    }

    deleteSongById(id) {
        const index = this._songs.findIndex((song) => song.id === id);

        if (index === -1) {
            throw new Error('Song gagal dihapus. Id tidak ditemukan');
        }

        this._songs.splice(index, 1);
    }
}

module.exports = SongsService