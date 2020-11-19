import * as functions from 'firebase-functions';
import fetch from 'node-fetch';

import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

app.get('/:name', (request, response) => {
  fetch(
    'https://torre.bio/api/bios/' + request.params.name
  ).then(res => res.json())
  .then(res => {
    response.json(res)
  }).catch(err=>{
    response.json({err})
  })
})

app.get('/:name/stats', (request, response) => {
  fetch(
    'https://torre.bio/api/bios/' + request.params.name + '/stats'
  ).then(res => res.json())
  .then(res => {
    response.json(res)
  }).catch(err=>{
    response.json({err})
  })
})

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const bios = functions.https.onRequest(app);
