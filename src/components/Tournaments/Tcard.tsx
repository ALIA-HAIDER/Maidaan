import { Card, Group, Button, Text,Badge} from '@mantine/core';
import classes from './Tournaments.module.css'

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
        }
        // Add more tournament objects here if needed
      ];
  return (
    <Card shadow="sm" p="lg">
      <Card className={classes.card}>
              <Text className={classes.title}>{tournaments[0].title}</Text>
              <Text className={classes.sport}>{tournaments[0].sport}</Text>
              <div className={classes.location}>
                {/* <IconLocation size={18} className={classes.icon} /> */}
                <Text>{tournaments[0].location}</Text>
              </div>
              <Badge className={classes.badge}>{tournaments[0].status}</Badge>
              <Text className={classes.fee}>{tournaments[0].fee}</Text>
              <Text className={classes.teams}>{tournaments[0].teamsParticipating}</Text>
              <div className={classes.date}>
                {/* <IconCalendar size={18} className={classes.icon} /> */}
                <Text>Kicks Off {tournaments[0].startDate}</Text>
              </div>
              <Button className={classes.registerButton}>Register Now</Button>
            </Card>
    </Card>
  );
};

export default Tcard;