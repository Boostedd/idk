const express = require('express');
const app = express();
const multer = require('multer')

// get port from dotenv

const PORT = process.env.PORT || 3001;
const DOMAIN = 'https://a4z.herokuapp.com';

app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './cdn/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.get('/', async (req, res) => {
    res.send("yuh");
});

app.get('/:id', async (req, res) => {
    const title = "Ello'", description ="Wassup", url = "https://ternary.store", imageUrl = DOMAIN + "/file/" + req.params.id;
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <meta name="title" content="${title}">
        <meta name="description" content="${description}">

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="${url}">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${description}">
        <meta property="og:image" content="${imageUrl}">

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="${url}">
        <meta property="twitter:title" content="${title}">
        <meta property="twitter:description" content="${description}">
        <meta property="twitter:image" content="${imageUrl}">
    </head>
    <body>
        <image src="${imageUrl}" alt="${title}">
    </body>
    </html>
    `)
});

app.get('/file/:id', async (req, res) => {
    res.sendFile(__dirname + '/cdn/images/' + req.params.id);
});

app.post('/upload', upload.single('uploaded_file'), function (req, res) {
    console.log(req.file, req.body)
    res.send(DOMAIN + "/" + req.file.originalname);
});



app.listen(PORT, () => console.log(`Running on ${DOMAIN}`));