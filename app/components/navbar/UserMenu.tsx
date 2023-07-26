"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import Avatar from "../Avatar";
import useRentModal from "@/app/hooks/useRentModal";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

function UserMenu({ currentUser }: UserMenuProps) {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal]);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="
            hidden md:block text-sm
             font-semibold py-3 px-4 rounded-r-full hover:bg-neutral-100 cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-1 border-[1px] border-neutral-100 flex flex-row item-center gap-3 rounded-full hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer ">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/trips")}
                  label="MY trips"
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="My Favorites"
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  label="My reservation"
                />
                <MenuItem
                  onClick={() => router.push("/properties")}
                  label="My properties"
                />
                <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="login" />
                <MenuItem onClick={registerModal.onOpen} label="signup" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;