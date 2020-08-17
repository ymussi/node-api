## A simple Node-Api with MongoDB

# Working

run:

```bash
$ docker-compose up
```

- This api runing on [_http://localhost:9000/api_](http://localhost:9000/api)

# Methods

- GET all products

[_http://localhost:9000/api/products?page=1_](http://localhost:9000/api/products?page=1)

- GET by id

[_http://localhost:9000/api/products/<:id>_](http://localhost:9000/api/products/<:id>)

- POST to create product

[_http://localhost:9000/api/products_](http://localhost:9000/api/products)

```javascript
// Body
{
	"title": "ReactJS",
	"description": "um bagui aê",
	"url": "http://localhost/test"
}
```

- PUT to update product by id

[_http://localhost:9000/api/products/<:id>_](http://localhost:9000/api/products/<:id>)

```javascript
// Body
{
	"title": "ReactJS",
	"description": "um bagui aê",
	"url": "http://localhost/test"
}
```

- DELETE to remove product by id

[_http://localhost:9000/api/products/<:id>_](http://localhost:9000/api/products/<:id>)

