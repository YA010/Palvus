import React from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import { IonBadge, IonButton } from '@ionic/react';
import { Link, To } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

const data = [
  {
    image:
      'https://ugc.futurelearn.com/uploads/images/d4/e8/d4e82da6-ca9d-4a4a-aa24-a4d70d004f49.jpg',
    title: 'Life',
    category: 'Riddle',
  },
  {
    image:
      'https://e0.pxfuel.com/wallpapers/386/777/desktop-wallpaper-world-history-6-mb.jpg',
    title: 'World History',
    category: 'Riddle',
  },
  {
    image:
      'https://cdn.theplaylist.net/wp-content/uploads/2016/04/14182739/20201-Most-Anticipated-TV-Series-Mini-Series-750x400.jpg',
    title: 'Tv Shows',
    category: 'Riddle',
  },
  
  {
    image:
      'https://hd-report.com/wp-content/uploads/2021/01/best-4k-blu-ray-of-all-time-grid-1280.jpg',
    title: 'Movies',
    category: 'Riddle',
  },
  
  {
    image:
      'https://e1.pxfuel.com/desktop-wallpaper/420/756/desktop-wallpaper-top-of-culture-culture-pack-v-586-pop-culture.jpg',
    title: 'Pop culture',
    category: 'Riddle',
  },
  {
    image:
      'https://w0.peakpx.com/wallpaper/190/805/HD-wallpaper-dna-molecule-dna-neon-science-biology-dna.jpg',
    title: 'Science',
    category: 'Riddle',
  },
];



function Card({image, category, title}) {
  const { classes } = useStyles();
  return (
    <Paper shadow="md" p="xl" radius="md" sx={{ backgroundImage: `url(${image})` }} className={classes.card}>
      <div>
      <IonBadge id="darkside">
          {category} 
       </IonBadge>

        <Title order={3} className={classes.title}>
         {title}
        </Title>
      </div>
<Link to={`/riddle/${title}`}>
      <IonButton id="darkside" >
        Play
      </IonButton>
      </Link>
    </Paper>
  );
}

 export default function CardsCarousel(props) {

  const theme = useMantineTheme();

  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = data.map(item => (
    <Carousel.Slide key={item.title}>
      <Card 
        image={item.image}
        category={item.category}
        title={item.title} 
      />
    </Carousel.Slide>
  ));

  return (
  

    <Carousel 
   
      controlSize={21} withIndicators
      slideSize="30%" 
      orientation={props.ver}
      slideGap="xl" 
      align="start"
      slidesToScroll={mobile ? 1 : 1}
    >
      

      
      {slides}
      
    </Carousel>
   
   
   
  );

}