"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Movies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imdbScore: {
        type: Sequelize.DECIMAL(11, 10),
        defaultValue: 0.0,
        allowNull: false,
      },
      directorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'directors',
          key: 'id',
        }
      },
      actors: {
        type: Sequelize.JSON,
      },
      genreId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'genres',
          key: 'id',
        }
      },
      description: {
        type: Sequelize.TEXT,
      },
      thumbnailUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      embedVideoUrl: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avgRatings: {
        type: Sequelize.DECIMAL(11, 10),
        defaultValue: 0.0,
        allowNull: false,
      },
      totalRatings: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      duration: {
        type: Sequelize.STRING,
      },
      releasedAt: {
        type: Sequelize.DATE,
      },
    });
    // Add foreign key for directorId
  //   await queryInterface.addConstraint("Movies", {
  //     fields: ["directorId"], // Column name in Movies table
  //     type: "foreign key",
  //     name: "fk_movies_directorId", // Custom name for the constraint
  //     references: {
  //       table: "directors", // Target table
  //       field: "id", // Target column
  //     },
  //     onDelete: "CASCADE", // Action when the referenced row is deleted
  //     onUpdate: "CASCADE", // Action when the referenced row is updated
  //   });

  //   // Add foreign key for genreId
  //   await queryInterface.addConstraint("Movies", {
  //     fields: ["genreId"], // Column name in Movies table
  //     type: "foreign key",
  //     name: "fk_movies_genreId", // Custom name for the constraint
  //     references: {
  //       table: "genres", // Target table
  //       field: "id", // Target column
  //     },
  //     onDelete: "CASCADE", // Action when the referenced row is deleted
  //     onUpdate: "CASCADE", // Action when the referenced row is updated
    // });
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.removeConstraint("Movies", "fk_movies_directorId");
    // await queryInterface.removeConstraint("Movies", "fk_movies_genreId");
    await queryInterface.dropTable("Movies");
  },
};
