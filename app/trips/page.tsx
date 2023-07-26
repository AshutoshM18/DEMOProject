import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

export default async function page() {
  const currentUser = await getCurrrentUser();
  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }
  const reservations = await getReservations({ userId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No trips found"
          subtitle="Looks like you haven't reserved any trips."
        />
      </ClientOnly>
    );
  }


  return(
    <ClientOnly>
        <TripsClient reservations={reservations}
        currentUser={currentUser}/>
    </ClientOnly>
  )
}
 
