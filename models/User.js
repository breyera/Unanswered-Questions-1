const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_name: {
            type: DataTypes.STRING,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            allowNull: false,
=======
            allowNull: false
>>>>>>> 2c4cd936bac42e6e3a1a4e276b74dfc817cb8d1f
=======
            allowNull: false
=======
            allowNull: false,
>>>>>>> ef0f495402fb81c2245a80a3a4bd4bfb7a421963
>>>>>>> 1040682629195c59fe88f155bd3255d570152eca
=======
            allowNull: false,
>>>>>>> d0defb5c2b7042f2c1845cde45648e2b1e4e1557
=======
            allowNull: false,
>>>>>>> 60c7412d123fb7fd2c5955adc63f304888cd87d1
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },

    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(
                    newUserData.password,
                    10
                );
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(
                    updatedUserData.password,
                    10
                );
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
        defaultScope: {
            attributes: {
                exclude: ['password']
            }
        }
    }
);

module.exports = User;
