import axios from 'axios'
import shotstack from 'shotstack-sdk'
// import json from './jsondata.js'
import fetch from 'node-fetch'
import aws from 'aws-sdk'
import template1 from './template1.js'
import fs from 'fs'
import path from 'path'
import https from 'https'
import env from 'dotenv'

env.config()

// console.log(new aws.S3())
// const images = fetch('https://frostcm-images-and-videos.s3.us-east-2.amazonaws.com/images/', {
//   method: 'GET',
// }).then((data) => {
//   console.log(data)
// }).catch(err => console.log(err))
const shotStackTest = async () => {
    fetch('https://api.shotstack.io/stage/render', {
        method: 'POST',
        body: JSON.stringify(template1),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': process.env.apiKey
        },
        
    }).then((res) => {
        // console.log(res.clone())
        return res.json()
    }).then((body) => {
        // shotStackGet(body.response.id)
        return body.response.id
    }).then( id => shotStackGet(id))
    .catch(err => console.log(err))


}


const shotStackGet = (id) => {
    fetch('https://api.shotstack.io/stage/render/'+id, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'x-api-key': process.env.apiKey
        }
    })
    .then((res) => {

        return res.json()
    })
    .then((body) => {
        if(body.response.status !== 'done') {
          shotStackGet(body.response.id)
        } else {
          console.log(body)
        }
    })
    .catch(err => console.log(err))
}

// shotStackTest()

const download = async () => {
  await https.get('https://shotstack-api-stage-output.s3-ap-southeast-2.amazonaws.com/nlc2bsp6q4/4d8a986a-1b54-463d-ab37-6f844510f1c8.mp4', res => {
    const pathFile = path.resolve('videos', 'shotstack.mp4')
    const filePath = fs.createWriteStream(pathFile)
    console.log(res)
    res.pipe(filePath)
    filePath.on('finish', () => {
      filePath.close()
      console.log('finished download')
    })
  }) 
}

download()