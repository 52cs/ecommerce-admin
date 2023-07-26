"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

import { useEffect } from "react";
import { useStoreModal } from "@/hooks/use-store-modal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])

  return (
    <div className="p-4">
      <Button size="default" variant="default">Click Me</Button>
      <UserButton afterSignOutUrl="/"/>
      Root Page
    </div>
  )
}

export default SetupPage
