module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define("profile", {
    userBio: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favArtistOne: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favArtistTwo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favArtistThree: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favGenreOne: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favGenreTwo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favGenreThree: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Profile;
};
