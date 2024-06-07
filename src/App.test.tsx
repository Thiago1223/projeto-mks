import { getProducts } from './services/api/productService';

jest.mock('axios');

const mockedApiResponse = {
  products: [
    {
      id: 1,
      name: 'Product 1',
      brand: 'Brand 1',
      description: 'Description 1',
      photo: 'photo1.jpg',
      price: '100.00',
      createdAt: '2024-06-07T12:00:00Z',
      updatedAt: '2024-06-07T12:00:00Z',
    },
  ],
  count: 1,
};

test('fetches products from the API and returns them', async () => {
  require('axios').get.mockResolvedValueOnce({ data: mockedApiResponse });
  const result = await getProducts("ASC");
  expect(result).toEqual(mockedApiResponse);
});
