const maison = require('../models/maisonDhote');

exports.maisonsController = (req,res)=>{
    maison.find(function(err,data){
        res.status(200).json({
          message: 'contact get methode work',
          data
      }); 
    })
};

exports.maisonController = (req, res) => {
    const maisonId = req.params.id;
    maison.findById(maisonId).exec((err, maison) => {
        if (err || !maison) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
      
        res.json(maison);
    });
};
exports.addmaisonController = (req, res) => {
    const { name, description, lat,long } = req.body;
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      const firstError = errors.array().map(error => error.msg)[0];
      return res.status(422).json({
        errors: firstError
      });
    } else {
      maison.findOne({
        name
      }).exec((err, maison) => {
        if (maison) {
          return res.status(400).json({
            errors: 'Name is taken'
          });
        }
      });
      const maison = new maison({
        name,
        description,
        prices
      });
      maison.save((err, maison) => {
        if (err) {
          console.log('Save error', errorHandler(err));
          return res.status(401).json({
            errors: errorHandler(err)
          });
        } else {
          return res.json({
            success: true,
            message: maison,
            message: 'Signup success'
          });
        }
      });
  
      

    }
  };
exports.updatemaisonController = (req, res) => {
    
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { name, description } = req.body;

    maison.findOne({ _id: req.user._id }, (err, maison) => {
        if (err || !maison) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
       

     
        maison.name=name;
        maison.description=description;
      
        maison.save((err, updatedmaison) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'maison update failed'
                });
            }
            res.json(updatedmaison);
        });
    });
};


exports.maisonDeleteController=(req,res)=>{
  
      
        Contact.remove({_id : req.maison._id}).then(result =>{
          console.log("delete ok ...");
        }).catch(err => console.log(err));
      
        res.status(200).json({
          message : "maison delete image work"
        });

}