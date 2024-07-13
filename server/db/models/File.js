import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";




const File = sequelize.define('File', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    name: {type: DataTypes.STRING},
    type: {type: DataTypes.STRING},
    access_link: {type: DataTypes.STRING},
    size: {type: DataTypes.NUMBER},
})

export {File}