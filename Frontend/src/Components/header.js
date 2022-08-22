import Instegramfont from "./SVG/Instegramfont";
import Heart from "./SVG/Heart";
import Home from "./SVG/Home";
import Message from "./SVG/Message";
import Story from "./SVG/Story";
import Addpost from "./SVG/Addpost";
import Arrowdown from "./SVG/Arrowdown";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fayoutube,faheart } from '@fortawesome/free-brands-svg-icons'
// import { facofee } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <nav className="navbar navbar-light border-bottom fixed-top">
      <div className="container-fluid">
        <div className="container mb-2">
          <div className="d-flex">
            <a className="mt-3 instegramlogo" href="/">
              <Instegramfont />
              <Arrowdown />
            </a>
            <input
              className="form-control d-md-block d-none searchbar align-self-center mt-2"
              type="search"
              placeholder="Searing"
            ></input>
            <div className="mt-2 icons">
              <Home />
              <Message />
              <Addpost />
              <Story />
              <Heart />
              <span className="profileicon ms-3">
                <img src="https://instagram.fyei1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fyei1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=YpENMQZgy80AX9tW44d&edm=ABFeTR8BAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AT9XuYvCQd0RJs18WuPJrxH1MghV0UYcgS_pWsxh-RHTgw&oe=630A26CF&_nc_sid=93c1bc"></img>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
