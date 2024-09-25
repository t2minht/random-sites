import Mario from '/public/assets/characters/Mario.png';
import Luigi from '/public/assets/characters/Luigi.png';
import DrMario from '/public/assets/characters/DrMario.png';
import DonkeyKong from '/public/assets/characters/DonkeyKong.png';
import DiddyKing from '/public/assets/characters/DiddyKong.png';
import Link from '/public/assets/characters/Link.png';
import Zelda from '/public/assets/characters/Zelda.png';
import ZSS from '/public/assets/characters/ZSS.png';
import Sheik from '/public/assets/characters/Sheik.png';
import Ganondorf from '/public/assets/characters/Ganondorf.png';
import YoungLink from '/public/assets/characters/YoungLink.png';
import ToonLink from '/public/assets/characters/ToonLink.png';
import Villager from '/public/assets/characters/Villager.png';
import Samus from '/public/assets/characters/Samus.png';
import DarkSamus from '/public/assets/characters/DarkSamus.png';
import Ridley from '/public/assets/characters/Ridley.png';
import Yoshi from '/public/assets/characters/Yoshi.png';
import Kirby from '/public/assets/characters/Kirby.png';
import KingDedede from '/public/assets/characters/KingDedede.png';
import MetaKnight from '/public/assets/characters/MetaKnight.png';
import Fox from '/public/assets/characters/Fox.png';
import Falco from '/public/assets/characters/Falco.png';
import Wolf from '/public/assets/characters/Wolf.png';
import Pikachu from '/public/assets/characters/Pikachu.png';
import Pichu from '/public/assets/characters/Pichu.png';
import PiranhaPlant from '/public/assets/characters/PiranhaPlant.png';
import Jigglypuff from '/public/assets/characters/Jigglypuff.png';
import Ness from '/public/assets/characters/Ness.png';
import Lucas from '/public/assets/characters/Lucas.png';
import Ike from '/public/assets/characters/Ike.png';
import CaptainFalcon from '/public/assets/characters/CaptainFalcon.png';
import IceClimbers from '/public/assets/characters/IceClimbers.png';
import PokemonTrainer from '/public/assets/characters/PokemonTrainer.png';
import Robin from '/public/assets/characters/Robin.png';
import Lucina from '/public/assets/characters/Lucina.png';
import Chrom from '/public/assets/characters/Chrom.png';
import Roy from '/public/assets/characters/Roy.png';
import Rosalina from '/public/assets/characters/Rosalina.png';
import Byleth from '/public/assets/characters/Byleth.png';
import Pit from '/public/assets/characters/Pit.png';
import DarkPit from '/public/assets/characters/DarkPit.png';
import Palutena from '/public/assets/characters/Palutena.png';
import Olimar from '/public/assets/characters/Olimar.png';
import Simon from '/public/assets/characters/Simon.png';
import Richter from '/public/assets/characters/Richter.png';
import KingKRool from '/public/assets/characters/KingKRool.png';
import Isabelle from '/public/assets/characters/Isabelle.png';
import Incineroar from '/public/assets/characters/Incineroar.png';
import Joker from '/public/assets/characters/Joker.png';
import Hero from '/public/assets/characters/Hero.png';
import BanjoKazooie from '/public/assets/characters/BanjoKazooie.png';
import Terry from '/public/assets/characters/Terry.png';
import Mii from '/public/assets/characters/Mii.png';
import MinMin from '/public/assets/characters/MinMin.png';
import Kazuya from '/public/assets/characters/Kazuya.png';
import Sora from '/public/assets/characters/Sora.png';
import Sonic from '/public/assets/characters/Sonic.png';
import Mewtwo from '/public/assets/characters/Mewtwo.png';
import Greninja from '/public/assets/characters/Greninja.png';
import Lucario from '/public/assets/characters/Lucario.png';
import Megaman from '/public/assets/characters/Megaman.png';
import WiiFitTrainer from '/public/assets/characters/WiiFitTrainer.png';
import ROB from '/public/assets/characters/ROB.png';
import DuckHunt from '/public/assets/characters/DuckHunt.png';
import MrGameAndWatch from '/public/assets/characters/MrGameAndWatch.png';
import Mac from '/public/assets/characters/Mac.png';
import Wario from '/public/assets/characters/Wario.png';
import PacMan from '/public/assets/characters/PacMan.png';
import Shulk from '/public/assets/characters/Shulk.png';
import Cloud from '/public/assets/characters/Cloud.png';
import Bayonetta from '/public/assets/characters/Bayonetta.png';
import Corrin from '/public/assets/characters/Corrin.png';
import Ken from '/public/assets/characters/Ken.png';
import Ryu from '/public/assets/characters/Ryu.png';
import Daisy from '/public/assets/characters/Daisy.png';
import Peach from '/public/assets/characters/Peach.png';
import Inkling from '/public/assets/characters/Inkling.png';
import Snake from '/public/assets/characters/Snake.png';
import Pyra from '/public/assets/characters/Pyra.png';
import Mythra from '/public/assets/characters/Mythra.png';
import Steve from '/public/assets/characters/Steve.png';
import Sephiroth from '/public/assets/characters/Sephiroth.png';
import Marth from '/public/assets/characters/Marth.png';
import Bowser from '/public/assets/characters/Bowser.png';
import BowserJr from '/public/assets/characters/BowserJr.png';
import MiiFight from '/public/assets/characters/Mii_Fight.png';
import MiiSword from '/public/assets/characters/Mii_Sword.png';
import MiiGun from '/public/assets/characters/Mii_Gun.png';

