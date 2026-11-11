const { DataTypes } = require('sequelize');
const { db } = require('../config/db');
const moment = require("moment-timezone");

const Pegawai = db.define('Pegawai', {
    nip: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        trim: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jabatan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    golongan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instansi: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'instansi',
            key: 'id'
        },
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
    tableName: 'pegawai',
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

module.exports = Pegawai;
