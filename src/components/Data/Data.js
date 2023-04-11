import {
  UilDollarSign,
  UilChartLine,
  UilClipboardAlt,
} from '@iconscout/react-unicons';

export const cardsData = [
  {
    title: 'Sales',
    color: {
      backGround: '#D0E1E9',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    },
    barValue: 70,
    value: '25,970',
    png: UilDollarSign,
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'Revenue',
    color: {
      backGround: '#D0E1E9',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    },
    barValue: 80,
    value: '14,270',
    png: UilChartLine,
    series: [
      {
        name: 'Revenue',
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: 'Expenses',
    color: {
      backGround: '#D0E1E9',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    },
    barValue: 60,
    value: '4,270',
    png: UilClipboardAlt,
    series: [
      {
        name: 'Expenses',
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: 'https://randomuser.me/api/portraits/women/17.jpg',
    name: 'Mary Shelton',
    notification: 'has ordered Apple smart watch 2500mh battery.',
    time: '25 seconds ago',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/44.jpg',
    name: 'Vincent Bradley',
    notification: 'has received Samsung gadget for charging battery.',
    time: '30 minutes ago',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/18.jpg',
    name: 'Derrick Barnett',
    notification: 'has ordered Apple smart watch, samsung Gear 2500mh battery.',
    time: '2 hours ago',
  },
];
