import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrrentUser from "../actions/getCurrentUser";
import getListngs from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

export default async function page() {
  const currentUser = await getCurrrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }
  const lisitngs = await getListngs({ userId: currentUser.id });

  if (lisitngs.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No properties found"
          subtitle="Looks like you haven no properties
          ."
        />
      </ClientOnly>
    );
  }


  return(
    <ClientOnly>
        <PropertiesClient listings={lisitngs}
        currentUser={currentUser}/>
    </ClientOnly>
  )
}
 
