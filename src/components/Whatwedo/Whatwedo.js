import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Itemcard from '../ItemCard/ItemCard'
// import Jon from "../../public/images/jonSnow.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  const [info, setInfo] = useState([
    { 
      name: 'Six',
      desc: 'Six (not to be confused with the Girl in the Yellow Raincoat) is a smart and hardy girl of about nine, whose main motif is a yellow raincoat. Throughout the entire universe of the franchise, Six is trying to survive in a world filled with cruel monsters, seeking to destroy her by any means.',
      link: '/images/Six.jpg',
      lastUpdated: '4th April 2021',
      moreInfo: 'Six is much smaller than the adult characters of the series, being barely a third of their height with an extremely small, thin frame. She wears a bright yellow raincoat that ends just above her knees with three buttons, two pockets, and a rhombus-shaped hood. Up close, she has black bob-cut hair with bangs that completely obscure the top half of her face, only revealing her tiny nose and mouth. Her feet and hands are bare. Her only possession is a cigarette lighter she (presumably) keeps in her pocket when not in use.'
  },
  { 
    name: 'Mono',
    desc: 'Mono originally was a kind and helpful boy who showed compassion to others. All of this changed when he accompanied a girl named Six on a journey to the Signal Tower.',
    link: '/images/Mono.jpg',
    lastUpdated: '4th June 2021',
    moreInfo: 'Mono is a short and scrawny pale-skinned boy whose face is hidden by a light brown paper bag with two round eye holes that enable him to see. He wears a one buttoned olive-colored trench coat that reaches below his knees above a brownish-gray shirt tucked into his long brownish-gray pants rolled up at the end. His hands and feet are bare. Mono can also wear items like a key on the side of his coat.'
  },
  { 
    name: 'Roger The Janitor',
    desc: 'The Janitor, also known as Roger (in the game files), is the first antagonist of The Maw that Six encounters, and one of many individuals that oppose her on her journey in Little Nightmares. He\'s also the second antagonist encountered in Secrets of the Maw. He appears briefly in the Prison and is the main antagonist of the Lair and the Hideaway.',
    link: '/images/Roger.jpg',
    lastUpdated: '4th April 2021',
    moreInfo: 'The Janitor is a male humanoid monster whose proportions are greatly warped and exaggerated compared to a normal human- his head is massive and melon-like, connected to his torso by a wrinkled turkey neck and bending his back into a hunch by its sheer weight. The most striking feature of his head is how the top half of its skin seems to have been partially peeled off and sags down over his eyes like an old sock (seemingly held up by his protruding ears), revealing the top of his bare skull and leaving him blinded by the folds of flesh. His mouth is stretched wide from ear to ear, and almost always wears a sinister grin while grinding his many small, flat teeth.'
  },
  { 
    name: 'Twin Chefs',
    desc: 'The Twin Chefs are the second antagonists encountered in Six\'s journey to escape The Maw in Little Nightmares. They are the main antagonists of the Kitchen and one of them is briefly encountered in the Guest Area.',
    link: '/images/Twinchefs.jpg',
    lastUpdated: '20th July 2021',
    moreInfo: 'The Twin Chefs are a pair of obese humanoid monsters who are almost identical in appearance: both have almost toddler-like proportions with stubby legs and thick sausage-like arms with pudgy fingers, the skin of which is heavily calloused (most likely from years of cooking and dishwashing). They also have small but protruding ears and short, greasy brown hair. Both wear tall white chef\'s hats and white uniforms with aprons splattered with blood and filth, along with blue trousers and brown shoes.'
  },
  { 
    name: 'The Lady',
    desc: 'The Lady serves as the main antagonist of Little Nightmares. She was the proprietress of The Maw and was said to cast the spell that keeps it running. She is the main and final antagonist of Little Nightmares in the Lady\'s Quarters and the Residence from Secrets of the Maw.',
    link: '/images/Lady2.jpg',
    lastUpdated: '2nd April 2021',
    moreInfo: 'The Lady is an unnaturally tall, slender woman with raven-black hair that she keeps partially wrapped in a bun. She is adorned in a long dark brown kimono, which seems to trail moderately behind her when she walks. Her face is perpetually covered by a white porcelain mask similar to a Japanese Noh mask, through which two lifeless black eyes stare out. In spite of nearly all of her body being covered, the skin tone on her neck seems to be a pale demitasse color.'
  },
  { 
    name: 'Thin Man',
    desc: 'The Thin Man serves as the main antagonist of Little Nightmares II, mainly appearing in televisions across the Pale City from The Transmission. He debuted during the end credits of Secrets of the Maw, and makes his first full appearance in the Pale City chapter, of which he is also the main antagonist.',
    link: 'images/Thin.jpg',
    lastUpdated: '18th January 2021',
    moreInfo: 'The Thin Man is a tall, slender being adorned in a black suit and hat, which ominously steeps his eyes in shadow. Like his grayscale wardrobe, his bleak, wrinkled skin is similarly colorless, calling to mind black-and-white films of the 1940s-50s - a possible allusion to his ability to influence televisions. His stature is crooked and misaligned, with cheekbones and closed eyes that appear sunken and emaciated, giving him a corpse-like appearance."'
  }
]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Itemcard attr={info[0]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[1]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[2]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[3]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[4]}></Itemcard>
        </Grid>
        <Grid item xs={4}>
          <Itemcard attr={info[5]}></Itemcard>
        </Grid>
      </Grid>
    </div>
  );
}
