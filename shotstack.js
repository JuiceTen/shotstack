import axios from 'axios'
import shotstack from 'shotstack-sdk'
import json from './jsondata.js'
import fetch from 'node-fetch'
import aws from 'aws-sdk'
const apiKey = 'tKNkNz722x3jmBdE3nH447BP9V3ECDAKaX2hiS3G'

// console.log(new aws.S3())
// const images = fetch('https://frostcm-images-and-videos.s3.us-east-2.amazonaws.com/images/', {
//   method: 'GET',
// }).then((data) => {
//   console.log(data.json())
// }).catch(err => console.log(err))

const data = {
    "timeline": {
        "background": "#000000",
        "tracks": [
          {
            "clips": [
              {
                "asset": {
                  
                  "type": "title",
                  "text": "Hello World",
                  "style": "future"
                },
                "start": 0,
                "length": 5
              }
            ]
          }
        ]
      },
      "output": {
        "format": "mp4",
        "resolution": "sd"
      }
    }
// console.log(shotstack.Timeline())
const shotStackTest = () => {
    fetch('https://api.shotstack.io/stage/render', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-api-key': apiKey
        },
        
    }).then((res) => {
        // console.log(res.clone())
        return res.json()
    }).then((body) => {
        console.log(body)
    })
    .catch(err => console.log(err))
}

shotStackTest()

const shotStackGet = () => {
    fetch('https://api.shotstack.io/stage/render/581cc558-a3ff-4648-9291-a01865197433', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'x-api-key': apiKey
        }
    })
    .then((res) => {
        return res.json()
    })
    .then((body) => {
        console.log(body)
    })
    .catch(err => console.log(err))
}

shotStackGet()