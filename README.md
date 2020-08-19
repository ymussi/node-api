## A simple Node-Api with MongoDB

## Projects Resources

- Languege: [_NodeJS 14_](https://nodejs.org/en/docs/)
- Package manager: [_Npm_](https://docs.npmjs.com/)
- Main dependencies: [_Cors ^2.8.5_](https://www.npmjs.com/package/cors), [_Express ^4.17.1_](https://www.npmjs.com/package/express), [_Mongoose ^5.10.0_](https://www.npmjs.com/package/mongoose), [_Mongoose-Paginate ^5.0.3_](https://www.npmjs.com/package/mongoose-paginate), [_Require-Dir ^1.2.0_](https://www.npmjs.com/package/require-dir)
- DB: [_MongoDB_](https://docs.mongodb.com/manual/)

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

