import {
  UilUsdSquare,
  UilMoneyWithdrawal,
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
    png: UilUsdSquare,
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
    png: UilMoneyWithdrawal,
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
