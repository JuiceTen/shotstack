
const data ={
  "timeline": {
    "soundtrack": {
      "src": "https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/music/freepd/motions.mp3",
      "effect": "fadeOut"
    },
    "background": "#000000",
    "tracks": [
      {
        "clips": [
          {
            "asset": {
              "type": "video",
              "src": "https://frostcm-images-and-videos.s3.us-east-2.amazonaws.com/videoClips/Library+4+(1)+copy.MOV"
            },
            "start": 0,
            "length": 10,
            "offset": {
              "x": -0.25
            },
            "fit": "contain"
          }
        ]
      },
      {
        "clips": [
          {
            "asset": {
              "type": "video",
              "src": "https://frostcm-images-and-videos.s3.us-east-2.amazonaws.com/videoClips/Library+4+(1)+copy.MOV"
            },
            "start": 0,
            "length": 10,
            "offset": {
              "x": 0.25
            },
            "fit": "cover"
          }
        ]
      }
    ]
  },
  "output": {
    "format": "mp4",
    "resolution": "1080",
    "aspectRatio": "9:16"
    
  }
}


export default data;