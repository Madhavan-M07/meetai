"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data, isLoading, isError } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions(),
  );

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export const AgentViewLoading = () => {
  return (
    <LoadingState
      title="Loading Agents"
      description="Please wait while we load your agents"
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="Error Loading Agents"
      description="Something went wrong while loading your agents. Please try again later."
    />
  );
};
