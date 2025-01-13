'use server'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function retrieveMenus(){
    const supabase = createServerComponentClient( {cookies})
    try {
        const userEventsQuery = supabase
          .from('Menus')
          .select('*');
    
        const { data: data1, error: error1 } = await userEventsQuery;
    
        if (error1) {
          const blank_data = {};
          blank_data.events = JSON.stringify([{}]);
          return blank_data
        }
    
        // console.log(data1);
    
        return data1;
    
      } catch (error) {
        console.log('error', error);
        throw error;
      }
}