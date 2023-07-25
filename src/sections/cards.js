import React from 'react';
import { IonButton, IonRow, IonCol, IonCardSubtitle } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react';

const data = [
  {
    image: 'https://rare-gallery.com/thumbs/356469-4k-wallpaper.jpg',
    title: 'Batman',
    category: 'Explore',
    description: "Step into the world of the legendary vigilante and detective Batman. Engage in thrilling conversations with the Dark Knight, where you can seek his advice, solve mysteries, and strategize.",
  },
  {
    image: 'https://images.hdqwalls.com/wallpapers/bthumb/superman-4k-3l.jpg',
    title: 'Superman',
    category: 'Explore',
    description: "Soar through the skies with Superman, the iconic superhero from Krypton. Engage in empowering dialogues with the Man of Steel, where you can discuss matters of justice, heroism, and even explore the wonders of the man of steel himself.",
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg',
    title: 'Isaac Newton',
    category: 'Education',
    description: "Embark on an intellectual journey with Sir Isaac Newton, the renowned physicist, and mathematician. Have enlightening conversations with Newton, where you can delve into the depths of science, explore the laws of motion, and understand the wonders of the cosmos.",
  },
  {
    image: 'https://malevus.com/wp-content/uploads/2022/09/einstein.jpeg',
    title: 'Einstein',
    category: 'Education',
    description: "Join the genius physicist Albert Einstein in unraveling the mysteries of the universe. Engage in thought-provoking discussions, explore the theory of relativity, and dive into the fascinating world of theoretical physics alongside one of history's greatest minds.",
  },
  {
    image: 'https://www.lucasfilm.com/app/uploads/Indiana-Jones-Teaser-OG-1024x535-1.jpg',
    title: 'Indiana Jones',
    category: 'Explore',
    description: "Embark on thrilling adventures with the adventurous archaeologist Indiana Jones. Engage in exciting conversations, discover ancient relics, and uncover the secrets of history while experiencing the thrill of exploration and discovery.",
  },
  {
    image: 'https://malevus.com/wp-content/uploads/2022/09/Alexander-the-Great.jpg',
    title: 'Alexander "The Great"',
    category: 'Discover',
    description: "Travel back in time to the ancient world and join Alexander the Great in his legendary conquests. Engage in dialogues with this remarkable leader, experience the thrill of conquering new territories, and gain inspiration from his ambitious journey.",
  },
];

function Card({ image, category, title, description }) {
  return (
    <IonCard mode="ios" id="showcard" color="light">
      <div class="card-header" style={{ backgroundImage: `url(${image})` }}></div>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{category}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{description}</IonCardContent>
      <IonCardContent>
        <IonButton disabled>coming soon</IonButton>
      </IonCardContent>
    </IonCard>
  );
}

function Cardo() {
  return (
    <>
      {data.map(item => (
        <IonCol key={item.title} size="12" sizeMd="6">
          <Card
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
          />
        </IonCol>
      ))}
    </>
  );
}

export default function Cards() {
  return (
    <IonRow>
      <Cardo />
    </IonRow>
  );
}
