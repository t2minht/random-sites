'use client'
import { Button } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Welcome to home page, there is nothing here except</h1>
      <button type="button" onClick={()=>router.push('/SSBUPicker')}>Smash Bros Picker </button>
      <button type="button" onClick={()=>router.push('/LastMeals')}>Last Meals </button>
    </main>
  );
}
