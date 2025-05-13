import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { User } from '../../types/sport';

const dataPath = path.join(__dirname, '../../data.json');

// 🔄 Fonction utilitaire pour lire les données à chaque requête
const readUsersFromFile = (): User[] => {
  const rawData = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(rawData);
};

export const getAllUsers = (req: Request, res: Response) => {
  const users = readUsersFromFile();
  res.json(users);
};

export const getUserSummaries = (req: Request, res: Response) => {
  const users = readUsersFromFile();
  const summaries = users.map(user => ({
    username: user.username,
    avatar: user.avatar,
  }));
  res.json(summaries);
};
