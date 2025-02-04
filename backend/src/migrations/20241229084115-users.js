'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users', {
      id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
      name:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      password:{
        type:Sequelize.STRING,
        allowNull:false,
      },
      role:{
        type:Sequelize.TEXT,
        allowNull:false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

