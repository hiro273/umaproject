import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div className="naver">
          <Link to="/helper" className="space uma">このサイトの使い方</Link>
          <Link to="/uma">ウマ娘一覧</Link>
          <Link to="/article">攻略記事一覧</Link>
          <Link to="/">フォロワーチャット</Link>
      </div>
  );
}

export default Navbar
