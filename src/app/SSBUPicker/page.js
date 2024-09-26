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
import { useEffect, useState } from 'react';

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

  useEffect( () => {
      let data = localStorage.getItem("charStates");
      if (data !== null){
        let state = JSON.parse(data);
        console.log(state);
        setMario(state.Mario);
        setDonkeyKong(state.DonkeyKong);
        setLink(state.Link);
        setSamus(state.Samus);
        setDarkSamus(state.DarkSamus);
        setYoshi(state.Yoshi);
        setKirby(state.Kirby);
        setFox(state.Fox);
        setPikachu(state.Pikachu);
        setLuigi(state.Luigi);
        setNess(state.Ness);
        setCaptainFalcon(state.CaptainFalcon);
        setJigglypuff(state.Jigglypuff);
        setPeach(state.Peach);
        setDaisy(state.Daisy);
        setBowser(state.Bowser);
        setIceClimbers(state.IceClimbers);
        setSheik(state.Sheik);
        setZelda(state.Zelda);
        setDrMario(state.DrMario);
        setPichu(state.Pichu);
        setFalco(state.Falco);
        setMarth(state.Marth);
        setLucina(state.Lucina);
        setYoungLink(state.YoungLink);
        setGanondorf(state.Ganondorf);
        setMewtwo(state.Mewtwo);
        setRoy(state.Roy);
        setChrom(state.Chrom);
        setMrGameAndWatch(state.MrGameAndWatch);
        setMetaKnight(state.MetaKnight);
        setPit(state.Pit);
        setDarkPit(state.DarkPit);
        setZSS(state.ZSS);
        setWario(state.Wario);
        setSnake(state.Snake);
        setIke(state.Ike);
        setPokemonTrainer(state.PokemonTrainer);
        setDiddyKing(state.DiddyKing);
        setLucas(state.Lucas);
        setSonic(state.Sonic);
        setKingDedede(state.KingDedede);
        setOlimar(state.Olimar);
        setLucario(state.Lucario);
        setROB(state.ROB);
        setToonLink(state.ToonLink);
        setWolf(state.Wolf);
        setVillager(state.Villager);
        setMegaman(state.Megaman);
        setWiiFitTrainer(state.WiiFitTrainer);
        setRosalina(state.Rosalina);
        setMac(state.Mac);
        setGreninja(state.Greninja);
        setMiiFight(state.MiiFight);
        setMiiSword(state.MiiSword);
        setMiiGun(state.MiiGun);
        setPalutena(state.Palutena);
        setPacMan(state.PacMan);
        setRobin(state.Robin);
        setShulk(state.Shulk);
        setBowserJr(state.BowserJr);
        setDuckHunt(state.DuckHunt);
        setRyu(state.Ryu);
        setKen(state.Ken);
        setCloud(state.Cloud);
        setCorrin(state.Corrin);
        setBayonetta(state.Bayonetta);
        setInkling(state.Inkling);
        setRidley(state.Ridley);
        setSimon(state.Simon);
        setRichter(state.Richter);
        setKingKRool(state.KingKRool);
        setIsabelle(state.Isabelle);
        setIncineroar(state.Incineroar);
        setPiranhaPlant(state.PiranhaPlant);
        setJoker(state.Joker);
        setHero(state.Hero);
        setBanjoKazooie(state.BanjoKazooie);
        setTerry(state.Terry);
        setByleth(state.Byleth);
        setMinMin(state.MinMin);
        setSteve(state.Steve);
        setSephiroth(state.Sephiroth);
        setPyra(state.Pyra);
        setMythra(state.Mythra);
        setKazuya(state.Kazuya);
        setSora(state.Sora);
      }else{
        let state = {
          "Mario": true,
          "DonkeyKong": true,
          "Link": true,
          "Samus": true,
          "DarkSamus": true,
          "Yoshi": true,
          "Kirby": true,
          "Fox": true,
          "Pikachu": true,
          "Luigi": true,
          "Ness": true,
          "CaptainFalcon": true,
          "Jigglypuff": true,
          "Peach": true,
          "Daisy": true,
          "Bowser": true,
          "IceClimbers": true,
          "Sheik": true,
          "Zelda": true,
          "DrMario": true,
          "Pichu": true,
          "Falco": true,
          "Marth": true,
          "Lucina": true,
          "YoungLink": true,
          "Ganondorf": true,
          "Mewtwo": true,
          "Roy": true,
          "Chrom": true,
          "MrGameAndWatch": true,
          "MetaKnight": true,
          "Pit": true,
          "DarkPit": true,
          "ZSS": true,
          "Wario": true,
          "Snake": true,
          "Ike": true,
          "PokemonTrainer": true,
          "DiddyKing": true,
          "Lucas": true,
          "Sonic": true,
          "KingDedede": true,
          "Olimar": true,
          "Lucario": true,
          "ROB": true,
          "ToonLink": true,
          "Wolf": true,
          "Villager": true,
          "Megaman": true,
          "WiiFitTrainer": true,
          "Rosalina": true,
          "Mac": true,
          "Greninja": true,
          "MiiFight": true,
          "MiiSword": true,
          "MiiGun": true,
          "Palutena": true,
          "PacMan": true,
          "Robin": true,
          "Shulk": true,
          "BowserJr": true,
          "DuckHunt": true,
          "Ryu": true,
          "Ken": true,
          "Cloud": true,
          "Corrin": true,
          "Bayonetta": true,
          "Inkling": true,
          "Ridley": true,
          "Simon": true,
          "Richter": true,
          "KingKRool": true,
          "Isabelle": true,
          "Incineroar": true,
          "PiranhaPlant": true,
          "Joker": true,
          "Hero": true,
          "BanjoKazooie": true,
          "Terry": true,
          "Byleth": true,
          "MinMin": true,
          "Steve": true,
          "Sephiroth": true,
          "Pyra": true,
          "Mythra": true,
          "Kazuya": true,
          "Sora": true,
        }
        localStorage.setItem("charStates", JSON.stringify(state));
      }
  });

  var dim = 125;


  function reset(event){
    let state = {
      "Mario": true,
      "DonkeyKong": true,
      "Link": true,
      "Samus": true,
      "DarkSamus": true,
      "Yoshi": true,
      "Kirby": true,
      "Fox": true,
      "Pikachu": true,
      "Luigi": true,
      "Ness": true,
      "CaptainFalcon": true,
      "Jigglypuff": true,
      "Peach": true,
      "Daisy": true,
      "Bowser": true,
      "IceClimbers": true,
      "Sheik": true,
      "Zelda": true,
      "DrMario": true,
      "Pichu": true,
      "Falco": true,
      "Marth": true,
      "Lucina": true,
      "YoungLink": true,
      "Ganondorf": true,
      "Mewtwo": true,
      "Roy": true,
      "Chrom": true,
      "MrGameAndWatch": true,
      "MetaKnight": true,
      "Pit": true,
      "DarkPit": true,
      "ZSS": true,
      "Wario": true,
      "Snake": true,
      "Ike": true,
      "PokemonTrainer": true,
      "DiddyKing": true,
      "Lucas": true,
      "Sonic": true,
      "KingDedede": true,
      "Olimar": true,
      "Lucario": true,
      "ROB": true,
      "ToonLink": true,
      "Wolf": true,
      "Villager": true,
      "Megaman": true,
      "WiiFitTrainer": true,
      "Rosalina": true,
      "Mac": true,
      "Greninja": true,
      "MiiFight": true,
      "MiiSword": true,
      "MiiGun": true,
      "Palutena": true,
      "PacMan": true,
      "Robin": true,
      "Shulk": true,
      "BowserJr": true,
      "DuckHunt": true,
      "Ryu": true,
      "Ken": true,
      "Cloud": true,
      "Corrin": true,
      "Bayonetta": true,
      "Inkling": true,
      "Ridley": true,
      "Simon": true,
      "Richter": true,
      "KingKRool": true,
      "Isabelle": true,
      "Incineroar": true,
      "PiranhaPlant": true,
      "Joker": true,
      "Hero": true,
      "BanjoKazooie": true,
      "Terry": true,
      "Byleth": true,
      "MinMin": true,
      "Steve": true,
      "Sephiroth": true,
      "Pyra": true,
      "Mythra": true,
      "Kazuya": true,
      "Sora": true,
    }
    localStorage.setItem("charStates", JSON.stringify(state));
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
  function setChar(char){
    let data = localStorage.getItem("charStates");
      if (data !== undefined){
        let state = JSON.parse(data);
        if(char == "Mario"){state.Mario = false;}
        if(char == "DonkeyKong"){state.DonkeyKong = false;}
        if(char == "Link"){state.Link = false;}
        if(char == "Samus"){state.Samus = false;}
        if(char == "DarkSamus"){state.DarkSamus = false;}
        if(char == "Yoshi"){state.Yoshi = false;}
        if(char == "Kirby"){state.Kirby = false;}
        if(char == "Fox"){state.Fox = false;}
        if(char == "Pikachu"){state.Pikachu = false;}
        if(char == "Luigi"){state.Luigi = false;}
        if(char == "Ness"){state.Ness = false;}
        if(char == "CaptainFalcon"){state.CaptainFalcon = false;}
        if(char == "Jigglypuff"){state.Jigglypuff = false;}
        if(char == "Peach"){state.Peach = false;}
        if(char == "Daisy"){state.Daisy = false;}
        if(char == "Bowser"){state.Bowser = false;}
        if(char == "IceClimbers"){state.IceClimbers = false;}
        if(char == "Sheik"){state.Sheik = false;}
        if(char == "Zelda"){state.Zelda = false;}
        if(char == "DrMario"){state.DrMario = false;}
        if(char == "Pichu"){state.Pichu = false;}
        if(char == "Falco"){state.Falco = false;}
        if(char == "Marth"){state.Marth = false;}
        if(char == "Lucina"){state.Lucina = false;}
        if(char == "YoungLink"){state.YoungLink = false;}
        if(char == "Ganondorf"){state.Ganondorf = false;}
        if(char == "Mewtwo"){state.Mewtwo = false;}
        if(char == "Roy"){state.Roy = false;}
        if(char == "Chrom"){state.Chrom = false;}
        if(char == "MrGameAndWatch"){state.MrGameAndWatch = false;}
        if(char == "MetaKnight"){state.MetaKnight = false;}
        if(char == "Pit"){state.Pit = false;}
        if(char == "DarkPit"){state.DarkPit = false;}
        if(char == "ZSS"){state.ZSS = false;}
        if(char == "Wario"){state.Wario = false;}
        if(char == "Snake"){state.Snake = false;}
        if(char == "Ike"){state.Ike = false;}
        if(char == "PokemonTrainer"){state.PokemonTrainer = false;}
        if(char == "DiddyKing"){state.DiddyKing = false;}
        if(char == "Lucas"){state.Lucas = false;}
        if(char == "Sonic"){state.Sonic = false;}
        if(char == "KingDedede"){state.KingDedede = false;}
        if(char == "Olimar"){state.Olimar = false;}
        if(char == "Lucario"){state.Lucario = false;}
        if(char == "ROB"){state.ROB = false;}
        if(char == "ToonLink"){state.ToonLink = false;}
        if(char == "Wolf"){state.Wolf = false;}
        if(char == "Villager"){state.Villager = false;}
        if(char == "Megaman"){state.Megaman = false;}
        if(char == "WiiFitTrainer"){state.WiiFitTrainer = false;}
        if(char == "Rosalina"){state.Rosalina = false;}
        if(char == "Mac"){state.Mac = false;}
        if(char == "Greninja"){state.Greninja = false;}
        if(char == "MiiFight"){state.MiiFight = false;}
        if(char == "MiiSword"){state.MiiSword = false;}
        if(char == "MiiGun"){state.MiiGun = false;}
        if(char == "Palutena"){state.Palutena = false;}
        if(char == "PacMan"){state.PacMan = false;}
        if(char == "Robin"){state.Robin = false;}
        if(char == "Shulk"){state.Shulk = false;}
        if(char == "BowserJr"){state.BowserJr = false;}
        if(char == "DuckHunt"){state.DuckHunt = false;}
        if(char == "Ryu"){state.Ryu = false;}
        if(char == "Ken"){state.Ken = false;}
        if(char == "Cloud"){state.Cloud = false;}
        if(char == "Corrin"){state.Corrin = false;}
        if(char == "Bayonetta"){state.Bayonetta = false;}
        if(char == "Inkling"){state.Inkling = false;}
        if(char == "Ridley"){state.Ridley = false;}
        if(char == "Simon"){state.Simon = false;}
        if(char == "Richter"){state.Richter = false;}
        if(char == "KingKRool"){state.KingKRool = false;}
        if(char == "Isabelle"){state.Isabelle = false;}
        if(char == "Incineroar"){state.Incineroar = false;}
        if(char == "PiranhaPlant"){state.PiranhaPlant = false;}
        if(char == "Joker"){state.Joker = false;}
        if(char == "Hero"){state.Hero = false;}
        if(char == "BanjoKazooie"){state.BanjoKazooie = false;}
        if(char == "Terry"){state.Terry = false;}
        if(char == "Byleth"){state.Byleth = false;}
        if(char == "MinMin"){state.MinMin = false;}
        if(char == "Steve"){state.Steve = false;}
        if(char == "Sephiroth"){state.Sephiroth = false;}
        if(char == "Pyra"){state.Pyra = false;}
        if(char == "Mythra"){state.Mythra = false;}
        if(char == "Kazuya"){state.Kazuya = false;}
        if(char == "Sora"){state.Sora = false;}

        setMario(state.Mario);
        setDonkeyKong(state.DonkeyKong);
        setLink(state.Link);
        setSamus(state.Samus);
        setDarkSamus(state.DarkSamus);
        setYoshi(state.Yoshi);
        setKirby(state.Kirby);
        setFox(state.Fox);
        setPikachu(state.Pikachu);
        setLuigi(state.Luigi);
        setNess(state.Ness);
        setCaptainFalcon(state.CaptainFalcon);
        setJigglypuff(state.Jigglypuff);
        setPeach(state.Peach);
        setDaisy(state.Daisy);
        setBowser(state.Bowser);
        setIceClimbers(state.IceClimbers);
        setSheik(state.Sheik);
        setZelda(state.Zelda);
        setDrMario(state.DrMario);
        setPichu(state.Pichu);
        setFalco(state.Falco);
        setMarth(state.Marth);
        setLucina(state.Lucina);
        setYoungLink(state.YoungLink);
        setGanondorf(state.Ganondorf);
        setMewtwo(state.Mewtwo);
        setRoy(state.Roy);
        setChrom(state.Chrom);
        setMrGameAndWatch(state.MrGameAndWatch);
        setMetaKnight(state.MetaKnight);
        setPit(state.Pit);
        setDarkPit(state.DarkPit);
        setZSS(state.ZSS);
        setWario(state.Wario);
        setSnake(state.Snake);
        setIke(state.Ike);
        setPokemonTrainer(state.PokemonTrainer);
        setDiddyKing(state.DiddyKing);
        setLucas(state.Lucas);
        setSonic(state.Sonic);
        setKingDedede(state.KingDedede);
        setOlimar(state.Olimar);
        setLucario(state.Lucario);
        setROB(state.ROB);
        setToonLink(state.ToonLink);
        setWolf(state.Wolf);
        setVillager(state.Villager);
        setMegaman(state.Megaman);
        setWiiFitTrainer(state.WiiFitTrainer);
        setRosalina(state.Rosalina);
        setMac(state.Mac);
        setGreninja(state.Greninja);
        setMiiFight(state.MiiFight);
        setMiiSword(state.MiiSword);
        setMiiGun(state.MiiGun);
        setPalutena(state.Palutena);
        setPacMan(state.PacMan);
        setRobin(state.Robin);
        setShulk(state.Shulk);
        setBowserJr(state.BowserJr);
        setDuckHunt(state.DuckHunt);
        setRyu(state.Ryu);
        setKen(state.Ken);
        setCloud(state.Cloud);
        setCorrin(state.Corrin);
        setBayonetta(state.Bayonetta);
        setInkling(state.Inkling);
        setRidley(state.Ridley);
        setSimon(state.Simon);
        setRichter(state.Richter);
        setKingKRool(state.KingKRool);
        setIsabelle(state.Isabelle);
        setIncineroar(state.Incineroar);
        setPiranhaPlant(state.PiranhaPlant);
        setJoker(state.Joker);
        setHero(state.Hero);
        setBanjoKazooie(state.BanjoKazooie);
        setTerry(state.Terry);
        setByleth(state.Byleth);
        setMinMin(state.MinMin);
        setSteve(state.Steve);
        setSephiroth(state.Sephiroth);
        setPyra(state.Pyra);
        setMythra(state.Mythra);
        setKazuya(state.Kazuya);
        setSora(state.Sora);
        
        localStorage.setItem("charStates", JSON.stringify(state));

        console.log(state);
      }
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
          {showMario          && <div> <Image component= {nextImage} onClick = {() => {console.log("Mario         "); setChar("Mario");}}src={Mario         } width={dim} height={dim} alt="Mario"></Image> </div>}
          {showDonkeyKong     && <div> <Image component= {nextImage} onClick = {() => {console.log("DonkeyKong    "); setChar("DonkeyKong");}}src={DonkeyKong    } width={dim} height={dim} alt="DK"></Image> </div>}
          {showLink           && <div> <Image component= {nextImage} onClick = {() => {console.log("Link          "); setChar("Link");}}src={Link          } width={dim} height={dim} alt="Link"></Image> </div>}
          {showSamus          && <div> <Image component= {nextImage} onClick = {() => {console.log("Samus         "); setChar("Samus");}}src={Samus         } width={dim} height={dim} alt="Samus"></Image> </div>}
          {showDarkSamus      && <div> <Image component= {nextImage} onClick = {() => {console.log("DarkSamus     "); setChar("DarkSamus");}}src={DarkSamus     } width={dim} height={dim} alt="Dark Samus"></Image> </div>}
          {showYoshi          && <div> <Image component= {nextImage} onClick = {() => {console.log("Yoshi         "); setChar("Yoshi");}}src={Yoshi         } width={dim} height={dim} alt="Yoshi"></Image> </div>}
          {showKirby          && <div> <Image component= {nextImage} onClick = {() => {console.log("Kirby         "); setChar("Kirby");}}src={Kirby         } width={dim} height={dim} alt="Kirby"></Image> </div>}
          {showFox            && <div> <Image component= {nextImage} onClick = {() => {console.log("Fox           "); setChar("Fox");}}src={Fox           } width={dim} height={dim} alt="Fox"></Image> </div>}
          {showPikachu        && <div> <Image component= {nextImage} onClick = {() => {console.log("Pikachu       "); setChar("Pikachu");}}src={Pikachu       } width={dim} height={dim} alt="Pikachu"></Image> </div>}
          {showLuigi          && <div> <Image component= {nextImage} onClick = {() => {console.log("Luigi         "); setChar("Luigi");}}src={Luigi         } width={dim} height={dim} alt="Luigi"></Image> </div>}
          {showNess           && <div> <Image component= {nextImage} onClick = {() => {console.log("Ness          "); setChar("Ness");}}src={Ness          } width={dim} height={dim} alt="Ness"></Image> </div>}
          {showCaptainFalcon  && <div> <Image component= {nextImage} onClick = {() => {console.log("CaptainFalcon "); setChar("CaptainFalcon");}}src={CaptainFalcon } width={dim} height={dim} alt="Captain Falcon"></Image> </div>}
          {showJigglypuff     && <div> <Image component= {nextImage} onClick = {() => {console.log("Jigglypuff    "); setChar("Jigglypuff");}}src={Jigglypuff    } width={dim} height={dim} alt="Jigglypuff"></Image> </div>}
          {showPeach          && <div> <Image component= {nextImage} onClick = {() => {console.log("Peach         "); setChar("Peach");}}src={Peach         } width={dim} height={dim} alt="Peach"></Image> </div>}
          {showDaisy          && <div> <Image component= {nextImage} onClick = {() => {console.log("Daisy         "); setChar("Daisy");}}src={Daisy         } width={dim} height={dim} alt="Daisy"></Image> </div>}
          {showBowser         && <div> <Image component= {nextImage} onClick = {() => {console.log("Bowser        "); setChar("Bowser");}}src={Bowser        } width={dim} height={dim} alt="Bowser"></Image> </div>}
          {showIceClimbers    && <div> <Image component= {nextImage} onClick = {() => {console.log("IceClimbers   "); setChar("IceClimbers");}}src={IceClimbers   } width={dim} height={dim} alt="Ice Climbers"></Image> </div>}
          {showSheik          && <div> <Image component= {nextImage} onClick = {() => {console.log("Sheik         "); setChar("Sheik");}}src={Sheik         } width={dim} height={dim} alt="Sheik"></Image> </div>}
          {showZelda          && <div> <Image component= {nextImage} onClick = {() => {console.log("Zelda         "); setChar("Zelda");}}src={Zelda         } width={dim} height={dim} alt="Zelda"></Image> </div>}
          {showDrMario        && <div> <Image component= {nextImage} onClick = {() => {console.log("DrMario       "); setChar("DrMario");}}src={DrMario       } width={dim} height={dim} alt="Dr. Mario"></Image> </div>}
          {showPichu          && <div> <Image component= {nextImage} onClick = {() => {console.log("Pichu         "); setChar("Pichu");}}src={Pichu         } width={dim} height={dim} alt="Pichu"></Image> </div>}
          {showFalco          && <div> <Image component= {nextImage} onClick = {() => {console.log("Falco         "); setChar("Falco");}}src={Falco         } width={dim} height={dim} alt="Falco"></Image> </div>}
          {showMarth          && <div> <Image component= {nextImage} onClick = {() => {console.log("Marth         "); setChar("Marth");}}src={Marth         } width={dim} height={dim} alt="Marth"></Image> </div>}
          {showLucina         && <div> <Image component= {nextImage} onClick = {() => {console.log("Lucina        "); setChar("Lucina");}}src={Lucina        } width={dim} height={dim} alt="Lucina"></Image> </div>}
          {showYoungLink      && <div> <Image component= {nextImage} onClick = {() => {console.log("YoungLink     "); setChar("YoungLink");}}src={YoungLink     } width={dim} height={dim} alt="Young Link"></Image> </div>}
          {showGanondorf      && <div> <Image component= {nextImage} onClick = {() => {console.log("Ganondorf     "); setChar("Ganondorf");}}src={Ganondorf     } width={dim} height={dim} alt="Ganondor"></Image> </div>}
          {showMewtwo         && <div> <Image component= {nextImage} onClick = {() => {console.log("Mewtwo        "); setChar("Mewtwo");}}src={Mewtwo        } width={dim} height={dim} alt="Mewtwo"></Image> </div>}
          {showRoy            && <div> <Image component= {nextImage} onClick = {() => {console.log("Roy           "); setChar("Roy");}}src={Roy           } width={dim} height={dim} alt="Roy"></Image> </div>}
          {showChrom          && <div> <Image component= {nextImage} onClick = {() => {console.log("Chrom         "); setChar("Chrom");}}src={Chrom         } width={dim} height={dim} alt="Chrom"></Image> </div>}
          {showMrGameAndWatch && <div> <Image component= {nextImage} onClick = {() => {console.log("MrGameAndWatch"); setChar("MrGameAndWatch");}}src={MrGameAndWatch} width={dim} height={dim} alt="Mr. Game & Watch"></Image> </div>}
          {showMetaKnight     && <div> <Image component= {nextImage} onClick = {() => {console.log("MetaKnight    "); setChar("MetaKnight");}}src={MetaKnight    } width={dim} height={dim} alt="Meta Knight"></Image> </div>}
          {showPit            && <div> <Image component= {nextImage} onClick = {() => {console.log("Pit           "); setChar("Pit");}}src={Pit           } width={dim} height={dim} alt="Pit"></Image> </div>}
          {showDarkPit        && <div> <Image component= {nextImage} onClick = {() => {console.log("DarkPit       "); setChar("DarkPit");}}src={DarkPit       } width={dim} height={dim} alt="Dark Pit"></Image> </div>}
          {showZSS            && <div> <Image component= {nextImage} onClick = {() => {console.log("ZSS           "); setChar("ZSS");}}src={ZSS           } width={dim} height={dim} alt="Zero Suit Samus"></Image> </div>}
          {showWario          && <div> <Image component= {nextImage} onClick = {() => {console.log("Wario         "); setChar("Wario");}}src={Wario         } width={dim} height={dim} alt="Wario"></Image> </div>}
          {showSnake          && <div> <Image component= {nextImage} onClick = {() => {console.log("Snake         "); setChar("Snake");}}src={Snake         } width={dim} height={dim} alt="Snake"></Image> </div>}
          {showIke            && <div> <Image component= {nextImage} onClick = {() => {console.log("Ike           "); setChar("Ike");}}src={Ike           } width={dim} height={dim} alt="Ike"></Image> </div>}
          {showPokemonTrainer && <div> <Image component= {nextImage} onClick = {() => {console.log("PokemonTrainer"); setChar("PokemonTrainer");}}src={PokemonTrainer} width={dim} height={dim} alt="Pokémon Trainer"></Image> </div>}
          {showDiddyKing      && <div> <Image component= {nextImage} onClick = {() => {console.log("DiddyKing     "); setChar("DiddyKing");}}src={DiddyKing     } width={dim} height={dim} alt="Diddy Kong"></Image> </div>}
          {showLucas          && <div> <Image component= {nextImage} onClick = {() => {console.log("Lucas         "); setChar("Lucas");}}src={Lucas         } width={dim} height={dim} alt="Lucas"></Image> </div>}
          {showSonic          && <div> <Image component= {nextImage} onClick = {() => {console.log("Sonic         "); setChar("Sonic");}}src={Sonic         } width={dim} height={dim} alt="Sonic"></Image> </div>}
          {showKingDedede     && <div> <Image component= {nextImage} onClick = {() => {console.log("KingDedede    "); setChar("KingDedede");}}src={KingDedede    } width={dim} height={dim} alt="King Dedede"></Image> </div>}
          {showOlimar         && <div> <Image component= {nextImage} onClick = {() => {console.log("Olimar        "); setChar("Olimar");}}src={Olimar        } width={dim} height={dim} alt="Olimar"></Image> </div>}
          {showLucario        && <div> <Image component= {nextImage} onClick = {() => {console.log("Lucario       "); setChar("Lucario");}}src={Lucario       } width={dim} height={dim} alt="Lucario"></Image> </div>}
          {showROB            && <div> <Image component= {nextImage} onClick = {() => {console.log("ROB           "); setChar("ROB");}}src={ROB           } width={dim} height={dim} alt="R.O.B."></Image> </div>}
          {showToonLink       && <div> <Image component= {nextImage} onClick = {() => {console.log("ToonLink      "); setChar("ToonLink");}}src={ToonLink      } width={dim} height={dim} alt="Toon Link"></Image> </div>}
          {showWolf           && <div> <Image component= {nextImage} onClick = {() => {console.log("Wolf          "); setChar("Wolf");}}src={Wolf          } width={dim} height={dim} alt="Wolf"></Image> </div>}
          {showVillager       && <div> <Image component= {nextImage} onClick = {() => {console.log("Villager      "); setChar("Villager");}}src={Villager      } width={dim} height={dim} alt="Villager"></Image> </div>}
          {showMegaman        && <div> <Image component= {nextImage} onClick = {() => {console.log("Megaman       "); setChar("Megaman");}}src={Megaman       } width={dim} height={dim} alt="Mega Man"></Image> </div>}
          {showWiiFitTrainer  && <div> <Image component= {nextImage} onClick = {() => {console.log("WiiFitTrainer "); setChar("WiiFitTrainer");}}src={WiiFitTrainer } width={dim} height={dim} alt="Wii Fit"></Image> </div>}
          {showRosalina       && <div> <Image component= {nextImage} onClick = {() => {console.log("Rosalina      "); setChar("Rosalina");}}src={Rosalina      } width={dim} height={dim} alt="Rosalina"></Image> </div>}
          {showMac            && <div> <Image component= {nextImage} onClick = {() => {console.log("Mac           "); setChar("Mac");}}src={Mac           } width={dim} height={dim} alt="Little Mac"></Image> </div>}
          {showGreninja       && <div> <Image component= {nextImage} onClick = {() => {console.log("Greninja      "); setChar("Greninja");}}src={Greninja      } width={dim} height={dim} alt="Greninja"></Image> </div>}
          {showMiiFight       && <div> <Image component= {nextImage} onClick = {() => {console.log("MiiFight      "); setChar("MiiFight");}}src={MiiFight      } width={dim} height={dim} alt="Mii Brawler"></Image> </div>}
          {showMiiSword       && <div> <Image component= {nextImage} onClick = {() => {console.log("MiiSword      "); setChar("MiiSword");}}src={MiiSword      } width={dim} height={dim} alt="Mii Sowrdfighter"></Image> </div>}
          {showMiiGun         && <div> <Image component= {nextImage} onClick = {() => {console.log("MiiGun        "); setChar("MiiGun");}}src={MiiGun        } width={dim} height={dim} alt="Mii Gunner"></Image> </div>}
          {showPalutena       && <div> <Image component= {nextImage} onClick = {() => {console.log("Palutena      "); setChar("Palutena");}}src={Palutena      } width={dim} height={dim} alt="Palutena"></Image> </div>}
          {showPacMan         && <div> <Image component= {nextImage} onClick = {() => {console.log("PacMan        "); setChar("PacMan");}}src={PacMan        } width={dim} height={dim} alt="Pac-Man"></Image> </div>}
          {showRobin          && <div> <Image component= {nextImage} onClick = {() => {console.log("Robin         "); setChar("Robin");}}src={Robin         } width={dim} height={dim} alt="Robin"></Image> </div>}
          {showShulk          && <div> <Image component= {nextImage} onClick = {() => {console.log("Shulk         "); setChar("Shulk");}}src={Shulk         } width={dim} height={dim} alt="Shulk"></Image> </div>}
          {showBowserJr       && <div> <Image component= {nextImage} onClick = {() => {console.log("BowserJr      "); setChar("BowserJr");}}src={BowserJr      } width={dim} height={dim} alt="Bowser Jr."></Image> </div>}
          {showDuckHunt       && <div> <Image component= {nextImage} onClick = {() => {console.log("DuckHunt      "); setChar("DuckHunt");}}src={DuckHunt      } width={dim} height={dim} alt="Duck Hunt"></Image> </div>}
          {showRyu            && <div> <Image component= {nextImage} onClick = {() => {console.log("Ryu           "); setChar("Ryu");}}src={Ryu           } width={dim} height={dim} alt="Ryu"></Image> </div>}
          {showKen            && <div> <Image component= {nextImage} onClick = {() => {console.log("Ken           "); setChar("Ken");}}src={Ken           } width={dim} height={dim} alt="Ken"></Image> </div>}
          {showCloud          && <div> <Image component= {nextImage} onClick = {() => {console.log("Cloud         "); setChar("Cloud");}}src={Cloud         } width={dim} height={dim} alt="Cloud"></Image> </div>}
          {showCorrin         && <div> <Image component= {nextImage} onClick = {() => {console.log("Corrin        "); setChar("Corrin");}}src={Corrin        } width={dim} height={dim} alt="Corrin"></Image> </div>}
          {showBayonetta      && <div> <Image component= {nextImage} onClick = {() => {console.log("Bayonetta     "); setChar("Bayonetta");}}src={Bayonetta     } width={dim} height={dim} alt="Bayonetta"></Image> </div>}
          {showInkling        && <div> <Image component= {nextImage} onClick = {() => {console.log("Inkling       "); setChar("Inkling");}}src={Inkling       } width={dim} height={dim} alt="Inkling"></Image> </div>}
          {showRidley         && <div> <Image component= {nextImage} onClick = {() => {console.log("Ridley        "); setChar("Ridley");}}src={Ridley        } width={dim} height={dim} alt="Ridley"></Image> </div>}
          {showSimon          && <div> <Image component= {nextImage} onClick = {() => {console.log("Simon         "); setChar("Simon");}}src={Simon         } width={dim} height={dim} alt="Simon"></Image> </div>}
          {showRichter        && <div> <Image component= {nextImage} onClick = {() => {console.log("Richter       "); setChar("Richter");}}src={Richter       } width={dim} height={dim} alt="Richter"></Image> </div>}
          {showKingKRool      && <div> <Image component= {nextImage} onClick = {() => {console.log("KingKRool     "); setChar("KingKRool");}}src={KingKRool     } width={dim} height={dim} alt="King K. Rool"></Image> </div>}
          {showIsabelle       && <div> <Image component= {nextImage} onClick = {() => {console.log("Isabelle      "); setChar("Isabelle");}}src={Isabelle      } width={dim} height={dim} alt="Isabelle"></Image> </div>}
          {showIncineroar     && <div> <Image component= {nextImage} onClick = {() => {console.log("Incineroar    "); setChar("Incineroar");}}src={Incineroar    } width={dim} height={dim} alt="Incineroar"></Image> </div>}
          {showPiranhaPlant   && <div> <Image component= {nextImage} onClick = {() => {console.log("PiranhaPlant  "); setChar("PiranhaPlant");}}src={PiranhaPlant  } width={dim} height={dim} alt="Piranha Plant"></Image> </div>}
          {showJoker          && <div> <Image component= {nextImage} onClick = {() => {console.log("Joker         "); setChar("Joker");}}src={Joker         } width={dim} height={dim} alt="Joker"></Image> </div>}
          {showHero           && <div> <Image component= {nextImage} onClick = {() => {console.log("Hero          "); setChar("Hero");}}src={Hero          } width={dim} height={dim} alt="Hero"></Image> </div>}
          {showBanjoKazooie   && <div> <Image component= {nextImage} onClick = {() => {console.log("BanjoKazooie  "); setChar("BanjoKazooie");}}src={BanjoKazooie  } width={dim} height={dim} alt="Banjo & Kazooie"></Image> </div>}
          {showTerry          && <div> <Image component= {nextImage} onClick = {() => {console.log("Terry         "); setChar("Terry");}}src={Terry         } width={dim} height={dim} alt="Terry"></Image> </div>}
          {showByleth         && <div> <Image component= {nextImage} onClick = {() => {console.log("Byleth        "); setChar("Byleth");}}src={Byleth        } width={dim} height={dim} alt="Byleth"></Image> </div>}
          {showMinMin         && <div> <Image component= {nextImage} onClick = {() => {console.log("MinMin        "); setChar("MinMin");}}src={MinMin        } width={dim} height={dim} alt="Min Min"></Image> </div>}
          {showSteve          && <div> <Image component= {nextImage} onClick = {() => {console.log("Steve         "); setChar("Steve");}}src={Steve         } width={dim} height={dim} alt="Steve"></Image> </div>}
          {showSephiroth      && <div> <Image component= {nextImage} onClick = {() => {console.log("Sephiroth     "); setChar("Sephiroth");}}src={Sephiroth     } width={dim} height={dim} alt="Sephiroth"></Image> </div>}
          {showPyra           && <div> <Image component= {nextImage} onClick = {() => {console.log("Pyra          "); setChar("Pyra");}}src={Pyra          } width={dim} height={dim} alt="Pyra"></Image> </div>}
          {showMythra         && <div> <Image component= {nextImage} onClick = {() => {console.log("Mythra        "); setChar("Mythra");}}src={Mythra        } width={dim} height={dim} alt="Mythra"></Image> </div>}
          {showKazuya         && <div> <Image component= {nextImage} onClick = {() => {console.log("Kazuya        "); setChar("Kazuya");}}src={Kazuya        } width={dim} height={dim} alt="Kazuya"></Image> </div>}
          {showSora           && <div> <Image component= {nextImage} onClick = {() => {console.log("Sora          "); setChar("Sora");}}src={Sora          } width={dim} height={dim} alt="Sora"></Image> </div>}
        </SimpleGrid>  
        

      </MantineProvider>      
    </main>
  );
}
  