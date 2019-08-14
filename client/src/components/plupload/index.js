import plupload from 'plupload'

class Plup {
  constructor (opts, ctx) {
    return this.createPlup(opts, ctx)
  }
  createPlup (opts, ctx) {
    let uploader = new plupload.Uploader({
      browse_button: opts.btn,
      url: ctx.postUrl,
      runtimes: 'html5,flash,silverlight,html4',
      filters: {
        max_file_size: ctx.max_file_size,
        mime_types: [{
          title: 'Image files',
          extensions: 'jpg,gif,png'
        }]
      },
      multipart_params: ctx.params || {},
      headers: {
        // 'x-csrf-token': ctx.params._csrf || null
      },
      flash_swf_url: ctx.silverlight_xap_url || '../plupload_2.3/Moxie.swf',
      silverlight_xap_url: ctx.silverlight_xap_url || '../plupload_2.3/Moxie.xap',
      init: {
        FilesAdded (up, files) {
          up.start()
        },
        FileUploaded (up, files, data) {
          let res = JSON.parse(data.response)
          if (res.success) {
            ctx.files.push(res.data)
            console.log(ctx.files)
          }
        },
        UploadComplete (up, files) {

        },
        Error (up, errs) {
        }
      }
    })
    return uploader
  }
}

Plup.uuid = 1
Plup.getUuid = () => {
  return Plup.uuid++
}
Plup.setUuid = () => {
  return 'browseBtn' + Plup.getUuid()
}

export default Plup
