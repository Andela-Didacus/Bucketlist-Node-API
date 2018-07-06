# Bucketlist-Node-API

This is a Bucketlist Node API that can
- create a bucketlist
- update a bucketlist
- list a single bucketlist
- list all bucketlists
- delete a bucketlist
- create a bucketlist Item
- Update a bucketlist Item
- delete a bucketlist Item
- list a bucketlist Item

# **Getting Started**
The program has been fully developed using **Nodejs, Expressjs** while the database implementation uses **Sequelize** and **Postgres**

# **Prerequisites**
Below are some of the basic requirements to run the program:
* Nodejs should be installed in your computer, if not do so here _[Node download](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjdk56dm4rcAhUOyKQKHWMHC6AQFgglMAA&url=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2F&usg=AOvVaw3mpn_kqKBfLUVM2X6RrMKX)_
* Postgres database should also be installed in your computer, if not do so here _[Postgres Download](https://postgresapp.com/)_
* Git should be installed in your computer, if not do so here, _[Git Download](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwjxsYyak8zRAhWsI8AKHR9YDL4QFggfMAA&url=https%3A%2F%2Fgit-scm.com%2Fdownloads&usg=AFQjCNHZLDrEFiZHXrz1JGq57NFHFrcfkA&sig2=4ht1GzU2s-G7fLM3fuDxYA)_
* A stable internet connection is recommended

# **Bucketlist Node API Features**
* `POST api/todos`            -------              Create a new bucket list
* `GET /api/todos`            -------              List all the created bucket lists
* `GET /api/todos/<todoId`    -------              Get single bucket list
* `PUT /api/todos<todoId>`    -------              Update this bucket list
* `DELETE /api/todos/<id>`    ------             Delete this single bucket list
* `POST /api/todos/<todoId>/items`  --         Create a new item in bucket list
* `PUT /api/todos/<todoId>/items/<todoItemId>`  Update a bucket list item
* `DELETE /api/todos/<todoId>/items/<todoItemId>`  delete a bucket list item
* `GET /api/todos/<todoId>/items/<todoItemId>` list an item in a bucket list


## Authors

* **Didacus Odhiambo** -- [Didacus Odhiambo](https://github.com/Andela-Didacus)
