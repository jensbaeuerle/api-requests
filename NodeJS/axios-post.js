// import libraries

import axios from 'axios'

// 
//POST Request with img URL
//
axios({
    url: 'https://northeurope.api.cognitive.microsoft.com/vision/v2.1/ocr?language=de&detectOrientation=true',
    method: 'POST',
    headers:{
       'Content-Type': 'application/json',
       'Ocp-Apim-Subscription-Key': "KEY"
       // 'Prediction-Key': process.env.REACT_APP_PREDICTION_API
       },
   data: {
       url: 'URL'
       }
})
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

// 
//POST Request with FormData
//
const handleFile = e => {
    // console.log(e.target.files)
    console.log(e.target.files[0])
    let file = e.target.files[0]
    setImg({
        file: file,
    })
    setImgUrl({
      file_url: URL.createObjectURL(e.target.files[0])
  })
}
const handleUpload = () => {

    let file = img.file
    let formdata = new FormData()
    formdata.append('image',file)
    console.log(formData)
    setformData(formdata)
}

axios({
    url: 'URL',
    method: 'POST',
    headers:{
        'Content-Type': 'multipart/form-data',
        'Prediction-Key': 'Prediction-Key'
        // 'Prediction-Key': process.env.REACT_APP_PREDICTION_API
        
    },
    data: formData
}).then((res)=>{
setPred({pred: res.data.predictions})
console.log(res.data.predictions)
})

