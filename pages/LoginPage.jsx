// pages/index.js
import { signIn, signOut, useSession, getSession } from "next-auth/react";
import { SessionProvider } from "next-auth/react";

export default function LoginPage({ session }) {
  return (
    <SessionProvider session={session}>
      {!session && (
        <button onClick={() => signIn("facebook")}>Log in with Facebook</button>
      )}
      {session && (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </SessionProvider>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
