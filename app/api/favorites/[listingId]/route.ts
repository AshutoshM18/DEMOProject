import { NextResponse } from "next/server";
import getCurrrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
interface Iparams {
  listingId?: string;
}
export async function POST(request: Request, { params }: { params: Iparams }) {
  const CurrentUser = await getCurrrentUser();
  if (!CurrentUser) {
    return NextResponse.error();
  }
  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(CurrentUser.favoriteIds || [])];

  favoriteIds.push(listingId);
  const user = await prisma.user.update({
    where: {
      id: CurrentUser.id,
    },
    data: { favoriteIds },
  });

  return NextResponse.json(user);
}

export async function DELETE(request: Request, { params }: { params: Iparams }) {
  const CurrentUser = await getCurrrentUser();
  if (!CurrentUser) {
    return NextResponse.error();
  }
  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoriteIds = [...(CurrentUser.favoriteIds || [])];

  favoriteIds=favoriteIds.filter((id)=>id!==listingId)
  const user = await prisma.user.update({
    where: {
      id: CurrentUser.id,
    },
    data: { favoriteIds },
  });

  return NextResponse.json(user);
}
