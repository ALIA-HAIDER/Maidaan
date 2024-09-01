import { Card, Avatar, Text, Group, Badge, ActionIcon,Button } from '@mantine/core';
import { IconMail, IconPhone, IconBrandFacebook, IconBrandInstagram, IconBrandTwitter } from '@tabler/icons-react';
import classes from './PpProfileBox.module.css';
import profileimg from '../../assets/Profilepicturedemo.jpg'

// Define the mock data
const mockData = {
  name: 'Virat Patel',
  username: 'virat_patel',
  location: 'Mumbai, India',
  bio: 'Dedicated cricket enthusiast with a passion for leadership and strategy. Committed to excelling and inspiring on the field.',
  badges: [
    { label: 'Cricket', color: 'orange', variant: 'light' },
    { label: 'Football', color: 'orange', variant: 'light' },
  ],
  team: 'Mumbai Tigers | U-19 State Squad',
  achievements: '4 years of competitive play, 3-time state champion, 1-time national semi-finalist',
  email: 'aarav.patel@email.com',
  phone: '00000-00000',
  socialLinks: {
    facebook: 'https://facebook.com/virat_patel',
    instagram: 'https://instagram.com/virat_patel',
    twitter: 'https://twitter.com/virat_patel',
  },
  avatarUrl: {profileimg},
};

export function PpProfileBox() {
  const {
    name,
    username,
    location,
    bio,
    badges,
    team,
    achievements,
    email,
    phone,
    socialLinks,
    avatarUrl,
  } = mockData;

  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Avatar
        src={profileimg}
        size={100}
        radius={80}
        mx="auto"
        className={classes.avatar}
      />
      <Text ta="center"  className={classes.name}>
        {name}
      </Text>
      <Text ta="center" fz="sm" >
        @{username} | {location}
      </Text>
      <Text ta="center" fz="sm" mt="sm" mx="auto" style={{ maxWidth: 300 }}>
        {bio}
      </Text>
 
      <Group mt="md" justify="center" gap="xs">
        {badges.map((badge, index) => (
          <Badge key={index} color={badge.color} variant={badge.variant}>
            {badge.label}
          </Badge>
        ))}
      </Group>
    

      <Text ta="center" fz="sm" mt="md">
        {team}
      </Text>
      <Text ta="center" fz="xs" mt="xs">
        {achievements}
      </Text>

      <Group mt="md" >
        <Group >
          <ActionIcon size="lg" color= 'orange' variant= 'light'  radius="xl">
            <IconMail size="1rem" />
          </ActionIcon>
          <Text fz="xs">{email}</Text>
        </Group>
        <Group >
          <ActionIcon size="lg" color= 'orange' variant= 'light' radius="xl">
            <IconPhone size="1rem" />
          </ActionIcon>
          <Text fz="xs">{phone}</Text>
        </Group>
        
      </Group>

      <Group mt="md" >
        <ActionIcon size="lg" color= 'orange' variant= 'light'   radius="xl" component="a" href={socialLinks.facebook} target="_blank">
          <IconBrandFacebook size="1rem" />
        </ActionIcon>
        <ActionIcon size="lg" color= 'orange' variant= 'light' radius="xl" component="a" href={socialLinks.instagram} target="_blank">
          <IconBrandInstagram size="1rem" />
        </ActionIcon>
        <ActionIcon size="lg" color= 'orange' variant= 'light' radius="xl" component="a" href={socialLinks.twitter} target="_blank">
          <IconBrandTwitter size="1rem" />
        </ActionIcon>
      </Group>
      <hr />
       <Button  className={classes.Editbtn}  >
        Edit Profile
        </Button>
    </Card>
  );
}
