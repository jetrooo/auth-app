'use server';

import { db } from '@vercel/postgres'; // Importando o cliente do Vercel PostgreSQL
import { hashSync } from 'bcrypt-ts';
import { redirect } from 'next/navigation';

export default async function register(formData: FormData) {
  const entries = Array.from(formData.entries());
  const { name, email, password } = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  // Verifique se algum campo está vazio
  if (!name || !email || !password) {
    throw new Error('Preencha todos os campos');
  }

  // Verifique se o usuário já existe
  const userExistsResult = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  const userExists = userExistsResult.rows[0];

  if (userExists) {
    throw new Error('Usuário já existe');
  }

  // Cria um novo usuário
  await db.query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
    [name, email, hashSync(password, 10)]
  );

  redirect('/signin');
}
