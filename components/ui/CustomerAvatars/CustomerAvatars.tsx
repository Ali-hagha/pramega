import { Avatar, AvatarGroup } from '@mui/material';

const CustomerAvatars = () => {
  return (
    <AvatarGroup max={4}>
      <Avatar
        alt="Remy Sharp"
        src="/avatars/1.jpg"
        className="h-8 md:h-10 w-8 md:w-10"
      />
      <Avatar
        alt="Travis Howard"
        src="/avatars/2.jpg"
        className="h-8 md:h-10 w-8 md:w-10"
      />
      <Avatar
        alt="Cindy Baker"
        src="/avatars/3.jpg"
        className="h-8 md:h-10 w-8 md:w-10"
      />
      <Avatar
        alt="Agnes Walker"
        src="/avatars/4.jpg"
        className="h-8 md:h-10 w-8 md:w-10"
      />
    </AvatarGroup>
  );
};

export default CustomerAvatars;
