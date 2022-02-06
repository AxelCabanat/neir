const dotenv = require('dotenv');

const { clearSchema } = require('./user.schema');

const port = 3001;
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const Prisma = require('@prisma/client');
const db = new Prisma.PrismaClient();

app.use(
	cors({
		origin: 'http://localhost:3000'
	})
);

app.use(express.json());

app.use('/static', express.static(path.join(__dirname, '..', 'uploads')));

// ---------------------------- CLOTHES ROUTES -----------------------------

app.get('/api/clothes', async (req, res) => {
	res.send(await db.$queryRaw`SELECT * FROM articles WHERE category_id = 1`);
});

app.get('/api/clothes/:id', async (req, res) => {
	const id = req.params.id;
	const clothe = await db.$queryRaw`SELECT * FROM articles WHERE id = ${id}`;

	if (clothe.length === 0) {
		return res.status(404).send('not found');
	}

	res.send(clothe[0]);
});

// ---------------------------- PROPS ROUTES -----------------------------

app.get('/api/props', async (req, res) => {
	res.send(await db.$queryRaw`SELECT * FROM articles WHERE category_id = 2`);
});

app.get('/api/props/:id', async (req, res) => {
	const id = req.params.id;
	const prop = await db.$queryRaw`SELECT * FROM articles WHERE id = ${id}`;

	if (prop.length === 0) {
		return res.status(404).send('not found');
	}

	res.send(prop[0]);
});

// ---------------------------- SERIGRAPHIES ROUTES -----------------------------

app.get('/api/serigraphies', async (req, res) => {
	res.send(await db.$queryRaw`SELECT * FROM articles WHERE category_id = 3`);
});

app.get('/api/serigraphies/:id', async (req, res) => {
	const id = req.params.id;
	const serigraphy = await db.$queryRaw`SELECT * FROM articles WHERE id = ${id}`;

	if (serigraphy.length === 0) {
		return res.status(404).send('not found');
	}

	res.send(serigraphy[0]);
});

// ---------------------------- CUSTOMDESIGN ROUTES -----------------------------

app.get('/api/customdesign', async (req, res) => {
	res.send(await db.$queryRaw`SELECT * FROM articles WHERE category_id = 4`);
});

app.get('/api/customdesign/:id', async (req, res) => {
	const id = req.params.id;
	const design = await db.$queryRaw`SELECT * FROM articles WHERE id = ${id}`;

	if (design.length === 0) {
		return res.status(404).send('not found');
	}

	res.send(design[0]);
});

// ---------------------------- ARTICLES ROUTES -----------------------------

app.get('/api/articles/:id', async (req, res) => {
	const id = req.params.id;
	const article = await db.$queryRaw`SELECT * FROM articles WHERE id = ${id}`;

	if (article.length === 0) {
		return res.status(404).send('not found');
	}

	res.send(article[0]);
});

app.post('/api/articles/:category_id', async (req, res) => {
	const category_id = req.params.category_id;
	const { name, support, order, description, picture, miniature } = req.body;
	res.send(
		await db.$queryRaw`INSERT INTO articles (name, category_id, support, order, descrition, picture, miniature) VALUES ${name}, ${category_id}, ${support}, ${order}, ${description}, ${picture}, ${miniature}`
	);
});

app.put('/api/articles/:id', async (req, res) => {
	const id = req.params.id;
	const result = await db.$queryRaw`SELECT * FROM articles WHERE id = ${id}`;

	if (result.length === 0) {
		return res.status(404).send('Article not found');
	}

	const query = [];

	Object.keys(req.body).map((field) => {
		query.push(`${field} = "${req.body[field]}"`);
	});

	res.send(
		await db.$queryRawUnsafe(
			`UPDATE articles SET ${query.join(',')} WHERE id = ${id}`
		)
	);
});

app.delete('/api/articles/:id', async (req, res) => {
	const id = req.params.id;
	await db.$queryRaw`DELETE FROM articles WHERE id = ${id}`;
	res.send('deleted');
});

// ---------------------------- GALERIES ROUTES -----------------------------

app.get('/api/galeries', async (req, res) => {
	res.send(await db.$queryRaw`SELECT * FROM galeries`);
});

app.get('/api/galeries/:id', async (req, res) => {
	const id = req.params.id;
	const galery = await db.$queryRaw`SELECT * FROM galeries WHERE id = ${id}`;

	if (galery.length === 0) {
		return res.status(404).send('not found');
	}

	res.send(galery[0]);
});

app.post('/api/galery/', async (req, res) => {
	const { name, cover, description, picture, miniature } = req.body;
	res.send(
		await db.$queryRaw`INSERT INTO galery (name, cover, description, picture, miniature) VALUES ${name}, ${cover}, ${description}, ${picture}, ${miniature}`
	);
});

app.put('/api/galery/:id', async (req, res) => {
	const id = req.params.id;
	const result = await db.$queryRaw`SELECT * FROM galery WHERE id = ${id}`;

	if (result.length === 0) {
		return res.status(404).send('Galery not found');
	}

	const query = [];

	Object.keys(req.body).map((field) => {
		query.push(`${field} = "${req.body[field]}"`);
	});

	res.send(
		await db.$queryRawUnsafe(
			`UPDATE galery SET ${query.join(',')} WHERE id =${id}`
		)
	);
});

app.delete('/api/galery/:id', async (req, res) => {
	const id = req.params.id;
	await db.$queryRaw`DELETE FROM galery WHERE id = ${id}`;
	res.send('deleted');
});

//----------------------------- LOGIN -------------------------

const checkLogin = async (name, password) => {
	const { error } = clearSchema.validate(
		{ name, password },
		{ abortEarly: false }
	);

	if (error) {
		throw error.details;
	}

	const user = await db.users.findUnique({
		where: { name: name },
		include: { admin: true }
	});
	if (user === null || password !== user.password) {
		return (user = 'error 400');
	}
	return user;
};

app.post('/api/users/login', async (req, res) => {
	const { name, password } = req.body;

	try {
		const user = await checkLogin(name, password);

		if (user === 'error 400') {
			return res.status(401).send('unauthorized');
		}
		const { mypassword, ...userObject } = user;
		if (user) {
			req.session.user = userObject;
			return res.send(userObject);
		}
		res.status(403).send('Forbidden');
	} catch (e) {
		console.log(e);
		res.status(500).send('unexpected error');
	}
});

//----------------------------- UPLOAD -------------------------

app.post('/upload');

//----------------------------- LISTENER -------------------------

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
