const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Todo
      .findAll({
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return  Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if(!todo) {
          return res.status(404).send({
            message: "Todo Not FOund",
          });
        }
        return res.status(200).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Todo
      .findById(req.params.todoId, {
        include: [{
          model: TodoItem,
          as: 'todoItems',
        }],
      })
      .then(todo => {
        if(!todo) {
          return res.status(404).send({
            message: "Todo to be Updated Not FOund",
          });
        }
        return todo
          .update({
            title: req.body.title || todo.title,
          })
          .then(() => res.status(200).send(todo))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  delete(req, res) {
    return Todo
      .findById(req.params.todoId)
      .then(todo => {
        if(!todo) {
          return res.status(404).send({
            message: "Todo to be Deleted Not found",
          });
        }
        return todo
          .destroy()
          .then(() => res.status(204).send(todo))
          .catch(error =>res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
