import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      email: true,
    },
  });

  console.log(res);
}

async function updateUser(
  username: string,
  firstName: string,
  lastName: string
) {
   await prisma.user.update({
    where: {
      email: username,
    },
    data: {
      firstName,
      lastName,
    },
  });
}

// insertUser("sameer@gmail.com", "password", "Mohd", "Sameer");
updateUser("sameer@gmail.com", "rahul", "kumar")
