import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonText, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from "@ionic/react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem } from '@mantine/core';

const images = [
  {
    url: 'https://ugc.futurelearn.com/uploads/images/d4/e8/d4e82da6-ca9d-4a4a-aa24-a4d70d004f49.jpg',
    title: 'Breakfast',
    width: '40%',
  },
  {
    url: 'https://ugc.futurelearn.com/uploads/images/d4/e8/d4e82da6-ca9d-4a4a-aa24-a4d70d004f49.jpg',
    title: 'Burgers',
    width: '30%',
  },
  {
    url: 'https://ugc.futurelearn.com/uploads/images/d4/e8/d4e82da6-ca9d-4a4a-aa24-a4d70d004f49.jpg',
    title: 'Camera',
    width: '30%',
  },
];


const PRIMARY_COL_HEIGHT = rem(300);

function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return (
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <IonCard height={PRIMARY_COL_HEIGHT} radius="md"  mode="ios" id="showcard" >
        <IonCardContent className="ion-text-center">
         <IonText>
          hey
         </IonText>
         </IonCardContent>
        </IonCard>
    
        <Grid gutter="md">
          <Grid.Col>
            <IonCard height={SECONDARY_COL_HEIGHT} radius="md"  mode="ios" id="showcard" >
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonButton className="ion-text-wrap">
        <IonCardTitle>Card Title</IonCardTitle>
        </IonButton>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

   
        </IonCard>
          </Grid.Col>
          <Grid.Col span={6}>
            <IonCard height={SECONDARY_COL_HEIGHT} radius="md"  mode="ios" id="showcard"> <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
        <IonButton className="ion-text-wrap">
        <IonCardTitle>Card Title</IonCardTitle>
        </IonButton >
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      
        </IonCard>
          </Grid.Col>
          <Grid.Col span={6}>
            <IonCard height={SECONDARY_COL_HEIGHT} radius="md"  mode="ios" id="showcard" > <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
            <IonCardHeader>
        <IonButton className="ion-text-wrap">
        <IonCardTitle>Card Title</IonCardTitle>
        </IonButton>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

    
        </IonCard>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

function ButtonBaseDemo() {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
      
      {images.map((image) => (
       
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      
      ))}
     
    </Box>
  );
}
export default function Riddles(){
  const { id } = useParams();

  // Dummy riddles for each category (replace with GPT-3 generated riddles)
  

  const [currentRiddleIndex, setCurrentRiddleIndex] = useState(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [isStarted, setIsStarted] = useState(false);
  const [currentRiddle, setCurrentRiddle] = useState(true);
  const fetchRiddle = async () => {
    // Call your Netlify function here to fetch the riddle for the specified category (e.g., "world-history")
    // You can use Axios or Fetch API for this
    try {
      const response = await fetch(`YOUR_NETLIFY_FUNCTION_URL?id=${id}`);
      const data = await response.json();
      setCurrentRiddle(data); // Assuming the response contains a riddle object with 'question' and 'answers' properties
    } catch (error) {
      console.error("Error fetching riddle:", error);
    }
  };

  return (
    <>
 
 <IonButton expand="full" style={{color:"white"}}>Riddles About {id}</IonButton>
    <IonGrid>
    
     
          
           
          {!isStarted && (
              <IonButton id="riddler" expand="full" onClick={() => {
                setIsStarted(true);
                fetchRiddle(); // Fetch the riddle when the "Start" button is clicked
              }}>
                Start
              </IonButton>
            )}
         {isStarted && currentRiddle && (
         
           
              <LeadGrid/>
            
         
        )}
           
        
        
       
      </IonGrid>
    </>
  );
};

