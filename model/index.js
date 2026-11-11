const User = require('./User');
const Pegawai = require('./Pegawai');
const Instansi = require('./Instansi');
const Kendaraan = require('./Kendaraan');

// Definisikan relasi antar model
Pegawai.belongsTo(Instansi, { foreignKey: 'instansi' });
Instansi.hasMany(Pegawai, { foreignKey: 'instansi' });

module.exports = {
    User, Pegawai, Instansi, Kendaraan
};

