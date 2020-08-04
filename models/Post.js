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
        validate: {
            notEmpty: {
                msg: "Title field can not be empty."
            }
        }
    },
    lead: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Lead field can not be empty."
            }
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Content field can not be empty."
            }
        }
    }
}, {
    timestamps: true
});


module.exports = Post;