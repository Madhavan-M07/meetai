"use client";

import { Input } from "@base-ui/react";
import { useState } from "react";
import { Button } from "@base-ui/react";
import { authClient } from "@/lib/auth-client"; 

export default function Home() {

    const { 
        data: session, 
    } = authClient.useSession() 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmit = () => {
    authClient.signUp.email({
      email,
      password,
      name,
    },
      {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            window.alert("success")
        },
        onError: (ctx) => {
            // display the error message
            window.alert("Something went wrong")
        },
    });
  }

   const onLogin = () => {
    authClient.signIn.email({
      email,
      password,
    },
      {
        onRequest: (ctx) => {
            //show loading
        },
        onSuccess: (ctx) => {
            //redirect to the dashboard or sign in page
            window.alert("success")
        },
        onError: (ctx) => {
            // display the error message
            window.alert("Something went wrong")
        },
    });
  }

  if(session){
    return(
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign out</Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-10">
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>
        Create User
      </Button>
    </div>
     <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={onLogin}>
       Login
      </Button>
    </div>
    </div>
  );
}
