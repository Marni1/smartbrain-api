const Clarifai = require('clarifai');

const app = new Clarifai.App({
<<<<<<< HEAD
	apiKey: process.env.API_CLARIFAI 
   });
   
   const handleApiCall = (req, res) => {
	 app.models
	   .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
	   .then(data => {
		 res.json(data);
	   })
	   .catch(err => res.status(400).json('unable to work with API'))
   }
   
    

const handleImage = (req, res, db) => {
	const { id } = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0].entries);
			
	})
	.catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
	handleImage,
	handleApiCall
}
=======
    apiKey: '0fd567c860fb42aea1cca605a353769a'
  });
const handleApiCall = (req, res) =>{
  app.models
  .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
  .then(data => {
    res.json(data);
  })
  .catch(err => res.status(400).json('unable to work with API'))
}


const handleImage = (req,res, db) =>{ 
    const {id} = req.body;
    db('users').where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0].entries);})
    .catch(err => res.status(400).json('unable to get entries'))
    }

    module.exports = {
        handleImage: handleImage,
        handleApiCall: handleApiCall
    }
>>>>>>> ab1774548823897a84a3b4a6b74b5cf5cd100808
