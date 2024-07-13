const { request, response } = require('express');
const { Profile, User } = require('../db');

module.exports = {
  // GET /api/profile
  getProfile: (request, response) => {
    const { id } = request.params;
    const profileId = id;
    console.log('GET Body Check: ', request.body);
    console.log('ProfileId: ', profileId);
    // find user 
    Profile.findByPk(profileId)
      .then((profile) => {
        response.status(200).send(profile);
      })
      .catch((err) => {// if no user
        response.sendStatus(500);
        console.error('Error: Can not GET /api/:profileId : ', err);
      });
  },

  // POST /api/profile
  addProfile: (request, response) => {
    const newProfile = request.body;
    console.log('POST Body Check: ', request.body)
    //find user
    Profile.create({
      firstName: newProfile.firstName,
      lastName: newProfile.lastName,
      bio: newProfile.bio,
      user_id: newProfile.user_id
    })
    .then((data) => {
      response.status(201).send(data);
    })
    .catch((err) => {
        response.sendStatus(500);
        console.error(err);
    })
  },
  // PUT /api/profile
  updateProfile: (request, response) => {
    Profile.findByPk()
    .then(() => {})
    .catch(err => {
      response.sendStatus(500);
      console.error(err);
    })
  },
  // DELETE /api/profile:profileId
  deleteProfile: (request, response) => {
    Profile.findByPk()
    .then(() => {})
    .catch(err => {
      response.sendStatus(500);
      console.error(err);
    })
  }
};
