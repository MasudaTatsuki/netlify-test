import React from 'react';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout>
      <h1>お問合せ</h1>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label>お名前: <input type="text" name="name" required /></label>
        </div>
        <div>
          <label>メールアドレス: <input type="email" name="email" required /></label>
        </div>
        <div>
          <label>メッセージ: <textarea name="message" required></textarea></label>
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </Layout>
  );
};

export default Contact;
