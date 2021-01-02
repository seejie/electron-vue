const bash = require('child_process')

// cat xxx.*.7z > output.7z
// ffmpeg -ss 0:1:30 -t 0:0:20 -i input.mp4 -vcodec copy -acodec copy output.mp4
export const cat = options => {
  const { name } = options

  bash.exec(`cat ${name}.*.7z > ${name}.7z`, { 
    cwd: '/Users/seejie/Desktop/'
  }, (err, stdout, stderr) => {
    console.log(err, '-----err-----')
    console.log(stdout, '-----stdout-----')
    console.log(stderr, '-----stderr-----')
  })
}

export const ffmepg = options => {
  const { name, sTime, eTime } = options
  const [sh, sm, ss] = sTime
  const [eh, em, es] = eTime

  bash.exec(`ffmepg -ss ${sh}:${sm}:${ss} -t ${eh}:${em}:${es} -i ${name} -vcodec copy -acodec copy ${name}.mp4`, { 
    cwd: '/Users/seejie/Desktop/'
  }, (err, stdout, stderr) => {
    console.log(err, '-----err-----')
    console.log(stdout, '-----stdout-----')
    console.log(stderr, '-----stderr-----')
  })
}
