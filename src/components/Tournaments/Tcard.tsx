import { Card,Stack, Group, Button, Text,Badge,SimpleGrid,Divider} from '@mantine/core';
import classes from './Tournaments.module.css'
import { Instagram,Link21 } from 'iconsax-react';
function Tcard(){
    const tournaments= [
        {
          title: "Champions Trophy 2024",
          sport: "Cricket",
          location: "Mumbai",
          teamsParticipating: "+1500 Teams Participating",
          status: "Ongoing",
          fee: "Fees Free",
          startDate: "Sept 21, 2024",
        },
        {
          title: "Champions Trophy 2024",
          sport: "Cricket",
          location: "Mumbai",
          teamsParticipating: "+1500 Teams Participating",
          status: "Ongoing",
          fee: "Fees Free",
          startDate: "Sept 21, 2024",
        }
        // Add more tournament objects here if needed
      ];

          
      const card =tournaments.map((tournaments) => (
    <Card shadow="sm" p="lg">
      <Card className={classes.card}>
             <Group style={{display:'flex',justifyContent:'space-between'}}>
            <Stack>
            <Text className={classes.title}>{tournaments.title}</Text>
            <Text className={classes.sport}>{tournaments.sport}</Text>
            </Stack>
               <Stack>
               <Group>             
                 <Link21 size="20" color="#000000"/> <Instagram size="20" color="#000000"/>
               </Group>
            <div className={classes.location}>
                <Text>{tournaments.location}</Text>
              </div>
               </Stack>
             </Group>
              <Divider my="md" color='#DDDDDD' size="sm"></Divider>
              <Badge className={classes.badge}>{tournaments.status}</Badge>
              <Text className={classes.fee}>{tournaments.fee}</Text>
              <Text className={classes.teams}>{tournaments.teamsParticipating}</Text>
              <div className={classes.date}>
                {/* <IconCalendar size={18} className={classes.icon} /> */}
                <Text>Kicks Off {tournaments.startDate}</Text>
              </div>
              <Button className={classes.registerButton}>Register Now</Button>
            </Card>
    </Card>
  ));
  return(
    <SimpleGrid cols={{ base: 1, sm: 1, lg:2, md:2 }}>{card}</SimpleGrid>
  )
};

export default Tcard;