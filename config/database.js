module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '165.22.248.103'),
      port: env.int('DATABASE_PORT', 2707),
      database: env('DATABASE_NAME', 'zenstrapi'),
      user: env('DATABASE_USERNAME', 'bensuperuser'),
      password: env('DATABASE_PASSWORD', 'ioS9WacXfgfwhAw4'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
