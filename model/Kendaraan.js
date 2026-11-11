const { DataTypes } = require('sequelize');
const { db } = require('../config/db');
const moment = require("moment-timezone");

const Kendaraan = db.define('Kendaraan', {
    plat_nomor: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        trim: true,
        unique: true
    },
    merk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tahun: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    warna: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kondisi: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    userUpdate: {
        type: DataTypes.STRING,
        defaultValue: 'SYSTEM'
    }
}, {
    tableName: 'kendaraan',
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.createdAt = moment(ret.createdAt)
                .tz("Asia/Jakarta")
                .format("YYYY-MM-DD HH:mm:ss");
            ret.updatedAt = moment(ret.updatedAt)
                .tz("Asia/Jakarta")
                .format("YYYY-MM-DD HH:mm:ss");
            return ret;
        },
    },
});

module.exports = Kendaraan;
