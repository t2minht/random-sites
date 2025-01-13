'use client';
import { Button } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react"

export default function Home() {
  const supabase = createClientComponentClient();
  const [menus, setMenus] = useState([])
  const [people, setPeople] = useState([])

  const getMenus = async () => {
    const {data, error} = await supabase.from("Menu").select("*")
    setMenus(data);
  }
  const getPeople = async () => {
    const {data, error} = await supabase.from("People").select("*")
    setPeople(data);
  }

  useEffect( () => {
    getMenus();
    getPeople();
  }, [])

  const getPerson = (personID) =>{
    for(let i = 0; i < people.length; i++){
      if(personID == people[i].id){
        return people[i].first_name + " " + people[i].last_name;
      }
    }
    return "Anon";
  }

  const router = useRouter();
  return (
    <main>
      <div>
        {
          menus.map( (menu) => {
            return(<div key={menu.id}>
                      {!menu.Anonymous && (<h1>{getPerson(menu.Person)}</h1>)}
                      {menu.Anonymous && (<h1>Anonymous</h1>)}
                      <h1>Appetizer: {menu.Appetizer.Dish}</h1>
                      <h1>{menu.Appetizer.Info}</h1>
                      <h1>{menu.Appetizer.Drink}</h1>
                      <br></br>
                      <h1>Meal 1: {menu.MealA.Dish}</h1>
                      <h1>{menu.MealA.Info}</h1>
                      <h1>{menu.MealA.Drink}</h1>
                      <br></br>
                      <h1>Meal 2: {menu.MealB.Dish}</h1>
                      <h1>{menu.MealB.Info}</h1>
                      <h1>{menu.MealB.Drink}</h1>
                      <br></br>
                      <h1>Meal 3: {menu.MealC.Dish}</h1>
                      <h1>{menu.MealC.Info}</h1>
                      <h1>{menu.MealC.Drink}</h1>
                      <br></br>
                      <h1>Dessert: {menu.Dessert.Dish}</h1>
                      <h1>{menu.Dessert.Info}</h1>
                      <h1>{menu.Dessert.Drink}</h1>
                      <br></br>
                   </div>);
          })
        }
      </div>

    </main>
  );
}