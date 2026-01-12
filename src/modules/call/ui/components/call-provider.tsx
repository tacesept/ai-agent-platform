"use client";

import { authClient } from "@/lib/auth-client";
import { LoaderIcon } from "lucide-react";
import { CallConnect } from "./call-connect";
import { GenerateAvatarUri } from "@/lib/avatar";

export interface MeetingProps {
  meetingId: string;
  meetingName: string;
}

export const CallProvider = ({ meetingId, meetingName }: MeetingProps) => {
  const { data, isPending } = authClient.useSession();

  if (!data || isPending) {
    return (
      <div className="flex h-screen items-center justify-center bg-radial from-sidebar-accent to-sidebar">
        <LoaderIcon className="size-6 animate-spin text-white" />
      </div>
    );
  }
  return (
    <CallConnect
      meetingId={meetingId}
      meetingName={meetingName}
      userId={data.user.id}
      userName={data.user.name}
      userImage={
        data.user.image ??
        GenerateAvatarUri({
          seed: data.user.name,
          variant: "initials",
        })
      }
    />
  );
};
