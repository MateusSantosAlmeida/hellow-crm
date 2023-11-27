import React from 'react';
import { Space, Layout, Divider } from 'antd';
import { Typography } from 'antd';

import logo from '@/style/images/logo.svg';
import logo1 from '@/style/images/logo1.png';
import logo2 from '@/style/images/logo2.png';
import logo3 from '@/style/images/logo3.png';
import logo4 from '@/style/images/logo4.png';

const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            display: 'block',
            maxWidth: '110%',   // Isso garante que a imagem seja responsiva
            height: 'auto',     // Mantém as proporções da imagem
            margin: 'auto',     // Centraliza a imagem horizontalmente
            marginLeft:'-40px'
          }}
        />

        {/* <img src={logo} alt="Logo" style={{ margin: '0 auto ', marginLeft:'-70px',display: 'block' }} /> */}
        <div className="space40"></div>
        <Title level={3}>Gestão de Relacionamento com Clientes</Title>
        <div className="space20"></div>
        <ul className="list-checked">
          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>Gestão Avançada de Clientes</Text>

              <Text>Integração com Diversas Plataformas</Text>
            </Space>
          </li>

          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>Melhoria na Comunicação e Suporte</Text>
              <Text>Análise de Dados e Relatórios Personalizados</Text>
            </Space>
          </li>
        </ul>
        <Divider />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* <img
            src={logo1}
            alt="Logo1"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          />
          <img
            src={logo2}
            alt="Logo2"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          />
          <img
            src={logo3}
            alt="Logo3"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          />
          <img
            src={logo4}
            alt="Logo4"
            style={{
              margin: '0 15px',
              display: 'block',
              float: 'left',
              width: '48px',
              filter: 'grayscale(1)',
              mixBlendMode: 'multiply',
              opacity: '0.8',
            }}
          /> */}
        </div>
      </div>
    </Content>
  );
}
