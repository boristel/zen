module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '56384c8296b0e6aef912a92dfa79c7cc'),
  },
});
