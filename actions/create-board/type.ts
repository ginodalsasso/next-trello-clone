import { ActionState } from '@/lib/create-safe-action';
import { Board } from '@prisma/client';
import { z } from 'zod';
import { CreateBoard } from './schema';

export type InputType = z.infer<typeof CreateBoard>; // Type de l'entrée de l'action
export type ReturnType = ActionState<InputType, Board>; // Type de retour de l'action