#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const program = require('commander')

const pkg = require('./package.json')

const aaencode = function (text) {
  const basic = [
    '(c^_^o)' ,
    '(ﾟΘﾟ)' ,
    '((o^_^o) - (ﾟΘﾟ))' ,
    '(o^_^o)' ,
    '(ﾟｰﾟ)' ,
    '((ﾟｰﾟ) + (ﾟΘﾟ))' ,
    '((o^_^o) +(o^_^o))' ,
    '((ﾟｰﾟ) + (o^_^o))' ,
    '((ﾟｰﾟ) + (ﾟｰﾟ))' ,
    '((ﾟｰﾟ) + (ﾟｰﾟ) + (ﾟΘﾟ))' ,
    '(ﾟДﾟ) .ﾟωﾟﾉ' ,
    '(ﾟДﾟ) .ﾟΘﾟﾉ' ,
    '(ﾟДﾟ) ["c"]' ,
    '(ﾟДﾟ) .ﾟｰﾟﾉ' ,
    '(ﾟДﾟ) .ﾟДﾟﾉ' ,
    '(ﾟДﾟ) [ﾟΘﾟ]'
  ]
  let result = 'ﾟωﾟﾉ= /｀ｍ´）ﾉ ~┻━┻   //*´∇｀*/ ["_"]; o=(ﾟｰﾟ)  =_=3; c=(ﾟΘﾟ) =(ﾟｰﾟ)-(ﾟｰﾟ); ' +
    '(ﾟДﾟ) =(ﾟΘﾟ)= (o^_^o)/ (o^_^o);' +
    '(ﾟДﾟ)={ﾟΘﾟ: "_" ,ﾟωﾟﾉ : ((ﾟωﾟﾉ==3) +"_") [ﾟΘﾟ] ' +
    ',ﾟｰﾟﾉ :(ﾟωﾟﾉ+ "_")[o^_^o -(ﾟΘﾟ)] '+
    ',ﾟДﾟﾉ:((ﾟｰﾟ==3) +"_")[ﾟｰﾟ] }; (ﾟДﾟ) [ﾟΘﾟ] =((ﾟωﾟﾉ==3) +"_") [c^_^o];' +
    '(ﾟДﾟ) ["c"] = ((ﾟДﾟ)+"_") [ (ﾟｰﾟ)+(ﾟｰﾟ)-(ﾟΘﾟ) ];'+
    '(ﾟДﾟ) ["o"] = ((ﾟДﾟ)+"_") [ﾟΘﾟ];'+
    '(ﾟoﾟ)=(ﾟДﾟ) ["c"]+(ﾟДﾟ) ["o"]+(ﾟωﾟﾉ +"_")[ﾟΘﾟ]+ ((ﾟωﾟﾉ==3) +"_") [ﾟｰﾟ] + ' +
    '((ﾟДﾟ) +"_") [(ﾟｰﾟ)+(ﾟｰﾟ)]+ ((ﾟｰﾟ==3) +"_") [ﾟΘﾟ]+' +
    '((ﾟｰﾟ==3) +"_") [(ﾟｰﾟ) - (ﾟΘﾟ)]+(ﾟДﾟ) ["c"]+' +
    '((ﾟДﾟ)+"_") [(ﾟｰﾟ)+(ﾟｰﾟ)]+ (ﾟДﾟ) ["o"]+' +
    '((ﾟｰﾟ==3) +"_") [ﾟΘﾟ];(ﾟДﾟ) ["_"] =(o^_^o) [ﾟoﾟ] [ﾟoﾟ];' +
    '(ﾟεﾟ)=((ﾟｰﾟ==3) +"_") [ﾟΘﾟ]+ (ﾟДﾟ) .ﾟДﾟﾉ+'+
    '((ﾟДﾟ)+"_") [(ﾟｰﾟ) + (ﾟｰﾟ)]+((ﾟｰﾟ==3) +"_") [o^_^o -ﾟΘﾟ]+' +
    '((ﾟｰﾟ==3) +"_") [ﾟΘﾟ]+ (ﾟωﾟﾉ +"_") [ﾟΘﾟ]; ' +
    '(ﾟｰﾟ)+=(ﾟΘﾟ); (ﾟДﾟ)[ﾟεﾟ]="\\\\"; ' +
    '(ﾟДﾟ).ﾟΘﾟﾉ=(ﾟДﾟ+ ﾟｰﾟ)[o^_^o -(ﾟΘﾟ)];' + 
    '(oﾟｰﾟo)=(ﾟωﾟﾉ +"_")[c^_^o];' +
    '(ﾟДﾟ) [ﾟoﾟ]="\\\'";' + 
    '(ﾟДﾟ) ["_"] ( (ﾟДﾟ) ["_"] (ﾟεﾟ+' +
    '(ﾟДﾟ)[ﾟoﾟ]+ '

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i)
    let temp = '(ﾟДﾟ)[ﾟεﾟ]+'
    if (code <= 127) {
      temp += code.toString(8).replace(/[0-7]/g, function (c) {
        return basic[c] + '+ '
      })
    } else {
      let m = /[0-9a-f]{4}$/.exec('000' + code.toString(16))[0]
      temp += '(oﾟｰﾟo)+ ' + m.replace(/[0-9a-f]/gi, function (c) {
        return basic[parseInt(c, 16)] + '+ '
      })
    }
    result += temp
  }

  result += '(ﾟДﾟ)[ﾟoﾟ]) (ﾟΘﾟ)) ("_");'

  return result
}

program
  .version(pkg.version)
  .option('-o, --output', 'set output filename')
  .parse(process.argv)

if (program.args.length === 0) {
  program.help()
} else {
  const file = path.resolve(program.args[0])

  new Promise((resolve, rejected) => {
    fs.readFile(file, (err, buffer) => {
      if (err) throw err
      resolve(buffer.toString())
    })
  }).then((str) => {
    if (program.args.length > 1) {
      fs.writeFile(program.args[1], aaencode(str), (err) => {
        if (err) throw err
      })
    } else {
      console.log(aaencode(str))
    }
  })
}