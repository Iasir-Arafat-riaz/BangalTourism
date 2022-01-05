const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const { MongoClient } = require('mongodb');
require('dotenv').config();
const fileUpload = require('express-fileupload');
const ObjectId = require('mongodb').ObjectId;

// middleare
app.use(fileUpload());
app.use(cors());
app.use(express.json());


async function run() {

    // mongo db uri

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.39aol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


    try {
        await client.connect();
        const database = client.db("Tourism");
        const ourDivions = database.collection('divisions');
        const ourPlaces = database.collection('places');
        const usersCollection = database.collection('users');
        const reviewCollection = database.collection('reviewCollection');
        const singlePlace = database.collection('singlePlace');
        const orderCollection = database.collection('orders');


        // get all divisions 
        app.get('/divisions', async (req, res) => {
            res.send(await ourDivions.find({}).toArray());
        })

        // get all places 
        app.get('/places', async (req, res) => {
            res.send(await ourPlaces.find({}).toArray());
        });
        // get all places 
        app.get('/singlePlace', async (req, res) => {
            res.send(await singlePlace.find({}).toArray());
        });

        // get user review 
        app.get('/review', async (req, res) => {
            res.send(await reviewCollection.find({}).toArray());
        });
        // get user review 
        app.post('/review', async (req, res) => {
            const review = req.body;
            const result = await reviewCollection.insertOne(review);
            res.send(result)
        });

        // saver user
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.send(result);
        });
        // post order
        app.post('/order', async (req, res) => {
            const order = req.body;
            const result = await orderCollection.insertOne(order);
            res.send(result);
        });

        // get cart product with email
        app.get('/order/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email: email };
            const result = await orderCollection.find(query).toArray();
            res.send(result);
        });
        // get cart product with ui
        app.get('/order/:uid', async (req, res) => {
            const uid = req.params.email;
            const query = { uid: uid };
            const result = await orderCollection.find(query).toArray();
            res.send(result);
        });

        // delete cart api
        app.delete('/order/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const result = await orderCollection.deleteOne(query);
            res.json(result);
        });

        // save user google sign
        app.put('/users', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);
        });


        // single places with _id
        app.get('/places/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const singleProduct = await ourPlaces.findOne(query);
            res.send(singleProduct);
        });

        // parent id
        app.get('/place/:id', async (req, res) => {
            const id = req.params.id;
            const query = { parentID: id };
            const place = await ourPlaces.find(query).toArray();
            res.send(place);
        });

        // make admin
        app.put('/users/admin', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const updateDoc = { $set: { role: "admin" } };
            const result = await usersCollection.updateOne(filter, updateDoc);
            res.json(result);
        });

        // get admin status
        app.get('/users/:email', async (req, res) => {
            const user = await usersCollection.findOne({ email: req.params.email });
            let Admin = false;
            if (user?.role === 'admin') {
                Admin = true;
            };
            res.json({ Admin: Admin });
        });


        // stripe payment gatway
        app.post('/createPayment', async (req, res) => {
            const paymentInfo = req.body;
            const amount = paymentInfo.price * 100;
            const paymentIntent = await stripe.paymentIntents.create({
                currency: 'usd',
                amount: amount,
                payment_method_types: ['card']
            });
            res.json({ clientSecret: paymentIntent.client_secret })
        });

        // set payment status
        app.put('/cartProducts/:email', async (req, res) => {
            const email = req.params.email;
            const payment = req.body;
            const filter = { email: email };
            const updateDoc = {
                $set: {
                    payment: payment
                }
            };
            const result = await orderCollection.updateMany(filter, updateDoc);
            res.json(result);
        })


    }
    finally {
        // await client.close()
    }

}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('welcome to bangla tourism');
})

app.listen(port, () => {
    console.log(`My server is running`);
})