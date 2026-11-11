const { DataTypes } = require('sequelize');
const { db } = require('../config/db');
const moment = require("moment-timezone");

const Instansi = db.define('Instansi', {
    unit_kerja_code: {
        type: DataTypes.STRING,
        unique: true,
        trim: true,
    },
    unit_kerja: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telepon: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fax: {
        type: DataTypes.STRING,
        allowNull: true
    },
    alamat: {
        type: DataTypes.TEXT,
        allowNull: false
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
    tableName: 'instansi',
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

module.exports = Instansi;
