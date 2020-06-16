module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define("rating", {
    showName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    showType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    showRating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    myRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    owner_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Rating;
};
