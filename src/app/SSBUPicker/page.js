'use client';
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

import { MantineProvider, SimpleGrid, Flex, Image, Button } from '@mantine/core';
import nextImage from 'next/image';
import { useState } from 'react';

import style from '/src/app/SSBUPicker/page.module.css';

import '@mantine/core/styles.css';

export default function Home() {
  const [showMario, setMario] = useState(true);
  const [showDonkeyKong, setDonkeyKong] = useState(true);
  const [showLink, setLink] = useState(true);
  const [showSamus, setSamus] = useState(true);
  const [showDarkSamus, setDarkSamus] = useState(true);
  const [showYoshi, setYoshi] = useState(true);
  const [showKirby, setKirby] = useState(true);
  const [showFox, setFox] = useState(true);
  const [showPikachu, setPikachu] = useState(true);
  const [showLuigi, setLuigi] = useState(true);
  const [showNess, setNess] = useState(true);
  const [showCaptainFalcon, setCaptainFalcon] = useState(true);
  const [showJigglypuff, setJigglypuff] = useState(true);
  const [showPeach, setPeach] = useState(true);
  const [showDaisy, setDaisy] = useState(true);
  const [showBowser, setBowser] = useState(true);
  const [showIceClimbers, setIceClimbers] = useState(true);
  const [showSheik, setSheik] = useState(true);
  const [showZelda, setZelda] = useState(true);
  const [showDrMario, setDrMario] = useState(true);
  const [showPichu, setPichu] = useState(true);
  const [showFalco, setFalco] = useState(true);
  const [showMarth, setMarth] = useState(true);
  const [showLucina, setLucina] = useState(true);
  const [showYoungLink, setYoungLink] = useState(true);
  const [showGanondorf, setGanondorf] = useState(true);
  const [showMewtwo, setMewtwo] = useState(true);
  const [showRoy, setRoy] = useState(true);
  const [showChrom, setChrom] = useState(true);
  const [showMrGameAndWatch, setMrGameAndWatch] = useState(true);
  const [showMetaKnight, setMetaKnight] = useState(true);
  const [showPit, setPit] = useState(true);
  const [showDarkPit, setDarkPit] = useState(true);
  const [showZSS, setZSS] = useState(true);
  const [showWario, setWario] = useState(true);
  const [showSnake, setSnake] = useState(true);
  const [showIke, setIke] = useState(true);
  const [showPokemonTrainer, setPokemonTrainer] = useState(true);
  const [showDiddyKing, setDiddyKing] = useState(true);
  const [showLucas, setLucas] = useState(true);
  const [showSonic, setSonic] = useState(true);
  const [showKingDedede, setKingDedede] = useState(true);
  const [showOlimar, setOlimar] = useState(true);
  const [showLucario, setLucario] = useState(true);
  const [showROB, setROB] = useState(true);
  const [showToonLink, setToonLink] = useState(true);
  const [showWolf, setWolf] = useState(true);
  const [showVillager, setVillager] = useState(true);
  const [showMegaman, setMegaman] = useState(true);
  const [showWiiFitTrainer, setWiiFitTrainer] = useState(true);
  const [showRosalina, setRosalina] = useState(true);
  const [showMac, setMac] = useState(true);
  const [showGreninja, setGreninja] = useState(true);
  const [showMiiFight, setMiiFight] = useState(true);
  const [showMiiSword, setMiiSword] = useState(true);
  const [showMiiGun, setMiiGun] = useState(true);
  const [showPalutena, setPalutena] = useState(true);
  const [showPacMan, setPacMan] = useState(true);
  const [showRobin, setRobin] = useState(true);
  const [showShulk, setShulk] = useState(true);
  const [showBowserJr, setBowserJr] = useState(true);
  const [showDuckHunt, setDuckHunt] = useState(true);
  const [showRyu, setRyu] = useState(true);
  const [showKen, setKen] = useState(true);
  const [showCloud, setCloud] = useState(true);
  const [showCorrin, setCorrin] = useState(true);
  const [showBayonetta, setBayonetta] = useState(true);
  const [showInkling, setInkling] = useState(true);
  const [showRidley, setRidley] = useState(true);
  const [showSimon, setSimon] = useState(true);
  const [showRichter, setRichter] = useState(true);
  const [showKingKRool, setKingKRool] = useState(true);
  const [showIsabelle, setIsabelle] = useState(true);
  const [showIncineroar, setIncineroar] = useState(true);
  const [showPiranhaPlant, setPiranhaPlant] = useState(true);
  const [showJoker, setJoker] = useState(true);
  const [showHero, setHero] = useState(true);
  const [showBanjoKazooie, setBanjoKazooie] = useState(true);
  const [showTerry, setTerry] = useState(true);
  const [showByleth, setByleth] = useState(true);
  const [showMinMin, setMinMin] = useState(true);
  const [showSteve, setSteve] = useState(true);
  const [showSephiroth, setSephiroth] = useState(true);
  const [showPyra, setPyra] = useState(true);
  const [showMythra, setMythra] = useState(true);
  const [showKazuya, setKazuya] = useState(true);
  const [showSora, setSora] = useState(true);

  var dim = 125;


  function reset(event){
    setMario(true);
    setDonkeyKong(true);
    setLink(true);
    setSamus(true);
    setDarkSamus(true);
    setYoshi(true);
    setKirby(true);
    setFox(true);
    setPikachu(true);
    setLuigi(true);
    setNess(true);
    setCaptainFalcon(true);
    setJigglypuff(true);
    setPeach(true);
    setDaisy(true);
    setBowser(true);
    setIceClimbers(true);
    setSheik(true);
    setZelda(true);
    setDrMario(true);
    setPichu(true);
    setFalco(true);
    setMarth(true);
    setLucina(true);
    setYoungLink(true);
    setGanondorf(true);
    setMewtwo(true);
    setRoy(true);
    setChrom(true);
    setMrGameAndWatch(true);
    setMetaKnight(true);
    setPit(true);
    setDarkPit(true);
    setZSS(true);
    setWario(true);
    setSnake(true);
    setIke(true);
    setPokemonTrainer(true);
    setDiddyKing(true);
    setLucas(true);
    setSonic(true);
    setKingDedede(true);
    setOlimar(true);
    setLucario(true);
    setROB(true);
    setToonLink(true);
    setWolf(true);
    setVillager(true);
    setMegaman(true);
    setWiiFitTrainer(true);
    setRosalina(true);
    setMac(true);
    setGreninja(true);
    setMiiFight(true);
    setMiiSword(true);
    setMiiGun(true);
    setPalutena(true);
    setPacMan(true);
    setRobin(true);
    setShulk(true);
    setBowserJr(true);
    setDuckHunt(true);
    setRyu(true);
    setKen(true);
    setCloud(true);
    setCorrin(true);
    setBayonetta(true);
    setInkling(true);
    setRidley(true);
    setSimon(true);
    setRichter(true);
    setKingKRool(true);
    setIsabelle(true);
    setIncineroar(true);
    setPiranhaPlant(true);
    setJoker(true);
    setHero(true);
    setBanjoKazooie(true);
    setTerry(true);
    setByleth(true);
    setMinMin(true);
    setSteve(true);
    setSephiroth(true);
    setPyra(true);
    setMythra(true);
    setKazuya(true);
    setSora(true);
  }

  return (
    <main>
      <MantineProvider>
        <Button 
          variant="filled"
          onClick={(event) => reset(event)}
        >
          Reset
        </Button>
        <SimpleGrid
        cols= {4}
        >
          {showMario          && <div> <Image component= {nextImage} onClick = {() => {console.log("Mario         ");setMario(false);}}src={Mario         } width={dim} height={dim} alt="Mario"></Image> </div>}
          {showDonkeyKong     && <div> <Image component= {nextImage} onClick = {() => {console.log("DonkeyKong    ");setDonkeyKong(false);}}src={DonkeyKong    } width={dim} height={dim} alt="DK"></Image> </div>}
          {showLink           && <div> <Image component= {nextImage} onClick = {() => {console.log("Link          ");setLink(false);}}src={Link          } width={dim} height={dim} alt="Link"></Image> </div>}
          {showSamus          && <div> <Image component= {nextImage} onClick = {() => {console.log("Samus         ");setSamus(false);}}src={Samus         } width={dim} height={dim} alt="Samus"></Image> </div>}
          {showDarkSamus      && <div> <Image component= {nextImage} onClick = {() => {console.log("DarkSamus     ");setDarkSamus(false);}}src={DarkSamus     } width={dim} height={dim} alt="Dark Samus"></Image> </div>}
          {showYoshi          && <div> <Image component= {nextImage} onClick = {() => {console.log("Yoshi         ");setYoshi(false);}}src={Yoshi         } width={dim} height={dim} alt="Yoshi"></Image> </div>}
          {showKirby          && <div> <Image component= {nextImage} onClick = {() => {console.log("Kirby         ");setKirby(false);}}src={Kirby         } width={dim} height={dim} alt="Kirby"></Image> </div>}
          {showFox            && <div> <Image component= {nextImage} onClick = {() => {console.log("Fox           ");setFox(false);}}src={Fox           } width={dim} height={dim} alt="Fox"></Image> </div>}
          {showPikachu        && <div> <Image component= {nextImage} onClick = {() => {console.log("Pikachu       ");setPikachu(false);}}src={Pikachu       } width={dim} height={dim} alt="Pikachu"></Image> </div>}
          {showLuigi          && <div> <Image component= {nextImage} onClick = {() => {console.log("Luigi         ");setLuigi(false);}}src={Luigi         } width={dim} height={dim} alt="Luigi"></Image> </div>}
          {showNess           && <div> <Image component= {nextImage} onClick = {() => {console.log("Ness          ");setNess(false);}}src={Ness          } width={dim} height={dim} alt="Ness"></Image> </div>}
          {showCaptainFalcon  && <div> <Image component= {nextImage} onClick = {() => {console.log("CaptainFalcon ");setCaptainFalcon(false);}}src={CaptainFalcon } width={dim} height={dim} alt="Captain Falcon"></Image> </div>}
          {showJigglypuff     && <div> <Image component= {nextImage} onClick = {() => {console.log("Jigglypuff    ");setJigglypuff(false);}}src={Jigglypuff    } width={dim} height={dim} alt="Jigglypuff"></Image> </div>}
          {showPeach          && <div> <Image component= {nextImage} onClick = {() => {console.log("Peach         ");setPeach(false);}}src={Peach         } width={dim} height={dim} alt="Peach"></Image> </div>}
          {showDaisy          && <div> <Image component= {nextImage} onClick = {() => {console.log("Daisy         ");setDaisy(false);}}src={Daisy         } width={dim} height={dim} alt="Daisy"></Image> </div>}
          {showBowser         && <div> <Image component= {nextImage} onClick = {() => {console.log("Bowser        ");setBowser(false);}}src={Bowser        } width={dim} height={dim} alt="Bowser"></Image> </div>}
          {showIceClimbers    && <div> <Image component= {nextImage} onClick = {() => {console.log("IceClimbers   ");setIceClimbers(false);}}src={IceClimbers   } width={dim} height={dim} alt="Ice Climbers"></Image> </div>}
          {showSheik          && <div> <Image component= {nextImage} onClick = {() => {console.log("Sheik         ");setSheik(false);}}src={Sheik         } width={dim} height={dim} alt="Sheik"></Image> </div>}
          {showZelda          && <div> <Image component= {nextImage} onClick = {() => {console.log("Zelda         ");setZelda(false);}}src={Zelda         } width={dim} height={dim} alt="Zelda"></Image> </div>}
          {showDrMario        && <div> <Image component= {nextImage} onClick = {() => {console.log("DrMario       ");setDrMario(false);}}src={DrMario       } width={dim} height={dim} alt="Dr. Mario"></Image> </div>}
          {showPichu          && <div> <Image component= {nextImage} onClick = {() => {console.log("Pichu         ");setPichu(false);}}src={Pichu         } width={dim} height={dim} alt="Pichu"></Image> </div>}
          {showFalco          && <div> <Image component= {nextImage} onClick = {() => {console.log("Falco         ");setFalco(false);}}src={Falco         } width={dim} height={dim} alt="Falco"></Image> </div>}
          {showMarth          && <div> <Image component= {nextImage} onClick = {() => {console.log("Marth         ");setMarth(false);}}src={Marth         } width={dim} height={dim} alt="Marth"></Image> </div>}
          {showLucina         && <div> <Image component= {nextImage} onClick = {() => {console.log("Lucina        ");setLucina(false);}}src={Lucina        } width={dim} height={dim} alt="Lucina"></Image> </div>}
          {showYoungLink      && <div> <Image component= {nextImage} onClick = {() => {console.log("YoungLink     ");setYoungLink(false);}}src={YoungLink     } width={dim} height={dim} alt="Young Link"></Image> </div>}
          {showGanondorf      && <div> <Image component= {nextImage} onClick = {() => {console.log("Ganondorf     ");setGanondorf(false);}}src={Ganondorf     } width={dim} height={dim} alt="Ganondor"></Image> </div>}
          {showMewtwo         && <div> <Image component= {nextImage} onClick = {() => {console.log("Mewtwo        ");setMewtwo(false);}}src={Mewtwo        } width={dim} height={dim} alt="Mewtwo"></Image> </div>}
          {showRoy            && <div> <Image component= {nextImage} onClick = {() => {console.log("Roy           ");setRoy(false);}}src={Roy           } width={dim} height={dim} alt="Roy"></Image> </div>}
          {showChrom          && <div> <Image component= {nextImage} onClick = {() => {console.log("Chrom         ");setChrom(false);}}src={Chrom         } width={dim} height={dim} alt="Chrom"></Image> </div>}
          {showMrGameAndWatch && <div> <Image component= {nextImage} onClick = {() => {console.log("MrGameAndWatch");setMrGameAndWatch(false);}}src={MrGameAndWatch} width={dim} height={dim} alt="Mr. Game & Watch"></Image> </div>}
          {showMetaKnight     && <div> <Image component= {nextImage} onClick = {() => {console.log("MetaKnight    ");setMetaKnight(false);}}src={MetaKnight    } width={dim} height={dim} alt="Meta Knight"></Image> </div>}
          {showPit            && <div> <Image component= {nextImage} onClick = {() => {console.log("Pit           ");setPit(false);}}src={Pit           } width={dim} height={dim} alt="Pit"></Image> </div>}
          {showDarkPit        && <div> <Image component= {nextImage} onClick = {() => {console.log("DarkPit       ");setDarkPit(false);}}src={DarkPit       } width={dim} height={dim} alt="Dark Pit"></Image> </div>}
          {showZSS            && <div> <Image component= {nextImage} onClick = {() => {console.log("ZSS           ");setZSS(false);}}src={ZSS           } width={dim} height={dim} alt="Zero Suit Samus"></Image> </div>}
          {showWario          && <div> <Image component= {nextImage} onClick = {() => {console.log("Wario         ");setWario(false);}}src={Wario         } width={dim} height={dim} alt="Wario"></Image> </div>}
          {showSnake          && <div> <Image component= {nextImage} onClick = {() => {console.log("Snake         ");setSnake(false);}}src={Snake         } width={dim} height={dim} alt="Snake"></Image> </div>}
          {showIke            && <div> <Image component= {nextImage} onClick = {() => {console.log("Ike           ");setIke(false);}}src={Ike           } width={dim} height={dim} alt="Ike"></Image> </div>}
          {showPokemonTrainer && <div> <Image component= {nextImage} onClick = {() => {console.log("PokemonTrainer");setPokemonTrainer(false);}}src={PokemonTrainer} width={dim} height={dim} alt="Pokémon Trainer"></Image> </div>}
          {showDiddyKing      && <div> <Image component= {nextImage} onClick = {() => {console.log("DiddyKing     ");setDiddyKing(false);}}src={DiddyKing     } width={dim} height={dim} alt="Diddy Kong"></Image> </div>}
          {showLucas          && <div> <Image component= {nextImage} onClick = {() => {console.log("Lucas         ");setLucas(false);}}src={Lucas         } width={dim} height={dim} alt="Lucas"></Image> </div>}
          {showSonic          && <div> <Image component= {nextImage} onClick = {() => {console.log("Sonic         ");setSonic(false);}}src={Sonic         } width={dim} height={dim} alt="Sonic"></Image> </div>}
          {showKingDedede     && <div> <Image component= {nextImage} onClick = {() => {console.log("KingDedede    ");setKingDedede(false);}}src={KingDedede    } width={dim} height={dim} alt="King Dedede"></Image> </div>}
          {showOlimar         && <div> <Image component= {nextImage} onClick = {() => {console.log("Olimar        ");setOlimar(false);}}src={Olimar        } width={dim} height={dim} alt="Olimar"></Image> </div>}
          {showLucario        && <div> <Image component= {nextImage} onClick = {() => {console.log("Lucario       ");setLucario(false);}}src={Lucario       } width={dim} height={dim} alt="Lucario"></Image> </div>}
          {showROB            && <div> <Image component= {nextImage} onClick = {() => {console.log("ROB           ");setROB(false);}}src={ROB           } width={dim} height={dim} alt="R.O.B."></Image> </div>}
          {showToonLink       && <div> <Image component= {nextImage} onClick = {() => {console.log("ToonLink      ");setToonLink(false);}}src={ToonLink      } width={dim} height={dim} alt="Toon Link"></Image> </div>}
          {showWolf           && <div> <Image component= {nextImage} onClick = {() => {console.log("Wolf          ");setWolf(false);}}src={Wolf          } width={dim} height={dim} alt="Wolf"></Image> </div>}
          {showVillager       && <div> <Image component= {nextImage} onClick = {() => {console.log("Villager      ");setVillager(false);}}src={Villager      } width={dim} height={dim} alt="Villager"></Image> </div>}
          {showMegaman        && <div> <Image component= {nextImage} onClick = {() => {console.log("Megaman       ");setMegaman(false);}}src={Megaman       } width={dim} height={dim} alt="Mega Man"></Image> </div>}
          {showWiiFitTrainer  && <div> <Image component= {nextImage} onClick = {() => {console.log("WiiFitTrainer ");setWiiFitTrainer(false);}}src={WiiFitTrainer } width={dim} height={dim} alt="Wii Fit"></Image> </div>}
          {showRosalina       && <div> <Image component= {nextImage} onClick = {() => {console.log("Rosalina      ");setRosalina(false);}}src={Rosalina      } width={dim} height={dim} alt="Rosalina"></Image> </div>}
          {showMac            && <div> <Image component= {nextImage} onClick = {() => {console.log("Mac           ");setMac(false);}}src={Mac           } width={dim} height={dim} alt="Little Mac"></Image> </div>}
          {showGreninja       && <div> <Image component= {nextImage} onClick = {() => {console.log("Greninja      ");setGreninja(false);}}src={Greninja      } width={dim} height={dim} alt="Greninja"></Image> </div>}
          {showMiiFight       && <div> <Image component= {nextImage} onClick = {() => {console.log("MiiFight      ");setMiiFight(false);}}src={MiiFight      } width={dim} height={dim} alt="Mii Brawler"></Image> </div>}
          {showMiiSword       && <div> <Image component= {nextImage} onClick = {() => {console.log("MiiSword      ");setMiiSword(false);}}src={MiiSword      } width={dim} height={dim} alt="Mii Sowrdfighter"></Image> </div>}
          {showMiiGun         && <div> <Image component= {nextImage} onClick = {() => {console.log("MiiGun        ");setMiiGun(false);}}src={MiiGun        } width={dim} height={dim} alt="Mii Gunner"></Image> </div>}
          {showPalutena       && <div> <Image component= {nextImage} onClick = {() => {console.log("Palutena      ");setPalutena(false);}}src={Palutena      } width={dim} height={dim} alt="Palutena"></Image> </div>}
          {showPacMan         && <div> <Image component= {nextImage} onClick = {() => {console.log("PacMan        ");setPacMan(false);}}src={PacMan        } width={dim} height={dim} alt="Pac-Man"></Image> </div>}
          {showRobin          && <div> <Image component= {nextImage} onClick = {() => {console.log("Robin         ");setRobin(false);}}src={Robin         } width={dim} height={dim} alt="Robin"></Image> </div>}
          {showShulk          && <div> <Image component= {nextImage} onClick = {() => {console.log("Shulk         ");setShulk(false);}}src={Shulk         } width={dim} height={dim} alt="Shulk"></Image> </div>}
          {showBowserJr       && <div> <Image component= {nextImage} onClick = {() => {console.log("BowserJr      ");setBowserJr(false);}}src={BowserJr      } width={dim} height={dim} alt="Bowser Jr."></Image> </div>}
          {showDuckHunt       && <div> <Image component= {nextImage} onClick = {() => {console.log("DuckHunt      ");setDuckHunt(false);}}src={DuckHunt      } width={dim} height={dim} alt="Duck Hunt"></Image> </div>}
          {showRyu            && <div> <Image component= {nextImage} onClick = {() => {console.log("Ryu           ");setRyu(false);}}src={Ryu           } width={dim} height={dim} alt="Ryu"></Image> </div>}
          {showKen            && <div> <Image component= {nextImage} onClick = {() => {console.log("Ken           ");setKen(false);}}src={Ken           } width={dim} height={dim} alt="Ken"></Image> </div>}
          {showCloud          && <div> <Image component= {nextImage} onClick = {() => {console.log("Cloud         ");setCloud(false);}}src={Cloud         } width={dim} height={dim} alt="Cloud"></Image> </div>}
          {showCorrin         && <div> <Image component= {nextImage} onClick = {() => {console.log("Corrin        ");setCorrin(false);}}src={Corrin        } width={dim} height={dim} alt="Corrin"></Image> </div>}
          {showBayonetta      && <div> <Image component= {nextImage} onClick = {() => {console.log("Bayonetta     ");setBayonetta(false);}}src={Bayonetta     } width={dim} height={dim} alt="Bayonetta"></Image> </div>}
          {showInkling        && <div> <Image component= {nextImage} onClick = {() => {console.log("Inkling       ");setInkling(false);}}src={Inkling       } width={dim} height={dim} alt="Inkling"></Image> </div>}
          {showRidley         && <div> <Image component= {nextImage} onClick = {() => {console.log("Ridley        ");setRidley(false);}}src={Ridley        } width={dim} height={dim} alt="Ridley"></Image> </div>}
          {showSimon          && <div> <Image component= {nextImage} onClick = {() => {console.log("Simon         ");setSimon(false);}}src={Simon         } width={dim} height={dim} alt="Simon"></Image> </div>}
          {showRichter        && <div> <Image component= {nextImage} onClick = {() => {console.log("Richter       ");setRichter(false);}}src={Richter       } width={dim} height={dim} alt="Richter"></Image> </div>}
          {showKingKRool      && <div> <Image component= {nextImage} onClick = {() => {console.log("KingKRool     ");setKingKRool(false);}}src={KingKRool     } width={dim} height={dim} alt="King K. Rool"></Image> </div>}
          {showIsabelle       && <div> <Image component= {nextImage} onClick = {() => {console.log("Isabelle      ");setIsabelle(false);}}src={Isabelle      } width={dim} height={dim} alt="Isabelle"></Image> </div>}
          {showIncineroar     && <div> <Image component= {nextImage} onClick = {() => {console.log("Incineroar    ");setIncineroar(false);}}src={Incineroar    } width={dim} height={dim} alt="Incineroar"></Image> </div>}
          {showPiranhaPlant   && <div> <Image component= {nextImage} onClick = {() => {console.log("PiranhaPlant  ");setPiranhaPlant(false);}}src={PiranhaPlant  } width={dim} height={dim} alt="Piranha Plant"></Image> </div>}
          {showJoker          && <div> <Image component= {nextImage} onClick = {() => {console.log("Joker         ");setJoker(false);}}src={Joker         } width={dim} height={dim} alt="Joker"></Image> </div>}
          {showHero           && <div> <Image component= {nextImage} onClick = {() => {console.log("Hero          ");setHero(false);}}src={Hero          } width={dim} height={dim} alt="Hero"></Image> </div>}
          {showBanjoKazooie   && <div> <Image component= {nextImage} onClick = {() => {console.log("BanjoKazooie  ");setBanjoKazooie(false);}}src={BanjoKazooie  } width={dim} height={dim} alt="Banjo & Kazooie"></Image> </div>}
          {showTerry          && <div> <Image component= {nextImage} onClick = {() => {console.log("Terry         ");setTerry(false);}}src={Terry         } width={dim} height={dim} alt="Terry"></Image> </div>}
          {showByleth         && <div> <Image component= {nextImage} onClick = {() => {console.log("Byleth        ");setByleth(false);}}src={Byleth        } width={dim} height={dim} alt="Byleth"></Image> </div>}
          {showMinMin         && <div> <Image component= {nextImage} onClick = {() => {console.log("MinMin        ");setMinMin(false);}}src={MinMin        } width={dim} height={dim} alt="Min Min"></Image> </div>}
          {showSteve          && <div> <Image component= {nextImage} onClick = {() => {console.log("Steve         ");setSteve(false);}}src={Steve         } width={dim} height={dim} alt="Steve"></Image> </div>}
          {showSephiroth      && <div> <Image component= {nextImage} onClick = {() => {console.log("Sephiroth     ");setSephiroth(false);}}src={Sephiroth     } width={dim} height={dim} alt="Sephiroth"></Image> </div>}
          {showPyra           && <div> <Image component= {nextImage} onClick = {() => {console.log("Pyra          ");setPyra(false);}}src={Pyra          } width={dim} height={dim} alt="Pyra"></Image> </div>}
          {showMythra         && <div> <Image component= {nextImage} onClick = {() => {console.log("Mythra        ");setMythra(false);}}src={Mythra        } width={dim} height={dim} alt="Mythra"></Image> </div>}
          {showKazuya         && <div> <Image component= {nextImage} onClick = {() => {console.log("Kazuya        ");setKazuya(false);}}src={Kazuya        } width={dim} height={dim} alt="Kazuya"></Image> </div>}
          {showSora           && <div> <Image component= {nextImage} onClick = {() => {console.log("Sora          ");setSora(false);}}src={Sora          } width={dim} height={dim} alt="Sora"></Image> </div>}
        </SimpleGrid>  
        

      </MantineProvider>      
    </main>
  );
}
  