import getCurrrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoriteClient from "./FavoriteClient";

async function page() {

    const listings= await getFavoriteListings();
    const currentUser = await getCurrrentUser();
if(listings.length===0)
{
    
    return (
        <ClientOnly>
      <EmptyState title="No Favorites found" 
      subtitle="Looks like you have no favorite listings"/>
    </ClientOnly>
  );
  
}
  return(
    <ClientOnly>
   <FavoriteClient listings={listings}
   currentUser={currentUser}/>
  </ClientOnly>
  )
}

export default page;
