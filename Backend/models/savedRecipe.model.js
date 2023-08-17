module.exports = (sequelize, DataTypes) => {
  const SavedRecipe = sequelize.define("savedrecipes", {
    recipeid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  SavedRecipe.associate = (models) => {
    SavedRecipe.belongsTo(models.users, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return SavedRecipe;
};
