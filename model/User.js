const { DataTypes } = require('sequelize');
const { db } = require('../config/db');
const moment = require("moment-timezone");

const User = db.define('User', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        trim: true,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
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
    tableName: 'user',
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

module.exports = User;
