// eslint-disable-next-line quotes
import DrawerInitiator from '../utils/drawer-initiator';
// eslint-disable-next-line quotes
import UrlParser from '../routes/url-parser';
// eslint-disable-next-line quotes
import routes from '../routes/routes';
 // eslint-disable-next-line no-multiple-empty-lines
 
class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
 
    this._initialAppShell();
  }
 
 _initialAppShell() {
   DrawerInitiator.init({
     button: this._button,
     drawer: this._drawer,
     content: this._content,
   });
    }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
 
export default App;