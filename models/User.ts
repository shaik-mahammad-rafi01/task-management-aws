import { DataTypes, Model } from "sequelize";
import sequelize from "../src/sequelize";
export class User extends Model {
    id!: number;
    name!: string;
    email!: string;

}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }

    }
}, {
    sequelize,
    modelName: 'User',
    timestamps: true
});

