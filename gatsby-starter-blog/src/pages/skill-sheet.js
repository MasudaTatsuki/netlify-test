// eslint-disable-next-line no-unused-vars
import React from 'react';
import Layout from '../components/layout';
import '../styles/skill-sheet.css'

const SkillSheet = () => {
  return (
    <Layout>
      <h1>スキルシート</h1>
      <h3 className='update-date'>更新日: 2024年9月22日</h3>
      <div className='skill-sheet-table1'>
        <table>
            <tbody>
                <tr><th>フリガナ</th><td>マスダ  タツキ</td></tr>
                <tr><th>氏名</th><td>増田  樹</td></tr>
                <tr><th>Github ID</th><td>tkms81</td></tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr><th>性別</th><td>男</td></tr>
                <tr><th>ポートフォリオ</th><td></td></tr>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr><th>最終学歴</th><td>高卒</td></tr>
                <tr><th>最寄駅</th><td>総武線　東中野駅</td></tr>
            </tbody>
        </table>
      </div>
      
    </Layout>
  );
};

export default SkillSheet;
