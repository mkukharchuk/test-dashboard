// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Проекты',
    path: '/dashboard/projects',
    icon: getIcon('eva:calendar-fill'),
  },
  {
    title: 'Оборудование',
    path: '/dashboard/stuff',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Логистика',
    path: '/dashboard/logistic',
    icon: getIcon('eva:map-fill'),
  },
  {
    title: 'Задачи',
    path: '/dashboard/tasks',
    icon: getIcon('eva:checkmark-square-2-fill'),
  },
  {
    title: 'Клиенты',
    path: '/dashboard/clients',
    icon: getIcon('eva:person-done-fill'),
  },
  {
    title: 'Пользователи',
    path: '/dashboard/users',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: getIcon('eva:options-2-fill'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
