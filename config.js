const JWT_SECRET_USER = process.env.JWT_SECRET_USER
const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET


module.exports = {
    JWT_ADMIN_SECRET,
    JWT_SECRET_USER
}



// Toavoid circulr dependencies we avoid importing and exporting from same name files wheather it is in different files
