const { Pool } = require("pg");

class NotesSevice{
    constructor() {
        this._pool = new Pool();
    }
}