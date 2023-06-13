import {
  CurrencyDollarIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import { HomeIcon, CreditCardIcon, UserIcon } from '@heroicons/react/24/solid';

export const navLinks = [
  {
    id: 'home',
    title: 'Home',
    link: '/',
  },
  {
    id: 'shop',
    title: 'Shop',
    link: '/shop',
  },
  {
    id: 'contact',
    title: 'Contact Us',
    link: '/contact',
  },
];

export const dileverData = [
  {
    id: 'sh-1',
    icon: <CurrencyDollarIcon className="h-10 w-10 text-gray-400" />,
    title: 'FREE SHIPPING',
    discription: 'Free shipping on all US order or order above $100',
  },
  {
    id: 'sh-2',
    icon: <ArrowPathIcon className="h-10 w-10 text-gray-400" />,
    title: '30 DAYS RETURN',
    discription: 'Simply return it within 30 days for an exchange.',
  },
  {
    id: 'sh-3',
    icon: <ShieldCheckIcon className="h-10 w-10 text-gray-400" />,
    title: '100% PAYMENT SECURE',
    discription: 'We ensure secure payment with PEV with PEV',
  },
];

// export const productData = [
//   {
//     id: 'p-1',
//     slug: 'hp-laptop',
//     image: [
//       '/images/slideLaptop1.png',
//       '/images/slideLaptop7.png',
//       '/images/slideLaptop8.png',
//     ],
//     title: 'Hp Laptop',
//     desciption:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//     price: 1200,
//     rating: 4.5,
//     numReviews: 8,
//     instoke: 20,
//     categori: 'cheep',
//   },
//   {
//     id: 'p-2',
//     slug: 'dell-laptop',
//     image: [
//       '/images/slideLaptop7.png',
//       '/images/slideLaptop1.png',
//       '/images/slideLaptop8.png',
//     ],
//     title: 'Dell Laptop',
//     desciption:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//     price: 1400,
//     rating: 4,
//     numReviews: 6,
//     instoke: 6,
//     categori: 'cheep',
//   },
//   {
//     id: 'p-3',
//     slug: 'lenovo-laptop',
//     image: [
//       '/images/slideLaptop8.png',
//       '/images/slideLaptop1.png',
//       '/images/slideLaptop7.png',
//     ],
//     title: 'Lenovo Laptop',
//     desciption:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//     price: 1500,
//     rating: 3.5,
//     numReviews: 20,
//     instoke: 5,
//     categori: 'mid',
//   },
//   {
//     id: 'p-4',
//     slug: 'apple-laptop',
//     image: [
//       '/images/slideLaptop4.png',
//       '/images/slideLaptop8.png',
//       '/images/slideLaptop7.png',
//     ],
//     title: 'Apple Laptop',
//     desciption:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//     price: 5000,
//     rating: 1.5,
//     numReviews: 5,
//     instoke: 10,
//     categori: 'high',
//   },
//   {
//     id: 'p-5',
//     slug: 'msi-laptop',
//     image: [
//       '/images/slideLaptop5.png',
//       '/images/slideLaptop8.png',
//       '/images/slideLaptop7.png',
//     ],
//     title: 'MSI Laptop',
//     desciption:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//     price: 2500,
//     rating: 5,
//     numReviews: 30,
//     instoke: 0,
//     categori: 'mid',
//   },
//   {
//     id: 'p-6',
//     slug: 'asus-laptop',
//     image: [
//       '/images/slideLaptop6.png',
//       '/images/slideLaptop8.png',
//       '/images/slideLaptop7.png',
//     ],
//     title: 'ASUS Laptop',
//     desciption:
//       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
//     price: 3000,
//     rating: 3.5,
//     numReviews: 15,
//     instoke: 18,
//     categori: 'high',
//   },
// ];

//admin
export const adminLinks = [
  {
    id: 'home',
    icon: <HomeIcon className="h-5 w-5" />,
    title: 'Home',
    link: '/dashboard',
  },
  {
    id: 'users',
    icon: <UserIcon className="h-5 w-5" />,
    title: 'Users',
    link: '/dashboard/users',
  },
  {
    id: 'products',
    icon: <CreditCardIcon className="h-5 w-5" />,
    title: 'Products',
    link: '/dashboard/products',
  },
  {
    id: 'payment',
    icon: <CreditCardIcon className="h-5 w-5" />,
    title: 'Payment',
    link: '/dashboard/payment',
  },
];
