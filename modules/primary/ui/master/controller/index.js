mod.server.router.use('/public/assets/master', mod.server.express.static(__dirname + '/../public'));

module.exports = {
  encapsulate: function (content) {
    return mod.server.jade.renderFile(mod.server.path.resolve(__dirname + '/../views/view_1.jade'), {content: content});
  }
}
