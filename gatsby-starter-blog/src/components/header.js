import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">トップページ</Link></li>
          <li><Link to="/blog-list">ブログ一覧</Link></li>
          <li><Link to="/news-list">お知らせ一覧</Link></li>
          <li><Link to="/philosophy">企業理念</Link></li>
          <li><Link to="/contact">お問合せ</Link></li>
          <li><Link to="/skill-sheet">スキルシート</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
