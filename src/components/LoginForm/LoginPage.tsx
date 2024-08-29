import React, { useState } from 'react';
import { Container, Button,  Group, Text, Box } from '@mantine/core';
import styles from './LoginPage.module.css';
import { OrganizerLogin } from './Organizerlogin';
import { UserLogin } from './UserLogin';
interface LoginFormProps {
    setpage: (page: 'Signup' | 'Login' ) => void;
  }
function LoginPage ({setpage}:LoginFormProps) {
  const [isOrganizer, setIsOrganizer] = useState<boolean>(false);

  const toggleRole = () => {
    setIsOrganizer((prev) => !prev);
  };

  return (
    <Container className={styles.container}>
      <Box className={styles.navbar}>
        <Text className={styles.logo}>Maidan</Text>
      </Box>

      <Group variant='outline' className={styles.roleToggle}>
        <Button
          variant={isOrganizer ? "filled" : "outline"}
          className={styles.toggleButton}
          color='#F1A02F'
          onClick={toggleRole}
        >
          For Organizer
        </Button>
        <Button
          variant={!isOrganizer ? "filled" : "outline"}
          className={styles.toggleButton}
           color='#F1A02F'
          onClick={toggleRole}
        >
          For Players
        </Button>
      </Group>
{isOrganizer?<OrganizerLogin setpage={setpage}/>:<UserLogin setpage={setpage}/>}
      
    </Container>
  );
};

export default LoginPage;
