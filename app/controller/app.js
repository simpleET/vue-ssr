const Model = require('../mocks/article/list');
const Controller = require('egg').Controller;
class AppController extends Controller {
  async index(ctx) {
    const { mode } = ctx.query;
    console.log(mode)
    if (mode === 'csr') {
      // renderClient 前端渲染，Node层只做 layout.html和资源依赖组装，渲染交给前端渲染。与服务端渲染的差别你可以通过查看运行后页面源代码即可明白两者之间的差异
      await this.ctx.renderClient('app.js', { url: this.ctx.url });
    } else  {
      // 对应webpack.config.js 中 entry的app
      await this.ctx.render('app.js', { url: this.ctx.url });
    }
  }

  async list() {
    const pageIndex = this.ctx.query.pageIndex;
    const pageSize = this.ctx.query.pageSize;
    this.ctx.body = Model.getPage(pageIndex, pageSize);
  }

  async detail() {
    const id = Number(this.ctx.params.id);
    this.ctx.body = Model.getDetail(id);
  }
}

module.exports = AppController;