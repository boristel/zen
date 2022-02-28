module.exports = ({ env }) => (
    { defaultConnection: 'default', connections: 
        { 
            default: { connector: 'bookshelf', 
            settings: { client: 'mysql', 
            host: env('DATABASE_HOST', 'localhost'), 
            port: env.int('DATABASE_PORT', 2707), 
            database: env('DATABASE_NAME', 'zenstrapi'), 
            username: env('DATABASE_USERNAME', 'root'), 
            password: env('DATABASE_PASSWORD', 'Borist002935'), }, 
            options: {}, }, 
        }, 
    });