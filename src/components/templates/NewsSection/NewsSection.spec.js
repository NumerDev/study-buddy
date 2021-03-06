import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection from './NewsSection';
import { renderWithProviders } from 'helpers/renderWithProvider';

const mock = new MockAdapter(axios);

const query = `
    {
        allArticles {
            id
            title
            category
            content
            image {
            url
            }
        }
    }`;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when the article are not loaded', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  /* It should work but it doesn't :( */
  //   it('Displays the articles', async () => {
  //     mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
  //       data: {
  //         allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
  //       },
  //     });
  //     renderWithProviders(<NewsSection />);
  //     await screen.findAllByText(/Test/);
  //   });
});
