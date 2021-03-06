'use strict';
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING
  }, {});
  Todo.associate = function(models) {
    Todo.hasMany(models.TodoItem, {
      foreignKey: "todoId",
      as: "todoItems",
    });
  };
  return Todo;
};
