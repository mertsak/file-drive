"use client";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedOut,
  SignOutButton,
  SignedIn,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const files = useQuery(api.files.getFiles);
  const createFile = useMutation(api.files.createFile);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <SignedOut>
        <SignInButton mode="modal">
          <Button> SignIn Button</Button>
        </SignInButton>
      </SignedOut>

      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;
      })}

      <SignedIn>
        <SignOutButton>
          <Button> SignOut Button</Button>
        </SignOutButton>
      </SignedIn>

      <Button onClick={() => createFile({ name: "test" })}>Button</Button>
    </div>
  );
}
