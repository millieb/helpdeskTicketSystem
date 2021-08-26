module.exports = (sequelize, DataTypes) => {
    const Tickets = sequelize.define("Tickets", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    /* Users.associate = (models) => {
        Users.hasMany(models.Tickets, {
            onDelete: "cascade",
        });
    }; */

    return Tickets;
}