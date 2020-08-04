const {
    Sequelize,
    DataTypes
} = require('sequelize');
const db = require('../config/db');


// define Post model
const Post = db.define('Post', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lead: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    timestamps: true
});


module.exports = Post;