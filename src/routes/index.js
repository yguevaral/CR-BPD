const express = require('express');
const router = express.Router();


router.get('/ping', (req, res) => {
    res.send('ok')
});

//FrontEnd

router.get('/', (req, res) => {
    
    res.render("index",  { title: 'First Website'});

});

router.get('/:group', (req, res) => {
    
    let group = req.params.group;
    const { invitaciones } = require('../database/grupo_invitacion.json');

    let arrGroup = [];

    invitaciones.map( (row) => { if( row.id == group ) { arrGroup = row; return false } } );

    if( arrGroup.id ){
        console.log("arrGroup-->", arrGroup)
        res.render("group",  { title: 'First Website', arrInvitations: arrGroup });
        return false;
    }
    else{
        res.render("index",  { title: 'First Website', arrGroup: arrGroup });
        return false;
    } 

});

module.exports = router;