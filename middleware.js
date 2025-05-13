import { clerkClient } from '@clerk/nextjs/server';

export async function getServerSideProps(context) {
  const { userId } = await clerkClient.users.getUser(context.req.cookies.__session);
  if (!userId) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // or pass user data here
  };
}
