const { response } = require('express');

const getInvitacions = (req, res) => {
    
    const group = req.params.group;

    console.log(group)

    const { invitaciones } = require('../database/grupo_invitacion.json');

    arrGroup = invitaciones.filter( (row) => { return row.id == group } );

    res.status(200).json(arrGroup);

};

module.exports = {
    getInvitacions
}