import 'dotenv/config';
import { sql } from '@vercel/postgres';

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("POSTGRES_URL não está definida");
}

async function seed() {
  // Criação da tabela de usuários
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255),
      image VARCHAR(255),
      email_verified VARCHAR(255)
    );
  `;

  // Criação da tabela de contas
  await sql`
    CREATE TABLE IF NOT EXISTS accounts (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      user_id UUID REFERENCES users(id) ON DELETE CASCADE,
      type VARCHAR(255) NOT NULL,
      provider VARCHAR(255) NOT NULL,
      provider_account_id VARCHAR(255) NOT NULL,
      refresh_token VARCHAR(255),
      access_token VARCHAR(255),
      expires_at INT,
      token_type VARCHAR(255),
      scope VARCHAR(255),
      id_token VARCHAR(255),
      session_state VARCHAR(255),
      CONSTRAINT unique_provider_providerAccountId UNIQUE (provider, provider_account_id)
    );
  `;

  // Criação da tabela de tokens de verificação
  await sql`
    CREATE TABLE IF NOT EXISTS verification_tokens (
      identifier VARCHAR(255) NOT NULL,
      token VARCHAR(255) UNIQUE NOT NULL,
      expires TIMESTAMP NOT NULL,
      PRIMARY KEY (identifier, token)
    );
  `;
}

seed()
  .then(() => console.log('Semeadura concluída.'))
  .catch((error) => console.error('Erro ao semear:', error))
  .finally(() => process.exit());
