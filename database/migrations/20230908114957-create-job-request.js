'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JobRequests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      storeId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Stores' },
          key: 'id',
        }
      },
      freelancerId: {
        type: Sequelize.INTEGER,
        references: {
          model: { tableName: 'Freelancers' },
          key: 'id',
        }
      },
      type: {
        type: Sequelize.SMALLINT
      },
      status: {
        type: Sequelize.SMALLINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JobRequests');
  }
};