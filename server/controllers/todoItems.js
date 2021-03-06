const TodoItem = require('../models').TodoItem;

module.exports = {
  create(req, res) {
    return TodoItem
      .create({
        content: req.body.content,
        todoId: req.params.todoId,
      })
      .then(todoItem => res.status(201).send(todoItem))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId
        },
      })
      .then(todoItem => {
        if(!todoItem) {
          return res.status(404).send({
            message: "Todo Item to be Updated Not Found"
          });
        }

        return todoItem
          .update({
            content: req.body.content || todoItem.content,
            complete: req.body.complete || todoItem.complete,
          })
          .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return TodoItem
      .find({
        where: {
          id: req.params.todoItemId,
          todoId: req.params.todoId
        },
      })
      .then(todoItem => {
        if(!todoItem) {
          return res.status(404).send({
            message: "Item not Found"
          })
        }
        return res.status(200).send(todoItem);
      })
      .catch(error => res.status(404).send(error))
  },
  delete(req, res) {
    return TodoItem
    .find({
      where: {
        id: req.params.todoItemId,
        todoId: req.params.todoId
      },
    })
    .then(todoItem => {
      if(!todoItem) {
        return res.status(404).send({
          message: "Item to be deleted not found"
        })
      }
      return todoItem
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.send(400).send(error));
  }
};
