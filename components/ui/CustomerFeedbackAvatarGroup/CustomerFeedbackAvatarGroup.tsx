import { Avatar, AvatarGroup } from '@mui/material';

const customerAvatarList = [
  {
    id: 1,
    title: 'Remy Sharp',
    src: '/avatars/1.jpg',
  },
  {
    id: 2,
    title: 'Travis Howard',
    src: '/avatars/2.jpg',
  },
  {
    id: 3,
    title: 'Cindy Baker',
    src: '/avatars/3.jpg',
  },
  {
    id: 4,
    title: 'Agnes Walker',
    src: '/avatars/4.jpg',
  },
];

const CustomerFeedbackAvatarGroup = () => {
  return (
    <AvatarGroup max={4}>
      {customerAvatarList.map(customer => (
        <Avatar
          key={customer.id}
          alt={customer.title}
          src={customer.src}
          className="h-8 md:h-10 w-8 md:w-10"
        />
      ))}
    </AvatarGroup>
  );
};

export default CustomerFeedbackAvatarGroup;
