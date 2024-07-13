import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { File } from "./File.js";




const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    diskSpace: {type: DataTypes.NUMBER, defaultValue: 1024**3*10},
    usedSpace: {type: DataTypes.NUMBER, defaultValue: 0},
    avatar: {type: DataTypes.STRING},
    files: {type: DataTypes.STRING}
})

User.hasMany(File, {foreignKey: 'fileId'});
File.belongsTo(User, {foreignKey: 'fileId'});

export {User}