import { MantineProvider, SimpleGrid, Image } from '@mantine/core';
import nextImage from 'next/image';

import style from '/src/app/SSBUPicker/page.module.css';

import '@mantine/core/styles.css';

var dim = 125;

export default function Home() {
    return (
      <main>
        <MantineProvider>

          <SimpleGrid
          cols= {3}
          >
            <div> <Image component= {nextImage}src={Mario} width={dim} height={dim} alt="Mario"></Image> </div>
            <div> <Image component= {nextImage}src={DonkeyKong} width={dim} height={dim} alt="DK"></Image> </div>
            <div> <Image component= {nextImage}src={Link} width={dim} height={dim} alt="Link"></Image> </div>
            <div> <Image component= {nextImage}src={Samus} width={dim} height={dim} alt="Samus"></Image> </div>
            <div> <Image component= {nextImage}src={DarkSamus} width={dim} height={dim} alt="Dark Samus"></Image> </div>
            <div> <Image component= {nextImage}src={Yoshi} width={dim} height={dim} alt="Yoshi"></Image> </div>
            <div> <Image component= {nextImage}src={Kirby} width={dim} height={dim} alt="Kirby"></Image> </div>
            <div> <Image component= {nextImage}src={Fox} width={dim} height={dim} alt="Fox"></Image> </div>
            <div> <Image component= {nextImage}src={Pikachu} width={dim} height={dim} alt="Pikachu"></Image> </div>
            <div> <Image component= {nextImage}src={Luigi} width={dim} height={dim} alt="Luigi"></Image> </div>
            <div> <Image component= {nextImage}src={Ness} width={dim} height={dim} alt="Ness"></Image> </div>
            <div> <Image component= {nextImage}src={CaptainFalcon} width={dim} height={dim} alt="Captain Falcon"></Image> </div>
            <div> <Image component= {nextImage}src={Jigglypuff} width={dim} height={dim} alt="Jigglypuff"></Image> </div>
            <div> <Image component= {nextImage}src={Peach} width={dim} height={dim} alt="Peach"></Image> </div>
            <div> <Image component= {nextImage}src={Daisy} width={dim} height={dim} alt="Daisy"></Image> </div>
            <div> <Image component= {nextImage}src={Bowser} width={dim} height={dim} alt="Bowser"></Image> </div>
            <div> <Image component= {nextImage}src={IceClimbers} width={dim} height={dim} alt="Ice Climbers"></Image> </div>
            <div> <Image component= {nextImage}src={Sheik} width={dim} height={dim} alt="Sheik"></Image> </div>
            <div> <Image component= {nextImage}src={Zelda} width={dim} height={dim} alt="Zelda"></Image> </div>
            <div> <Image component= {nextImage}src={DrMario} width={dim} height={dim} alt="Dr. Mario"></Image> </div>
            <div> <Image component= {nextImage}src={Pichu} width={dim} height={dim} alt="Pichu"></Image> </div>
            <div> <Image component= {nextImage}src={Falco} width={dim} height={dim} alt="Falco"></Image> </div>
            <div> <Image component= {nextImage}src={Marth} width={dim} height={dim} alt="Marth"></Image> </div>
            <div> <Image component= {nextImage}src={Lucina} width={dim} height={dim} alt="Lucina"></Image> </div>
            <div> <Image component= {nextImage}src={YoungLink} width={dim} height={dim} alt="Young Link"></Image> </div>
            <div> <Image component= {nextImage}src={Ganondorf} width={dim} height={dim} alt="Ganondor"></Image> </div>
            <div> <Image component= {nextImage}src={Mewtwo} width={dim} height={dim} alt="Mewtwo"></Image> </div>
            <div> <Image component= {nextImage}src={Roy} width={dim} height={dim} alt="Roy"></Image> </div>
            <div> <Image component= {nextImage}src={Chrom} width={dim} height={dim} alt="Chrom"></Image> </div>
            <div> <Image component= {nextImage}src={MrGameAndWatch} width={dim} height={dim} alt="Mr. Game & Watch"></Image> </div>
            <div> <Image component= {nextImage}src={MetaKnight} width={dim} height={dim} alt="Meta Knight"></Image> </div>
            <div> <Image component= {nextImage}src={Pit} width={dim} height={dim} alt="Pit"></Image> </div>
            <div> <Image component= {nextImage}src={DarkPit} width={dim} height={dim} alt="Dark Pit"></Image> </div>
            <div> <Image component= {nextImage}src={ZSS} width={dim} height={dim} alt="Zero Suit Samus"></Image> </div>
            <div> <Image component= {nextImage}src={Wario} width={dim} height={dim} alt="Wario"></Image> </div>
            <div> <Image component= {nextImage}src={Snake} width={dim} height={dim} alt="Snake"></Image> </div>
            <div> <Image component= {nextImage}src={Ike} width={dim} height={dim} alt="Ike"></Image> </div>
            <div> <Image component= {nextImage}src={PokemonTrainer} width={dim} height={dim} alt="Pokémon Trainer"></Image> </div>
            <div> <Image component= {nextImage}src={DiddyKing} width={dim} height={dim} alt="Diddy Kong"></Image> </div>
            <div> <Image component= {nextImage}src={Lucas} width={dim} height={dim} alt="Lucas"></Image> </div>
            <div> <Image component= {nextImage}src={Sonic} width={dim} height={dim} alt="Sonic"></Image> </div>
            <div> <Image component= {nextImage}src={KingDedede} width={dim} height={dim} alt="King Dedede"></Image> </div>
            <div> <Image component= {nextImage}src={Olimar} width={dim} height={dim} alt="Olimar"></Image> </div>
            <div> <Image component= {nextImage}src={Lucario} width={dim} height={dim} alt="Lucario"></Image> </div>
            <div> <Image component= {nextImage}src={ROB} width={dim} height={dim} alt="R.O.B."></Image> </div>
            <div> <Image component= {nextImage}src={ToonLink} width={dim} height={dim} alt="Toon Link"></Image> </div>
            <div> <Image component= {nextImage}src={Wolf} width={dim} height={dim} alt="Wolf"></Image> </div>
            <div> <Image component= {nextImage}src={Villager} width={dim} height={dim} alt="Villager"></Image> </div>
            <div> <Image component= {nextImage}src={Megaman} width={dim} height={dim} alt="Mega Man"></Image> </div>
            <div> <Image component= {nextImage}src={WiiFitTrainer} width={dim} height={dim} alt="Wii Fit"></Image> </div>
            <div> <Image component= {nextImage}src={Rosalina} width={dim} height={dim} alt="Rosalina"></Image> </div>
            <div> <Image component= {nextImage}src={Mac} width={dim} height={dim} alt="Little Mac"></Image> </div>
            <div> <Image component= {nextImage}src={Greninja} width={dim} height={dim} alt="Greninja"></Image> </div>
            <div> <Image component= {nextImage}src={MiiFight} width={dim} height={dim} alt="Mii Brawler"></Image> </div>
            <div> <Image component= {nextImage}src={MiiSword} width={dim} height={dim} alt="Mii Sowrdfighter"></Image> </div>
            <div> <Image component= {nextImage}src={MiiGun} width={dim} height={dim} alt="Mii Gunner"></Image> </div>
            <div> <Image component= {nextImage}src={Palutena} width={dim} height={dim} alt="Palutena"></Image> </div>
            <div> <Image component= {nextImage}src={PacMan} width={dim} height={dim} alt="Pac-Man"></Image> </div>
            <div> <Image component= {nextImage}src={Robin} width={dim} height={dim} alt="Robin"></Image> </div>
            <div> <Image component= {nextImage}src={Shulk} width={dim} height={dim} alt="Shulk"></Image> </div>
            <div> <Image component= {nextImage}src={BowserJr} width={dim} height={dim} alt="Bowser Jr."></Image> </div>
            <div> <Image component= {nextImage}src={DuckHunt} width={dim} height={dim} alt="Duck Hunt"></Image> </div>
            <div> <Image component= {nextImage}src={Ryu} width={dim} height={dim} alt="Ryu"></Image> </div>
            <div> <Image component= {nextImage}src={Ken} width={dim} height={dim} alt="Ken"></Image> </div>
            <div> <Image component= {nextImage}src={Cloud} width={dim} height={dim} alt="Cloud"></Image> </div>
            <div> <Image component= {nextImage}src={Corrin} width={dim} height={dim} alt="Corrin"></Image> </div>
            <div> <Image component= {nextImage}src={Bayonetta} width={dim} height={dim} alt="Bayonetta"></Image> </div>
            <div> <Image component= {nextImage}src={Inkling} width={dim} height={dim} alt="Inkling"></Image> </div>
            <div> <Image component= {nextImage}src={Ridley} width={dim} height={dim} alt="Ridley"></Image> </div>
            <div> <Image component= {nextImage}src={Simon} width={dim} height={dim} alt="Simon"></Image> </div>
            <div> <Image component= {nextImage}src={Richter} width={dim} height={dim} alt="Richter"></Image> </div>
            <div> <Image component= {nextImage}src={KingKRool} width={dim} height={dim} alt="King K. Rool"></Image> </div>
            <div> <Image component= {nextImage}src={Isabelle} width={dim} height={dim} alt="Isabelle"></Image> </div>
            <div> <Image component= {nextImage}src={Incineroar} width={dim} height={dim} alt="Incineroar"></Image> </div>
            <div> <Image component= {nextImage}src={PiranhaPlant} width={dim} height={dim} alt="Piranha Plant"></Image> </div>
            <div> <Image component= {nextImage}src={Joker} width={dim} height={dim} alt="Joker"></Image> </div>
            <div> <Image component= {nextImage}src={Hero} width={dim} height={dim} alt="Hero"></Image> </div>
            <div> <Image component= {nextImage}src={BanjoKazooie} width={dim} height={dim} alt="Banjo & Kazooie"></Image> </div>
            <div> <Image component= {nextImage}src={Terry} width={dim} height={dim} alt="Terry"></Image> </div>
            <div> <Image component= {nextImage}src={Byleth} width={dim} height={dim} alt="Byleth"></Image> </div>
            <div> <Image component= {nextImage}src={MinMin} width={dim} height={dim} alt="Min Min"></Image> </div>
            <div> <Image component= {nextImage}src={Steve} width={dim} height={dim} alt="Steve"></Image> </div>
            <div> <Image component= {nextImage}src={Sephiroth} width={dim} height={dim} alt="Sephiroth"></Image> </div>
            <div> <Image component= {nextImage}src={Pyra} width={dim} height={dim} alt="Pyra"></Image> </div>
            <div> <Image component= {nextImage}src={Mythra} width={dim} height={dim} alt="Mythra"></Image> </div>
            <div> <Image component= {nextImage}src={Kazuya} width={dim} height={dim} alt="Kazuya"></Image> </div>
            <div> <Image component= {nextImage}src={Sora} width={dim} height={dim} alt="Sora"></Image> </div>
          </SimpleGrid>  
          

        </MantineProvider>      
      </main>
    );
  }
  