import { auth, signIn, signOut } from "@/auth";

export default async function SignIn() {
  const session = await auth();

  if (session?.user) {
    return (
      <div>
        <h1>Hello {session.user.name}</h1>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button type="submit">Sign out</button>
        </form>
      </div>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  );
}
