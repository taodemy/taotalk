import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../../src/layout/index';
import Home from '../../src/pages/index';
import '@testing-library/jest-dom/extend-expect';

describe('Layout', () => {
  it('should render layout successfully', () => {
    render(
      <Layout>
        <Home />
      </Layout>
    );
    const homePageText = screen.getByText('Learning and teaching online, made easy.');
    expect(homePageText).toBeInTheDocument();
  });
});
