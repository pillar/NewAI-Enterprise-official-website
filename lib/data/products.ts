export interface Product {
  id: number;
  nameKey: string;
  descriptionKey: string;
  image: string;
  website: string;
  imageSize: {
    width: number;
    height: number;
  };
}

export const products: Product[] = [
  {
    id: 1,
    nameKey: 'products.items.vision.name',
    descriptionKey: 'products.items.vision.description',
    image: '/images/products/wotushe.png',
    website: 'https://www.52wts.cn',
    imageSize: {
      width: 1600,
      height: 900
    }
  },
  {
    id: 2,
    nameKey: 'products.items.assistant.name',
    descriptionKey: 'products.items.assistant.description',
    image: '/images/products/wtaigc.png',
    website: 'https://www.wtaigc.com',
    imageSize: {
      width: 1600,
      height: 900
    }
  },
  {
    id: 3,
    nameKey: 'products.items.analytics.name',
    descriptionKey: 'products.items.analytics.description',
    image: '/images/products/wtai.png',
    website: 'https://wtai.cc',
    imageSize: {
      width: 1600,
      height: 900
    }
  },
  {
    id: 4,
    nameKey: 'products.items.blog.name',
    descriptionKey: 'products.items.blog.description',
    image: '/images/products/wtsea.png',
    website: 'https://www.wtsea.cn',
    imageSize: {
      width: 1600,
      height: 900
    }
  }
];