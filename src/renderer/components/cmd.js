const bash = require('child_process')

// cat xxx.*.7z > output.7z
// ffmpeg -ss 0:1:30 -t 0:0:20 -i input.mp4 -vcodec copy -acodec copy output.mp4
export const cat = options => {
  const { name, onerror } = options

  bash.exec(`cat ${name}.7z.* > ${name}.7z`, { 
    cwd: '/Users/seejie/Desktop/'
  }, (err, stdout, stderr) => {
    if (err) return onerror(err)
    console.log(stdout, '-----stdout-----')
    console.log(stderr, '-----stderr-----')
  })
}

export const ffmpeg = options => {
  const { name, type, sTime, eTime, onerror } = options
  const [sh, sm, ss] = sTime
  const [eh, em, es] = eTime

  bash.exec(`ffmpeg -ss ${sh}:${sm}:${ss} -t ${eh}:${em}:${es} -i ${name}.${type} -vcodec copy -acodec copy ${name}.mp4`, { 
    cwd: '/Users/seejie/Desktop/'
  }, (err, stdout, stderr) => {
    if (err) return onerror(err)
    console.log(stdout, '-----stdout-----')
    console.log(stderr, '-----stderr-----')
  })
}
