import { Card, Group, Button, Text,Badge,SimpleGrid, Divider} from '@mantine/core';
import classes from './Tournaments.module.css'

function NextUpTcard(){
    const tournaments= [
        {
          title: "Champions Trophy 2024",
          sport: "Cricket",
          location: "Mumbai",
          teamsParticipating: "+1500 Teams Participating",
          status: "Next Up",
          fee: "Fees Free",
          startDate: "Sept 21, 2024",
        },
        
        // Add more tournament objects here if needed
      ];

          
      const card =tournaments.map((tournaments) => (
    <Card shadow="sm" p="lg">
      <Card className={classes.card}>
              <Text className={classes.title}>{tournaments.title}</Text>
              <Text className={classes.sport}>{tournaments.sport}</Text>
              <div className={classes.location}>
                {/* <IconLocation size={18} className={classes.icon} /> */}
                <Text>{tournaments.location}</Text>
              </div>
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

export default NextUpTcard;