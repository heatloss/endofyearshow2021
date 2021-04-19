const express = require("express");
const app = express();
const msal = require('@azure/msal-node');
const cookieSession = require("cookie-session");
const msalAuth = require('./routes/msal-auth');
const msalRouter = require('./routes/msal-router');
const fetch = require('node-fetch');
const exphbs  = require('express-handlebars');
const Vimeo = require("vimeo").Vimeo;
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const router = express.Router()

router.use('/auth', msalRouter)
 
var upload = multer({ storage: storage })


const data = require('./routes/data');


app.engine('html', exphbs({extname: '.html'}));
app.set('view engine', 'html');


app.use(cookieSession({
  name: 'auth',
  keys: [process.env.COOKIE_KEY],
  maxAge: 168 * 60 * 60 * 1000, // 24*7 hours
}))

app.use(express.static("public"));

app.get('/', msalAuth.validate, (req, res) => {
  
  res.redirect('/form')
});

app.get('/redirect', msalAuth.redirect)

app.get('/logout', (req, res)=>{
  req.session = null

  res.redirect('https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=https://eoys-uploader-2021.glitch.me/')
})


//form endpoints
app.get('/form', async (req, res)=>{
  
  let students = await data.students()
  let teachers = await data.faculty()
  let courses = await data.courses()

  const csvData = {
    students,
    teachers,
    courses,
    user:req.session.user || {name:"mike", email:"mike@test.com"}
  }
  
  const renderOptions = {
    data: csvData,
    layout: false
  } 
  
  return res.render('form', renderOptions)
})


app.get('/dataTest', async (req, res)=>{
  
  let csvData = await data.courses()
  
  res.json(csvData)
})

app.get('/test', async (req, res)=>{
  
  const data = {}
  const renderOptions = {
    data,
    layout: false
  } 
  return res.render('smallform', renderOptions)
})

app.post('/form', upload.any(), async(req, res)=>{

  console.log({body:req.body, files: req.files})

  req.files = req.files.map((file)=>{
    
    file.fullpath = 'https://eoys-uploader-2021.glitch.me/file/' + file.filename
    return file
    
  })
  res.json(req.files)

})

app.get('/file/:filename', (req, res)=>{
  
  res.sendFile(`${__dirname}/uploads/${req.params.filename}`)
})


app.get('/students', async (req, res)=>{
  let csvData = await data.students()
  
  res.json(csvData)
})

app.get('/teachers', async (req, res)=>{
  let csvData = await data.faculty()
  
  res.json(csvData)
})

app.get('/courses', async (req, res)=>{
  let csvData = await data.courses()
  
  res.json(csvData)
})


app.get("/token", async (req, res) => {
  const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;
  res.json({ token: ACCESS_TOKEN });
});

app.get("/tokenTest", async (req, res) => {
  // const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;
  
  const CLIENT_ID = process.env.VIMEO_CLIENT_ID;
  const CLIENT_SECRET = process.env.VIMEO_CLIENT_SECRET;
  const ACCESS_TOKEN = process.env.VIMEO_ACCESS_TOKEN;

  let client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
  console.log(client)
  res.json({ token: ACCESS_TOKEN });
});

app.get('/original', async (req, res)=>{
  
  const data = {}
  const renderOptions = {
    data,
    layout: false
  } 
  return res.render('original', renderOptions)
})


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
