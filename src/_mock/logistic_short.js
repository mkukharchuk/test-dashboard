import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const logistic_short = [...Array(2)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
  name: faker.company.companyName(),
  date: sample([
    '12 Dec, 2022',
    '5 Nov, 2022',
    '18 Dec, 2022',
    '5 May, 2022',
    '7 Sep, 2022',
    '31 Dec, 2022',
  ]),
  time: sample([
    '10:15 AM',
    '14:00 PM',
    '12:30 PM',
    '08:00 AM',
    '18:45 PM',
    '11:30 AM',
  ]),
  destination: faker.address.city(),
  stock: faker.address.city(),
  carSize: sample([
    'Средняя',
    'Грузовая',
  ]),
  fullSize: sample([
    '85%',
    '90%',
    '100%',
  ]),
}));

export default logistic_short;
