import { z } from 'zod';

export const CreateBoard = z.object({
    title: z.string({
        required_error: 'The title is required',
        invalid_type_error: 'The title is required',
    }).min(3, {
        message: 'The title must be at least 3 characters',
    })
});